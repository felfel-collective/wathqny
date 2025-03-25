import defineTheme from 'astro-theme-provider'
import { z } from 'astro/zod'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import { minify } from '@zokki/astro-minify'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import metaTags from 'astro-meta-tags'
import {purgecss} from '@zokki/astro-purgecss'
import type { ShikiTransformer } from 'shiki'

export const shikiBaseTransformers: ShikiTransformer[] = [
  transformerNotationDiff(),
  transformerNotationFocus(),
  transformerMetaHighlight(),
  transformerNotationWordHighlight(),
  transformerNotationErrorLevel(),
  transformerNotationHighlight(),
  transformerMetaWordHighlight(),
  transformerCopyButton({
    visibility: 'always',
    feedbackDuration: 3_000,
  }) as any,
]

export default defineTheme({
  name: 'wathqny',
  integrations: [
    AutoImport({
      imports: [
        {
          'astro:assets': ['Image'],
          'wathqny/components': ['BrowserBlock', 'Code', 'Callout'],
        },
      ],
    }),
    mdx({
      optimize: true,
      shikiConfig: {
        themes: {
          light: 'material-theme-lighter',
          dark: 'material-theme-darker',
        },
        // transformers: shikiBaseTransformers,
      },
    }),
    sitemap(),
    purgecss(),

    metaTags(),
    minify({
      logAllFiles: false,
    }),
    compressor({
      gzip: true,
      brotli: false,
    }),
  ],
  schema: z.object({
    logo: z.string(),
    siteName: z.string().optional(),
    description: z.string().optional(),
    GSVToken: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    sidebar: z
      .array(
        z.object({
          label: z.string(),
          id: z.string().optional(),
        }),
      )
      .optional(),
    OGImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    css: z
      .union([
        z.array(
          z.object({
            href: z.string(),
            rel: z.string().optional(),
            onload: z.string().optional(),
            media: z.string().optional(),
            as: z.string().optional(),
          }),
        ),
        z.array(z.string()),
      ])
      .optional(),
    navbar: z
      .object({
        items: z.array(
          z.object({
            href: z.string().optional(),
            label: z.string().optional(),
          }),
        ),
      })
      .optional(),
    font: z
      .union([
        z.literal('/font/GeistVF.woff2'),
        z.literal('/font/RubikVF.woff2'),
        z.string(),
      ])
      .optional(),
    home: z.object({
      title: z.string().optional(),
      logo: z.object({
        src: z.string(),
        alt: z.string(),
        height: z.number(),
        width: z.number(),
      }).optional(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      buttons: z.array(
        z.object({
          label: z.string(),
          href: z.string().optional(),
          type: z.enum(['alt', 'primary']).optional(),
        })
      ).length(1),
    })
  }),
})


