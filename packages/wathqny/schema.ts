import { defineCollection } from 'astro:content'
import { blogSchema, docSchema } from 'astro-toolkit/schema'
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/docs"
  }),
  schema: docSchema,
})

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog"
  }),
  schema: blogSchema,
})

const collections = { docs, blog }

export default collections