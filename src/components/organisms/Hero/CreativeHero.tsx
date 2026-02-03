import { CreativeButton } from '../../atoms/Button/CreativeButton';
import { Typewriter } from '../../effects/Typewriter/Typewriter';
import { ParallaxOnScroll } from '../../effects/ParallaxOnScroll/ParallaxOnScroll';
import { FloatingElement } from '../../effects/FloatingElement/FloatingElement';
import { resolveColor } from '../../../utils/color-utils';

export interface CreativeHeroProps {
    /** Text for the status badge (e.g. "Available for work") */
    status?: string;
    /** Static prefix before the typewriter text */
    prefix?: string;
    /** Text(s) to type out. */
    typewriterText: string | string[];
    /** Delay before typing starts */
    typewriterDelay?: number;
    /** Typing speed */
    typewriterSpeed?: number;

    /** Subtitle text */
    subtitle: string;
    /** Part of the subtitle to highlight (bold/color) */
    subtitleHighlight?: string;

    /** Primary call to action */
    primaryAction?: { label: string; onClick: () => void };
    /** Secondary call to action */
    secondaryAction?: { label: string; onClick: () => void };

    /** Background configuration */
    backgroundEffect?: 'blobs' | 'none';

    // --- Color Props ---
    backgroundColor?: string;
    darkBackgroundColor?: string;
    highlightColor?: string; // used for typewriter cursor, subtitle highlight, blobs
    darkHighlightColor?: string;

    // Additional Granular Colors
    prefixColor?: string;
    darkPrefixColor?: string;
    statusColor?: string; // bg color for status
    darkStatusColor?: string;
    statusTextColor?: string;
    darkStatusTextColor?: string;

    // Typewriter text colors
    typewriterColor?: string;
    darkTypewriterColor?: string;
}

/**
 * A visually stunning hero section with typewriter effect, parallax animations,
 * floating background elements, and full color customization for light/dark modes.
 * 
 * @example
 * ```tsx
 * <CreativeHero
 *   status="Available for work"
 *   prefix="I create"
 *   typewriterText="Digital Experiences"
 *   subtitle="Building modern web applications"
 *   subtitleHighlight="that users love"
 *   primaryAction={{ label: "Contact", onClick: () => {} }}
 * />
 * ```
 */
