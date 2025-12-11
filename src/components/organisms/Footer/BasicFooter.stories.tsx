import type { Meta, StoryObj } from '@storybook/react';
import { BasicFooter } from './BasicFooter';

type BasicFooterStory = React.ComponentProps<typeof BasicFooter> & {
    isDark?: boolean;
};

const meta: Meta<BasicFooterStory> = {
    title: 'Organisms/Footer/BasicFooter',
    component: BasicFooter,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A standardized footer component with copyright information, social links, and secondary navigation.'
            }
        },
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

        // Colors
        backgroundColor: { control: 'text', table: { category: 'Colors' } },
        darkBackgroundColor: { control: 'text', table: { category: 'Colors' } },
        borderColor: { control: 'text', table: { category: 'Colors' } },
        darkBorderColor: { control: 'text', table: { category: 'Colors' } },
        textColor: { control: 'text', table: { category: 'Colors' } },
        darkTextColor: { control: 'text', table: { category: 'Colors' } },
        linksColor: { control: 'text', table: { category: 'Colors' } },
        linksHoverColor: { control: 'text', table: { category: 'Colors' } },
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

export const Playground: Story = {
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
        ],

        backgroundColor: "bg-gray-900",
        darkBackgroundColor: "dark:bg-black",
        borderColor: "border-gray-800",
        darkBorderColor: "dark:border-gray-800",
        textColor: "text-white",
        darkTextColor: "dark:text-white",
        linksColor: "text-gray-400",
        linksHoverColor: "hover:text-white",
    },
};
