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
            {
              text: "1.3. Variables",
              link: "/ch00/basics/variables",
            },
            {
              text: "1.4. Visibility and Mutability",
              link: "/ch00/basics/visibility-mutability",
            },
            {
              text: "1.5. Counter Example",
              link: "/ch00/basics/counter",
            },
            {
              text: "1.6. Mappings",
              link: "/ch00/basics/mappings",
            },
            {
              text: "1.7. Errors",
              link: "/ch00/basics/errors",
            },
            {
              text: "1.8. Events",
              link: "/ch00/basics/events",
            },
            {
              text: "1.9. Syscalls",
              link: "/ch00/basics/syscalls",
            },
            {
              text: "1.10. Strings and ByteArrays",
              link: "/ch00/basics/bytearrays-strings",
            },
            {
              text: "1.11. Storing Custom Types",
              link: "/ch00/basics/storing-custom-types",
            },
            {
              text: "1.12. Custom types in entrypoints",
              link: "/ch00/basics/custom-types-in-entrypoints",
            },
            {
              text: "1.13. Documentation",
              link: "/ch00/basics/documentation",
            },
            // {
            //   text: "",
            //   link: "/ch00/basics/",
            // },
          ],
        },
      ],
    },
  ],
});
