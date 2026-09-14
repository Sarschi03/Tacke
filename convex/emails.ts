import { v } from "convex/values";
import { internalAction } from "./_generated/server";

const RESEND_API_URL = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Ljubljana",
  }).format(parsed);
}

async function sendEmail(args: {
  apiKey: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  idempotencyKey: string;
}) {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": args.idempotencyKey,
    },
    body: JSON.stringify({
      from: args.from,
      to: [args.to],
      reply_to: args.replyTo,
      subject: args.subject,
      html: args.html,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${message}`);
  }
}

export const sendReservationEmails = internalAction({
  args: {
    reservationId: v.id("reservations"),
    date: v.string(),
    timeSlot: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    partySize: v.number(),
    adminCreated: v.optional(v.boolean()),
    message: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.RESEND_NOTIFICATION_EMAIL;
    const testRecipient = process.env.RESEND_TEST_RECIPIENT;
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Tačke <onboarding@resend.dev>";

    if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");
    if (!notificationEmail) {
      throw new Error("RESEND_NOTIFICATION_EMAIL is not configured.");
    }

    const customerEmail = testRecipient ?? args.email;
    const ownerEmail = testRecipient ?? notificationEmail;
    const safeName = escapeHtml(args.name || "Gost");
    const safeEmail = escapeHtml(args.email || "Ni podatka");
    const safePhone = escapeHtml(args.phone || "Ni podatka");
    const safeDate = escapeHtml(formatDate(args.date));
    const safeTime = escapeHtml(args.timeSlot);
    const safeMessage = args.message ? escapeHtml(args.message) : undefined;

    const deliveries: Promise<void>[] = [];

    if (!args.adminCreated && args.email) {
      deliveries.push(
        sendEmail({
          apiKey,
          from,
          to: customerEmail,
          subject: `Rezervacija je potrjena – ${formatDate(args.date)} ob ${args.timeSlot}`,
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#342f2a;max-width:600px;margin:auto">
              <h1 style="color:#76543c">Rezervacija je uspešna</h1>
              <p>Živjo, ${safeName}!</p>
              <p>Vaša rezervacija pri Društvu ljubiteljev mačjih tačk je potrjena.</p>
              <p><strong>Datum:</strong> ${safeDate}<br><strong>Čas:</strong> ${safeTime}<br><strong>Število oseb:</strong> ${args.partySize}</p>
              <p>Veselimo se vašega obiska!</p>
            </div>`,
          idempotencyKey: `reservation-${args.reservationId}-customer`,
        }),
      );
    }

    deliveries.push(
      sendEmail({
        apiKey,
        from,
        to: ownerEmail,
        replyTo: args.email || undefined,
        subject: `Nova aktivna rezervacija – ${args.name || "Gost"}, ${args.date} ob ${args.timeSlot}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#342f2a;max-width:600px;margin:auto">
            <h1 style="color:#76543c">Nova aktivna rezervacija</h1>
            <p><strong>Ime:</strong> ${safeName}<br><strong>E-pošta:</strong> ${safeEmail}<br><strong>Telefon:</strong> ${safePhone}</p>
            <p><strong>Datum:</strong> ${safeDate}<br><strong>Čas:</strong> ${safeTime}<br><strong>Število oseb:</strong> ${args.partySize}</p>
            ${safeMessage ? `<p><strong>Sporočilo:</strong><br>${safeMessage}</p>` : ""}
          </div>`,
        idempotencyKey: `reservation-${args.reservationId}-owner`,
      }),
    );

    const results = await Promise.allSettled(deliveries);
    const failures = results.filter(
      (result): result is PromiseRejectedResult => result.status === "rejected",
    );
    if (failures.length > 0) {
      throw new Error(
        failures
          .map((failure) =>
            failure.reason instanceof Error
              ? failure.reason.message
              : String(failure.reason),
          )
          .join("; "),
      );
    }
    return null;
  },
});
