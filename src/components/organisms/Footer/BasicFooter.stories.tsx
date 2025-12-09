import type { Meta, StoryObj } from '@storybook/react';
import { BasicFooter } from './BasicFooter';

type BasicFooterStory = React.ComponentProps<typeof BasicFooter> & {
    isDark?: boolean;
};

const meta: Meta<BasicFooterStory> = {
    title: 'Organisms/Footer/BasicFooter',
    component: BasicFooter,
    tags: [], // Hidden docs
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
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-gray-50'} 
                min-h-[200px] flex flex-col justify-end transition-colors duration-300
            `}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<BasicFooterStory>;

export const Default: Story = {
    args: {
        copyrightOwner: 'Marc Iñiguez',
        copyrightText: '© 2025 All rights reserved.',
        isDark: false,
        customStyles: { container: '', text: '', link: '' },
        socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/IniguezMarc' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'Twitter', url: 'https://twitter.com' },
        ],
        secondaryLinks: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
        ]
    },
};
