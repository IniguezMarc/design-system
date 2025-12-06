import React from 'react';

interface AvatarProps {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({ src, alt = "Avatar", size = 'md' }: AvatarProps) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-24 h-24",
        xl: "w-32 h-32",
    };

    return (
        <div className={`relative inline-block rounded-full overflow-hidden border-2 border-white shadow-sm ${sizeClasses[size]}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};