import type { Meta, StoryObj } from '@storybook/react';
import { CreativeHero } from './CreativeHero';

// tailwindToHex is available for converting Tailwind classes to hex when needed
// import { tailwindToHex } from '../../../utils/color-utils';

const meta: Meta<typeof CreativeHero> = {
    title: 'Organisms/Hero/CreativeHero',
    component: CreativeHero,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        // Note: Color controls work best with hex values, but the component
        // also supports Tailwind classes for proper dark mode switching
        backgroundColor: { control: 'text' },
        highlightColor: { control: 'text' },
        prefixColor: { control: 'text' },
        statusColor: { control: 'text' },
        statusTextColor: { control: 'text' },
        typewriterColor: { control: 'text' },
        darkBackgroundColor: { control: 'text' },
        darkHighlightColor: { control: 'text' },
        darkPrefixColor: { control: 'text' },
        darkStatusColor: { control: 'text' },
        darkStatusTextColor: { control: 'text' },
        darkTypewriterColor: { control: 'text' },
        backgroundEffect: { control: 'radio', options: ['blobs', 'none'] },
    }
};

export default meta;
type Story = StoryObj<typeof CreativeHero>;

export const Default: Story = {
    args: {
        status: "Available for freelance",
        prefix: "I create",
        typewriterText: "Digital Masterpieces",
        typewriterDelay: 1000,
        typewriterSpeed: 80,
        subtitle: "Bridging the gap between engineering and",
        subtitleHighlight: "artistic expression",
        primaryAction: { label: "View Projects", onClick: () => console.log('Primary') },
        secondaryAction: { label: "Contact Me", onClick: () => console.log('Secondary') },
        // Using Tailwind classes for proper dark mode support
        backgroundColor: "bg-white",
        darkBackgroundColor: "dark:bg-black",
        highlightColor: "bg-purple-600 text-purple-600",
        darkHighlightColor: "dark:bg-purple-500 dark:text-purple-500",
        prefixColor: "text-purple-600",
        darkPrefixColor: "dark:text-purple-300",
        statusColor: "bg-white/50",
        darkStatusColor: "dark:bg-white/5",
        statusTextColor: "text-gray-600",
        darkStatusTextColor: "dark:text-gray-300",
        typewriterColor: "text-gray-900",
        darkTypewriterColor: "dark:text-white",
        backgroundEffect: 'blobs',
    }
};

export const CustomColors: Story = {
    args: {
        status: "Open for Business",
        prefix: "We build",
        typewriterText: "Scalable Systems",
        subtitle: "Delivering high-performance solutions for",
        subtitleHighlight: "enterprise clients",
        primaryAction: { label: "Get Started", onClick: () => { } },
        backgroundColor: "bg-white",
        darkBackgroundColor: "dark:bg-black",
        highlightColor: "bg-emerald-500 text-emerald-600",
        darkHighlightColor: "dark:bg-emerald-500 dark:text-emerald-400",
        prefixColor: "text-emerald-600",
        darkPrefixColor: "dark:text-emerald-300",
        statusColor: "bg-white/50",
        darkStatusColor: "dark:bg-white/5",
        statusTextColor: "text-gray-600",
        darkStatusTextColor: "dark:text-gray-300",
        typewriterColor: "text-gray-900",
        darkTypewriterColor: "dark:text-white",
        backgroundEffect: 'blobs',
    }
};



