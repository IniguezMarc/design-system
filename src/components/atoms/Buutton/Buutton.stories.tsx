import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Configuración principal del componente en Storybook
const meta: Meta<typeof Button> = {
    title: 'Atoms/Button', // Dónde aparecerá en el menú
    component: Button,
    tags: ['autodocs'], // Genera documentación automática
    argTypes: {
        variant: {
            control: { type: 'select' }, // Nos deja seleccionar variante en un desplegable
        },
        size: {
            control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia 1: Botón Primario
export const Primary: Story = {
    args: {
        label: 'Button Primary',
        variant: 'primary',
        size: 'medium',
    },
};

// Historia 2: Botón Secundario
export const Secondary: Story = {
    args: {
        label: 'Button Secondary',
        variant: 'secondary',
    },
};

// Historia 3: Botón Grande
export const Large: Story = {
    args: {
        label: 'Click Me!',
        size: 'large',
    },
};