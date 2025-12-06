import type { Meta, StoryObj } from '@storybook/react';
import { ContentGrid } from './ContentGrid'; // Importamos el nuevo nombre

const meta: Meta<typeof ContentGrid> = {
    title: 'Organisms/ContentGrid',
    component: ContentGrid,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const itemsMock = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Un panel de administración completo.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'ChartJS'],
    },
    {
        id: '2',
        title: 'App de Gestión',
        description: 'Aplicación estilo Trello.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['TypeScript', 'Redux'],
    },
    {
        id: '3',
        title: 'Landing Page',
        description: 'Sitio web estático rápido.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
    },
];

// Esta es la vista "estándar" horizontal
export const GridView: Story = {
    args: {
        title: 'Proyectos Destacados',
        items: itemsMock,
        layout: 'grid', // Ahora TypeScript ya reconocerá esta propiedad ✅
    },
};