import { ScrollReveal } from '../../effects/ScrollReveal/ScrollReveal';
import { Timeline } from './Timeline';
import type { TimelineItem } from './BasicTimeline';
import { resolveColor } from '../../../utils/color-utils';

export interface CreativeTimelineProps {
    items: TimelineItem[];
    title?: string;
    subtitle?: string;

    // Colors
    backgroundColor?: string;
    darkBackgroundColor?: string;
    lineColor?: string;
    dotColor?: string;
    cardBackgroundColor?: string;

    // Text & Element Colors
    titleColor?: string;
    darkTitleColor?: string;
    subtitleColor?: string;
    darkSubtitleColor?: string;
    dateColor?: string;
    darkDateColor?: string;
    descColor?: string;
    darkDescColor?: string;
    tagBgColor?: string;
    darkTagBgColor?: string;
    tagTextColor?: string;
    darkTagTextColor?: string;
}


export const CreativeTimeline = ({
    items,
    title = "Professional Journey",
    subtitle = "A timeline of my career and growth in the tech industry.",
    backgroundColor = "bg-gray-50",
    darkBackgroundColor = "dark:bg-gray-900/50",
    lineColor = "bg-gray-200 dark:bg-gray-700",
    dotColor = "bg-purple-600 dark:bg-purple-500",
    cardBackgroundColor = "bg-white dark:bg-gray-800",

    titleColor = "text-gray-900",
    darkTitleColor = "dark:text-white",
    subtitleColor = "text-gray-600",
    darkSubtitleColor = "dark:text-gray-400",
    dateColor,
    darkDateColor,
    descColor,
    darkDescColor,
    tagBgColor,
    darkTagBgColor,
    tagTextColor,
    darkTagTextColor,
}: CreativeTimelineProps) => {

    // Resolve Section Colors
    const { className: bgClass, style: bgStyle } = resolveColor(backgroundColor, 'backgroundColor');
    const { className: darkBgClass, style: darkBgStyle } = resolveColor(darkBackgroundColor, 'backgroundColor');

    const { className: titleClass, style: titleStyle } = resolveColor(titleColor, 'color');
    const { className: darkTitleClass, style: darkTitleStyle } = resolveColor(darkTitleColor, 'color');

    const { className: subClass, style: subStyle } = resolveColor(subtitleColor, 'color');
    const { className: darkSubClass, style: darkSubStyle } = resolveColor(darkSubtitleColor, 'color');

    return (
        <section
            className={`py-20 lg:py-32 relative transition-colors duration-300 ${bgClass || ''} ${darkBgClass || ''}`}
            style={{ ...bgStyle, ...darkBgStyle }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal base="fade" direction="up">
                    <div className="mb-16 text-center">
                        {title && (
                            <h2
                                className={`text-3xl md:text-4xl font-bold mb-4 ${titleClass || ''} ${darkTitleClass || ''}`}
                                style={{ ...titleStyle, ...darkTitleStyle }}
                            >
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p
                                className={`text-lg max-w-2xl mx-auto leading-relaxed ${subClass || ''} ${darkSubClass || ''}`}
                                style={{ ...subStyle, ...darkSubStyle }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                </ScrollReveal>

                <Timeline
                    items={items}
                    // Pass color props through to Timeline/BasicTimeline
                    // BasicTimeline needs to be updated to support these being raw values if resolved here?
                    // No, CreativeTimeline passes them raw. BasicTimeline will use resolveColor.
                    lineColor={lineColor}
                    dotColor={dotColor}
                    cardBackgroundColor={cardBackgroundColor}
                    textColor={titleColor}
                    darkTextColor={darkTitleColor}
                    dateColor={dateColor}
                    darkDateColor={darkDateColor}
                    subtitleColor={subtitleColor}
                    darkSubtitleColor={darkSubtitleColor}
                    descColor={descColor}
                    darkDescColor={darkDescColor}
                    tagBgColor={tagBgColor}
                    darkTagBgColor={darkTagBgColor}
                    tagTextColor={tagTextColor}
                    darkTagTextColor={darkTagTextColor}
                />
            </div>
        </section>
    );
};
