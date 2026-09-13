import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  reservations: defineTable({
    date: v.string(), // "YYYY-MM-DD"
    timeSlot: v.string(), // "09:00 - 10:00" etc.
    status: v.string(), // "active", "cancelled"
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    partySize: v.optional(v.number()),
    adminCreated: v.optional(v.boolean()),
    message: v.optional(v.string()),
  }).index("by_date", ["date"]),

  unavailableDates: defineTable({
    date: v.string(), // "YYYY-MM-DD"
  }).index("by_date", ["date"]),
});
