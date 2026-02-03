import type { Meta, StoryObj } from '@storybook/react';
import { Typewriter } from './Typewriter';

const meta: Meta<typeof Typewriter> = {
    title: 'Effects/Typewriter',
    component: Typewriter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        speed: { control: { type: 'range', min: 10, max: 200, step: 10 } },
        as: { control: 'select', options: ['h1', 'h2', 'span', 'p'] },
    },
};

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Default: Story = {
    args: {
        text: 'Hello, I am a typewriter effect.',
        speed: 50,
    },
};

export const SlowTyping: Story = {
    args: {
        text: 'This demonstrates a slower typing speed...',
        speed: 150,
    },
};

export const DifferentElement: Story = {
    args: {
        as: 'h1',
        text: 'I am a Heading 1',
        className: 'text-4xl font-bold text-primary',
    },
};
