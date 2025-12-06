import React from 'react';
import { Button } from '../../atoms/Button/Button';

// 1. Definimos qué forma tiene una "Acción" o Botón
export interface HeroAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline'; // Tus variantes de botón
}

interface HeroProps {
    greeting?: string;
    title: string;
    subtitle: string;
    imageUrl?: string;
    /** Lista flexible de botones (0, 1, 2 o los que quieras) */
    actions?: HeroAction[];
}

export const Hero = ({
    greeting = "Hola, soy Marc",
    title,
    subtitle,
    imageUrl,
    actions = [] // Por defecto lista vacía
}: HeroProps) => {

    const containerClasses = imageUrl
        ? "flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        : "flex flex-col items-center text-center max-w-4xl mx-auto";

    const textClasses = imageUrl
        ? "flex-1 text-center lg:text-left"
        : "w-full";

    const buttonContainerClasses = imageUrl
        ? "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        : "flex flex-col sm:flex-row gap-4 justify-center";

    return (
        <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={containerClasses}>

                    <div className={textClasses}>
                        {greeting && (
                            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                                {greeting}
                            </p>
                        )}

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            {title}
                        </h1>

                        <p className={`text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed ${!imageUrl && 'mx-auto max-w-2xl'}`}>
                            {subtitle}
                        </p>

                        {/* 2. RENDERIZADO DINÁMICO DE BOTONES 👇 */}
                        {actions.length > 0 && (
                            <div className={buttonContainerClasses}>
                                {actions.map((action, index) => (
                                    <Button
                                        key={index} // En listas simples, el index sirve
                                        label={action.label}
                                        variant={action.variant || 'primary'} // Si no especifican, es primary
                                        size="large"
                                        onClick={action.onClick}
                                        className="w-full sm:w-auto"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {imageUrl && (
                        <div className="flex-1 w-full max-w-md lg:max-w-full relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src={imageUrl}
                                    alt="Hero Visual"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};