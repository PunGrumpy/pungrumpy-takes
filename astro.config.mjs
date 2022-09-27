import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://pun-grumpy-takes.vercel.app/',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-mplus',
          h2: 'text-2xl font-bold font-mplus',
          h3: 'text-xl font-bold font-mplus',
          h4: 'text-lg font-bold font-mplus',
          h5: 'font-bold font-mplus',
          h6: 'font-bold font-mplus',
          img: 'border border-slate-400 dark:border-zinc-700 rounded-xl',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-400 decoration-orange-400'
        }
      ]
    ]
  }
})
