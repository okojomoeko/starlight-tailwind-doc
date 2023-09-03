import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { remarkDiagram } from "./remark-plugins/remark-diagram.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs with Tailwind",
      defaultLocale: "ja",
      locales: {
        en: {
          label: "English",
        },
        ja: {
          label: "日本語",
        },
        fr: {
          label: "Français",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "guides/example/" },
            {
              label: "Example Guide Extend",
              link: "guides/example-extend-foooooooo/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",
          },
        },
        {
          tag: "script",
          content:
            '(() => { const storedTheme = typeof localStorage !== "undefined" && localStorage.getItem("starlight-theme"); mermaid.initialize({ startOnLoad: true, theme: storedTheme }); })();',
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    remarkPlugins: [remarkDiagram],
  },
});
