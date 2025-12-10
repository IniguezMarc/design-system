import React, { useState, useEffect } from 'react';
import { ScrollNavbar, type ScrollNavbarProps, type NavbarLink, type NavbarAction, type NavbarSlots } from './ScrollNavbar';

export interface NavbarProps extends Omit<ScrollNavbarProps, 'isOpen' | 'isScrolled' | 'onToggleMenu' | 'onLinkClick' | 'onLogoClick'> {
    // Wrapper can optionally override these if needed, but primarily manages them
}

export const Navbar = (props: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism
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
            // Close mobile menu on click
            setIsOpen(false);
        }
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ScrollNavbar
            {...props}
            isOpen={isOpen}
            isScrolled={scrolled}
            onToggleMenu={() => setIsOpen(!isOpen)}
            onLinkClick={handleNavClick}
            onLogoClick={handleLogoClick}
        />
    );
};

export type { NavbarLink, NavbarAction, NavbarSlots };