
import { resolveColor } from '../../../utils/color-utils';
import { useState } from 'react';

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

const FooterLinkItem = ({
    href,
    label,
    color,
    hoverColor,
    className = "",
    target
}: {
    href: string;
    label: string;
    color?: string;
    hoverColor?: string;
    className?: string;
    target?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Resolve colors
    // Note: We need a way to combine 'text-gray-400' (base) and 'hover:text-white' (hover) if they are classes.
    // resolveColor returns { className, style }.
    // If we use standard classes, 'hover:' works natively.
    // If we use inline styles (hex), we switch the style based on state.

    const base = resolveColor(color, 'color');
    const hover = resolveColor(hoverColor, 'color');

    // If generic hover class is passed (e.g. "hover:text-red"), it works automatically via className.
    // If hex is passed, base.style has it. hover.style has it.

    return (
        <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className={`transition-colors duration-200 ${base.className || ''} ${hover.className || ''} ${className}`}
            style={{
                ...base.style,
                ...(isHovered ? hover.style : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </a>
    );
};


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
    textColor = "text-gray-900",
    darkTextColor = "dark:text-white",
    linksColor = "text-gray-400",
    linksHoverColor = "hover:text-gray-900 dark:hover:text-white",
}: BasicFooterProps) => {

    // Resolve structural colors
    const resolvePair = (light: string | undefined, dark: string | undefined, prop: 'color' | 'backgroundColor' | 'borderColor') => {
        const l = resolveColor(light, prop);
        const d = resolveColor(dark, prop);
        return {
            className: `${l.className || ''} ${d.className || ''}`,
            style: { ...l.style, ...d.style }
        };
    };

    const bgStyle = resolvePair(backgroundColor, darkBackgroundColor, 'backgroundColor');
    const borderStyle = resolvePair(borderColor, darkBorderColor, 'borderColor');
    const textStyle = resolvePair(textColor, darkTextColor, 'color');

    // Links need specific handling for hover.
    // Note: Color pickers provide a single hex value. To support both light and dark modes 
    // from a single picker, we accept the single value and resolve it, accepting the limitation
    // that a single picked color applies to both modes (unless classes are used).

    return (
        <footer
            className={`
                py-12 border-t transition-colors duration-300
                ${bgStyle.className} 
                ${borderStyle.className}
                ${customStyles.container || ''}
            `}
            style={{ ...bgStyle.style, ...borderStyle.style }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className={`text-center md:text-left ${customStyles.text || ''}`}>
                        <p
                            className={`text-lg font-bold ${textStyle.className}`}
                            style={textStyle.style}
                        >{copyrightOwner}</p>
                        <p className={`text-sm mt-1 opacity-80 ${resolveColor(linksColor, 'color').className}`} style={resolveColor(linksColor, 'color').style}>
                            {copyrightText}
                        </p>
                    </div>

                    {secondaryLinks.length > 0 && (
                        <div className="flex gap-6 flex-wrap justify-center">
                            {secondaryLinks.map(link => (
                                <FooterLinkItem
                                    key={link.label}
                                    href={link.href}
                                    label={link.label}
                                    color={linksColor} // Passes full string ("text-gray-400") or hex
                                    hoverColor={linksHoverColor}
                                    className={`text-sm ${customStyles.link || ''}`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex space-x-6">
                        {socialLinks.map((link) => (
                            <FooterLinkItem
                                key={link.platform}
                                href={link.url}
                                label={link.platform}
                                target="_blank"
                                color={linksColor}
                                hoverColor={linksHoverColor}
                                className={`text-sm font-medium uppercase tracking-wider ${customStyles.link || ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
