import React, { useRef, useState } from 'react';
import { motion, type HTMLMotionProps, AnimatePresence } from 'framer-motion';

/**
 * Props for the CreativeButton component.
 * Extends Framer Motion's button props for animation support.
 */
export interface CreativeButtonProps extends HTMLMotionProps<"button"> {
    /** Visual variant style */
    variant?:
    | 'magnetic'
    | 'glow'
    | 'cyber'
    | 'shimmer'
    | 'threeD'
    | 'delete-expand'
    | 'arrow-slide'
    | 'pushable'
    | 'retro-shadow';
    /** Button text */
    label: string;

    // Light Mode Colors
    /** Default/fallback background color (hex) */
    primaryColor?: string;
    /** Explicit background override (hex) */
    customColor?: string;
    /** Click animation color (hex) */
    animationColor?: string;
    /** Custom text color (hex) */
    textColor?: string;

    // Dark Mode Colors
    /** Dark mode fallback color (hex) */
    darkPrimaryColor?: string;
    /** Dark mode background override (hex) */
    darkCustomColor?: string;
    /** Dark mode animation color (hex) */
    darkAnimationColor?: string;
    /** Dark mode text color (hex) */
    darkTextColor?: string;

    /** Click animation style */
    clickAnimation?: 'burst' | 'ring' | 'pulse' | 'none';
    /** Optional icon element */
    icon?: React.ReactNode;
}

/**
 * A creative button component with 9 unique animated variants.
 * Features magnetic effects, glow, cyber styling, shimmer, 3D depth,
 * expand animations, arrow slides, pushable depth, and retro shadows.
 * 
 * @example
 * ```tsx
 * <CreativeButton label="Glow" variant="glow" primaryColor="#8b5cf6" />
 * <CreativeButton label="Magnetic" variant="magnetic" clickAnimation="ring" />
 * ```
 */
