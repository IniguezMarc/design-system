import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        // 👇 Ocultamos lo que no queremos ver
        className: { table: { disable: true } },
        // Configuramos el objeto bonito
        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Technology',
        variant: 'primary',
        // 👇 Inicializamos para que salga editable
        customStyles: { container: '' }
    },
};