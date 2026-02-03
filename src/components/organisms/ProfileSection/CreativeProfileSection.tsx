import { ScrollReveal } from '../../effects/ScrollReveal/ScrollReveal';

import { ParallaxOnScroll } from '../../effects/ParallaxOnScroll/ParallaxOnScroll';

export interface CreativeProfileSectionProps {
    /** Title of the section */
    title: string;
    /** Highlighted part of the title */
    titleHighlight?: string;

    /** Biography text (supports line breaks) */
    bio: string;

    /** Title for the philosophy/values box */
    philosophyTitle?: string;
    /** List of values/philosophy items */
    philosophyItems?: string[];

    /** Floating skills shown in the visual side */
    floatingSkills?: Array<{ label: string; color: string; speed: number; xOffset: number }>;



    // --- Color Props ---
    backgroundColor?: string;
    darkBackgroundColor?: string;
    accentColor?: string; // used for highlights and SVG
    darkAccentColor?: string;

    // Text Colors
    titleColor?: string;
    darkTitleColor?: string;
    bioTextColor?: string;
    darkBioTextColor?: string;

    // Philosophy Box Colors
    philosophyBgColor?: string;
    darkPhilosophyBgColor?: string;
    philosophyBorderColor?: string;
    darkPhilosophyBorderColor?: string;
    philosophyTextColor?: string;
    darkPhilosophyTextColor?: string;
    tickColor?: string;
    darkTickColor?: string;
}

import { resolveColor } from '../../../utils/color-utils';