export const CreativeButton: React.FC<CreativeButtonProps> = ({
    variant = 'glow',
    label,
    className = '',

    primaryColor,
    darkPrimaryColor,

    customColor,
    darkCustomColor,

    animationColor,
    darkAnimationColor,

    textColor,
    darkTextColor,

    clickAnimation = 'burst',
    icon,
    onClick,
    style,
    ...props
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);

    // 1. Define Defaults per Variant to "Respect Defaults"
    const getVariantDefaults = () => {
        switch (variant) {
            case 'magnetic': return {
                light: '#171717', dark: '#ffffff',
                anim: '#ffffff', animDark: '#171717',
                text: '#ffffff', textDark: '#171717'
            }; // Neutral-900 / White
            case 'glow': return {
                light: '#2563eb', dark: '#3b82f6',
                anim: '#60a5fa', animDark: '#93c5fd',
                text: '#ffffff', textDark: '#ffffff'
            }; // Blue-600 / Blue-500
            case 'cyber': return {
                light: '#000000', dark: '#171717',
                anim: '#00ff9d', animDark: '#00ff9d',
                text: '#ffffff', textDark: '#ffffff'
            }; // Black / Neutral
            case 'shimmer': return {
                light: '#9333ea', dark: '#a855f7',
                anim: '#2563eb', animDark: '#3b82f6',
                text: '#ffffff', textDark: '#ffffff'
            }; // Purple -> Blue
            case 'threeD': return {
                light: '#6366f1', dark: '#6366f1',
                anim: '#4338ca', animDark: '#4338ca',
                text: '#ffffff', textDark: '#ffffff'
            }; // Indigo-500
            case 'delete-expand': return {
                light: '#141414', dark: '#ffffff',
                anim: '#ff4545', animDark: '#ff4545',
                text: '#ffffff', textDark: '#000000'
            }; // Dark / White -> Red Hover
            case 'arrow-slide': return {
                light: 'transparent', dark: 'transparent',
                anim: 'currentColor', animDark: 'currentColor',
                text: '#000000', textDark: '#ffffff'
            };
            case 'pushable': return {
                light: 'hsl(248, 53%, 58%)', dark: 'hsl(248, 53%, 58%)',
                anim: 'transparent', animDark: 'transparent',
                text: '#ffffff', textDark: '#ffffff'
            };
            case 'retro-shadow': return {
                light: '#000000', dark: '#ffffff',
                anim: '#ff90e8', animDark: '#ff90e8',
                text: '#ffffff', textDark: '#000000'
            };
            default: return {
                light: '#2563eb', dark: '#3b82f6',
                anim: '#ffffff', animDark: '#ffffff',
                text: '#ffffff', textDark: '#ffffff'
            };
        }
    };

    const defaults = getVariantDefaults();

    // 2. Resolve Final Colors (Override > Prop > Default)
    // We treat primaryColor as the "Main Background"
    const effectiveLight = customColor || primaryColor || defaults.light;
    const effectiveDark = darkCustomColor || darkPrimaryColor || defaults.dark;

    // We treat animationColor as "Secondary/Hover/Effect"
    const effectiveAnim = animationColor || defaults.anim;
    const effectiveAnimDark = darkAnimationColor || defaults.animDark;

    // Resolve Text Colors
    const effectiveText = textColor || defaults.text;
    const effectiveTextDark = darkTextColor || defaults.textDark;

    // 3. Define CSS Variables
    const styleVariables = {
        '--creative-bg': effectiveLight,
        '--creative-bg-dark': effectiveDark,

        '--creative-anim': effectiveAnim,
        '--creative-anim-dark': effectiveAnimDark,

        '--creative-text': effectiveText,
        '--creative-text-dark': effectiveTextDark,

        ...style
    } as React.CSSProperties;

    // Magnetic Effect Logic
    const handleMouseMove = (e: React.MouseEvent) => {
        if (variant === 'magnetic' && buttonRef.current) {
            const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - (left + width / 2);
            const y = e.clientY - (top + height / 2);
            setPosition({ x: x * 0.2, y: y * 0.2 });
        }
    };

    const handleMouseLeave = () => {
        if (variant === 'magnetic') {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (clickAnimation !== 'none') {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 600);
        }
        if (onClick) onClick(e);
    };

    const renderClickAnimation = () => {
        if (!isClicking || clickAnimation === 'none') return null;

        switch (clickAnimation) {
            case 'burst':
                return (
                    <span className="absolute inset-0 pointer-events-none flex justify-center items-center z-[100]">
                        {[...Array(6)].map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                                animate={{
                                    opacity: 0,
                                    scale: 1.5,
                                    x: Math.cos(i * 60 * (Math.PI / 180)) * 60,
                                    y: Math.sin(i * 60 * (Math.PI / 180)) * 60
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute w-2 h-2 rounded-full bg-[var(--creative-anim)] dark:bg-[var(--creative-anim-dark)]"
                            />
                        ))}
                    </span>
                );

            case 'ring':
                return (
                    <motion.span
                        initial={{ opacity: 0.8, scale: 0.8 }}
                        animate={{ opacity: 0, scale: 2.5 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 rounded-full border-2 z-[100] border-[var(--creative-anim)] dark:border-[var(--creative-anim-dark)]"
                    />
                );

            case 'pulse':
                return (
                    <motion.span
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 rounded-full bg-white mix-blend-overlay z-[100]"
                    />
                );

            default:
                return null;
        }
    };

    // Render Variants
    const renderContent = () => {
        switch (variant) {
            case 'magnetic':
                return (
                    <motion.div
                        animate={{ x: position.x, y: position.y }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        className="relative z-10"
                    >
                        {label}
                    </motion.div>
                );

            case 'glow':
                return (
                    <>
                        <span className="relative z-20 text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{label}</span>

                        {/* Base Background Color */}
                        <div
                            className="absolute inset-0 z-0 transition-colors duration-300 bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)]"
                        />

                        {/* Inner Light Gradient */}
                        <div
                            className="absolute inset-0 z-10 opacity-70"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)'
                            }}
                        />

                        {/* Edge Shadow */}
                        <div
                            className="absolute inset-0 z-10 rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
                        />

                        {/* Outer Bloom */}
                        <div
                            className="absolute inset-0 -z-10 rounded-lg opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-75 bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)]"
                        />
                    </>
                );

            case 'cyber':
                return (
                    <>
                        <span className="relative z-10 font-mono tracking-widest uppercase">{label}</span>
                        <span className="absolute top-0 left-0 -ml-1 -mt-1 h-full w-full border-l-2 border-t-2 border-[var(--creative-text)] dark:border-[var(--creative-text-dark)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                        <span className="absolute bottom-0 right-0 -mr-1 -mb-1 h-full w-full border-r-2 border-b-2 border-[var(--creative-text)] dark:border-[var(--creative-text-dark)] opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                    </>
                );

            case 'shimmer':
                return (
                    <>
                        <span className="relative z-10">{label}</span>
                        <motion.div
                            className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            animate={{ left: ['-100%', '200%'] }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 3,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </>
                );

            case 'threeD':
                return <span className="relative z-10 translate-y-[-4px] group-hover:translate-y-[-6px] group-active:translate-y-[-2px] transition-transform duration-75">{label}</span>;

            case 'delete-expand':
                return (
                    <>
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[30%]">
                            {icon ? (
                                <span className="flex h-full w-full items-center justify-center">
                                    {icon}
                                </span>
                            ) : (
                                <svg viewBox="0 0 448 512" className="h-5 w-5 fill-current">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            )}
                        </span>
                        <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-sm opacity-0 transition-all duration-75 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:duration-300 group-hover:delay-75">
                            {label}
                        </span>
                    </>
                );

            case 'arrow-slide':
                return (
                    <div className="flex items-center gap-2 px-6 py-3">
                        <span className="text-sm uppercase tracking-widest transition-all duration-300 group-hover:pr-4">
                            {label}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="10"
                            viewBox="0 0 46 16"
                            className="h-2.5 w-6 -translate-x-2 fill-current transition-all duration-300 group-hover:translate-x-0 group-active:scale-90"
                        >
                            <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)" />
                        </svg>
                        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
                    </div>
                );

            case 'pushable':
                return (
                    <>
                        <span className="absolute top-0 left-0 h-full w-full rounded-lg bg-black/20 blur-[2px] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-active:translate-y-[1px]" />
                        <span
                            className="absolute top-0 left-0 h-full w-full rounded-lg transition-all duration-600"
                            style={{
                                background: `linear-gradient(to right, var(--creative-bg) 0%, #1e1b4b 100%)`,
                                filter: 'brightness(0.7)'
                            }}
                        />
                        <span
                            className="relative block -translate-y-1 rounded-lg px-8 py-4 bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-active:-translate-y-0.5"
                        >
                            {label}
                        </span>
                    </>
                );

            case 'retro-shadow':
                return (
                    <div
                        className="relative border border-black dark:border-white px-8 py-3 text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] transition-all duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-[var(--creative-anim)] dark:group-hover:bg-[var(--creative-anim-dark)] group-hover:text-black group-hover:shadow-[4px_4px_0px_#000] dark:group-hover:shadow-[4px_4px_0px_#fff] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)]"
                    >
                        {label}
                    </div>
                );

            default:
                return label;
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'magnetic':
                // Now safe to use vars since defaults are correct
                return 'bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] border border-neutral-700 hover:border-neutral-500 rounded-full px-8 py-4';

            case 'glow':
                return `text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] rounded-lg px-6 py-3 overflow-visible relative shadow-lg`;

            case 'cyber':
                return `bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] border-2 px-6 py-2 clip-path-polygon hover:bg-opacity-80`;

            case 'shimmer':
                return `bg-gradient-to-r from-[var(--creative-bg)] to-[var(--creative-anim)] dark:from-[var(--creative-bg-dark)] dark:to-[var(--creative-anim-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] px-6 py-3 rounded-md overflow-hidden`;

            case 'threeD':
                // Using rbga shadows for compatibility
                return `bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] border-2 border-black/20 dark:border-white/20 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3)] dark:hover:shadow-[0_6px_0_0_rgba(255,255,255,0.2)] active:shadow-none active:translate-y-[4px] rounded-none px-6 py-3`;

            case 'delete-expand':
                return 'w-[50px] h-[50px] bg-[var(--creative-bg)] dark:bg-[var(--creative-bg-dark)] text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] p-0 rounded-[25px] hover:w-[150px] hover:bg-[var(--creative-anim)] dark:hover:bg-[var(--creative-anim-dark)] shadow-lg overflow-hidden transition-[width,background-color] duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]';

            case 'arrow-slide':
                return 'text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] bg-transparent p-0';

            case 'pushable':
                return 'bg-transparent text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] p-0 border-none outline-offset-4';

            case 'retro-shadow':
                return 'bg-transparent text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] p-0 border-none';

            default:
                return 'bg-blue-600 text-[var(--creative-text)] dark:text-[var(--creative-text-dark)] px-4 py-2 rounded';
        }
    };

    return (
        <div className="relative inline-block" style={styleVariables}>
            <motion.button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={variant === 'cyber' ? { borderColor: 'var(--creative-bg)', color: 'var(--creative-bg)' } : {}}
                whileHover={['threeD', 'pushable', 'retro-shadow', 'arrow-slide', 'delete-expand'].includes(variant) ? {} : { scale: variant !== 'magnetic' ? 1.05 : 1 }}
                whileTap={['threeD', 'pushable', 'retro-shadow', 'arrow-slide', 'delete-expand'].includes(variant) ? {} : { scale: 0.95 }}
                className={`relative inline-flex items-center justify-center font-bold transition-all focus:outline-none ${getVariantClasses()} ${className} group`}
                {...props}
            >
                {renderContent()}
            </motion.button>

            <AnimatePresence>
                {renderClickAnimation()}
            </AnimatePresence>
        </div>
    );
};
