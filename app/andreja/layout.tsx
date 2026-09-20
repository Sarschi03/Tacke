"use client";
import { Authenticated } from "convex/react";
import SubHero from "../../components/SubHero/SubHero";
import AdminNav from "../../components/AdminNav/AdminNav";
import styles from "./page.module.css";

export default function AndrejaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Authenticated>
        <div className={styles.dashboardHero}>
          <SubHero
            title="Zdravo, Andreja"
            texts={["Dobrodošla v nadzorni plošči rezervacij."]}
            imageSrc="/1. copy.jpg"
            overlayImageSrc="/1.png"
          />
        </div>
        <AdminNav />
      </Authenticated>
      {children}
    </>
  );
}
