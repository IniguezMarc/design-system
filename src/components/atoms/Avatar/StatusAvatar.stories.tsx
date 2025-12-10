import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusAvatar } from './StatusAvatar';
import { BasicAvatar } from './BasicAvatar';

// Use BasicAvatar props type for inference where possible
type AvatarStory = React.ComponentProps<typeof StatusAvatar> & { isDark?: boolean };

const meta: Meta<AvatarStory> = {
    title: 'Atoms/Avatar/StatusAvatar',
    component: StatusAvatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
        },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
                p-12 min-w-[300px] flex justify-center items-center rounded-xl transition-colors duration-300
            `}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        src: {
            control: 'text',
            description: 'Source URL of image (paste any link)'
        },
        status: {
            control: 'radio',
            options: ['online', 'offline', 'busy', 'away'],
        },
        imageFit: {
            control: 'radio',
            options: ['cover', 'contain'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        isDark: {
            control: 'boolean',
            description: 'Toggles dark mode',
            table: { category: 'Controls' },
        },
        className: {
            control: 'text',
            description: 'Add custom animation or utility classes',
            table: { category: 'Animation', type: { summary: 'string' } }
        },
        customStyles: { control: 'object', table: { category: 'Styles' } },

        // Color Overrides
        statusColor: { control: 'text', table: { category: 'Colors' } },
        statusBorderColor: { control: 'text', table: { category: 'Colors' } },
        darkStatusBorderColor: { control: 'text', table: { category: 'Colors' } },
        borderColor: { control: 'text', table: { category: 'Colors' } },
        darkBorderColor: { control: 'text', table: { category: 'Colors' } },
        backgroundColor: { control: 'text', table: { category: 'Colors' } },
        darkBackgroundColor: { control: 'text', table: { category: 'Colors' } },
    },
};

export default meta;
type Story = StoryObj<AvatarStory>;

export const Default: Story = {
    tags: ['!autodocs'],
    args: {
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80',
        alt: 'Test Avatar',
        status: 'online',
        size: 'xl',
        imageFit: 'cover',
        isDark: false,
        className: '',
        customStyles: { container: '', image: '' },
        statusColor: '',
        statusBorderColor: 'ring-white',
        darkStatusBorderColor: 'dark:ring-gray-900',
        borderColor: 'border-gray-200',
        darkBorderColor: 'dark:border-gray-700',
        backgroundColor: 'bg-gray-100',
        darkBackgroundColor: 'dark:bg-gray-800',
    },
};
