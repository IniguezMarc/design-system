import React, { type ReactNode } from 'react';

export interface SplitLayoutProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    /**
     * Initial width percentage of the left panel (0-100).
     * @default 30
     */
    initialLeftWidth?: number;
    /**
     * Minimum width percentage for either panel.
     * @default 20
     */
    minWidth?: number;
    className?: string;
    customStyles?: {
        container?: string;
        leftPanel?: string;
        rightPanel?: string;
        resizer?: string;
    };
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
    leftContent,
    rightContent,
    initialLeftWidth = 30,
    minWidth = 20,
    className = '',
    customStyles = {}
}) => {
    const [leftWidth, setLeftWidth] = React.useState(initialLeftWidth);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

            if (newLeftWidth >= minWidth && newLeftWidth <= 100 - minWidth) {
                setLeftWidth(newLeftWidth);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, minWidth]);

    return (
        <div
            ref={containerRef}
            className={`flex h-full w-full overflow-hidden ${className} ${customStyles.container || ''}`}
        >
            <div
                style={{ width: `${leftWidth}%` }}
                className={`h-full overflow-auto ${customStyles.leftPanel || ''}`}
            >
                {leftContent}
            </div>

            {/* Resizer Handle */}
            <div
                className={`w-1 cursor-col-resize bg-gray-200 hover:bg-blue-500 active:bg-blue-600 transition-colors z-10 flex flex-col justify-center items-center ${customStyles.resizer || ''}`}
                onMouseDown={handleMouseDown}
            >
                <div className="h-8 w-1 bg-gray-400 rounded-full mx-auto" />
            </div>

            <div
                style={{ width: `${100 - leftWidth}%` }}
                className={`h-full overflow-auto bg-gray-50 dark:bg-gray-900 ${customStyles.rightPanel || ''}`}
            >
                {rightContent}
            </div>
        </div>
    );
};
