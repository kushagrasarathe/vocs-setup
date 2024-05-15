// vocs.config.ts
import { defineConfig } from "file:///Users/kushagra/zwork/nethermind/starknet-by-example/node_modules/.pnpm/vocs@1.0.0-alpha.50_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0_rollup@4.17.2_typescript@5.4.3/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  title: "Starknet by Example",
  topNav: [
    { text: "Guide & API", link: "/docs/getting-started", match: "/docs" },
    { text: "Blog", link: "/blog" },
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md"
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md"
        }
      ]
    }
  ],
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
          text: "API",
          collapsed: false,
          items: [
            {
              text: "Config",
              link: "/docs/api/config"
            }
          ]
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva3VzaGFncmEvendvcmsvbmV0aGVybWluZC9zdGFya25ldC1ieS1leGFtcGxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva3VzaGFncmEvendvcmsvbmV0aGVybWluZC9zdGFya25ldC1ieS1leGFtcGxlL3ZvY3MuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rdXNoYWdyYS96d29yay9uZXRoZXJtaW5kL3N0YXJrbmV0LWJ5LWV4YW1wbGUvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJTdGFya25ldCBieSBFeGFtcGxlXCIsXG4gIHRvcE5hdjogW1xuICAgIHsgdGV4dDogXCJHdWlkZSAmIEFQSVwiLCBsaW5rOiBcIi9kb2NzL2dldHRpbmctc3RhcnRlZFwiLCBtYXRjaDogXCIvZG9jc1wiIH0sXG4gICAgeyB0ZXh0OiBcIkJsb2dcIiwgbGluazogXCIvYmxvZ1wiIH0sXG4gICAge1xuICAgICAgdGV4dDogdmVyc2lvbixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNoYW5nZWxvZ1wiLFxuICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3dldm0vdm9jcy9ibG9iL21haW4vc3JjL0NIQU5HRUxPRy5tZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDb250cmlidXRpbmdcIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS93ZXZtL3ZvY3MvYmxvYi9tYWluLy5naXRodWIvQ09OVFJJQlVUSU5HLm1kXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIHNpZGViYXI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICB0ZXh0OiBcIkNvbmZpZ1wiLFxuICAgICAgICAvLyAgIGxpbms6IFwiL2RvY3MvYXBpL2NvbmZpZ1wiLFxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkFQSVwiLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJDb25maWdcIixcbiAgICAgICAgICAgICAgbGluazogXCIvZG9jcy9hcGkvY29uZmlnXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyxvQkFBb0I7QUFFM1csSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLElBQ04sRUFBRSxNQUFNLGVBQWUsTUFBTSx5QkFBeUIsT0FBTyxRQUFRO0FBQUEsSUFDckUsRUFBRSxNQUFNLFFBQVEsTUFBTSxRQUFRO0FBQUEsSUFDOUI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
