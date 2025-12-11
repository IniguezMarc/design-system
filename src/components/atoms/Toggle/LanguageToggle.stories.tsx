import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LanguageToggle } from './LanguageToggle';

const meta: Meta<typeof LanguageToggle> = {
    title: 'Atoms/Toggle/LanguageToggle',
    component: LanguageToggle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'An example of using `BasicToggle` to create a language switcher. Maps boolean state to "en"/"es".'
            }
        }
    },
    argTypes: {
        initialLanguage: {
            control: 'radio',
            options: ['en', 'es'],
            description: 'Initial language state'
        },
        onLanguageChange: { table: { disable: true } },
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
        // English Colors
        englishColor: { control: 'text', table: { category: 'English State' } },
        englishBorderColor: { control: 'text', table: { category: 'English State' } },
        englishTextColor: { control: 'text', table: { category: 'English State' } },

        // Spanish Colors
        spanishColor: { control: 'text', table: { category: 'Spanish State' } },
        spanishBorderColor: { control: 'text', table: { category: 'Spanish State' } },
        spanishTextColor: { control: 'text', table: { category: 'Spanish State' } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        initialLanguage: 'en',
        onLanguageChange: fn(),
        customStyles: { container: '', icon: '' },
        className: '',

        englishColor: 'bg-blue-100 hover:bg-blue-200',
        englishBorderColor: 'border-2 border-blue-500',
        englishTextColor: 'text-blue-900',

        spanishColor: 'bg-red-100 hover:bg-red-200',
        spanishBorderColor: 'border-2 border-red-500',
        spanishTextColor: 'text-red-900',
    },
};
