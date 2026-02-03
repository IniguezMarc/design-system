import { resolveColor } from '../../../utils/color-utils';
import type { ReactNode } from 'react';

export interface TimelineItem {
    id: string;
    date: string;
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
}

export interface BasicTimelineProps {
    items: TimelineItem[];
    layout?: 'left' | 'center' | 'right';
    renderIcon?: (item: TimelineItem, index: number) => ReactNode;
    className?: string;

    // Colors
    lineColor?: string;
    darkLineColor?: string;
    dotColor?: string;
    darkDotColor?: string;
    cardBackgroundColor?: string;
    darkCardBackgroundColor?: string;
    textColor?: string;
    darkTextColor?: string;
    dateColor?: string;
    darkDateColor?: string;
    subtitleColor?: string;
    darkSubtitleColor?: string;
    descColor?: string;
    darkDescColor?: string;
    tagBgColor?: string;
    darkTagBgColor?: string;
    tagTextColor?: string;
    darkTagTextColor?: string;
}

export const BasicTimeline = ({
    items,
    layout = 'left',
    renderIcon,
    className = '',

    // Default Colors
    lineColor = 'bg-gray-200',
    darkLineColor = 'dark:bg-gray-700',
    dotColor = 'bg-blue-500',
    darkDotColor = 'dark:bg-blue-400',
    cardBackgroundColor = 'bg-white',
    darkCardBackgroundColor = 'dark:bg-gray-800',
    textColor = 'text-gray-900',
    darkTextColor = 'dark:text-white',
    dateColor = 'text-gray-500',
    darkDateColor = 'dark:text-gray-400',
    subtitleColor = 'text-gray-700',
    darkSubtitleColor = 'dark:text-gray-300',
    descColor = 'text-gray-600',
    darkDescColor = 'dark:text-gray-400',
    tagBgColor = 'bg-gray-100',
    darkTagBgColor = 'dark:bg-gray-700',
    tagTextColor = 'text-gray-600',
    darkTagTextColor = 'dark:text-gray-300',
}: BasicTimelineProps) => {

    const isCenter = layout === 'center';

    // Helper to resolve pairs
    const resolvePair = (light: string | undefined, dark: string | undefined, prop: 'color' | 'backgroundColor' | 'borderColor') => {
        const l = resolveColor(light, prop);
        const d = resolveColor(dark, prop);
        return {
            className: `${l.className || ''} ${d.className || ''}`,
            style: { ...l.style, ...d.style }
        };
    };

    const lineStyle = resolvePair(lineColor, darkLineColor, 'backgroundColor');
    const dotStyle = resolvePair(dotColor, darkDotColor, 'backgroundColor');
    const cardStyle = resolvePair(cardBackgroundColor, darkCardBackgroundColor, 'backgroundColor');
    const titleStyle = resolvePair(textColor, darkTextColor, 'color');
    const dateStyle = resolvePair(dateColor, darkDateColor, 'color');
    const subtitleStyle = resolvePair(subtitleColor, darkSubtitleColor, 'color');
    const descStyle = resolvePair(descColor, darkDescColor, 'color');
    const tagBgStyle = resolvePair(tagBgColor, darkTagBgColor, 'backgroundColor');
    const tagTextStyle = resolvePair(tagTextColor, darkTagTextColor, 'color');

    return (
        <div className={`relative ${className}`}>
            {/* Vertical Line */}
            <div
                className={`
                    absolute top-0 bottom-0 w-0.5 
                    ${isCenter ? 'left-1/2 -translate-x-1/2' : 'left-6'} 
                    ${lineStyle.className} 
                    transition-colors duration-300
                `}
                style={lineStyle.style}
            ></div>

            <div className="flex flex-col gap-12">
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;

                    // Dot position
                    const dotPosClass = isCenter
                        ? 'left-1/2 -translate-x-1/2'
                        : 'left-6 -translate-x-1/2';

                    // Card positioning classes
                    const cardDataClass = isCenter
                        ? (isEven ? 'mr-auto w-full md:w-[calc(50%-3rem)] md:mr-[50%] md:pr-10 md:ml-0 md:text-right'
                            : 'ml-auto w-full md:w-[calc(50%-3rem)] md:ml-[50%] md:pl-10 md:mr-0 md:text-left')
                        : 'ml-12 w-full';

                    // Connector line position
                    const connectorClass = isCenter
                        ? (isEven ? '-right-6' : '-left-6')
                        : '-left-6';

                    return (
                        <div key={item.id} className={`relative flex items-center ${isCenter ? (isEven ? 'flex-row-reverse' : 'flex-row') : 'flex-row'}`}>

                            {/* Dot / Icon */}
                            <div
                                className={`
                                    absolute z-10 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 box-content
                                    ${dotPosClass}
                                    ${dotStyle.className}
                                    shadow-sm transition-colors duration-300
                                `}
                                style={dotStyle.style}
                            >
                                {renderIcon && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {renderIcon(item, index)}
                                    </div>
                                )}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`
                                    relative p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm
                                    ${cardStyle.className}
                                    ${cardDataClass}
                                    group hover:shadow-md transition-all duration-300
                                `}
                                style={cardStyle.style}
                            >
                                {/* Connector Line (Horizontal) - Optional visual flair */}
                                <div
                                    className={`
                                        hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-6 
                                        ${lineStyle.className}
                                        ${connectorClass}
                                    `}
                                    style={lineStyle.style}
                                ></div>

                                <span
                                    className={`
                                        inline-block text-sm font-semibold mb-2
                                        ${dateStyle.className}
                                    `}
                                    style={dateStyle.style}
                                >
                                    {item.date}
                                </span>
                                <h3
                                    className={`
                                        text-xl font-bold mb-1
                                        ${titleStyle.className}
                                    `}
                                    style={titleStyle.style}
                                >
                                    {item.title}
                                </h3>
                                {item.subtitle && (
                                    <h4
                                        className={`text-md font-medium mb-3 ${subtitleStyle.className}`}
                                        style={subtitleStyle.style}
                                    >
                                        {item.subtitle}
                                    </h4>
                                )}
                                {item.description && (
                                    <p
                                        className={`text-base leading-relaxed ${descStyle.className}`}
                                        style={descStyle.style}
                                    >
                                        {item.description}
                                    </p>
                                )}
                                {item.tags && item.tags.length > 0 && (
                                    <div className={`flex flex-wrap gap-2 mt-4 ${isCenter && isEven ? 'md:justify-end' : ''}`}>
                                        {item.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${tagBgStyle.className} ${tagTextStyle.className}`}
                                                style={{ ...tagBgStyle.style, ...tagTextStyle.style }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
