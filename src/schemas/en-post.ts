import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const enPostsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "/src/content/en/posts" }),
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const enPostCollection = {
    posts: enPostsCollection,
};