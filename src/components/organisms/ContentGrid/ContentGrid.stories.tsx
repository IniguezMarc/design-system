import type { Meta, StoryObj } from '@storybook/react';
import { ContentGrid } from './ContentGrid';

const meta: Meta<typeof ContentGrid> = {
    title: 'Organisms/ContentGrid',
    component: ContentGrid,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        // 👇 THIS MAKES IT FUNCTIONAL: Registers click in "Actions" panel
        onItemClick: { table: { disable: true } },

        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Data
const MOCK_ITEMS = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Complete admin dashboard with metrics.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'ChartJS'],
        // Note: No URL to test onItemClick
    },
    {
        id: '2',
        title: 'Management App',
        description: 'Kanban-style application.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['TypeScript', 'Redux'],
    },
    {
        id: '3',
        title: 'Landing Page',
        description: 'Fast static website.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
    },
];

export const Playground: Story = {
    args: {
        title: 'My Projects',
        items: MOCK_ITEMS,
        layout: 'grid',
        itemButtonLabel: 'View Details',

        // Initialize empty hooks for editing in the table
        customStyles: {
            container: '',
            title: ''
        }
    },
};