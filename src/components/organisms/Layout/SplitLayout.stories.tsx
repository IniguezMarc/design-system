import type { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './SplitLayout';

const meta: Meta<typeof SplitLayout> = {
    title: 'Organisms/Layout/SplitLayout',
    component: SplitLayout,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        initialLeftWidth: {
            control: { type: 'range', min: 0, max: 100 },
        },
        minWidth: {
            control: { type: 'range', min: 0, max: 50 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const MockContent = ({ title, bg }: { title: string; bg: string }) => (
    <div className={`h-full w-full p-8 ${bg} prose dark:prose-invert`}>
        <h2>{title}</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
);

export const Default: Story = {
    args: {
        leftContent: <MockContent title="Theory Section" bg="bg-white dark:bg-gray-800" />,
        rightContent: <MockContent title="Visualizer Section" bg="bg-gray-50 dark:bg-gray-900" />,
        initialLeftWidth: 30,
    },
    decorators: [
        (Story) => (
            <div className="h-[500px] w-full border border-gray-200 dark:border-gray-700">
                <Story />
            </div>
        ),
    ],
};

export const CustomRatio: Story = {
    args: {
        ...Default.args,
        initialLeftWidth: 50,
    },
    decorators: Default.decorators,
};
