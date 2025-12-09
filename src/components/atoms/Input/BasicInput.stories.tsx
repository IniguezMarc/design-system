import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicInput } from './BasicInput';
import { fn } from '@storybook/test';

type InputStory = React.ComponentProps<typeof BasicInput> & { isDark?: boolean };

const meta: Meta<InputStory> = {
    title: 'Atoms/Input/BasicInput',
    component: BasicInput,
    // tags: ['autodocs'], // Disabled per user request
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
        },
    },
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
    tags: ['!autodocs'],
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

export const WithIcon: Story = {
    args: {
        ...Playground.args,
        label: 'Search',
        placeholder: 'Search for items...',
        startIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
        )
    }
};
