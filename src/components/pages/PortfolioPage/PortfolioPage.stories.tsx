import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioPage } from './PortfolioPage';

const meta: Meta<typeof PortfolioPage> = {
    title: 'Pages/PortfolioPage', // This creates the "Pages" folder in the sidebar
    component: PortfolioPage,
    parameters: {
        layout: 'fullscreen', // Removes Storybook's white margins
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};