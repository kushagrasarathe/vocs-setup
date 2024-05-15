import { defineConfig } from "vocs";

export default defineConfig({
  title: "Starknet by Example",
  sidebar: [
    {
      text: "Getting Started",
      items: [
        {
          text: "1. Basics of a Starknet contract",
          link: "/ch00/basics/introduction",
          collapsed: false,
          items: [
            {
              text: "1.1. Storage",
              link: "/ch00/basics/storage",
            },
            {
              text: "1.2. Constructor",
              link: "/ch00/basics/constructor",
            },
          ],
        },
      ],
    },
  ],
});
