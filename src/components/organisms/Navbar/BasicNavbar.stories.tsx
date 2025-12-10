
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
    },
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

export const Default: Story = {
    tags: ['!autodocs'],
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
    },
};
