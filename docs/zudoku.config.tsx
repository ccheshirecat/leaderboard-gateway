import type { ZudokuConfig } from "zudoku";

/**
 * Developer Portal Configuration
 * For more information, see:
 * https://zuplo.com/docs/dev-portal/zudoku/configuration/overview
 */
const config: ZudokuConfig = {
  site: {
    title: "Leaderboard API Gateway",
    logo: {
      src: {
        light: "/dark.png",
        dark: "/light.png",
      },
      alt: "badge",
      width: "125px"
    },
  },
  theme: {
    customCss: `
      navigation {
        height: auto !important;
        min-height: 250px !important;
      }
      header img {
        max-height: 220px !important;
        width: auto !important;
        max-width: 125px !important;
      }
    `,
  },
  metadata: {
    title: "Developer Portal",
    description: "Developer Portal",
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book",
      items: ["introduction", "gateway"],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
      icon: "code",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "../config/routes.oas.json",
      path: "api",
    },
  ],
  apiKeys: {
    enabled: true,
  },
};

export default config;
