import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type InputStory = React.ComponentProps<typeof Input> & { isDark?: boolean };

const meta: Meta<InputStory> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
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
        customStyles: {
            control: 'object',
            description: 'Custom styles for slots',
            table: { category: 'Styles' }
        },
        className: { table: { disable: true } },

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
    render: ({ isDark, ...args }) => (
        <div className={`
      ${isDark ? 'dark bg-gray-950' : 'bg-gray-100'} 
      p-12 min-w-[400px] flex justify-center items-center rounded-xl transition-colors duration-300
    `}>
            <Input {...args} />
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'example@domain.com',
        type: 'text',
        error: '',
        disabled: false,
        isDark: false,
        customStyles: { container: '', label: '', input: '', error: '' },

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