import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicBadge } from './BasicBadge';

type BadgeStory = React.ComponentProps<typeof BasicBadge> & { isDark?: boolean };

const meta: Meta<BadgeStory> = {
    title: 'Atoms/Badge/BasicBadge',
    component: BasicBadge,
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
        className: {
            control: 'text',
            description: 'Add custom animation or utility classes',
            table: { category: 'Animation', type: { summary: 'string' } }
        },
        customStyles: { control: 'object', table: { category: 'Styles' } },
        isDark: {
            control: 'boolean',
            description: 'Toggles dark mode',
            table: { category: 'Controls' },
        },
        endIcon: { table: { disable: true } },

        // Primary Colors
        primaryColor: { control: 'text', description: 'Primary colors', table: { category: 'Primary Colors' } },
        darkPrimaryColor: { control: 'text', description: 'Dark primary colors', table: { category: 'Primary Colors' } },

        // Secondary Colors
        secondaryColor: { control: 'text', description: 'Secondary colors', table: { category: 'Secondary Colors' } },
        darkSecondaryColor: { control: 'text', description: 'Dark secondary colors', table: { category: 'Secondary Colors' } },

        // Outline Colors
        outlineColor: { control: 'text', description: 'Outline colors', table: { category: 'Outline Colors' } },
        darkOutlineColor: { control: 'text', description: 'Dark outline colors', table: { category: 'Outline Colors' } },

        // Success Colors
        successColor: { control: 'text', description: 'Success colors', table: { category: 'Success Colors' } },
        darkSuccessColor: { control: 'text', description: 'Dark success colors', table: { category: 'Success Colors' } },
    },
};

export default meta;
type Story = StoryObj<BadgeStory>;

export const Playground: Story = {
    tags: ['!autodocs'],
    args: {
        label: 'Technology',
        variant: 'primary',
        customStyles: { container: '', label: '' },
        isDark: false,
        className: '',

        // Default Colors
        primaryColor: 'bg-blue-100 text-blue-800',
        darkPrimaryColor: 'dark:bg-blue-900/50 dark:text-blue-200',

        secondaryColor: 'bg-gray-100 text-gray-800',
        darkSecondaryColor: 'dark:bg-gray-700 dark:text-gray-300',

        outlineColor: 'border border-gray-300 text-gray-600 bg-transparent',
        darkOutlineColor: 'dark:border-gray-600 dark:text-gray-400',

        successColor: 'bg-green-100 text-green-800',
        darkSuccessColor: 'dark:bg-green-900/50 dark:text-green-200',
    },
};
