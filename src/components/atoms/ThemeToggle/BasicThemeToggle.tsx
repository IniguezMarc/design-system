

export interface ThemeToggleSlots {
    container?: string;
    icon?: string;
}

export interface BasicThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
    iconSun?: React.ReactNode;
    iconMoon?: React.ReactNode;
    sunImage?: string;
    moonImage?: string;
    imageFit?: 'cover' | 'contain';
    customStyles?: ThemeToggleSlots;
    className?: string;
    title?: string;
}

export const BasicThemeToggle = ({
    isDark,
    onToggle,
    iconSun,
    iconMoon,
    sunImage,
    moonImage,
    imageFit = 'contain',
    customStyles = {},
    className = '',
    title
}: BasicThemeToggleProps) => {
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
                return <img src={sunImage} alt="Light Mode" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconSun || DefaultSun;
        } else {
            if (moonImage) {
                return <img src={moonImage} alt="Dark Mode" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconMoon || DefaultMoon;
        }
    };

    return (
        <button
            onClick={onToggle}
            title={title || (isDark ? "Switch to light mode" : "Switch to dark mode")}
            className={`
                p-2 rounded-full transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-blue-500 hover:rotate-12 hover:scale-110 overflow-hidden
                ${isDark
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }
                ${customStyles.container || ''}
                ${className}
            `}
        >
            {renderContent()}
        </button>
    );
};
