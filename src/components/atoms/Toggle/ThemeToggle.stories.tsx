import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Atoms/Toggle/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'The smart container for the theme toggle. It handles system preference detection and local storage persistence. Use the `isDark` control in Storybook to override the internal state for visual testing, otherwise it defaults to the system/local storage state.'
            }
        }
    },
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Override internal state (for testing)',
            table: { category: 'State' }
        },
        sunImage: { control: 'text', description: 'Sun Image URL' },
        moonImage: { control: 'text', description: 'Moon Image URL' },
        imageFit: {
            control: 'radio',
            options: ['cover', 'contain'],
            description: 'Image Fit'
        },
        iconSun: { control: 'text' },
        iconMoon: { control: 'text' },
        customStyles: { control: 'object', table: { category: 'Styles' } },
    },
    decorators: [
        (Story, context) => (
            <div className={`p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 bg-white dark:bg-gray-900 ${context.args.isDark ? 'dark' : ''}`}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    // tags: ['!autodocs'], // Removed to allow docs
    args: {
        // We leave isDark undefined so it uses internal state by default, 
        // but user can toggle it in controls to "force" a state.
        isDark: undefined,
        imageFit: 'contain',
        customStyles: {
            container: '',
            icon: ''
        }
    },
};
