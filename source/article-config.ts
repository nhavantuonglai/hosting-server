import {SITE } from "@config";
import {defineCollection, z } from "astro:content";

const article = defineCollection({
	type: "content",
	schema: z.object({
		author: z.string().default(SITE.author),
		pubDatetime: z.date(),
		title: z.string(),
		description: z.string(),
		featured: z.boolean().optional(),
		tags: z.array(z.string()).default(["others"]),
		canonicalURL: z.string().optional(),
		}),
});

export const collections = {article};