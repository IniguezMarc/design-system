
import { Button } from '../../atoms/Button/Button';
import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle';
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

export interface ScrollNavbarProps {
    logo?: string;
    isLogoImage?: boolean;
    links: NavbarLink[];
    actions?: NavbarAction[];
    customStyles?: NavbarSlots;
    // Basic props for state
    isOpen?: boolean;
    isScrolled?: boolean;
    onToggleMenu?: () => void;
    onLinkClick?: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
    onLogoClick?: () => void;
}

export const ScrollNavbar = ({
    logo = "Marc.Dev",
    isLogoImage = false,
    links,
    actions = [],
    customStyles = {},
    isOpen = false,
    isScrolled = false,
    onToggleMenu,
    onLinkClick,
    onLogoClick
}: ScrollNavbarProps) => {

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300

        ${isScrolled || isOpen
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
                    : 'bg-transparent'}
        ${customStyles.container || ''}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className={`flex-shrink-0 cursor-pointer flex items-center ${customStyles.logo || ''}`} onClick={onLogoClick}>
                        {isLogoImage ? (
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        ) : (
                            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                  hover:text-blue-600 dark:hover:text-blue-400
                  ${link.active
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-300'}
                  ${customStyles.link || ''}
                `}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 pl-6 border-l border-gray-200 dark:border-gray-700">
                            <ThemeToggle />
                            {actions.map((action, idx) => (
                                <Button key={idx} {...action} size="small" />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
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

            <div
                className={`
          md:hidden absolute top-20 left-0 w-full 
          bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 
          shadow-xl transition-all duration-300 ease-in-out origin-top 
          ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}
          ${customStyles.mobileMenu || ''}
        `}
            >
                <div className="px-6 py-6 space-y-4 flex flex-col items-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => onLinkClick?.(e, link.href)}
                            className="block text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
