import { useState } from 'react';
import { BasicToggle } from './BasicToggle';

export interface LanguageToggleProps {
    initialLanguage?: 'en' | 'es';
    onLanguageChange?: (lang: 'en' | 'es') => void;
    className?: string;
    customStyles?: {
        container?: string;
        icon?: string;
    };
    // English (Off) Colors
    englishColor?: string;
    englishBorderColor?: string;
    englishTextColor?: string;

    // Spanish (On) Colors
    spanishColor?: string;
    spanishBorderColor?: string;
    spanishTextColor?: string;
}

export const LanguageToggle = ({
    initialLanguage = 'en',
    onLanguageChange,
    className = '',
    customStyles = {},

    englishColor = 'bg-blue-100 hover:bg-blue-200',
    englishBorderColor = 'border-2 border-blue-500',
    englishTextColor = 'text-blue-900',

    spanishColor = 'bg-red-100 hover:bg-red-200',
    spanishBorderColor = 'border-2 border-red-500',
    spanishTextColor = 'text-red-900',
}: LanguageToggleProps) => {
    // True = Spanish, False = English (arbitrary mapping for boolean toggle)
    const [isSpanish, setIsSpanish] = useState(initialLanguage === 'es');

    const handleToggle = () => {
        const newIsSpanish = !isSpanish;
        setIsSpanish(newIsSpanish);
        if (onLanguageChange) {
            onLanguageChange(newIsSpanish ? 'es' : 'en');
        }
    };

    const currentContainerClasses = isSpanish
        ? `${spanishColor} ${spanishTextColor} ${spanishBorderColor}`
        : `${englishColor} ${englishTextColor} ${englishBorderColor}`;

    return (
        <BasicToggle
            isToggled={isSpanish}
            onToggle={handleToggle}
            className={className}
            title={isSpanish ? "Switch to English" : "Cambiar a Español"}
            iconOn={<span className="font-bold text-xs">ES</span>}
            iconOff={<span className="font-bold text-xs">EN</span>}
            customStyles={{
                container: `${currentContainerClasses} ${customStyles.container || ''}`,
                icon: `w-6 h-6 flex items-center justify-center ${customStyles.icon || ''}`
            }}
        />
    );
};
