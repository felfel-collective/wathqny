import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { blogSchema, docSchema } from 'astro-toolkit/schema'

const docs = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/content/docs',
  }),
  schema: docSchema,
})

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/content/blog',
  }),
  schema: blogSchema,
})

const collections = { docs, blog }

export default collections
