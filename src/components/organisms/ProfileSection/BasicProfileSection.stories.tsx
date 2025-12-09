import type { Meta, StoryObj } from '@storybook/react';
import { BasicProfileSection } from './BasicProfileSection';

type BasicProfileSectionStory = React.ComponentProps<typeof BasicProfileSection> & {
    isDark?: boolean;
};

const meta: Meta<BasicProfileSectionStory> = {
    title: 'Organisms/ProfileSection/BasicProfileSection',
    component: BasicProfileSection,
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

export const Default: Story = {
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
        }
    },
};
