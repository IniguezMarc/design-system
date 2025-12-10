
import type { Meta, StoryObj } from '@storybook/react';
import { BasicTitle } from './BasicTitle';

type TitleStory = React.ComponentProps<typeof BasicTitle> & {
    isDark?: boolean;
};

const meta: Meta<TitleStory> = {
    title: 'Atoms/Title/BasicTitle',
    component: BasicTitle,
    tags: [],
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

export const Default: Story = {
    tags: ['!autodocs'],
    args: {
        label: 'Section Title',
        as: 'h2',
        align: 'left',
        textColor: 'text-gray-900',
        darkTextColor: 'dark:text-white',
        isDark: false,
    }
};

export const Centered: Story = {
    args: {
        ...Default.args,
        label: 'Centered Heading',
        align: 'center',
    }
};

export const LargeHeading: Story = {
    args: {
        ...Default.args,
        label: 'Big Impact Title',
        as: 'h1',
    }
};
