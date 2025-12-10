
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from '@storybook/test';
import { ScrollNavbar } from './ScrollNavbar';
import { Navbar } from './Navbar';

type ScrollNavbarStory = React.ComponentProps<typeof ScrollNavbar> & {
    isDark?: boolean;
};

const meta: Meta<ScrollNavbarStory> = {
    title: 'Organisms/Navbar/ScrollNavbar',
    component: ScrollNavbar,
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
        // State controls for testing UI states without interaction
        isOpen: { control: 'boolean', description: 'Force mobile menu open' },
        isScrolled: { control: 'boolean', description: 'Force scrolled state (glass effect)' },
        actions: { control: 'object' },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-gray-50'} 
                min-h-screen transition-colors duration-300
            `}>
                <Story />
                {/* Visualizer for scrollable area */}
                <div className="pt-24 p-8 text-center text-gray-400">
                    Scroll or toggle states to see changes
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<ScrollNavbarStory>;

export const Default: Story = {
    tags: ['!autodocs'],
    render: ({ isOpen, isScrolled, onToggleMenu, onLinkClick, onLogoClick, ...args }) => (
        <div>
            {/* Delegate logic to the Wrapper for a clean simple story */}
            <Navbar {...args} />

            {/* Mock Content Sections for Navigation */}
            <div id="home" className="h-screen bg-blue-50 flex items-center justify-center text-3xl font-bold text-blue-300">
                Home Section (Top)
            </div>
            <div id="about" className="h-screen bg-white flex items-center justify-center text-3xl font-bold text-gray-300">
                About Section (Scroll Target)
            </div>
            <div id="projects" className="h-screen bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400">
                Projects Section (Scroll Target)
            </div>
        </div>
    ),
    args: {
        logo: 'Marc.Design',
        isLogoImage: false,
        links: [
            { label: 'Home', href: '#home', active: true },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
        ],
        actions: [
            { label: 'Contact', variant: 'primary', onClick: () => { } },
        ],
        isDark: false,
        customStyles: {},
        // These are required by typescript for ScrollNavbarStory, but unused in render because we use Navbar
        isOpen: false,
        isScrolled: false,
        onToggleMenu: fn(),
        onLinkClick: fn(),
        onLogoClick: fn(),
    },
};
