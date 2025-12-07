import React, { useEffect, useState } from 'react';

// 1. Definimos los huecos de estilo
export interface ThemeToggleSlots {
    container?: string;
    icon?: string;
}

export interface ThemeToggleProps {
    iconSun?: React.ReactNode;
    iconMoon?: React.ReactNode;
    sunImage?: string;
    moonImage?: string;
    imageFit?: 'cover' | 'contain';
    // 2. Añadimos la prop de estilos
    customStyles?: ThemeToggleSlots;
    className?: string;
}

export const ThemeToggle = ({
    iconSun,
    iconMoon,
    sunImage,
    moonImage,
    imageFit = 'contain',
    customStyles = {}, // 👈 Inicializamos
    className = ''
}: ThemeToggleProps) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const isDarkNow = document.documentElement.classList.contains('dark');
            setIsDark(isDarkNow);
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Clases base para el icono
    const iconBaseClasses = `w-6 h-6 ${customStyles.icon || ''}`;

    const DefaultSun = (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconBaseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );

    const DefaultMoon = (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconBaseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    );

    const renderContent = () => {
        const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

        if (isDark) {
            if (sunImage) {
                return <img src={sunImage} alt="Modo Claro" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconSun || DefaultSun;
        } else {
            if (moonImage) {
                return <img src={moonImage} alt="Modo Oscuro" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconMoon || DefaultMoon;
        }
    };

    return (
        <button
            onClick={toggleTheme}
            title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className={`
        /* Estilos Base */
        p-2 rounded-full transition-all duration-300 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-blue-500 hover:rotate-12 hover:scale-110 overflow-hidden
        
        /* Colores */
        ${isDark
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }
        
        /* 👇 INYECCIÓN DE ESTILOS */
        ${customStyles.container || ''}
        ${className}
      `}
        >
            {renderContent()}
        </button>
    );
};