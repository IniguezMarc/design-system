import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Organisms/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        customStyles: { control: 'object', table: { category: 'Styles' } },
        // Hide technical controls
        actions: { control: 'object' }, // Force simple object
    },
    // Decorator to simulate a long page and test scrolling
    decorators: [
        (Story) => (
            <div className="bg-gray-50">
                <Story />
                {/* Simulate sections for scroll to work on click */}
                <div id="home" className="h-screen bg-blue-50 flex items-center justify-center text-3xl font-bold text-blue-200">
                    Home Section (Hero)
                </div>
                <div id="about" className="h-screen bg-white flex items-center justify-center text-3xl font-bold text-gray-200">
                    About Me + Tech Profile Section
                </div>
                <div id="projects" className="h-screen bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-300">
                    Projects Section
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        logo: 'Marc.Design',
        isLogoImage: false,
        links: [
            { label: 'Home', href: '#home', active: true },
            { label: 'About', href: '#about' }, // Avatar and tech profile go here
            { label: 'Projects', href: '#projects' }, // Grid goes here
        ],
        actions: [
            { label: 'Contact', variant: 'primary', onClick: () => { } },
        ],
        customStyles: { container: '', logo: '', link: '', mobileMenu: '' }
    },
};