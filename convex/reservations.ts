import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const MAX_RESERVATIONS_PER_SLOT = 10;

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
      slotsCount[res.timeSlot] = (slotsCount[res.timeSlot] || 0) + 1;
    }

    return { isUnavailable: false, slotsCount };
  },
});

export const addReservation = mutation({
  args: {
    date: v.string(),
    timeSlot: v.string(),
  },
  handler: async (ctx, args) => {
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
        count++;
      }
    }

    if (count >= MAX_RESERVATIONS_PER_SLOT) {
      throw new Error("Prosto časovno okenče je že zasedeno.");
    }

    await ctx.db.insert("reservations", {
      date: args.date,
      timeSlot: args.timeSlot,
      status: "active",
    });
  },
});

export const getDashboardData = query({
  args: { startDate: v.string(), endDate: v.string() },
  handler: async (ctx, args) => {
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
