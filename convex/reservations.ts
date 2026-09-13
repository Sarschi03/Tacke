import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const MAX_GUESTS_PER_SLOT = 12;
const TIME_SLOTS = ["16:15-17:15", "17:30-18:30", "18:45-19:45"];

function validateReservationInput(args: { timeSlot: string; name: string; email: string; phone: string; partySize: number; adminCreated?: boolean }) {
  if (!TIME_SLOTS.includes(args.timeSlot)) throw new Error("Izbrani termin ni veljaven.");
  if (!args.adminCreated) {
    if (!args.name.trim()) throw new Error("Ime je obvezno.");
    if (!/^\S+@\S+\.\S+$/.test(args.email.trim())) throw new Error("E-poštni naslov ni veljaven.");
    if (!args.phone.trim()) throw new Error("Telefonska številka je obvezna.");
  }
  if (!Number.isInteger(args.partySize) || args.partySize < 1 || args.partySize > MAX_GUESTS_PER_SLOT) {
    throw new Error("Število oseb mora biti med 1 in 12.");
  }
}

export const getAvailability = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    // Check if the date is marked as unavailable
    const unavailable = await ctx.db
      .query("unavailableDates")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .first();

    if (unavailable) {
      return { isUnavailable: true, slotsCount: {} };
    }

    const reservations = await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .filter((q) => q.eq(q.field("status"), "active"))
      .collect();

    const slotsCount: Record<string, number> = {};
    for (const res of reservations) {
      slotsCount[res.timeSlot] = (slotsCount[res.timeSlot] || 0) + (res.partySize ?? 1);
    }

    return { isUnavailable: false, slotsCount };
  },
});

export const addReservation = mutation({
  args: {
    date: v.string(),
    timeSlot: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    partySize: v.number(),
    adminCreated: v.optional(v.boolean()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.adminCreated && !(await ctx.auth.getUserIdentity())) {
      throw new Error("Not authenticated");
    }
    validateReservationInput(args);
    // Basic double check
    const unavailable = await ctx.db
      .query("unavailableDates")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .first();

    if (unavailable) {
      throw new Error("Na ta dan ne obratujemo.");
    }

    const reservations = await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .filter((q) => q.eq(q.field("status"), "active"))
      .collect();

    let count = 0;
    for (const res of reservations) {
      if (res.timeSlot === args.timeSlot) {
        count += res.partySize ?? 1;
      }
    }

    if (count + args.partySize > MAX_GUESTS_PER_SLOT) {
      throw new Error("V tem terminu ni dovolj prostih mest.");
    }

    await ctx.db.insert("reservations", {
      date: args.date,
      timeSlot: args.timeSlot,
      status: "active",
      name: args.name.trim(),
      email: args.email.trim(),
      phone: args.phone.trim(),
      partySize: args.partySize,
      adminCreated: args.adminCreated,
      message: args.message?.trim() || undefined,
    });
  },
});

export const deleteReservations = mutation({
  args: { ids: v.array(v.id("reservations")) },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity())) throw new Error("Not authenticated");
    for (const id of args.ids) await ctx.db.delete(id);
  },
});

export const rescheduleReservation = mutation({
  args: { id: v.id("reservations"), date: v.string(), timeSlot: v.string() },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity())) throw new Error("Not authenticated");
    if (!TIME_SLOTS.includes(args.timeSlot)) throw new Error("Izbrani termin ni veljaven.");
    const reservation = await ctx.db.get(args.id);
    if (!reservation) throw new Error("Rezervacija ne obstaja.");

    const unavailable = await ctx.db
      .query("unavailableDates")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .first();
    if (unavailable) throw new Error("Na ta dan ne obratujemo.");

    const reservations = await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .filter((q) => q.eq(q.field("status"), "active"))
      .collect();
    const occupied = reservations
      .filter((item) => item.timeSlot === args.timeSlot && item._id !== args.id)
      .reduce((total, item) => total + (item.partySize ?? 1), 0);
    if (occupied + (reservation.partySize ?? 1) > MAX_GUESTS_PER_SLOT) {
      throw new Error("V tem terminu ni dovolj prostih mest.");
    }

    await ctx.db.patch(args.id, { date: args.date, timeSlot: args.timeSlot });
  },
});

export const getDashboardData = query({
  args: { startDate: v.string(), endDate: v.string() },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity())) throw new Error("Not authenticated");
    const reservations = await ctx.db
      .query("reservations")
      .filter((q) => 
        q.and(
          q.gte(q.field("date"), args.startDate),
          q.lte(q.field("date"), args.endDate),
          q.eq(q.field("status"), "active")
        )
      )
      .collect();

    const unavailableDates = await ctx.db
      .query("unavailableDates")
      .filter((q) => 
        q.and(
          q.gte(q.field("date"), args.startDate),
          q.lte(q.field("date"), args.endDate)
        )
      )
      .collect();

    return { reservations, unavailableDates };
  },
});

export const toggleUnavailable = mutation({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity())) throw new Error("Not authenticated");
    const existing = await ctx.db
      .query("unavailableDates")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
    } else {
      await ctx.db.insert("unavailableDates", { date: args.date });
    }
  },
});
