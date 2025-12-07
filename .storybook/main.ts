import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // 👇 AQUÍ ESTÁ LA MAGIA PARA LA PESTAÑA
  managerHead: (head) => `
    ${head}
    <title>Marc's Design System</title>
    
    <link rel="icon" type="image/png" href="./favicon.png" />
    
    <style>
      .sidebar-header {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        padding: 16px 12px !important;
        min-height: 60px !important;
      }
      .sidebar-header > a {
        display: flex !important;
        align-items: center !important;
        flex: 1 !important;
        max-width: 80% !important;
      }
      .sidebar-header img {
        max-height: 35px !important;
        width: auto !important;
        object-fit: contain !important;
      }
      .sidebar-header button {
        flex-shrink: 0 !important;
        margin-left: 8px !important;
      }
    </style>
  `,
};

export default config;