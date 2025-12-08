import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
    options: {
      storySort: {
        order: ['Introduction', 'Getting Started', 'Component Guide', 'Atoms', 'Molecules', 'Organisms', 'Pages'],
      },
    },
    toolbar: {
      'storybook/background': { hidden: true },
      'storybook/viewport': { hidden: true },
      zoom: { hidden: true },
      eject: { hidden: true },
      copy: { hidden: true },
      fullscreen: { hidden: true },
      'storybook/outline': { hidden: true },
      'storybook/measure': { hidden: true },
    },
  },
};

export default preview;