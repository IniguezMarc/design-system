
import { Button } from '../../atoms/Button/Button';
import { ThemeToggle } from '../../atoms/Toggle/ThemeToggle';
import { LanguageToggle } from '../../atoms/Toggle/LanguageToggle';
import { type MouseEvent } from 'react';


export interface NavbarLink {
    label: string;
    href: string;
    active?: boolean;
}

export interface NavbarAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
}

export interface NavbarSlots {
    container?: string;
    logo?: string;
    link?: string;
    mobileMenu?: string;
}

export interface BasicNavbarProps {
    logo?: string;
    isLogoImage?: boolean;
    links: NavbarLink[];
    actions?: NavbarAction[];
    customStyles?: NavbarSlots;
    // Basic props for state
    isOpen?: boolean;
    onToggleMenu?: () => void;
    onLinkClick?: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
    onLogoClick?: () => void;

    // Language Toggle Props
    enableLanguageToggle?: boolean;
    language?: 'en' | 'es';
    onLanguageChange?: (lang: 'en' | 'es') => void;

    // --- Color Props ---
    backgroundColor?: string;
    darkBackgroundColor?: string;
    borderColor?: string;
    darkBorderColor?: string;

    // Text Colors
    textColor?: string;
    darkTextColor?: string;
    activeLinkColor?: string;
    darkActiveLinkColor?: string;
    hoverLinkColor?: string;
    darkHoverLinkColor?: string;
}

export const BasicNavbar = ({
    logo = "Marc.Dev",
    isLogoImage = false,
    links,
    actions = [],
    customStyles = {},
    isOpen = false,
    onToggleMenu,
    onLinkClick,
    onLogoClick,
    enableLanguageToggle = false,
    language = 'en',
    onLanguageChange,

    // Default Colors
    backgroundColor = "bg-white",
    darkBackgroundColor = "dark:bg-gray-900",
    borderColor = "border-gray-100",
    darkBorderColor = "dark:border-gray-800",

    textColor = "text-gray-900",
    darkTextColor = "dark:text-white",
    activeLinkColor = "text-blue-600",
    darkActiveLinkColor = "dark:text-blue-400",
    hoverLinkColor = "hover:text-blue-600",
    darkHoverLinkColor = "dark:hover:text-blue-400",
}: BasicNavbarProps) => {

    return (
        <nav
            className={`
        w-full border-b transition-colors duration-300
        ${backgroundColor} ${darkBackgroundColor}
        ${borderColor} ${darkBorderColor}
        ${customStyles.container || ''}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className={`flex-shrink-0 cursor-pointer flex items-center ${customStyles.logo || ''}`} onClick={onLogoClick}>
                        {isLogoImage ? (
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        ) : (
                            <span className={`
                                text-2xl font-bold tracking-tighter transition-colors
                                ${textColor} ${darkTextColor}
                                ${hoverLinkColor} ${darkHoverLinkColor}
                            `}>
                                {logo}
                            </span>
                        )}
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => onLinkClick?.(e, link.href)}
                                className={`
                  text-sm font-medium transition-colors 
                  ${link.active
                                        ? `${activeLinkColor} ${darkActiveLinkColor}`
                                        : 'text-gray-600 dark:text-gray-300'}
                  ${hoverLinkColor} ${darkHoverLinkColor}
                  ${customStyles.link || ''}
                `}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 pl-6 border-l border-gray-200 dark:border-gray-700">
                            {enableLanguageToggle && (
                                <LanguageToggle
                                    initialLanguage={language}
                                    onLanguageChange={onLanguageChange}
                                />
                            )}
                            <ThemeToggle />
                            {actions.map((action, idx) => (
                                <Button key={idx} {...action} size="small" />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        {enableLanguageToggle && (
                            <LanguageToggle
                                initialLanguage={language}
                                onLanguageChange={onLanguageChange}
                            />
                        )}
                        <ThemeToggle />
                        <button
                            onClick={onToggleMenu}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          md:hidden
          border-b border-gray-100 dark:border-gray-800 
          transition-all duration-300 ease-in-out
          ${backgroundColor} ${darkBackgroundColor}
          ${isOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 overflow-hidden'}
          ${customStyles.mobileMenu || ''}
        `}
            >
                <div className="px-6 space-y-4 flex flex-col items-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => onLinkClick?.(e, link.href)}
                            className={`
                                block text-lg font-medium transition-colors
                                text-gray-800 dark:text-gray-200 
                                ${hoverLinkColor} ${darkHoverLinkColor}
                            `}
                        >
                            {link.label}
                        </a>
                    ))}
                    {actions.length > 0 && (
                        <div className="pt-4 w-full flex flex-col gap-3">
                            {actions.map((action, idx) => (
                                <Button key={idx} {...action} size="medium" className="w-full" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
