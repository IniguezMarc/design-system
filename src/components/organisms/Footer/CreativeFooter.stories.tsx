import type { Meta, StoryObj } from '@storybook/react';
import { CreativeFooter } from './CreativeFooter';

const meta: Meta<typeof CreativeFooter> = {
    title: 'Organisms/Footer/CreativeFooter',
    component: CreativeFooter,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        ctaTitleColor: { control: 'color' },
        ctaSubtitleColor: { control: 'color' },
        ctaBorderColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        // Props for BasicFooter passed through
        textColor: { control: 'color' },
        borderColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof CreativeFooter>;

const MOCK_SOCIAL = [
    { platform: 'Twitter', url: '#' },
    { platform: 'GitHub', url: '#' },
    { platform: 'LinkedIn', url: '#' },
];

export const Default: Story = {
    args: {
        copyrightOwner: 'Marc.Dev',
        socialLinks: MOCK_SOCIAL,
        ctaTitle: "Ready to start your next project?",
        ctaSubtitle: "Let's collaborate and build something amazing together.",
        ctaAction: { label: "Get in Touch", onClick: () => { } },
        ambientBackground: true,
    }
};

export const SimpleWithBlobs: Story = {
    args: {
        copyrightOwner: 'Minimalist Inc.',
        socialLinks: MOCK_SOCIAL,
        ambientBackground: true,
        // No CTA
    }
};
