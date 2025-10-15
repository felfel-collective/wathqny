import { defineConfig, passthroughImageService } from 'astro/config';
import Wathqny, { shikiBaseTransformers } from 'wathqny';
// import wathqnyStyles from "./wathqny.css?url"

// https://astro.build/config
export default defineConfig({
  site: 'https://wathqny.pages.dev/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  image: {
    service: passthroughImageService(),
    domains: ['api.github.com', 'avatars.githubusercontent.com'],
  },
  experimental: {
    contentIntellisense: true,
    preserveScriptOrder: true,
    fonts: [
      {
        provider: "local",
        name: "family",
        cssVariable: "--font-family",
        variants: [
          {
            display: "optional",
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/font/GeistVF.woff2"],
          },
        ],
      },
    ],
  },
  markdown: {
    syntaxHighlight: false,
    // shikiConfig: {

    //   themes: {
    //     light: 'github-light',
    //     dark: 'github-dark',
    //   },
    //   transformers: shikiBaseTransformers,
    // },
  },

  integrations: [
    Wathqny({
      config: {
        logo: '/icon.svg',
        home: {
          logo: {
            src: '/trademark.webp',
            alt: 'wathqny logo',
            width: 500,
            height: 278,
          },
          title: 'wathqny a fast, easy and accessible Astro powered documentation site framework',
          buttons: [
            {
              label: 'Getting started',
              type: 'primary',
              href: '/docs/getting-started/overview'
            }
          ]
        },
        siteName: 'wathqny',
        GSVToken: 'uscYyrV8FUN5a4JacVB4TIl0dpHe9lJNGQevQRoLCr4',
        OGImage: {
          src: '/og.png',
          alt: "Logo of wathqny, featuring Arabic text in green that translates to 'wathqny' with a tagline below in black text that reads 'Where Arab Technology Shines'.",
        },
        description:
          'wathqny a fast, easy and accessible Astro powered documentation site framework',
        keywords: [
          'ui',
          'site',
          'easy',
          'fast',
          'accessible',
          'docs',
          'documentation',
          'css',
          'html',
          'js',
          'framework',
          'library',
        ],
        sidebar: [
          {
            label: 'Getting started',
            id: 'getting-started',
          },
          {
            label: 'test',
            id: 'test',
          },
        ],
        navbar: {
          items: [
            {
              label: 'docs',
              href: '/docs/',
            },
            {
              label: 'blog',
              href: '/blog',
            },
          ],
        },
        // css: ["/wathqny.css"],
        // font: '/font/GeistVF.woff2',
      },
    }),
  ],
})
