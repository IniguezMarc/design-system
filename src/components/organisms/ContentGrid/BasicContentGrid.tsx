
import { BasicProjectCard, type ProjectCardSlots } from '../../molecules/ProjectCard/BasicProjectCard';
import type { ReactNode } from 'react';

export interface GridItem {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
}

export interface ContentGridSlots {
    container?: string;
    title?: string;
}

export interface BasicContentGridProps {
    title?: string;
    items: GridItem[];
    layout?: 'grid' | 'list';
    itemButtonLabel?: string;
    onItemClick?: (id: string) => void;
    customStyles?: ContentGridSlots;

    /**
     * Custom styles passed down to each ProjectCard
     */
    cardCustomStyles?: ProjectCardSlots;

    /**
     * Optional wrapper for items, allowing injection of animations (e.g. ScrollReveal)
     */
    renderItemWrapper?: (children: ReactNode, item: GridItem, index: number) => ReactNode;

    // --- Color Props ---
    backgroundColor?: string;
    darkBackgroundColor?: string;
    titleColor?: string;
    darkTitleColor?: string;
    /**
     * Optional renderer for the action button of each item
     */
    renderItemAction?: (item: GridItem) => React.ReactNode;
    children?: ReactNode;
}

export const BasicContentGrid = ({
    title = "Featured Content",
    items,
    layout = 'grid',
    itemButtonLabel = "View Details",
    onItemClick,
    customStyles = {},
    cardCustomStyles,
    renderItemWrapper,

    // Default Colors
    backgroundColor = "bg-gray-50",
    darkBackgroundColor = "dark:bg-gray-900",
    titleColor = "text-gray-900",
    darkTitleColor = "dark:text-white",
    renderItemAction,
    children
}: BasicContentGridProps) => {

    const gridClasses = layout === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'
        : 'flex flex-col gap-12 max-w-4xl mx-auto';

    return (
        <section className={`
      py-16 px-4 transition-colors duration-300
      ${backgroundColor} ${darkBackgroundColor}
      ${customStyles.container || ''}
    `}>
            <div className="max-w-7xl mx-auto">
                {title && (
                    <div className="mb-12 text-start">
                        <h2 className={`
              text-4xl font-extrabold mb-4 tracking-tight transition-colors
              ${titleColor} ${darkTitleColor}
              ${customStyles.title || ''}
            `}>
                            {title}
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                )}

                <div className={gridClasses}>
                    {items.map((item, index) => {
                        const card = (
                            <BasicProjectCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                tags={item.tags}
                                projectUrl={item.url}
                                orientation={layout === 'list' ? 'horizontal' : 'vertical'}
                                actionLabel={itemButtonLabel}
                                onViewProject={() => onItemClick?.(item.id)}
                                customStyles={cardCustomStyles}
                                renderAction={renderItemAction ? () => renderItemAction(item) : undefined}
                            />
                        );

                        if (renderItemWrapper) {
                            // We use a div with contents display to avoid breaking grid layout, 
                            // but allowing the wrapper (which might be ScrollReveal) to take effect?
                            // ScrollReveal renders a motion.div.
                            // If we wrap in a div with contents, the motion.div becomes the grid item. Correct.
                            return <div key={item.id} className="contents">{renderItemWrapper(card, item, index)}</div>;
                        }

                        return <div key={item.id} className="contents">{card}</div>;
                    })}
                </div>
            </div>
            {children}
        </section>
    );
};
