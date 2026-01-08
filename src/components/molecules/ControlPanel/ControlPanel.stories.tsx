import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ControlPanel } from './ControlPanel';
import { Button } from '../../atoms/Button/Button';
import { Slider } from '../../atoms/Slider/Slider';

const meta: Meta<typeof ControlPanel> = {
    title: 'Molecules/ControlPanel',
    component: ControlPanel,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        actions: { control: false },
        children: { control: false },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ControlPanelWithSlider = (args: any) => {
    const [speed, setSpeed] = useState(50);
    return (
        <ControlPanel
            {...args}
            children={
                <div className="flex flex-col gap-4">
                    <Slider
                        label="Speed"
                        value={speed}
                        onChange={setSpeed}
                    />
                    <div className="flex gap-2">
                        <Button variant="primary" label="Visualize" />
                        <Button variant="secondary" label="Reset" />
                    </div>
                </div>
            }
        />
    );
};

export const Default: Story = {
    render: (args) => <ControlPanelWithSlider {...args} />,
    args: {
        title: 'Algorithm Controls',
    },
};

export const WithActions: Story = {
    args: {
        title: 'Grid Settings',
        actions: (
            <Button variant="ghost" size="small" label="Clear Board" onClick={() => { }} />
        ),
        children: (
            <div className="text-gray-600 dark:text-gray-300 text-sm">
                Control panel content goes here...
            </div>
        ),
    },
};

export const Simple: Story = {
    args: {
        children: <div className="text-center text-gray-500">Just content, no header</div>,
    },
};
