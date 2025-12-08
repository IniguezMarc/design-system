import React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard';

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

interface ContentGridProps {
    title?: string;
    items: GridItem[];
    layout?: 'grid' | 'list';
    itemButtonLabel?: string;
    onItemClick?: (id: string) => void;
    customStyles?: ContentGridSlots;
}

export const ContentGrid = ({
    title = "Featured Content",
    items,
    layout = 'grid',
    itemButtonLabel = "View Details",
    onItemClick,
    customStyles = {}
}: ContentGridProps) => {

    const gridClasses = layout === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        : 'flex flex-col gap-12 max-w-4xl mx-auto';

    return (
        <section className={`
      py-16 px-4 transition-colors duration-300
      bg-gray-50 dark:bg-gray-900
      ${customStyles.container || ''}
    `}>
            <div className="max-w-7xl mx-auto">
                {title && (
                    <div className="mb-12 text-start">
                        <h2 className={`
              text-4xl font-extrabold mb-4 tracking-tight transition-colors
              text-gray-900 dark:text-white
              ${customStyles.title || ''}
            `}>
                            {title}
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                )}

                <div className={gridClasses}>
                    {items.map((item) => (
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            tags={item.tags}
                            projectUrl={item.url}
                            orientation={layout === 'list' ? 'horizontal' : 'vertical'}
                            actionLabel={itemButtonLabel}
                            onViewProject={() => onItemClick?.(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};