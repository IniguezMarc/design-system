import type { Meta, StoryObj } from '@storybook/react';
import { BasicHero } from './BasicHero';

type BasicHeroStory = React.ComponentProps<typeof BasicHero> & {
    isDark?: boolean;
};

const meta: Meta<BasicHeroStory> = {
    title: 'Organisms/Hero/BasicHero',
    component: BasicHero,
    tags: [], // Hidden docs per standard
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
        actions: { control: 'object' },
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

export const Default: Story = {
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
        }
    },
};

export const Centered: Story = {
    args: {
        ...Default.args,
        imageUrl: undefined,
        subtitle: 'A clean hero section without an image, perfect for simple landing pages or introductions.',
    }
};
