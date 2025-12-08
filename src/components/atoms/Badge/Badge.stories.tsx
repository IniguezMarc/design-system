import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        className: { table: { disable: true } },
        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: 'Technology',
        variant: 'primary',
        customStyles: { container: '' }
    },
};