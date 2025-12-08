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

export const Playground: Story = {
    args: {
        greeting: 'Marc.Dev',
        title: 'Frontend Architecture',
        subtitle: 'I create solid digital solutions.',
        actions: [{ label: 'View More', onClick: () => { }, variant: 'primary' }],
        customStyles: {
            container: '',
            content: '',
            title: '',
            subtitle: '',
            imageWrapper: ''
        }
    },
};