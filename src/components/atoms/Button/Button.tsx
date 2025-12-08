import React from 'react';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
    href?: string;
    target?: string;
}

export const Button = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    href,
    target
}: ButtonProps) => {

    const baseStyles = "inline-flex justify-center items-center font-bold rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-2 border-transparent",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500 border-2 border-transparent",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 border-2 border-transparent",
        outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    };

    const sizeStyles = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-5 py-2.5 text-base",
        large: "px-8 py-3.5 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
            >
                {label}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={combinedClasses}
            onClick={onClick}
        >
            {label}
        </button>
    );
};