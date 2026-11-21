// @ts-check
import { defineConfig } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [expressiveCode(), mdx(), vue(), icon()],
  markdown: {
    processor: satteri(),
  },
  site: "https://andreanimator.github.io/",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ptbr"],
    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
});
