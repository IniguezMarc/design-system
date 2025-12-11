import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThreeDButton } from './ThreeDButton';
import { BasicButton } from './BasicButton';

// Use BasicButton props type as ThreeDButton passes them through
type ButtonStory = React.ComponentProps<typeof BasicButton> & { isDark?: boolean };

const meta: Meta<ButtonStory> = {
    title: 'Atoms/Button/ThreeDButton',
    component: ThreeDButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A retro-styled 8-bit button with 3D press effects. Wraps BasicButton with specific presets.'
            }
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
        target: {
            control: 'radio',
            options: ['_self', '_blank'],
            description: 'Link behavior'
        },
        className: {
            control: 'text',
            description: 'Add custom animation or utility classes',
            table: { category: 'Animation', type: { summary: 'string' } }
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
            table: { category: 'PROPS' },
        },
        onClick: { table: { disable: true } },
        isDark: {
            control: 'boolean',
            description: 'Toggles dark mode',
            table: { category: 'Controls' },
        },


        // Primary Colors
        primaryColor: { control: 'text', description: 'Primary bg class', table: { category: 'Primary Colors' } },
        primaryHoverColor: { control: 'text', description: 'Primary hover class', table: { category: 'Primary Colors' } },
        darkPrimaryColor: { control: 'text', description: 'Dark primary bg class', table: { category: 'Primary Colors' } },
        darkPrimaryHoverColor: { control: 'text', description: 'Dark primary hover class', table: { category: 'Primary Colors' } },

        // Secondary Colors
        secondaryColor: { control: 'text', description: 'Secondary bg class', table: { category: 'Secondary Colors' } },
        secondaryHoverColor: { control: 'text', description: 'Secondary hover class', table: { category: 'Secondary Colors' } },
        darkSecondaryColor: { control: 'text', description: 'Dark secondary bg class', table: { category: 'Secondary Colors' } },
        darkSecondaryHoverColor: { control: 'text', description: 'Dark secondary hover class', table: { category: 'Secondary Colors' } },

        // Outline Colors
        outlineColor: { control: 'text', description: 'Outline text/border class', table: { category: 'Outline Colors' } },
        outlineHoverColor: { control: 'text', description: 'Outline hover class', table: { category: 'Outline Colors' } },
        darkOutlineColor: { control: 'text', description: 'Dark outline text/border class', table: { category: 'Outline Colors' } },
        darkOutlineHoverColor: { control: 'text', description: 'Dark outline hover class', table: { category: 'Outline Colors' } },

        customStyles: {
            control: 'object',
            description: 'Custom implementation styles',
            table: { category: 'Styles' }
        },
    },
};

export default meta;
type Story = StoryObj<ButtonStory>;

export const Playground: Story = {
    args: {
        onClick: fn(),
        label: '3D 8-Bit Button',
        variant: 'primary',
        isDark: false,
        className: '',
        customStyles: { container: '', label: '' },

        // Default Colors
        primaryColor: 'bg-indigo-500',
        primaryHoverColor: 'hover:bg-indigo-600',
        darkPrimaryColor: 'dark:bg-blue-600',
        darkPrimaryHoverColor: 'dark:hover:bg-blue-500',

        secondaryColor: 'bg-gray-100',
        secondaryHoverColor: 'hover:bg-gray-200',
        darkSecondaryColor: 'dark:bg-gray-800',
        darkSecondaryHoverColor: 'dark:hover:bg-gray-700',

        outlineColor: 'text-blue-600 border-blue-600',
        outlineHoverColor: 'hover:bg-blue-50',
        darkOutlineColor: 'dark:text-blue-400 dark:border-blue-400',
        darkOutlineHoverColor: 'dark:hover:bg-blue-950',
    },
};
