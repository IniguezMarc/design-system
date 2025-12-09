import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type ButtonStory = React.ComponentProps<typeof Button> & { isDark?: boolean; animation?: string };

const meta: Meta<ButtonStory> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        target: {
            control: 'radio',
            options: ['_self', '_blank'],
            description: 'Link behavior'
        },
        className: { table: { disable: true } },
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
        animation: {
            control: 'text',
            description: 'Add custom animation classes (e.g., hover:scale-105)',
            table: { category: 'Animation' }
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
    render: ({ isDark, animation, ...args }) => (
        <div className={`
      ${isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
      p-12 min-w-[300px] flex justify-center items-center rounded-xl transition-colors duration-300
    `}>
            <Button className={animation} {...args} />
        </div>
    ),
};

export default meta;
type Story = StoryObj<ButtonStory>;

export const Playground: Story = {
    args: {
        label: 'Button Action',
        href: '',
        target: '_self',
        size: 'medium',
        variant: 'primary',
        isDark: false,
        animation: '',
        customStyles: { container: '', label: '' },

        // Default Colors (matching Button.tsx defaults)
        primaryColor: 'bg-blue-600',
        primaryHoverColor: 'hover:bg-blue-700',
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