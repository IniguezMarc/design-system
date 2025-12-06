import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
    title: 'Organisms/Hero',
    component: Hero,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

// CASO 1: Un solo botón (Call to Action claro)
export const SingleAction: Story = {
    args: {
        greeting: 'Freelance Developer',
        title: 'Impulsa tu negocio online',
        subtitle: 'Creo webs que convierten visitas en clientes.',
        actions: [
            { label: 'Solicitar Presupuesto', onClick: () => { }, variant: 'primary' }
        ]
    },
};

// CASO 2: Dos botones (El clásico)
export const DualAction: Story = {
    args: {
        greeting: 'Marc.Dev',
        title: 'Arquitectura Frontend',
        subtitle: 'Especialista en React y Sistemas de Diseño.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        actions: [
            { label: 'Ver Proyectos', onClick: () => { }, variant: 'primary' },
            { label: 'Descargar CV', onClick: () => { }, variant: 'secondary' }
        ]
    },
};