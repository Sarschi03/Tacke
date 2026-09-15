import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
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

  members: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    message: v.optional(v.string()),
    status: v.string(),
  }).index("by_email", ["email"]),

  events: defineTable({
    title: v.string(),
    shortDescription: v.string(),
    content: v.string(),
    eventDate: v.optional(v.string()),
    isNews: v.boolean(),
    imageId: v.id("_storage"),
    published: v.boolean(),
  }).index("by_date", ["eventDate"]),
});
