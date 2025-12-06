import React from 'react';

interface SocialLink {
    platform: string;
    url: string;
}

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    copyrightOwner: string;
    socialLinks: SocialLink[];
    /** Enlaces legales o secundarios (ej: Política de privacidad) */
    secondaryLinks?: FooterLink[];
}

export const Footer = ({ copyrightOwner, socialLinks, secondaryLinks = [] }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Bloque Izquierdo: Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold text-white">{copyrightOwner}</p>
                        <p className="text-gray-400 text-sm mt-1">
                            © {currentYear} Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Bloque Central: Links Secundarios (Flexible) */}
                    {secondaryLinks.length > 0 && (
                        <div className="flex gap-6 flex-wrap justify-center">
                            {secondaryLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Bloque Derecho: Redes Sociales */}
                    <div className="flex space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
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