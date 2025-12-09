
import { BasicAvatar, type AvatarProps } from './BasicAvatar';

export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface StatusAvatarProps extends AvatarProps {
    status?: AvatarStatus;
    statusColor?: string; // Custom override if needed
    statusBorderColor?: string;
    darkStatusBorderColor?: string;
}

export const StatusAvatar = ({
    status = 'online',
    statusColor,
    statusBorderColor = 'ring-white',
    darkStatusBorderColor = 'dark:ring-gray-900',
    className = '',
    customStyles = {},
    ...props
}: StatusAvatarProps) => { // Accept all props including color overrides from BasicAvatar

    const statusColors = {
        online: 'bg-green-500',
        offline: 'bg-gray-400',
        busy: 'bg-red-500',
        away: 'bg-yellow-500',
    };

    const finalStatusColor = statusColor || statusColors[status];

    // Status dot sizing relative to avatar could be adjusted if needed, currently fixed scale
    const dotClasses = `absolute bottom-0 right-0 block h-[25%] w-[25%] rounded-full ring-2 ${statusBorderColor} ${darkStatusBorderColor} ${finalStatusColor}`;

    return (
        <div className={`relative inline-block ${className}`}>
            <BasicAvatar {...props} customStyles={customStyles} />
            <span className={dotClasses} />
        </div>
    );
};
