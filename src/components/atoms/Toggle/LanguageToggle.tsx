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

    isDark?: boolean;
}

export const LanguageToggle = ({
    initialLanguage = 'en',
    onLanguageChange,
    className = '',
    customStyles = {},

    englishColor = '!bg-transparent hover:!bg-gray-100 dark:hover:!bg-gray-800',
    englishBorderColor = 'border-2 border-transparent',
    englishTextColor = '!text-gray-600 dark:!text-gray-300',

    spanishColor = '!bg-transparent hover:!bg-gray-100 dark:hover:!bg-gray-800',
    spanishBorderColor = 'border-2 border-transparent',
    spanishTextColor = '!text-gray-600 dark:!text-gray-300',

    isDark = false,
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
        <div className={isDark ? 'dark' : ''}>
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
        </div>
    );
};
