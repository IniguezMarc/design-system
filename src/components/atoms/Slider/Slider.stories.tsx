import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
    title: 'Atoms/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
        min: { control: 'number' },
        max: { control: 'number' },
        step: { control: 'number' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to handle state in stories
const SliderWrapper = (args: any) => {
    const [val, setVal] = useState(args.value || 50);
    return <Slider {...args} value={val} onChange={setVal} />;
};

export const Default: Story = {
    render: (args) => <SliderWrapper {...args} />,
    args: {
        label: 'Volume',
        min: 0,
        max: 100,
        value: 50,
    },
};

export const SpeedControl: Story = {
    render: (args) => <SliderWrapper {...args} />,
    args: {
        label: 'Animation Speed (ms)',
        min: 10,
        max: 1000,
        step: 10,
        value: 100,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        value: 75,
        disabled: true,
        onChange: () => { },
    },
};
