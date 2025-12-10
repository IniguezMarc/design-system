
import React from 'react';

export interface TitleSlots {
    container?: string;
    text?: string;
}

export interface TitleProps {
    /** The text content of the title */
    label: string;
    /** HTML Heading tag to use */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Custom styles for internal elements */
    customStyles?: TitleSlots;

    // --- Color Props ---
    textColor?: string;
    darkTextColor?: string;
}

export const BasicTitle = ({
    label,
    as: Tag = 'h2',
    align = 'left',
    customStyles = {},

    // Default Colors
    textColor = 'text-gray-900',
    darkTextColor = 'dark:text-white',
}: TitleProps) => {

    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    const sizeClasses = {
        h1: 'text-4xl sm:text-5xl font-extrabold',
        h2: 'text-3xl sm:text-4xl font-bold',
        h3: 'text-2xl sm:text-3xl font-bold',
        h4: 'text-xl sm:text-2xl font-semibold',
        h5: 'text-lg sm:text-xl font-semibold',
        h6: 'text-base sm:text-lg font-semibold',
        p: 'text-base',
        span: 'text-base',
    };

    return (
        <div className={`
            w-full
            ${alignmentClasses[align]}
            ${customStyles.container || ''}
        `}>
            <Tag className={`
                tracking-tight transition-colors duration-300
                ${sizeClasses[Tag] || sizeClasses.h2}
                ${textColor}
                ${darkTextColor}
                ${customStyles.text || ''}
            `}>
                {label}
            </Tag>
        </div>
    );
};
