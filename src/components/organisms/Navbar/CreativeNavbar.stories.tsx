import type { Meta, StoryObj } from '@storybook/react';
import { CreativeNavbar } from './CreativeNavbar';

const meta: Meta<typeof CreativeNavbar> = {
    title: 'Organisms/Navbar/CreativeNavbar',
    component: CreativeNavbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        hideOnScroll: { control: 'boolean' },
        glassOnScroll: { control: 'boolean' },
        glassDensity: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    }
};

export default meta;
type Story = StoryObj<typeof CreativeNavbar>;

const MOCK_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export const Default: Story = {
    args: {
        logo: 'Marc.Dev',
        links: MOCK_LINKS,
        actions: [{ label: "Let's Talk", onClick: () => { } }],
        glassOnScroll: true,
        hideOnScroll: false,
    },
    render: (args) => (
        <div style={{ background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }} className="min-h-screen">
            <CreativeNavbar {...args} />
            <div className="pt-32 px-8">
                <h1 className="text-4xl font-bold">Scroll down to see the effect</h1>
                <p className="mt-4">The navbar should transition from transparent to glassmorphic.</p>
                <div className="space-y-8 mt-12 pb-32">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-64 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Scroll Content {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export const HideOnScroll: Story = {
    args: {
        logo: 'AutoHide',
        links: MOCK_LINKS,
        glassOnScroll: true,
        hideOnScroll: true,
    },
    render: (args) => (
        <div style={{ background: 'linear-gradient(to bottom, #eef2ff, #c7d2fe)' }} className="min-h-screen">
            <CreativeNavbar {...args} />
            <div className="pt-32 px-8">
                <h1 className="text-4xl font-bold">Scroll down to hide</h1>
                <p className="mt-4">The navbar should disappear when scrolling down and reappear when scrolling up.</p>
                <div className="space-y-8 mt-12 pb-32">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-64 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Scroll Content {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
