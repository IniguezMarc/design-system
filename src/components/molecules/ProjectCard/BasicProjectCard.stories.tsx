import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BasicProjectCard } from './BasicProjectCard';

type BasicProjectCardStory = React.ComponentProps<typeof BasicProjectCard> & {
    isDark?: boolean;
};

const meta: Meta<BasicProjectCardStory> = {
    title: 'Molecules/ProjectCard/BasicProjectCard',
    component: BasicProjectCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A feature-rich card component for displaying project details, including tags, links, and hover effects.'
            }
        },
    },
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Simulate dark mode',
            table: { category: 'Preview Helper' }
        },
        orientation: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
            description: 'Card layout orientation'
        },
        projectUrl: {
            control: 'text',
            description: 'URL for the project button'
        },
        linkTarget: {
            control: 'radio',
            options: ['_self', '_blank'],
            description: 'Hyperlink target behavior'
        },
        customStyles: {
            control: 'object',
            description: 'Custom implementation styles (slots)',
            table: { category: 'Styles' }
        },
        className: { table: { disable: true } },
        onViewProject: { table: { disable: true } },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
                p-12 w-full flex justify-center items-center min-h-[400px] transition-colors duration-300
            `}>
                <div className="max-w-md w-full">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<BasicProjectCardStory>;

export const Playground: Story = {
    args: {
        title: 'Design System Project',
        description: 'A comprehensive library of reusable UI components built with React, Typescript, and TailwindCSS.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        tags: ['React', 'TypeScript', 'Tailwind'],
        orientation: 'vertical',
        projectUrl: 'https://github.com',
        isDark: false,
        actionLabel: 'View Details',
        onViewProject: fn(),

        customStyles: {
            container: '',
            imageWrapper: '',
            content: '',
            title: '',
            description: '',
            tagsContainer: ''
        }
    },
};


