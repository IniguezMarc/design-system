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

export const Playground: Story = { args: { placeholder: 'Type something...' }, tags: ['!autodocs'] };
export const WithLabel: Story = { args: { label: 'Email Address', placeholder: 'example@gmail.com', type: 'email' } };
export const WithError: Story = { args: { label: 'Username', value: 'Marc', error: 'This username already exists' } };