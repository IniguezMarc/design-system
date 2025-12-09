import React from 'react';
import { Button } from '../../atoms/Button/Button';

export interface HeroAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
}

export interface HeroSlots {
    container?: string;
    content?: string;
    title?: string;
    subtitle?: string;
    imageWrapper?: string;
}

export interface BasicHeroProps {
    greeting?: string;
    title: string;
    subtitle: string;
    imageUrl?: string;
    actions?: HeroAction[];
    customStyles?: HeroSlots; // Style hooks
}

export const BasicHero = ({
    greeting = "Hello",
    title,
    subtitle,
    imageUrl,
    actions = [],
    customStyles = {}
}: BasicHeroProps) => {

    const containerLayout = imageUrl
        ? "flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        : "flex flex-col items-center text-center max-w-4xl mx-auto";

    const textAlignment = imageUrl
        ? "flex-1 text-center lg:text-left"
        : "w-full";

    const buttonsLayout = imageUrl
        ? "justify-center lg:justify-start"
        : "justify-center";

    return (
        <section className={`
      relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-300
      bg-white dark:bg-gray-900 
      ${customStyles.container || ''}
    `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className={containerLayout}>

                    <div className={`${textAlignment} ${customStyles.content || ''}`}>
                        {greeting && (
                            <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
                                {greeting}
                            </p>
                        )}

                        <h1 className={`
              text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors
              text-gray-900 dark:text-white
              ${customStyles.title || ''}
            `}>
                            {title}
                        </h1>

                        <p className={`
              text-lg sm:text-xl mb-8 leading-relaxed transition-colors
              text-gray-500 dark:text-gray-400
              ${!imageUrl && 'mx-auto max-w-2xl'}
              ${customStyles.subtitle || ''}
            `}>
                            {subtitle}
                        </p>

                        {actions.length > 0 && (
                            <div className={`flex flex-col sm:flex-row gap-4 ${buttonsLayout}`}>
                                {actions.map((action, index) => (
                                    <Button
                                        key={index}
                                        label={action.label}
                                        variant={action.variant || 'primary'}
                                        size="large"
                                        onClick={action.onClick}
                                        className="w-full sm:w-auto"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {imageUrl && (
                        <div className={`
              flex-1 w-full max-w-md lg:max-w-full relative 
              ${customStyles.imageWrapper || ''}
            `}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-none dark:border dark:border-gray-800 aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gray-900/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
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
