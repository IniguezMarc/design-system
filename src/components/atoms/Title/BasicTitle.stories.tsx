
import type { Meta, StoryObj } from '@storybook/react';
import { BasicTitle } from './BasicTitle';

type TitleStory = React.ComponentProps<typeof BasicTitle> & {
    isDark?: boolean;
};

const meta: Meta<TitleStory> = {
    title: 'Atoms/Title/BasicTitle',
    component: BasicTitle,
    tags: ['autodocs'],
    parameters: {
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
            description: {
                component: 'A typography component for section headings. Supports different levels (h1-h6) and alignments.'
            }
        },
    },
    argTypes: {
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
            description: 'Semantic HTML tag',
            table: { category: 'Properties' }
        },
        align: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            table: { category: 'Properties' }
        },
        // Colors
        textColor: { control: 'text', table: { category: 'Colors' } },
        darkTextColor: { control: 'text', table: { category: 'Colors' } },

        // Styles
        customStyles: { control: 'object', table: { category: 'Styles' } },

        // Helper
        isDark: {
            control: 'boolean',
            description: 'Simulate dark mode container',
            table: { category: 'Preview Helper' }
        }
    },
    decorators: [
        (Story, context) => (
            <div className={`
                p-8 transition-colors duration-300
                ${context.args.isDark ? 'dark bg-gray-900' : 'bg-white'}
            `}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<TitleStory>;

export const Playground: Story = {
    args: {
        label: 'Section Title',
        as: 'h2',
        align: 'left',
        textColor: 'text-gray-900',
        darkTextColor: 'dark:text-white',
        isDark: false,
    }
};
