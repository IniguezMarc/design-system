import React from 'react';

export interface AvatarSlots {
    container?: string;
    image?: string;
}

interface AvatarProps {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    imageFit?: 'cover' | 'contain';
    customStyles?: AvatarSlots;
    className?: string;
}

export const Avatar = ({
    src,
    alt = "Avatar",
    size = 'md',
    imageFit = 'cover',
    customStyles = {},
    className = ''
}: AvatarProps) => {

    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
        xl: "h-32 w-32",
    };

    const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

    return (
        <div className={`
      ds-avatar relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0
      ${sizeClasses[size]}
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