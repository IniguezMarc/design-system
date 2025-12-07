import React from 'react';

interface SocialLink {
    platform: string;
    url: string;
}

interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSlots {
    container?: string;
    text?: string;
    link?: string;
}

interface FooterProps {
    copyrightOwner: string;
    socialLinks: SocialLink[];
    copyrightText?: string;
    secondaryLinks?: FooterLink[];
    customStyles?: FooterSlots;
}

export const Footer = ({
    copyrightOwner,
    copyrightText = `© ${new Date().getFullYear()} Todos los derechos reservados.`,
    socialLinks,
    secondaryLinks = [],
    customStyles = {}
}: FooterProps) => {

    return (
        <footer className={`
      py-12 border-t transition-colors duration-300
      /* Light: Fondo muy oscuro (casi negro) */
      bg-gray-900 text-white border-gray-800
      /* Dark: Fondo negro puro o gris muy oscuro */
      dark:bg-black dark:border-gray-800
      ${customStyles.container || ''}
    `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className={`text-center md:text-left ${customStyles.text || ''}`}>
                        <p className="text-lg font-bold text-white">{copyrightOwner}</p>
                        <p className="text-gray-400 text-sm mt-1">
                            {copyrightText}
                        </p>
                    </div>

                    {secondaryLinks.length > 0 && (
                        <div className="flex gap-6 flex-wrap justify-center">
                            {secondaryLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`text-gray-400 hover:text-blue-400 text-sm transition-colors ${customStyles.link || ''}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider ${customStyles.link || ''}`}
                            >
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};