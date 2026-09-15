"use client";
import { FormEvent, useState } from "react";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import styles from "../page.module.css";

function EventsAdmin() {
  const generateUploadUrl = useMutation(api.events.generateUploadUrl);
  const createEvent = useMutation(api.events.create);
  const updateEvent = useMutation(api.events.update);
  const removeEvent = useMutation(api.events.remove);
  const events = useQuery(api.events.listAdmin);
  const [notice, setNotice] = useState("");
  const [editingId, setEditingId] = useState<Id<"events"> | null>(null);

  async function submitEdit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId) return;
    const form = new FormData(event.currentTarget);
    const file = form.get("image");
    try {
      let imageId: Id<"_storage"> | undefined;
      if (file instanceof File && file.size) {
        const uploadUrl = await generateUploadUrl();
        const upload = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        ({ storageId: imageId } = await upload.json());
      }
      await updateEvent({
        id: editingId,
        title: String(form.get("title")),
        shortDescription: String(form.get("shortDescription")),
        content: String(form.get("content")),
        eventDate: String(form.get("eventDate")) || undefined,
        isNews: form.get("kind") === "news",
        imageId,
      });
      setEditingId(null);
      setNotice("Objava je posodobljena.");
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Objave ni bilo mogoče posodobiti.",
      );
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const file = form.get("image");
    if (!(file instanceof File) || !file.size)
      return setNotice("Izberite naslovno fotografijo.");
    try {
      const uploadUrl = await generateUploadUrl();
      const upload = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await upload.json();
      await createEvent({
        title: String(form.get("title")),
        shortDescription: String(form.get("shortDescription")),
        content: String(form.get("content")),
        eventDate: String(form.get("eventDate")) || undefined,
        isNews: form.get("kind") === "news",
        imageId: storageId,
      });
      formElement.reset();
      setNotice("Objava je dodana.");
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Objave ni bilo mogoče dodati.",
      );
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.dashboardContainer}>
        <p className={styles.kicker}>Urejanje vsebine</p>
        <h1>Dogodki in novice</h1>
        <form
          className={`${styles.modal} ${styles.adminForm}`}
          onSubmit={submit}
        >
          <label>
            Naslov
            <input name="title" required maxLength={100} />
          </label>
          <label>
            Naslovna fotografija
            <input name="image" type="file" accept="image/*" required />
          </label>
          <label>
            Kratek opis <small>največ 180 znakov</small>
            <textarea name="shortDescription" maxLength={180} required />
          </label>
          <label>
            Celotno besedilo
            <textarea name="content" rows={8} required />
          </label>
          <label>
            Vrsta
            <select name="kind">
              <option value="event">Dogodek</option>
              <option value="news">Novica</option>
            </select>
          </label>
          <label>
            Datum dogodka <small>pri novici ni obvezen</small>
            <input name="eventDate" type="date" />
          </label>
          {notice && <p className={styles.notice}>{notice}</p>}
          <button className={styles.primaryButton}>Objavi</button>
        </form>
        <div className={styles.adminEventList}>
          {events?.map((item) => (
            <div className={styles.adminEventItem} key={item._id}>
              <article>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.isNews ? "Novica" : item.eventDate}</span>
                </div>
                <div className={styles.rowActions}>
                  <button type="button" onClick={() => setEditingId(item._id)}>
                    Uredi
                  </button>
                  <button
                    type="button"
                    className={styles.dangerButton}
                    onClick={() =>
                      window.confirm("Izbrišem to objavo?") &&
                      removeEvent({ id: item._id })
                    }
                  >
                    Izbriši
                  </button>
                </div>
              </article>
              {editingId === item._id && (
                <form className={styles.editEventForm} onSubmit={submitEdit}>
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} />
                  )}
                  <label>
                    Naslov
                    <input
                      name="title"
                      defaultValue={item.title}
                      required
                      maxLength={100}
                    />
                  </label>
                  <label>
                    Zamenjaj naslovno fotografijo <small>neobvezno</small>
                    <input name="image" type="file" accept="image/*" />
                  </label>
                  <label>
                    Kratek opis <small>največ 180 znakov</small>
                    <textarea
                      name="shortDescription"
                      defaultValue={item.shortDescription}
                      maxLength={180}
                      required
                    />
                  </label>
                  <label>
                    Celotno besedilo
                    <textarea
                      name="content"
                      defaultValue={item.content}
                      rows={8}
                      required
                    />
                  </label>
                  <label>
                    Vrsta
                    <select
                      name="kind"
                      defaultValue={item.isNews ? "news" : "event"}
                    >
                      <option value="event">Dogodek</option>
                      <option value="news">Novica</option>
                    </select>
                  </label>
                  <label>
                    Datum dogodka <small>pri novici ni obvezen</small>
                    <input
                      name="eventDate"
                      type="date"
                      defaultValue={item.eventDate ?? ""}
                    />
                  </label>
                  <div className={styles.editActions}>
                    <button className={styles.primaryButton}>Shrani</button>
                    <button type="button" onClick={() => setEditingId(null)}>
                      Prekliči
                    </button>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function EventsAdminPage() {
  return (
    <>
      <Authenticated>
        <EventsAdmin />
      </Authenticated>
      <Unauthenticated>
        <main className={styles.loginMain}>
          <div className={styles.loginFormCol}>
            <Link href="/andreja">Prijava v nadzorno ploščo</Link>
          </div>
        </main>
      </Unauthenticated>
    </>
  );
}
