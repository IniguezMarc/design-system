import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        // 👇 AQUÍ ESTÁ LA CLAVE: Creamos un selector con imágenes de prueba
        src: {
            control: 'select',
            options: ['Usuario (Cuadrado)', 'Logo (Rectangular)', 'Paisaje (Ancho)', 'Placeholder (Base64)'],
            mapping: {
                'Usuario (Cuadrado)': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80',
                'Logo (Rectangular)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                'Paisaje (Ancho)': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
                'Placeholder (Base64)': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzk5OTk5OSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguNjg1IDE5LjA5N0E5LjcyMyA5LjcyMyAwIDAwMjEuNzUgMTJjMC01LjM4NS00LjM2NS05Ljc1LTkuNzUtOS43NVMyLjI1IDYuNjE1IDIuMjUgMTJhOS43MjMgOS43MjMgMCAwMDMuMDY1IDcuMDk3QTkuNzE2IDkuNzE2IDAgMDAxMiAyMS43NWE5LjcxNiA5LjcxNiAwIDAwNi42ODUtMi42NTN6bS0xMi41NC0xLjI4NUE3LjQ4NiA3LjQ4NiAwIDAxMTIgMTVhNy40ODYgNy40ODYgMCAwMTUuODU1IDIuODEyQTguMjI0IDguMjI0IDAgMDExMiAyMC4yNWE4LjIyNCA4LjIyNCAwIDAxLTUuODU1LTIuNDM4ek0xNS43NSA5YTMuNzUgMy43NSAwIDExLTcuNSAwIDMuNzUgMy43NSAwIDAxNy41IDB6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+'
            },
            description: 'Selecciona una imagen para probar el ajuste'
        },
        // El control para probar el ajuste
        imageFit: {
            control: 'radio',
            options: ['cover', 'contain'],
            description: 'Cómo se ajusta la imagen al círculo'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        customStyles: { control: 'object', table: { category: 'Styles' } },
        className: { table: { disable: true } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia Playground para probarlo todo
export const Playground: Story = {
    args: {
        src: 'Usuario (Cuadrado)', // Valor por defecto del selector
        alt: 'Avatar de prueba',
        size: 'xl',
        imageFit: 'cover',
        customStyles: { container: '', image: '' }
    },
};