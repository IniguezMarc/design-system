import type { Meta, StoryObj } from '@storybook/react';
import { CreativeProfileSection } from './CreativeProfileSection';

const meta: Meta<typeof CreativeProfileSection> = {
    title: 'Organisms/ProfileSection/CreativeProfileSection',
    component: CreativeProfileSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        accentColor: { control: 'color' },
        titleColor: { control: 'color' },
        bioTextColor: { control: 'color' },
        philosophyBgColor: { control: 'color' },
        philosophyBorderColor: { control: 'color' },
        philosophyTextColor: { control: 'color' },
        tickColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof CreativeProfileSection>;

export const Default: Story = {
    args: {
        title: "Beyond the",
        titleHighlight: "Code",
        bio: "I don't just write functions; I craft systems. My background in design allows me to bridge the gap between aesthetics and engineering.",
        philosophyTitle: "My Philosophy",
        philosophyItems: ["Performance First", "Accessible by Default", "Pixel Perfection"],
        floatingSkills: [
            { label: "React", color: "text-blue-500", speed: 0.2, xOffset: 40 },
            { label: "TypeScript", color: "text-blue-700", speed: -0.1, xOffset: -40 },
            { label: "WebGL", color: "text-pink-500", speed: 0.3, xOffset: 20 },
        ]
    }
};
