import { defineConfig } from "vocs";

export default defineConfig({
  title: "Starknet by Example",
  // topNav: [
  //   { text: "Guide & API", link: "/docs/getting-started", match: "/docs" },
  //   { text: "Blog", link: "/blog" },
  //   {
  //     text: "version",
  //     items: [
  //       {
  //         text: "Changelog",
  //         link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md",
  //       },
  //       {
  //         text: "Contributing",
  //         link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
  //       },
  //     ],
  //   },
  // ],
  sidebar: [
    {
      text: "Getting Started",
      collapsed: false,
      items: [
        // {
        //   text: "Config",
        //   link: "/docs/api/config",
        // },

        {
          text: "1. Basics of a Starknet contract",
          link: "/ch00/basics/introduction",
          collapsed: true,
          items: [
            {
              text: "1.1. Storage",
              link: "/ch00/basics/storage",
            },
          ],
        },
      ],
    },
  ],
});
