import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const ptbrPostsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "/src/content/ptbr/posts" }),
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const ptbrPostCollection = {
    posts: ptbrPostsCollection,
};