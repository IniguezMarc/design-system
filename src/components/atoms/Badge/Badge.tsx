import React from 'react';

export interface BadgeSlots {
    container?: string;
    label?: string;
}

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'success';
    customStyles?: BadgeSlots;
    className?: string;

    // Color Overrides
    primaryColor?: string;
    darkPrimaryColor?: string;

    secondaryColor?: string;
    darkSecondaryColor?: string;

    outlineColor?: string;
    darkOutlineColor?: string;

    successColor?: string;
    darkSuccessColor?: string;
}

export const Badge = ({
    label,
    variant = 'primary',
    customStyles = {},
    className = '',

    // Default Colors
    primaryColor = "bg-blue-100 text-blue-800",
    darkPrimaryColor = "dark:bg-blue-900/50 dark:text-blue-200",

    secondaryColor = "bg-gray-100 text-gray-800",
    darkSecondaryColor = "dark:bg-gray-700 dark:text-gray-300",

    outlineColor = "border border-gray-300 text-gray-600 bg-transparent",
    darkOutlineColor = "dark:border-gray-600 dark:text-gray-400",

    successColor = "bg-green-100 text-green-800",
    darkSuccessColor = "dark:bg-green-900/50 dark:text-green-200",
}: BadgeProps) => {

    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";

    const variants = {
        primary: `${primaryColor} ${darkPrimaryColor}`,
        secondary: `${secondaryColor} ${darkSecondaryColor}`,
        outline: `${outlineColor} ${darkOutlineColor}`,
        success: `${successColor} ${darkSuccessColor}`,
    };

    return (
        <span className={`
      ds-badge
      ${baseStyles} 
      ${variants[variant]}
      ${customStyles.container || ''}
      ${className}
    `}>
            <span className={customStyles.label || ''}>
                {label}
            </span>
        </span>
    );
};