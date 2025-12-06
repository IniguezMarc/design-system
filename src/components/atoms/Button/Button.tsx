import React from 'react';

// Definimos qué propiedades puede recibir nuestro botón
interface ButtonProps {
    /** Texto del botón */
    label: string;
    /** Color de fondo */
    variant?: 'primary' | 'secondary' | 'danger';
    /** Tamaño del botón */
    size?: 'small' | 'medium' | 'large';
    /** Función al hacer click */
    onClick?: () => void;
}

export const Button = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick,
}: ButtonProps) => {

    // Clases base (siempre las tiene)
    const baseStyles = "font-bold rounded cursor-pointer transition-colors duration-200 border-none";

    // Clases según la variante (color)
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    // Clases según el tamaño
    const sizeStyles = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            type="button"
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};