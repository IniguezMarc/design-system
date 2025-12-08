import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        target: {
            control: 'radio',
            options: ['_self', '_blank'],
            description: 'Link behavior'
        },
        className: { table: { disable: true } },
        variant: { table: { disable: true } },
        onClick: { table: { disable: true } },

    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: 'Button Action',
        href: '',
        target: '_self',
        size: 'medium',
    },
};