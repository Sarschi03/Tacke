import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const values = Object.values(args).filter(
      (value): value is string => typeof value === "string",
    );
    if (values.some((value) => value.length > 1000))
      throw new Error("Vnos je predolg.");
    if (
      !args.firstName.trim() ||
      !args.lastName.trim() ||
      !args.phone.trim() ||
      !args.address.trim()
    )
      throw new Error("Izpolnite vsa obvezna polja.");
    if (!/^\S+@\S+\.\S+$/.test(args.email.trim()))
      throw new Error("E-poštni naslov ni veljaven.");
    const existing = await ctx.db
      .query("members")
      .withIndex("by_email", (q) =>
        q.eq("email", args.email.trim().toLowerCase()),
      )
      .first();
    if (existing)
      throw new Error("Član s tem e-poštnim naslovom je že prijavljen.");
    await ctx.db.insert("members", {
      ...args,
      firstName: args.firstName.trim(),
      lastName: args.lastName.trim(),
      email: args.email.trim().toLowerCase(),
      phone: args.phone.trim(),
      address: args.address.trim(),
      message: args.message?.trim() || undefined,
      status: "new",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    return await ctx.db.query("members").order("desc").collect();
  },
});

export const remove = mutation({
  args: { id: v.id("members") },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    await ctx.db.delete(args.id);
  },
});
