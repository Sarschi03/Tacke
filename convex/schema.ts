import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  reservations: defineTable({
    date: v.string(), // "YYYY-MM-DD"
    timeSlot: v.string(), // "09:00 - 10:00" etc.
    status: v.string(), // "active", "cancelled"
    // Other fields can be added later if needed, e.g., name, email
  }).index("by_date", ["date"]),

  unavailableDates: defineTable({
    date: v.string(), // "YYYY-MM-DD"
  }).index("by_date", ["date"]),
});
