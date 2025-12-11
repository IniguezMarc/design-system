import type { Meta, StoryObj } from '@storybook/react';
import { BasicProfileSection } from './BasicProfileSection';

type BasicProfileSectionStory = React.ComponentProps<typeof BasicProfileSection> & {
    isDark?: boolean;
};

const meta: Meta<BasicProfileSectionStory> = {
    title: 'Organisms/ProfileSection/BasicProfileSection',
    component: BasicProfileSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A personal profile section featuring an avatar, bio, and skills list, typically used in "About Me" pages.'
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
        titleColor: { control: 'text', table: { category: 'Colors' } },
        darkTitleColor: { control: 'text', table: { category: 'Colors' } },
        textColor: { control: 'text', table: { category: 'Colors' } },
        darkTextColor: { control: 'text', table: { category: 'Colors' } },
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
type Story = StoryObj<BasicProfileSectionStory>;

export const Playground: Story = {
    args: {
        title: 'About Me',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
        bio: `Hi, I'm Marc. I've been passionately developing software for several years.
    
    I specialize in the JavaScript/TypeScript ecosystem, building applications that not only work well, but feel good to use.`,
        skillsTitle: 'My Tech Stack',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Storybook', 'Git'],
        isDark: false,
        customStyles: {
            container: '',
            title: '',
            bio: ''
        },

        backgroundColor: "bg-white",
        darkBackgroundColor: "dark:bg-gray-900",
        borderColor: "border-gray-100",
        darkBorderColor: "dark:border-gray-800",
        titleColor: "text-gray-900",
        darkTitleColor: "dark:text-white",
        textColor: "text-gray-600",
        darkTextColor: "dark:text-gray-300",
    },
};
