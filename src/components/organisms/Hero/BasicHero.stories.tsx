import type { Meta, StoryObj } from '@storybook/react';
import { BasicHero } from './BasicHero';

type BasicHeroStory = React.ComponentProps<typeof BasicHero> & {
    isDark?: boolean;
};

const meta: Meta<BasicHeroStory> = {
    title: 'Organisms/Hero/BasicHero',
    component: BasicHero,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A versatile hero section with title, subtitle, call-to-action, and optional image.'
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
        actions: { control: 'object' },

        // Colors
        backgroundColor: { control: 'text', table: { category: 'Colors' } },
        darkBackgroundColor: { control: 'text', table: { category: 'Colors' } },
        greetingColor: { control: 'text', table: { category: 'Colors' } },
        darkGreetingColor: { control: 'text', table: { category: 'Colors' } },
        titleColor: { control: 'text', table: { category: 'Colors' } },
        darkTitleColor: { control: 'text', table: { category: 'Colors' } },
        subtitleColor: { control: 'text', table: { category: 'Colors' } },
        darkSubtitleColor: { control: 'text', table: { category: 'Colors' } },
    },
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-gray-50'} 
                min-h-screen transition-colors duration-300
            `}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<BasicHeroStory>;

export const Playground: Story = {
    args: {
        greeting: 'Marc.Dev',
        title: 'Frontend Architecture',
        subtitle: 'I create solid digital solutions.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        actions: [{ label: 'View More', onClick: () => { }, variant: 'primary' }],
        isDark: false,
        customStyles: {
            container: '',
            content: '',
            title: '',
            subtitle: '',
            imageWrapper: ''
        },

        // Default Colors
        backgroundColor: "bg-white",
        darkBackgroundColor: "dark:bg-gray-900",
        greetingColor: "text-blue-600",
        darkGreetingColor: "dark:text-blue-400",
        titleColor: "text-gray-900",
        darkTitleColor: "dark:text-white",
        subtitleColor: "text-gray-500",
        darkSubtitleColor: "dark:text-gray-400",
    },
};
