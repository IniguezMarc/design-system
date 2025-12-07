import type { Meta, StoryObj } from '@storybook/react';
import { ContentGrid } from './ContentGrid';

const meta: Meta<typeof ContentGrid> = {
    title: 'Organisms/ContentGrid',
    component: ContentGrid,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        // 👇 ESTO LO HACE FUNCIONAL: Registra el clic en el panel "Actions"
        onItemClick: { table: { disable: true } },

        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Data
const MOCK_ITEMS = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Panel de administración completo con métricas.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'ChartJS'],
        // Nota: Sin URL para probar el onItemClick
    },
    {
        id: '2',
        title: 'App de Gestión',
        description: 'Aplicación estilo Kanban.',
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

export const Default: Story = {
    args: {
        title: 'Mis Proyectos',
        items: MOCK_ITEMS,
        layout: 'grid',
        itemButtonLabel: 'Ver Detalles',

        // Inicializamos los hooks vacíos para editar en la tabla
        customStyles: {
            container: '',
            title: ''
        }
    },
};