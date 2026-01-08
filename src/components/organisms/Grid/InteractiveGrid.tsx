import React, { useRef, useState, useEffect } from 'react';

export interface InteractiveGridProps {
    rows: number;
    cols: number;
    /**
     * Render function for each cell.
     * Use this to customize the look based on your app's state (start, end, wall, etc).
     */
    renderCell: (row: number, col: number) => React.ReactNode;
    onCellClick?: (row: number, col: number) => void;
    onCellMouseEnter?: (row: number, col: number) => void;
    onCellMouseDown?: (row: number, col: number) => void;
    onCellMouseUp?: (row: number, col: number) => void;
    className?: string;
    /**
     * Gap between cells in pixels.
     * @default 1
     */
    gap?: number;
}

export const InteractiveGrid: React.FC<InteractiveGridProps> = ({
    rows,
    cols,
    renderCell,
    onCellClick,
    onCellMouseEnter,
    onCellMouseDown,
    onCellMouseUp,
    className = '',
    gap = 1
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    // Prevent default drag behavior to allow "painting" on the grid
    const handleMouseDown = (e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault();
        setIsMouseDown(true);
        onCellMouseDown?.(r, c);
        onCellClick?.(r, c);
    };

    const handleMouseEnter = (r: number, c: number) => {
        if (isMouseDown) {
            onCellMouseEnter?.(r, c);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        onCellMouseUp?.(-1, -1); // -1 indicates end of drag global
    };

    // Global mouse up handler to catch releases outside the grid
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isMouseDown) {
                setIsMouseDown(false);
                onCellMouseUp?.(-1, -1);
            }
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, [isMouseDown, onCellMouseUp]);

    return (
        <div
            ref={gridRef}
            className={`grid select-none ${className}`}
            style={{
                display: 'grid',
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: `${gap}px`,
                width: '100%',
                height: '100%',
            }}
            onMouseLeave={() => isMouseDown && setIsMouseDown(false)}
        >
            {Array.from({ length: rows }).map((_, r) =>
                Array.from({ length: cols }).map((_, c) => (
                    <div
                        key={`${r}-${c}`}
                        onMouseDown={(e) => handleMouseDown(e, r, c)}
                        onMouseEnter={() => handleMouseEnter(r, c)}
                    >
                        {renderCell(r, c)}
                    </div>
                ))
            )}
        </div>
    );
};
