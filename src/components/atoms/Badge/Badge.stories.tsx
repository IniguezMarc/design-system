import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { label: 'React', variant: 'primary' } };
export const Success: Story = { args: { label: 'Completed', variant: 'success' } };
export const Outline: Story = { args: { label: 'Design', variant: 'outline' } };