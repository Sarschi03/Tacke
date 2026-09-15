import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    return await ctx.storage.generateUploadUrl();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    shortDescription: v.string(),
    content: v.string(),
    eventDate: v.optional(v.string()),
    isNews: v.boolean(),
    imageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    if (!args.title.trim() || !args.content.trim())
      throw new Error("Naslov in vsebina sta obvezna.");
    if (args.shortDescription.trim().length > 180)
      throw new Error("Kratek opis ima lahko največ 180 znakov.");
    await ctx.db.insert("events", {
      ...args,
      title: args.title.trim(),
      shortDescription: args.shortDescription.trim(),
      content: args.content.trim(),
      eventDate: args.eventDate || undefined,
      published: true,
    });
  },
});

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query("events").order("desc").collect();
    return await Promise.all(
      items
        .filter((item) => item.published)
        .map(async (item) => ({
          ...item,
          imageUrl: await ctx.storage.getUrl(item.imageId),
        })),
    );
  },
});

export const listAdmin = query({
  args: {},
  handler: async (ctx) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    const items = await ctx.db.query("events").order("desc").collect();
    return await Promise.all(
      items.map(async (item) => ({
        ...item,
        imageUrl: await ctx.storage.getUrl(item.imageId),
      })),
    );
  },
});

export const getById = query({
  args: { id: v.id("events") },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (!item || !item.published) return null;
    return { ...item, imageUrl: await ctx.storage.getUrl(item.imageId) };
  },
});

export const update = mutation({
  args: {
    id: v.id("events"),
    title: v.string(),
    shortDescription: v.string(),
    content: v.string(),
    eventDate: v.optional(v.string()),
    isNews: v.boolean(),
    imageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    if (!args.title.trim() || !args.content.trim())
      throw new Error("Naslov in vsebina sta obvezna.");
    if (args.shortDescription.trim().length > 180)
      throw new Error("Kratek opis ima lahko največ 180 znakov.");
    const current = await ctx.db.get(args.id);
    if (!current) throw new Error("Objava ne obstaja.");
    await ctx.db.patch(args.id, {
      title: args.title.trim(),
      shortDescription: args.shortDescription.trim(),
      content: args.content.trim(),
      eventDate: args.eventDate || undefined,
      isNews: args.isNews,
      ...(args.imageId ? { imageId: args.imageId } : {}),
    });
    if (args.imageId && args.imageId !== current.imageId)
      await ctx.storage.delete(current.imageId);
  },
});

export const remove = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, args) => {
    if (!(await ctx.auth.getUserIdentity()))
      throw new Error("Not authenticated");
    const item = await ctx.db.get(args.id);
    if (!item) return;
    await ctx.storage.delete(item.imageId);
    await ctx.db.delete(args.id);
  },
});
