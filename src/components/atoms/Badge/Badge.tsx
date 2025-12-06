import React from 'react';

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'success';
}

export const Badge = ({ label, variant = 'primary' }: BadgeProps) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";

    const variants = {
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-800",
        outline: "border border-gray-300 text-gray-600 bg-transparent",
        success: "bg-green-100 text-green-800",
    };

    return (
        <span className={`${baseStyles} ${variants[variant]}`}>
            {label}
        </span>
    );
};