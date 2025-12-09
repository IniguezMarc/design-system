import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BasicThemeToggle } from './BasicThemeToggle';

const meta: Meta<typeof BasicThemeToggle> = {
    title: 'Atoms/ThemeToggle/BasicThemeToggle',
    component: BasicThemeToggle,
    tags: [],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
        },
    },
    argTypes: {
        isDark: {
            control: 'boolean',
            description: 'Current theme state',
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
        customStyles: {
            control: 'object',
            description: 'Custom implementation styles',
            table: { category: 'Styles' }
        },
        onToggle: { table: { disable: true } },
    },
    decorators: [
        (Story, context) => (
            <div className={`p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 ${context.args.isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isDark: false,
        onToggle: fn(),
        imageFit: 'contain',
        customStyles: {
            container: '',
            icon: ''
        }
    },
};



export const CustomLook: Story = {
    args: {
        ...Default.args,
        isDark: true,
        customStyles: {
            container: '!rounded-lg !p-4 !bg-purple-100 dark:!bg-purple-900 !text-purple-600 dark:!text-purple-300',
            icon: '!w-8 !h-8'
        }
    }
};
