import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
    title: 'Organisms/Hero',
    component: Hero,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    argTypes: {
        customStyles: { control: 'object', table: { category: 'Styles' } },
        actions: { control: 'object' },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        greeting: 'Marc.Dev',
        title: 'Arquitectura Frontend',
        subtitle: 'Creo soluciones digitales sólidas.',
        actions: [{ label: 'Ver más', onClick: () => { }, variant: 'primary' }],
        customStyles: {
            container: '',
            content: '',
            title: '',
            subtitle: '',
            imageWrapper: ''
        }
    },
};