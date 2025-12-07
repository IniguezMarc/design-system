import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Atoms/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        sunImage: { control: 'text', description: 'URL imagen Sol' },
        moonImage: { control: 'text', description: 'URL imagen Luna' },
        imageFit: {
            control: 'radio',
            options: ['cover', 'contain'],
            description: 'Ajuste de imagen'
        },
        iconSun: { control: 'text' },
        iconMoon: { control: 'text' },

        // 👇 Configuración del objeto de estilos
        customStyles: { control: 'object', table: { category: 'Styles' } },
        className: { table: { disable: true } },
    },
    decorators: [
        (Story) => (
            <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        iconSun: undefined,
        iconMoon: undefined,
        imageFit: 'contain',

        // 👇 Inicializamos vacío para que sea editable
        customStyles: {
            container: '',
            icon: ''
        }
    },
};

// Ejemplo: Botón Cuadrado Grande con estilos inyectados
export const CustomLook: Story = {
    args: {
        ...Playground.args,
        customStyles: {
            container: '!rounded-lg !p-4 !bg-purple-100 dark:!bg-purple-900 !text-purple-600 dark:!text-purple-300',
            icon: '!w-8 !h-8'
        }
    }
};