export const CreativeHero = ({
    status,
    prefix,
    typewriterText,
    typewriterDelay,
    typewriterSpeed,
    subtitle,
    subtitleHighlight,
    primaryAction,
    secondaryAction,
    backgroundEffect,

    // Colors
    backgroundColor,
    darkBackgroundColor,
    highlightColor = '',
    darkHighlightColor = '',

    prefixColor,
    darkPrefixColor,
    statusColor,
    darkStatusColor,
    statusTextColor,
    darkStatusTextColor,

    typewriterColor,
    darkTypewriterColor,
}: CreativeHeroProps) => {

    // Resolve Colors
    const { className: bgClass, style: bgStyle } = resolveColor(backgroundColor, 'backgroundColor');
    const { className: darkBgClass, style: darkBgStyle } = resolveColor(darkBackgroundColor, 'backgroundColor');

    // Status Badge
    const { className: statusBgClass, style: statusBgStyle } = resolveColor(statusColor, 'backgroundColor');
    const { className: darkStatusBgClass, style: darkStatusBgStyle } = resolveColor(darkStatusColor, 'backgroundColor');
    const { className: statusTextClass, style: statusTextStyle } = resolveColor(statusTextColor, 'color');
    const { className: darkStatusTextClass, style: darkStatusTextStyle } = resolveColor(darkStatusTextColor, 'color');

    // Prefix
    const { className: prefixClass, style: prefixStyle } = resolveColor(prefixColor, 'color');
    const { className: darkPrefixClass, style: darkPrefixStyle } = resolveColor(darkPrefixColor, 'color');

    // Typewriter text
    const { className: typewriterClass, style: typewriterStyle } = resolveColor(typewriterColor, 'color');
    const { className: darkTypewriterClass, style: darkTypewriterStyle } = resolveColor(darkTypewriterColor, 'color');

    // Highlights Note: These are often composite classes (e.g., "bg-x text-x").
    // resolveColor supports strings, but for perfect color picker support for BOTH bg and text simultaneously,
    // we would need separate props. For now, we infer intent or map raw colors to the main trait.

    const highlightIsRaw = highlightColor.startsWith('#') || highlightColor.startsWith('rgb');

    // Extract text/bg parts if class
    const textHighlightClass = !highlightIsRaw ? (highlightColor.includes('text-') ? highlightColor.match(/text-[\w-]+/)?.[0] || 'text-purple-600' : 'text-purple-600') : '';
    const bgHighlightClass = !highlightIsRaw ? (highlightColor.includes('bg-') ? highlightColor.match(/bg-[\w-]+/)?.[0] || 'bg-purple-600' : 'bg-purple-600') : '';

    const darkHighlightIsRaw = darkHighlightColor.startsWith('#') || darkHighlightColor.startsWith('rgb');
    const darkTextHighlightClass = !darkHighlightIsRaw ? (darkHighlightColor.includes('text-') ? darkHighlightColor.match(/dark:text-[\w-]+/)?.[0] || 'dark:text-purple-500' : 'dark:text-purple-500') : '';
    const darkBgHighlightClass = !darkHighlightIsRaw ? (darkHighlightColor.includes('bg-') ? darkHighlightColor.match(/dark:bg-[\w-]+/)?.[0] || 'dark:bg-purple-500' : 'dark:bg-purple-500') : '';

    // If raw, we use inline styling
    const textHighlightStyle = highlightIsRaw ? { color: highlightColor } : {};
    const darkTextHighlightStyle = darkHighlightIsRaw ? { color: darkHighlightColor } : {};
    const bgHighlightStyle = highlightIsRaw ? { backgroundColor: highlightColor } : {};
    const darkBgHighlightStyle = darkHighlightIsRaw ? { backgroundColor: darkHighlightColor } : {};


    return (
        <section
            className={`relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-300 ${bgClass || ''} ${darkBgClass || ''}`}
            style={{ ...bgStyle, ...darkBgStyle }}
        >

            {/* BACKGROUND EFFECTS */}
            {backgroundEffect === 'blobs' && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                    }}
                >
                    <FloatingElement duration={8} yOffset={50} className="absolute top-1/4 left-1/4 opacity-30 mix-blend-multiply dark:mix-blend-normal">
                        <div
                            className={`w-[500px] h-[500px] rounded-full blur-[120px] ${bgHighlightClass} ${darkBgHighlightClass}`}
                            style={{ ...bgHighlightStyle, ...darkBgHighlightStyle }}
                        />
                    </FloatingElement>
                    <FloatingElement duration={10} yOffset={-40} delay={1} className="absolute bottom-1/4 right-1/4 opacity-20 mix-blend-multiply dark:mix-blend-normal">
                        <div className="w-[600px] h-[600px] bg-blue-400 dark:bg-blue-600 rounded-full blur-[120px]" />
                    </FloatingElement>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* STATUS BADGE */}
                    {status && (
                        <ParallaxOnScroll speed={-0.2}>
                            <div
                                className={`inline-block px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 backdrop-blur-sm text-sm mb-6 transition-colors duration-300 ${statusBgClass || ''} ${darkStatusBgClass || ''} ${statusTextClass || ''} ${darkStatusTextClass || ''}`}
                                style={{ ...statusBgStyle, ...darkStatusBgStyle, ...statusTextStyle, ...darkStatusTextStyle }}
                            >
                                {status}
                            </div>
                        </ParallaxOnScroll>
                    )}

                    {/* HEADLINE */}
                    <div className="min-h-[160px] md:min-h-[200px] flex items-center justify-center -mt-4">
                        <div className="flex flex-col items-center">
                            {prefix && (
                                <span
                                    className={`block text-3xl md:text-5xl font-bold mb-4 ${prefixClass || ''} ${darkPrefixClass || ''}`}
                                    style={{ ...prefixStyle, ...darkPrefixStyle }}
                                >
                                    {prefix}
                                </span>
                            )}
                            <Typewriter
                                text={Array.isArray(typewriterText) ? typewriterText[0] : typewriterText}
                                speed={typewriterSpeed}
                                delay={typewriterDelay}
                                className={`text-4xl md:text-7xl lg:text-8xl font-black tracking-tight ${typewriterClass || 'text-gray-900'} ${darkTypewriterClass || 'dark:text-white'}`}
                                style={{ ...typewriterStyle, ...darkTypewriterStyle }}
                                cursorClassName={`${textHighlightClass} ${darkTextHighlightClass}`}
                                cursorStyle={{ ...textHighlightStyle, ...darkTextHighlightStyle }}
                            />
                        </div>
                    </div>

                    {/* SUBTITLE */}
                    <ParallaxOnScroll speed={0.3}>
                        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mt-2 mb-10 transition-colors duration-300">
                            {subtitle}{' '}
                            {subtitleHighlight && (
                                <span
                                    className={`font-semibold transition-colors duration-300 ${textHighlightClass} ${darkTextHighlightClass}`}
                                    style={{ ...textHighlightStyle, ...darkTextHighlightStyle }}
                                >
                                    {subtitleHighlight}.
                                </span>
                            )}
                        </div>
                    </ParallaxOnScroll>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryAction && (
                            <CreativeButton
                                label={primaryAction.label}
                                onClick={primaryAction.onClick}
                                variant="magnetic"
                                className="text-base"
                            />
                        )}
                        {secondaryAction && (
                            <CreativeButton
                                label={secondaryAction.label}
                                onClick={secondaryAction.onClick}
                                variant="glow"
                                primaryColor="#a855f7" // purple-500 matches default theme
                                className="text-base"
                            />
                        )}
                    </div>

                    {/* SCROLL INDICATOR */}
                    <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600">
                        <span className="text-2xl">↓</span>
                    </div>

                </div>
            </div>

            {/* FADE OUT GRADIENT */}


        </section >
    );
};
