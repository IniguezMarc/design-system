

export interface AvatarSlots {
    container?: string;
    image?: string;
}

export interface AvatarProps {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    imageFit?: 'cover' | 'contain';
    customStyles?: AvatarSlots;
    className?: string;

    // Color Overrides
    borderColor?: string;
    darkBorderColor?: string;
    backgroundColor?: string;
    darkBackgroundColor?: string;
}

export const BasicAvatar = ({
    src,
    alt = "Avatar",
    size = 'md',
    imageFit = 'cover',
    customStyles = {},
    className = '',
    borderColor = 'border-gray-200',
    darkBorderColor = 'dark:border-gray-700',
    backgroundColor = 'bg-gray-100',
    darkBackgroundColor = 'dark:bg-gray-800',
}: AvatarProps) => {

    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
        xl: "h-32 w-32",
    };

    const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

    const borderClasses = `border ${borderColor} ${darkBorderColor}`;
    const bgClasses = `${backgroundColor} ${darkBackgroundColor}`;

    return (
        <div className={`
            ds-avatar relative rounded-full overflow-hidden flex-shrink-0
            ${sizeClasses[size]}
            ${bgClasses}
            ${borderClasses}
            ${customStyles.container || ''}
            ${className}
        `}>
            <img
                src={src}
                alt={alt}
                className={`
                    w-full h-full 
                    ${fitClass}
                    ${customStyles.image || ''}
                `}
            />
        </div>
    );
};
