import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Avatar } from '../../atoms/Avatar/Avatar';

export interface NavbarLink {
    label: string;
    href: string;
    active?: boolean;
}

// Reutilizamos la interfaz de Acción que creamos para el Hero (o la definimos nueva)
export interface NavbarAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
}

interface NavbarProps {
    /** Logo puede ser texto o URL de imagen */
    logo?: string;
    /** Si es true, el logo se trata como imagen. Si false, como texto. */
    isLogoImage?: boolean;
    links: NavbarLink[];
    /** Lista de botones de acción a la derecha (ej: Contactar, Login...) */
    actions?: NavbarAction[];
}

export const Navbar = ({
    logo = "Marc.Dev",
    isLogoImage = false,
    links,
    actions = []
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. LOGO FLEXIBLE */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        {isLogoImage ? (
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        ) : (
                            <span className="text-2xl font-bold text-gray-900 tracking-tighter hover:text-blue-600 transition-colors">
                                {logo}
                            </span>
                        )}
                    </div>

                    {/* 2. MENU DESKTOP */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${link.active ? 'text-blue-600' : 'text-gray-600'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Acciones Dinámicas */}
                        {actions.length > 0 && (
                            <div className="pl-6 border-l border-gray-200 flex items-center gap-3">
                                {actions.map((action, idx) => (
                                    <Button
                                        key={idx}
                                        label={action.label}
                                        onClick={action.onClick}
                                        size="small"
                                        variant={action.variant || 'primary'}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 3. BURGER MOBILE */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors focus:outline-none"
                        >
                            {/* Icono Menu/X simplificado */}
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

            {/* 4. MENU MOBILE */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
                    }`}
            >
                <div className="px-6 py-6 space-y-4 flex flex-col items-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* Acciones Móviles */}
                    {actions.length > 0 && (
                        <div className="pt-4 w-full flex flex-col gap-3">
                            {actions.map((action, idx) => (
                                <Button
                                    key={idx}
                                    label={action.label}
                                    onClick={action.onClick}
                                    size="medium"
                                    variant={action.variant || 'primary'}
                                    className="w-full"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};