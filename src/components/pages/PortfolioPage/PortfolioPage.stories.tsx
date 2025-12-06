import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioPage } from './PortfolioPage';

const meta: Meta<typeof PortfolioPage> = {
    title: 'Pages/PortfolioPage', // Esto crea la carpeta "Pages" en el menú lateral
    component: PortfolioPage,
    parameters: {
        layout: 'fullscreen', // Quita los márgenes blancos de Storybook
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};