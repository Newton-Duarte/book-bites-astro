import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  rating: z.number(),
  summary: z.string(),
});

export type Book = z.infer<typeof bookSchema>;

export const booksCollection = defineCollection({
  loader: glob({ base: "src/content/books", pattern: "*.md" }),
  schema: bookSchema,
});
