import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSection } from './ProfileSection';

const meta: Meta<typeof ProfileSection> = {
    title: 'Organisms/ProfileSection',
    component: ProfileSection,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        title: 'About Me',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
        bio: `Hi, I'm Marc. I've been passionately developing software for several years.
    
    I specialize in the JavaScript/TypeScript ecosystem, building applications that not only work well, but feel good to use.`,
        skillsTitle: 'My Tech Stack',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Storybook', 'Git'],

        customStyles: {
            container: '',
            title: '',
            bio: ''
        }
    },
};