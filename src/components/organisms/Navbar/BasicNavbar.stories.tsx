
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from '@storybook/test';
import { BasicNavbar } from './BasicNavbar';

type BasicNavbarStory = React.ComponentProps<typeof BasicNavbar> & {
    isDark?: boolean;
};

const meta: Meta<BasicNavbarStory> = {
    title: 'Organisms/Navbar/BasicNavbar',
    component: BasicNavbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A responsive navigation bar with logo, links, and action buttons. Supports mobile menu and sticky positioning.'
            }
        },
    },
    // ... rest of config
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Simulate dark mode',
            table: { category: 'Preview Helper' }
        },
        customStyles: {
            control: 'object',
            description: 'Custom implementation styles (slots)',
            table: { category: 'Styles' }
        },
        isOpen: { control: 'boolean', description: 'Force mobile menu open' },
        actions: { control: 'object' },

        // Colors
        backgroundColor: { control: 'text', table: { category: 'Colors' } },
        darkBackgroundColor: { control: 'text', table: { category: 'Colors' } },
        borderColor: { control: 'text', table: { category: 'Colors' } },
        darkBorderColor: { control: 'text', table: { category: 'Colors' } },
        textColor: { control: 'text', table: { category: 'Colors' } },
        darkTextColor: { control: 'text', table: { category: 'Colors' } },
        activeLinkColor: { control: 'text', table: { category: 'Colors' } },
        darkActiveLinkColor: { control: 'text', table: { category: 'Colors' } },
        hoverLinkColor: { control: 'text', table: { category: 'Colors' } },
        darkHoverLinkColor: { control: 'text', table: { category: 'Colors' } },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-gray-50'} 
                min-h-screen transition-colors duration-300
            `}>
                <Story />
                <div className="p-8 text-center text-gray-400">
                    Static Navbar Content Below
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<BasicNavbarStory>;

export const Playground: Story = {
    args: {
        logo: 'Marc.Design',
        isLogoImage: false,
        links: [
            { label: 'Home', href: '#', active: true },
            { label: 'About', href: '#' },
            { label: 'Projects', href: '#' },
        ],
        actions: [
            { label: 'Contact', variant: 'primary', onClick: () => { } },
        ],
        isDark: false,
        customStyles: {},
        isOpen: false,
        onToggleMenu: fn(),
        onLinkClick: fn(),
        onLogoClick: fn(),

        backgroundColor: "bg-white",
        darkBackgroundColor: "dark:bg-gray-900",
        borderColor: "border-gray-100",
        darkBorderColor: "dark:border-gray-800",

        textColor: "text-gray-900",
        darkTextColor: "dark:text-white",
        activeLinkColor: "text-blue-600",
        darkActiveLinkColor: "dark:text-blue-400",
        hoverLinkColor: "hover:text-blue-600",
        darkHoverLinkColor: "dark:hover:text-blue-400",
    },
};
