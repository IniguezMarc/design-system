import type { Meta, StoryObj } from '@storybook/react';
import { BasicTimeline } from './BasicTimeline';

const meta: Meta<typeof BasicTimeline> = {
    title: 'Molecules/Timeline',
    component: BasicTimeline,
    tags: ['autodocs'],
    argTypes: {
        layout: {
            control: { type: 'select' },
            options: ['left', 'center'],
            description: 'Layout alignment of the timeline'
        },
        lineColor: { control: 'text' },
        dotColor: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof BasicTimeline>;

const MOCK_ITEMS = [
    {
        id: '1',
        date: '2023 - Present',
        title: 'Senior Frontend Engineer',
        subtitle: 'Tech Corp Inc.',
        description: 'Leading the design system team and migrating legacy apps to Next.js.',
        tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
        id: '2',
        date: '2021 - 2023',
        title: 'Frontend Developer',
        subtitle: 'StartupX',
        description: 'Developed the core product interface and improved performance by 40%.',
        tags: ['Vue', 'D3.js']
    },
    {
        id: '3',
        date: '2019 - 2021',
        title: 'Junior Web Developer',
        subtitle: 'Creative Agency',
        description: 'Built animations and interactive sites for A-list clients.',
        tags: ['GSAP', 'WordPress']
    }
];

export const Default: Story = {
    args: {
        items: MOCK_ITEMS,
        layout: 'left'
    }
};

export const Centered: Story = {
    args: {
        items: MOCK_ITEMS,
        layout: 'center'
    }
};

export const CustomColors: Story = {
    args: {
        items: MOCK_ITEMS,
        layout: 'center',
        lineColor: 'bg-purple-500',
        dotColor: 'bg-pink-500',
        cardBackgroundColor: 'bg-purple-50',
        darkCardBackgroundColor: 'dark:bg-purple-900/20',
        textColor: 'text-purple-900',
        darkTextColor: 'dark:text-purple-100'
    }
};
