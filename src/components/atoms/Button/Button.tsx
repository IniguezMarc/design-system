import React from 'react';

interface ButtonProps {
    label: string;
    // 1. AÑADIMOS 'outline' AQUÍ 👇
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
}

export const Button = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
}: ButtonProps) => {

    // Clases base (he añadido border-2 para que el outline se vea bien si se usa)
    const baseStyles = "inline-flex justify-center items-center font-bold rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
        // Primary: Azul sólido
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-2 border-transparent",

        // Secondary: Gris suave
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500 border-2 border-transparent",

        // Danger: Rojo
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 border-2 border-transparent",

        // 2. AÑADIMOS EL ESTILO VISUAL PARA 'outline' 👇
        // Fondo transparente, borde azul y texto azul
        outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    };

    const sizeStyles = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-5 py-2.5 text-base", // Un pelín más grandes para ser modernos
        large: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            type="button"
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};