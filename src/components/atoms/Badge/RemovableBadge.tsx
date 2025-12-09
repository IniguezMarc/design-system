
import { BasicBadge, type BadgeProps } from './BasicBadge';

export interface RemovableBadgeProps extends BadgeProps {
    onRemove?: () => void;
    removeIcon?: React.ReactNode;
}

export const RemovableBadge = ({
    onRemove,
    removeIcon,
    className = '',
    customStyles = {},
    ...props
}: RemovableBadgeProps) => {

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onRemove) onRemove();
    };

    // Default X icon if none provided
    const defaultRemoveIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    const icon = removeIcon || defaultRemoveIcon;

    const removeButton = (
        <button
            type="button"
            className="flex-shrink-0 ml-0.5 inline-flex h-4 w-4 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:bg-black/20 text-current transition-colors"
            onClick={handleRemove}
            aria-label="Remove badge"
        >
            {icon}
        </button>
    );

    return (
        <BasicBadge
            {...props}
            className={`pr-1 ${className}`} // Add slightly more right padding for the icon area if needed, though gap handles most
            customStyles={customStyles}
            endIcon={removeButton}
        />
    );
};
