import React from 'react';

export interface BadgeSlots {
    container?: string;
}

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'success';
    customStyles?: BadgeSlots;
    className?: string;
}

export const Badge = ({
    label,
    variant = 'primary',
    customStyles = {},
    className = ''
}: BadgeProps) => {

    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";

    const variants = {
        primary: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
        secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
        outline: "border border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400 bg-transparent",
        success: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
    };

    return (
        <span className={`
      ds-badge
      ${baseStyles} 
      ${variants[variant]}
      ${customStyles.container || ''}
      ${className}
    `}>
            {label}
        </span>
    );
};