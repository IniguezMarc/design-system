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

export const Default: Story = {
    args: {
        title: 'Sobre mí',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
        bio: `Hola, soy Marc. Llevo desarrollando software con pasión desde hace varios años.
    
    Me especializo en el ecosistema JavaScript/TypeScript, creando aplicaciones que no solo funcionan bien, sino que se sienten bien al usarlas.`,
        skillsTitle: 'Mi Stack Técnico',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Storybook', 'Git'],

        customStyles: {
            container: '',
            title: '',
            bio: ''
        }
    },
};