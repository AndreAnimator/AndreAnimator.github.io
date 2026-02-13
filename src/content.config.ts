import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const PostsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

const ProjectsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        docs: z.string(),
        url: z.string(),
        github: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const PostCollection = {
    posts: PostsCollection,
    projects: ProjectsCollection
};