import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveGrid, type InteractiveGridProps } from './InteractiveGrid';
import { useState } from 'react';

const meta: Meta<typeof InteractiveGrid> = {
    title: 'Organisms/Grid/InteractiveGrid',
    component: InteractiveGrid,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        rows: { control: { type: 'number', min: 5, max: 50 } },
        cols: { control: { type: 'number', min: 5, max: 50 } },
        gap: { control: { type: 'number', min: 0, max: 10 } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive State Wrapper for the Story
const GridWrapper = (args: any) => {
    const [grid, setGrid] = useState<number[][]>(
        Array(args.rows).fill(null).map(() => Array(args.cols).fill(0))
    );

    const handleInteract = (r: number, c: number) => {
        const newGrid = [...grid];
        newGrid[r] = [...newGrid[r]];
        newGrid[r][c] = newGrid[r][c] === 1 ? 0 : 1; // Toggle state
        setGrid(newGrid);
    };

    return (
        <div className="h-[400px] w-[600px] border border-gray-300">
            <InteractiveGrid
                {...args}
                renderCell={(r, c) => (
                    <div
                        className={`w-full h-full transition-colors duration-100 ${grid[r]?.[c] === 1 ? 'bg-blue-500' : 'bg-white'
                            }`}
                    />
                )}
                onCellClick={handleInteract}
                onCellMouseEnter={handleInteract} // Enable drag-to-paint
            />
        </div>
    );
};

export const Playground: Story = {
    args: {
        rows: 20,
        cols: 30,
        gap: 1,
    },
    render: (args) => <GridWrapper {...args} />,
};

export const Checkerboard: Story = {
    args: {
        rows: 10,
        cols: 10,
        gap: 0,
    },
    render: (args) => (
        <div className="h-[300px] w-[300px] border border-gray-900">
            <InteractiveGrid
                {...(args as InteractiveGridProps)}
                renderCell={(r, c) => (
                    <div
                        className={`w-full h-full ${(r + c) % 2 === 0 ? 'bg-white' : 'bg-black'
                            }`}
                    />
                )}
            />
        </div>
    ),
};
