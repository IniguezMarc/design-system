import type { Meta, StoryObj } from '@storybook/react';
import { CreativeTimeline } from './CreativeTimeline';

const meta: Meta<typeof CreativeTimeline> = {
    title: 'Molecules/Timeline/CreativeTimeline',
    component: CreativeTimeline,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        lineColor: { control: 'color' },
        dotColor: { control: 'color' },
        cardBackgroundColor: { control: 'color' },
        titleColor: { control: 'color' },
        subtitleColor: { control: 'color' },
        dateColor: { control: 'color' },
        descColor: { control: 'color' },
        tagBgColor: { control: 'color' },
        tagTextColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof CreativeTimeline>;

export const Default: Story = {
    args: {
        title: "My Journey",
        subtitle: "A timeline of events",
        items: [
            {
                id: '1',
                date: '2024',
                title: 'Senior Engineer',
                subtitle: 'Tech Corp',
                description: 'Leading frontend architecture.',
                tags: ['React', 'Architecture']
            },
            {
                id: '2',
                date: '2022',
                title: 'Full Stack Dev',
                subtitle: 'Startup Inc',
                description: 'Building MVP products.',
                tags: ['Node', 'Vue']
            }
        ]
    }
};
