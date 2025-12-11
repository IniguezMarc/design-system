import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BasicToggle } from './BasicToggle';

const meta: Meta<typeof BasicToggle> = {
    title: 'Atoms/Toggle/BasicToggle',
    component: BasicToggle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'The fundamental switching component. Use it to toggle between two states (On/Off).'
            }
        },
    },
    argTypes: {
        isToggled: {
            control: 'boolean',
            description: 'Current toggle state',
            table: { category: 'State' }
        },
        imageOn: { control: 'text', description: 'Image when Toggled ON' },
        imageOff: { control: 'text', description: 'Image when Toggled OFF' },
        imageFit: {
            control: 'radio',
            options: ['cover', 'contain'],
            description: 'Image Fit'
        },
        iconOn: { control: 'text' },
        iconOff: { control: 'text' },
        customStyles: {
            control: 'object',
            description: 'Custom implementation styles',
            table: { category: 'Styles' }
        },
        onToggle: { table: { disable: true } },
    },
    decorators: [
        (Story, context) => (
            <div className={`p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 bg-white`}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        isToggled: false,
        onToggle: fn(),
        imageFit: 'contain',
        customStyles: {
            container: '',
            icon: ''
        },
        iconOn: <span>ON</span>,
        iconOff: <span>OFF</span>
    },
};
