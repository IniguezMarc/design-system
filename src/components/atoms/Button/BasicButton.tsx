/**
 * Custom CSS class slots for styling different parts of the button.
 */
export interface ButtonSlots {
    /** Additional classes for the button container */
    container?: string;
    /** Additional classes for the label wrapper */
    label?: string;
}

/**
 * Props for the BasicButton component.
 */
export interface ButtonProps {
    /** Text displayed inside the button */
    label: string;
    /** Visual style variant */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** Button size preset */
    size?: 'small' | 'medium' | 'large';
    /** Click handler function */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Custom styling slots */
    customStyles?: ButtonSlots;
    /** If provided, renders as an anchor link */
    href?: string;
    /** Link target (used with href) */
    target?: string;

    // Color Overrides
    /** Primary variant background class */
    primaryColor?: string;
    /** Primary variant hover background class */
    primaryHoverColor?: string;
    /** Primary variant dark mode background class */
    darkPrimaryColor?: string;
    /** Primary variant dark mode hover class */
    darkPrimaryHoverColor?: string;

    /** Secondary variant background class */
    secondaryColor?: string;
    /** Secondary variant hover class */
    secondaryHoverColor?: string;
    /** Secondary variant dark mode background class */
    darkSecondaryColor?: string;
    /** Secondary variant dark mode hover class */
    darkSecondaryHoverColor?: string;

    /** Outline variant text/border class */
    outlineColor?: string;
    /** Outline variant hover class */
    outlineHoverColor?: string;
    /** Outline variant dark mode text/border class */
    darkOutlineColor?: string;
    /** Outline variant dark mode hover class */
    darkOutlineHoverColor?: string;

    /** Ghost variant text/bg class */
    ghostColor?: string;
    /** Ghost variant hover class */
    ghostHoverColor?: string;
    /** Ghost variant dark mode class */
    darkGhostColor?: string;
    /** Ghost variant dark mode hover class */
    darkGhostHoverColor?: string;
}

/**
 * A versatile button component with multiple variants and full color customization.
 * Supports both button and anchor rendering based on the `href` prop.
 * 
 * @example
 * ```tsx
 * <BasicButton label="Click me" variant="primary" onClick={() => {}} />
 * <BasicButton label="Link" href="/page" target="_blank" />
 * ```
 */
export const BasicButton = ({
    label,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    customStyles = {},
    href,
    target,

    // Default Colors
    primaryColor = "bg-blue-600",
    primaryHoverColor = "hover:bg-blue-700",
    darkPrimaryColor = "dark:bg-blue-600",
    darkPrimaryHoverColor = "dark:hover:bg-blue-500",

    secondaryColor = "bg-gray-100",
    secondaryHoverColor = "hover:bg-gray-200",
    darkSecondaryColor = "dark:bg-gray-800",
    darkSecondaryHoverColor = "dark:hover:bg-gray-700",

    outlineColor = "text-blue-600 border-blue-600",
    outlineHoverColor = "hover:bg-blue-50",
    darkOutlineColor = "dark:text-blue-400 dark:border-blue-400",
    darkOutlineHoverColor = "dark:hover:bg-blue-950",

    ghostColor = "text-gray-600 bg-transparent",
    ghostHoverColor = "hover:bg-gray-100",
    darkGhostColor = "dark:text-gray-300",
    darkGhostHoverColor = "dark:hover:bg-gray-800",
}: ButtonProps) => {

    const baseStyles = "relative group inline-flex justify-center items-center font-bold rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline";

    const variantStyles = {
        primary: `${primaryColor} text-white ${primaryHoverColor} focus:ring-blue-500 border-2 border-transparent ${darkPrimaryColor} ${darkPrimaryHoverColor}`,
        secondary: `${secondaryColor} text-gray-800 ${secondaryHoverColor} focus:ring-gray-500 border-2 border-transparent ${darkSecondaryColor} dark:text-gray-100 ${darkSecondaryHoverColor}`,
        outline: `bg-transparent ${outlineColor} border-2 ${outlineHoverColor} focus:ring-blue-500 ${darkOutlineColor} ${darkOutlineHoverColor}`,
        ghost: `${ghostColor} border-2 border-transparent ${ghostHoverColor} focus:ring-gray-500 ${darkGhostColor} ${darkGhostHoverColor}`,
    };

    const sizeStyles = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-5 py-2.5 text-base",
        large: "px-8 py-3.5 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${customStyles.container || ''} ${className}`;

    const content = (
        <span className={`relative z-10 flex items-center justify-center gap-2 ${customStyles.label || ''}`}>
            {label}
        </span>
    );

    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={combinedClasses}
            onClick={onClick}
        >
            {content}
        </button>
    );
};
