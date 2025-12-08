import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'Organisms/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        copyrightOwner: 'Marc Iñiguez',
        copyrightText: '© 2025 All rights reserved.',
        customStyles: { container: '', text: '', link: '' },
        socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/IniguezMarc' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'Twitter', url: 'https://twitter.com' },
        ],
    },
};