import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { ConvexError } from "convex/values";

const AndrejaPassword = Password({
  profile(params) {
    const username = String(params.email ?? "").trim().toLowerCase();
    if (username !== "andreja" || params.flow === "signUp") {
      throw new ConvexError("Invalid credentials");
    }
    return { email: username, name: "Andreja" };
  },
});

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [AndrejaPassword],
});
