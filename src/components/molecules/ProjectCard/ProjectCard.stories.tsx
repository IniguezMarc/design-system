import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

// 1. Definimos los tipos para los controles extra
type ProjectCardStory = React.ComponentProps<typeof ProjectCard> & {
    isDark?: boolean;
};

// 2. Configuración general del componente
const meta: Meta<ProjectCardStory> = {
    title: 'Molecules/ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'], // Genera la página de documentación automática

    // Configuración de los controles (Panel de abajo)
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Simular modo oscuro',
            table: { category: 'Preview Helper' }
        },
        customStyles: {
            control: 'object',
            description: 'Personalizar estilos (Hooks)',
            table: { category: 'Styles' }
        },
        // Desactivamos controles que no aportan valor visual
        className: { table: { disable: true } },
        onViewProject: { table: { disable: true } },
    },

    // Decorador para simular el cambio de tema en tiempo real
    render: ({ isDark, ...args }) => (
        <div className={`
      ${isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
      p-12 w-full flex justify-center items-center min-h-[400px] transition-colors duration-300
    `}>
            <div className="max-w-md w-full">
                <ProjectCard {...args} />
            </div>
        </div>
    ),
};

export default meta;
type Story = StoryObj<ProjectCardStory>;

// 3. LA ÚNICA HISTORIA QUE NECESITAS (Tu "Playground")
export const Playground: Story = {
    args: {
        title: 'Proyecto Estándar',
        description: 'Tarjeta interactiva. Usa los controles abajo para probar el modo oscuro o editar estilos.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        tags: ['React', 'Tailwind'],
        orientation: 'vertical',
        projectUrl: 'https://github.com/IniguezMarc/design-system',
        isDark: false,
        linkTarget: '_self',
        actionLabel: 'Ver Proyecto',

        // Inicializamos vacío para que el usuario vea que puede editarlo
        customStyles: {
            container: '',
            imageWrapper: '',
            content: '',
            title: '',
            description: '',
            tagsContainer: ''
        }
    },
};