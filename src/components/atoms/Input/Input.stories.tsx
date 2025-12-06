import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    decorators: [(Story) => <div className="max-w-sm"><Story /></div>]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Escribe algo...' } };
export const WithLabel: Story = { args: { label: 'Correo Electrónico', placeholder: 'ejemplo@gmail.com', type: 'email' } };
export const WithError: Story = { args: { label: 'Usuario', value: 'Marc', error: 'Este usuario ya existe' } };