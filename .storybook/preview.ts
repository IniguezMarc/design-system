// 👇 CAMBIO IMPORTANTE: Importamos desde '@storybook/react'
import type { Preview } from "@storybook/react";

// 👇 IMPRESCINDIBLE: Importar tus estilos globales (Tailwind)
import '../src/index.css';

const preview: Preview = {
  parameters: {
    // Estas líneas habilitan los controles automáticos para colores y fechas
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Opcional: Configuración para que el modo oscuro se detecte mejor
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' }, // gray-900 de Tailwind
      ],
    },
  },
};

export default preview;