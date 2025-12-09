import React from 'react';

export interface ButtonSlots {
    container?: string;
    label?: string;
}

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
    customStyles?: ButtonSlots;
    href?: string;
    target?: string;

    // Color Overrides
    primaryColor?: string;
    primaryHoverColor?: string;
    darkPrimaryColor?: string;
    darkPrimaryHoverColor?: string;

    secondaryColor?: string;
    secondaryHoverColor?: string;
    darkSecondaryColor?: string;
    darkSecondaryHoverColor?: string;



    outlineColor?: string;
    outlineHoverColor?: string;
    darkOutlineColor?: string;
    darkOutlineHoverColor?: string;
}

export const Button = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    customStyles = {},
    href,
    target,

    // Default Colors
    primaryColor = "bg-blue-600",
    primaryHoverColor = "hover:bg-blue-700",
    darkPrimaryColor = "dark:bg-blue-600",
    darkPrimaryHoverColor = "dark:hover:bg-blue-500",

    secondaryColor = "bg-gray-100",
    secondaryHoverColor = "hover:bg-gray-200",
    darkSecondaryColor = "dark:bg-gray-800",
    darkSecondaryHoverColor = "dark:hover:bg-gray-700", // Fixed text color in updated logic below



    outlineColor = "text-blue-600 border-blue-600",
    outlineHoverColor = "hover:bg-blue-50",
    darkOutlineColor = "dark:text-blue-400 dark:border-blue-400",
    darkOutlineHoverColor = "dark:hover:bg-blue-950",
}: ButtonProps) => {

    const baseStyles = "relative group inline-flex justify-center items-center font-bold rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline";

    // Note: Secondary text color is handled in the string below for simplicity, 
    // but if we want full override we assume the user passes text-color in secondaryColor if needed.
    // For now, I'll keep the text colors for secondary hardcoded or appended unless we want props for them too.
    // The user asked for "primaryColor", likely meaning the main background.
    // Modifying below to use the props.

    const variantStyles = {
        primary: `${primaryColor} text-white ${primaryHoverColor} focus:ring-blue-500 border-2 border-transparent ${darkPrimaryColor} ${darkPrimaryHoverColor}`,

        secondary: `${secondaryColor} text-gray-800 ${secondaryHoverColor} focus:ring-gray-500 border-2 border-transparent ${darkSecondaryColor} dark:text-gray-100 ${darkSecondaryHoverColor}`,



        outline: `bg-transparent ${outlineColor} border-2 ${outlineHoverColor} focus:ring-blue-500 ${darkOutlineColor} ${darkOutlineHoverColor}`,
    };

    const sizeStyles = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-5 py-2.5 text-base",
        large: "px-8 py-3.5 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${customStyles.container || ''} ${className}`;

    const content = (
        <span className={`relative z-10 flex items-center justify-center gap-2 ${customStyles.label || ''}`}>
            {label}
        </span>
    );

    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={combinedClasses}
            onClick={onClick}
        >
            {content}
        </button>
    );
};