"use client";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import styles from "../page.module.css";

function Members() {
  const members = useQuery(api.members.list);
  const removeMember = useMutation(api.members.remove);
  return (
    <main className={styles.main}>
      <div className={styles.dashboardContainer}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.kicker}>Članstvo</p>
            <h1>Novi člani</h1>
          </div>
        </div>
        <div className={styles.slotGroup}>
          {members?.length ? (
            members.map((member) => (
              <article className={styles.memberRow} key={member._id}>
                <div>
                  <strong>
                    {member.firstName} {member.lastName}
                  </strong>
                  <p>
                    {member.email} · {member.phone}
                  </p>
                  <p>{member.address}</p>
                  {member.message && <p>{member.message}</p>}
                </div>
                <button
                  className={styles.dangerButton}
                  onClick={() =>
                    window.confirm("Izbrišem tega člana?") &&
                    removeMember({ id: member._id })
                  }
                >
                  Izbriši
                </button>
              </article>
            ))
          ) : (
            <p className={styles.noBookings}>Ni novih članov.</p>
          )}
        </div>
      </div>
    </main>
  );
}
export default function MembersPage() {
  return (
    <>
      <Authenticated>
        <Members />
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
