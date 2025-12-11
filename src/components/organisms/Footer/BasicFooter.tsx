

export interface SocialLink {
    platform: string;
    url: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSlots {
    container?: string;
    text?: string;
    link?: string;
}

export interface BasicFooterProps {
    copyrightOwner: string;
    socialLinks: SocialLink[];
    copyrightText?: string;
    secondaryLinks?: FooterLink[];
    customStyles?: FooterSlots;

    // --- Color Props ---
    backgroundColor?: string;
    darkBackgroundColor?: string;
    borderColor?: string;
    darkBorderColor?: string;
    textColor?: string;
    darkTextColor?: string;
    linksColor?: string;
    linksHoverColor?: string;
}

export const BasicFooter = ({
    copyrightOwner,
    copyrightText = `© ${new Date().getFullYear()} All rights reserved.`,
    socialLinks,
    secondaryLinks = [],
    customStyles = {},

    // Default Colors
    backgroundColor = "bg-gray-900",
    darkBackgroundColor = "dark:bg-black",
    borderColor = "border-gray-800",
    darkBorderColor = "dark:border-gray-800",
    textColor = "text-white",
    darkTextColor = "dark:text-white",
    linksColor = "text-gray-400",
    linksHoverColor = "hover:text-white",
}: BasicFooterProps) => {

    return (
        <footer className={`
      py-12 border-t transition-colors duration-300
      ${backgroundColor} ${darkBackgroundColor}
      ${borderColor} ${darkBorderColor}
      ${customStyles.container || ''}
    `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className={`text-center md:text-left ${customStyles.text || ''}`}>
                        <p className={`text-lg font-bold ${textColor} ${darkTextColor}`}>{copyrightOwner}</p>
                        <p className={`text-sm mt-1 ${linksColor} opacity-80`}>
                            {copyrightText}
                        </p>
                    </div>

                    {secondaryLinks.length > 0 && (
                        <div className="flex gap-6 flex-wrap justify-center">
                            {secondaryLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`
                                        text-sm transition-colors 
                                        ${linksColor} ${linksHoverColor}
                                        ${customStyles.link || ''}
                                    `}
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
                                className={`
                                    transition-colors text-sm font-medium uppercase tracking-wider 
                                    ${linksColor} ${linksHoverColor}
                                    ${customStyles.link || ''}
                                `}
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
