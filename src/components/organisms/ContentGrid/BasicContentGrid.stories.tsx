import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BasicContentGrid } from './BasicContentGrid';

type BasicContentGridStory = React.ComponentProps<typeof BasicContentGrid> & {
    isDark?: boolean;
};

const meta: Meta<BasicContentGridStory> = {
    title: 'Organisms/ContentGrid/BasicContentGrid',
    component: BasicContentGrid,
    tags: [],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Simulate dark mode',
            table: { category: 'Preview Helper' }
        },
        layout: {
            control: 'radio',
            options: ['grid', 'list'],
            description: 'Layout mode of the grid',
        },
        customStyles: {
            control: 'object',
            description: 'Custom implementation styles (slots)',
            table: { category: 'Styles' }
        },
        onItemClick: { table: { disable: true } },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-gray-50'} 
                min-h-screen transition-colors duration-300
            `}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<BasicContentGridStory>;

const MOCK_ITEMS = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Complete admin dashboard with metrics.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'ChartJS'],
        url: 'https://google.com'
    },
    {
        id: '2',
        title: 'Management App',
        description: 'Kanban-style application.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['TypeScript', 'Redux'],
        url: 'https://github.com'
    },
    {
        id: '3',
        title: 'Landing Page',
        description: 'Fast static website.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
        url: '#'
    },
];

export const Default: Story = {
    args: {
        title: 'My Projects',
        items: MOCK_ITEMS,
        layout: 'grid',
        itemButtonLabel: 'View Details',
        isDark: false,
        onItemClick: fn(),
        customStyles: {}
    },
};
