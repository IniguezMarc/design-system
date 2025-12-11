import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicInput } from './BasicInput';
import { fn } from '@storybook/test';

type InputStory = React.ComponentProps<typeof BasicInput> & { isDark?: boolean };

const meta: Meta<InputStory> = {
    title: 'Atoms/Input/BasicInput',
    component: BasicInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A highly customizable input field with generic slots for icons, labels, and error messages.'
            }
        },
    },
    // ... rest of config
    decorators: [
        (Story, context) => (
            <div className={`
                ${context.args.isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
                p-12 min-w-[400px] flex justify-center items-center rounded-xl transition-colors duration-300
            `}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text',
            table: { category: 'Content' }
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
            table: { category: 'Content' }
        },
        error: {
            control: 'text',
            description: 'Error message',
            table: { category: 'Validation' }
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number'],
            table: { category: 'Attributes' }
        },
        disabled: {
            control: 'boolean',
            table: { category: 'Attributes' }
        },
        isDark: {
            control: 'boolean',
            description: 'Toggles dark mode',
            table: { category: 'Controls' },
        },
        startIcon: { table: { disable: true } },
        endIcon: { table: { disable: true } },
        customStyles: {
            control: 'object',
            description: 'Custom styles for slots',
            table: { category: 'Styles' }
        },
        className: {
            control: 'text',
            description: 'Add custom animation or utility classes',
            table: { category: 'Animation', type: { summary: 'string' } }
        },

        // Label Colors
        labelColor: { control: 'text', description: 'Label text color', table: { category: 'Label Colors' } },
        darkLabelColor: { control: 'text', description: 'Dark label text color', table: { category: 'Label Colors' } },

        // Input Colors
        inputBgColor: { control: 'text', description: 'Input background color', table: { category: 'Input Colors' } },
        darkInputBgColor: { control: 'text', description: 'Dark input background color', table: { category: 'Input Colors' } },
        inputBorderColor: { control: 'text', description: 'Input border color', table: { category: 'Input Colors' } },
        darkInputBorderColor: { control: 'text', description: 'Dark input border color', table: { category: 'Input Colors' } },
        inputTextColor: { control: 'text', description: 'Input text color', table: { category: 'Input Colors' } },
        darkInputTextColor: { control: 'text', description: 'Dark input text color', table: { category: 'Input Colors' } },
        focusRingColor: { control: 'text', description: 'Focus ring color', table: { category: 'Input Colors' } },

        // Validation Colors
        errorBorderColor: { control: 'text', description: 'Error border color', table: { category: 'Validation Colors' } },
        darkErrorBorderColor: { control: 'text', description: 'Dark error border color', table: { category: 'Validation Colors' } },
        errorTextColor: { control: 'text', description: 'Error text color', table: { category: 'Validation Colors' } },
        darkErrorTextColor: { control: 'text', description: 'Dark error text color', table: { category: 'Validation Colors' } },
    },
};

export default meta;
type Story = StoryObj<InputStory>;

export const Playground: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'example@domain.com',
        type: 'text',
        error: '',
        disabled: false,
        isDark: false,
        className: '',
        customStyles: { container: '', label: '', input: '', error: '', iconContainer: '' },
        onChange: fn(),
        onFocus: fn(),
        onBlur: fn(),

        // Default Colors
        labelColor: "text-gray-700",
        darkLabelColor: "dark:text-gray-200",

        inputBgColor: "bg-white",
        darkInputBgColor: "dark:bg-gray-800",

        inputBorderColor: "border-gray-300",
        darkInputBorderColor: "dark:border-gray-600",

        inputTextColor: "text-gray-900",
        darkInputTextColor: "dark:text-white",

        focusRingColor: "focus:ring-blue-500",

        errorBorderColor: "border-red-500",
        darkErrorBorderColor: "dark:border-red-500",

        errorTextColor: "text-red-500",
        darkErrorTextColor: "dark:text-red-400",
    },
};
