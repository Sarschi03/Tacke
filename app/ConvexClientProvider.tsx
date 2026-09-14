"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from "@convex-dev/auth/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const REMEMBER_KEY = "andreja_remember_me";

const authStorage = {
  getItem(key: string) {
    if (typeof window === "undefined") return null;
    const storage =
      window.localStorage.getItem(REMEMBER_KEY) === "true"
        ? window.localStorage
        : window.sessionStorage;
    return storage.getItem(key);
  },
  setItem(key: string, value: string) {
    if (typeof window === "undefined") return;
    const storage =
      window.localStorage.getItem(REMEMBER_KEY) === "true"
        ? window.localStorage
        : window.sessionStorage;
    storage.setItem(key, value);
  },
  removeItem(key: string) {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  },
};

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexAuthProvider client={convex} storage={authStorage}>
      {children}
    </ConvexAuthProvider>
  );
}
