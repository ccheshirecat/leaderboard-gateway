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
        light: "/dark.webp",
        dark: "/light.webp",
      },
      alt: "badge",
      width: "125px"
    },
  },
  theme: {
    customCss: `
    :root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0.2046 0 0);
  --card: oklch(0.9846 0.0017 247.8389);
  --card-foreground: oklch(0.2046 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.2046 0 0);
  --primary: oklch(0.7227 0.1920 149.5793);
  --primary-foreground: oklch(0.9842 0.0034 247.8575);
  --secondary: oklch(0.9288 0.0126 255.5078);
  --secondary-foreground: oklch(0.2046 0 0);
  --muted: oklch(0.9683 0.0069 247.8956);
  --muted-foreground: oklch(0.5544 0.0407 257.4166);
  --accent: oklch(0.9683 0.0069 247.8956);
  --accent-foreground: oklch(0.2046 0 0);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(0.9842 0.0034 247.8575);
  --border: oklch(0.9276 0.0058 264.5313);
  --input: oklch(0.9276 0.0058 264.5313);
  --ring: oklch(0.7227 0.1920 149.5793);
  --chart-1: oklch(0.7227 0.1920 149.5793);
  --chart-2: oklch(0.8712 0.1363 154.4491);
  --chart-3: oklch(0.6959 0.1491 162.4796);
  --chart-4: oklch(0.5960 0.1274 163.2254);
  --chart-5: oklch(0.5081 0.1049 165.6121);
  --sidebar: oklch(0.9846 0.0017 247.8389);
  --sidebar-foreground: oklch(0.2046 0 0);
  --sidebar-primary: oklch(0.7227 0.1920 149.5793);
  --sidebar-primary-foreground: oklch(0.9842 0.0034 247.8575);
  --sidebar-accent: oklch(0.9288 0.0126 255.5078);
  --sidebar-accent-foreground: oklch(0.2046 0 0);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.7227 0.1920 149.5793);
  --font-sans: Inter, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 4px;
  --shadow-blur: 10px;
  --shadow-spread: 0;
  --shadow-opacity: 0.05;
  --shadow-color: 0 0 0;
  --shadow-2xs: 0 4px 10px 0 hsl(0 0 0 / 0.03);
  --shadow-xs: 0 4px 10px 0 hsl(0 0 0 / 0.03);
  --shadow-sm: 0 4px 10px 0 hsl(0 0 0 / 0.05), 0 1px 2px -1px hsl(0 0 0 / 0.05);
  --shadow: 0 4px 10px 0 hsl(0 0 0 / 0.05), 0 1px 2px -1px hsl(0 0 0 / 0.05);
  --shadow-md: 0 4px 10px 0 hsl(0 0 0 / 0.05), 0 2px 4px -1px hsl(0 0 0 / 0.05);
  --shadow-lg: 0 4px 10px 0 hsl(0 0 0 / 0.05), 0 4px 6px -1px hsl(0 0 0 / 0.05);
  --shadow-xl: 0 4px 10px 0 hsl(0 0 0 / 0.05), 0 8px 10px -1px hsl(0 0 0 / 0.05);
  --shadow-2xl: 0 4px 10px 0 hsl(0 0 0 / 0.13);
  --tracking-normal: normal;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.1288 0.0406 264.6952);
  --foreground: oklch(0.9288 0.0126 255.5078);
  --card: oklch(0.2077 0.0398 265.7549);
  --card-foreground: oklch(0.9288 0.0126 255.5078);
  --popover: oklch(0.2077 0.0398 265.7549);
  --popover-foreground: oklch(0.9288 0.0126 255.5078);
  --primary: oklch(0.7227 0.1920 149.5793);
  --primary-foreground: oklch(0.9842 0.0034 247.8575);
  --secondary: oklch(0.2795 0.0368 260.0310);
  --secondary-foreground: oklch(0.9288 0.0126 255.5078);
  --muted: oklch(0.2795 0.0368 260.0310);
  --muted-foreground: oklch(0.7107 0.0351 256.7878);
  --accent: oklch(0.3699 0.0533 260.1114);
  --accent-foreground: oklch(0.9288 0.0126 255.5078);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(0.9842 0.0034 247.8575);
  --border: oklch(0.2795 0.0368 260.0310);
  --input: oklch(0.2795 0.0368 260.0310);
  --ring: oklch(0.7227 0.1920 149.5793);
  --chart-1: oklch(0.7227 0.1920 149.5793);
  --chart-2: oklch(0.8712 0.1363 154.4491);
  --chart-3: oklch(0.6959 0.1491 162.4796);
  --chart-4: oklch(0.5960 0.1274 163.2254);
  --chart-5: oklch(0.5081 0.1049 165.6121);
  --sidebar: oklch(0.2077 0.0398 265.7549);
  --sidebar-foreground: oklch(0.9288 0.0126 255.5078);
  --sidebar-primary: oklch(0.7227 0.1920 149.5793);
  --sidebar-primary-foreground: oklch(0.9842 0.0034 247.8575);
  --sidebar-accent: oklch(0.2795 0.0368 260.0310);
  --sidebar-accent-foreground: oklch(0.9288 0.0126 255.5078);
  --sidebar-border: oklch(0.2795 0.0368 260.0310);
  --sidebar-ring: oklch(0.7227 0.1920 149.5793);
  --font-sans: Inter, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 4px;
  --shadow-blur: 10px;
  --shadow-spread: 0;
  --shadow-opacity: 0.5;
  --shadow-color: 0 0 0;
  --shadow-2xs: 0 4px 10px 0 hsl(0 0 0 / 0.25);
  --shadow-xs: 0 4px 10px 0 hsl(0 0 0 / 0.25);
  --shadow-sm: 0 4px 10px 0 hsl(0 0 0 / 0.50), 0 1px 2px -1px hsl(0 0 0 / 0.50);
  --shadow: 0 4px 10px 0 hsl(0 0 0 / 0.50), 0 1px 2px -1px hsl(0 0 0 / 0.50);
  --shadow-md: 0 4px 10px 0 hsl(0 0 0 / 0.50), 0 2px 4px -1px hsl(0 0 0 / 0.50);
  --shadow-lg: 0 4px 10px 0 hsl(0 0 0 / 0.50), 0 4px 6px -1px hsl(0 0 0 / 0.50);
  --shadow-xl: 0 4px 10px 0 hsl(0 0 0 / 0.50), 0 8px 10px -1px hsl(0 0 0 / 0.50);
  --shadow-2xl: 0 4px 10px 0 hsl(0 0 0 / 1.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

body {
  letter-spacing: var(--tracking-normal);
}
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

