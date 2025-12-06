import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
    title: 'Molecules/ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Mi Portfolio Personal',
        description: 'Una librería de componentes moderna construida con React, TypeScript y Tailwind CSS para exponer mis proyectos profesionales.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    },
};

export const NoTags: Story = {
    args: {
        title: 'Landing Page Simple',
        description: 'Un proyecto de prueba sin etiquetas tecnológicas para ver cómo se comporta el diseño.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
        tags: [],
    },
};