export const CreativeProfileSection = ({
    title,
    titleHighlight,
    bio,
    philosophyTitle,
    philosophyItems = [],
    floatingSkills = [],


    // Colors
    backgroundColor = "bg-white",
    darkBackgroundColor = "dark:bg-black",
    accentColor = "text-purple-600",
    darkAccentColor = "dark:text-purple-500",

    titleColor = "text-gray-900",
    darkTitleColor = "dark:text-white",
    bioTextColor = "text-gray-600",
    darkBioTextColor = "dark:text-gray-400",

    philosophyBgColor = "bg-gray-50",
    darkPhilosophyBgColor = "dark:bg-white/5",
    philosophyBorderColor = "border-gray-200",
    darkPhilosophyBorderColor = "dark:border-white/10",
    philosophyTextColor = "text-gray-600",
    darkPhilosophyTextColor = "dark:text-gray-300",
    tickColor = "text-green-500",
    darkTickColor = "dark:text-green-400",
}: CreativeProfileSectionProps) => {

    // Resolve Colors
    const { className: bgClass, style: bgStyle } = resolveColor(backgroundColor, 'backgroundColor');
    const { className: darkBgClass, style: darkBgStyle } = resolveColor(darkBackgroundColor, 'backgroundColor');

    // Text Colors
    const { className: titleClass, style: titleStyle } = resolveColor(titleColor, 'color');
    const { className: darkTitleClass, style: darkTitleStyle } = resolveColor(darkTitleColor, 'color');
    const { className: bioClass, style: bioStyle } = resolveColor(bioTextColor, 'color');
    const { className: darkBioClass, style: darkBioStyle } = resolveColor(darkBioTextColor, 'color');

    // Accent (Highlight & SVG)
    // Note: accentColor is used as text color in highlight span, and class in ScrollSvg.
    // We treat it primarily as text color for the span.
    const { className: accentClass, style: accentStyle } = resolveColor(accentColor, 'color');
    const { className: darkAccentClass, style: darkAccentStyle } = resolveColor(darkAccentColor, 'color');


    // Philosophy Box
    const { className: philBgClass, style: philBgStyle } = resolveColor(philosophyBgColor, 'backgroundColor');
    const { className: darkPhilBgClass, style: darkPhilBgStyle } = resolveColor(darkPhilosophyBgColor, 'backgroundColor');

    const { className: philBorderClass, style: philBorderStyle } = resolveColor(philosophyBorderColor, 'borderColor');
    const { className: darkPhilBorderClass, style: darkPhilBorderStyle } = resolveColor(darkPhilosophyBorderColor, 'borderColor');

    const { className: philTextClass, style: philTextStyle } = resolveColor(philosophyTextColor, 'color');
    const { className: darkPhilTextClass, style: darkPhilTextStyle } = resolveColor(darkPhilosophyTextColor, 'color');

    const { className: tickClass, style: tickStyle } = resolveColor(tickColor, 'color');
    const { className: darkTickClass, style: darkTickStyle } = resolveColor(darkTickColor, 'color');


    return (
        <section
            className={`relative py-20 lg:py-40 border-none transition-colors duration-300 ${bgClass || ''} ${darkBgClass || ''}`}
            style={{ ...bgStyle, ...darkBgStyle }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-24">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="flex-1 w-full order-2 md:order-1">
                        <ScrollReveal base="fade" direction="right">
                            <span
                                className={`block text-4xl md:text-6xl font-bold leading-tight mb-8 ${titleClass || ''} ${darkTitleClass || ''}`}
                                style={{ ...titleStyle, ...darkTitleStyle }}
                            >
                                {title} <br />
                                {titleHighlight && (
                                    <span
                                        className={`${accentClass || ''} ${darkAccentClass || ''}`}
                                        style={{ ...accentStyle, ...darkAccentStyle }}
                                    >
                                        {titleHighlight}.
                                    </span>
                                )}
                            </span>
                        </ScrollReveal>

                        <div className="space-y-8">
                            <ScrollReveal base="fade" direction="up" delay={0.2}>
                                <p
                                    className={`text-xl leading-relaxed transition-colors duration-300 whitespace-pre-line ${bioClass || ''} ${darkBioClass || ''}`}
                                    style={{ ...bioStyle, ...darkBioStyle }}
                                >
                                    {bio}
                                </p>
                            </ScrollReveal>

                            {philosophyItems.length > 0 && (
                                <ScrollReveal base="fade" direction="up" delay={0.4}>
                                    <div
                                        className={`p-8 rounded-2xl backdrop-blur-sm transition-colors duration-300 shadow-sm dark:shadow-none border ${philBgClass || ''} ${darkPhilBgClass || ''} ${philBorderClass || ''} ${darkPhilBorderClass || ''}`}
                                        style={{ ...philBgStyle, ...darkPhilBgStyle, ...philBorderStyle, ...darkPhilBorderStyle }}
                                    >
                                        {philosophyTitle && (
                                            <h3
                                                className={`text-2xl font-bold mb-4 ${titleClass || ''} ${darkTitleClass || ''}`}
                                                style={{ ...titleStyle, ...darkTitleStyle }}
                                            >
                                                {philosophyTitle}
                                            </h3>
                                        )}
                                        <ul
                                            className={`space-y-3 ${philTextClass || ''} ${darkPhilTextClass || ''}`}
                                            style={{ ...philTextStyle, ...darkPhilTextStyle }}
                                        >
                                            {philosophyItems.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <span
                                                        className={`${tickClass || ''} ${darkTickClass || ''}`}
                                                        style={{ ...tickStyle, ...darkTickStyle }}
                                                    >✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>
                    </div>

                    {/* RIGHT: VISUAL WITH SVG & PARALLAX */}
                    <div className="flex-1 w-full h-full relative min-h-[500px] flex items-center justify-center order-1 md:order-2">


                        {/* Floating Skills */}
                        <div className="relative z-10 flex flex-col gap-24 items-end pr-10 w-full">
                            {floatingSkills.map((skill) => (
                                <ParallaxOnScroll key={skill.label} speed={skill.speed}>
                                    <div
                                        className={`px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl transition-transform duration-300`}
                                        style={{ transform: `translateX(${skill.xOffset}px)` }}
                                    >
                                        <span className={`font-bold ${skill.color}`}>{skill.label}</span>
                                    </div>
                                </ParallaxOnScroll>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
};
