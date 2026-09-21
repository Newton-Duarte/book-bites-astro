import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  rating: z.number(),
  summary: z.string(),
});

export type Book = z.infer<typeof bookSchema>;

export const booksCollection = defineCollection({
  loader: file("src/content/books/books.json"),
  schema: bookSchema,
});
