import React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard';

// Hacemos la interfaz más genérica
export interface GridItem {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

interface ContentGridProps {
    title?: string;
    /** Elementos a mostrar (antes projects) */
    items: GridItem[];
    layout?: 'grid' | 'list';
    /** Texto del botón de cada tarjeta */
    itemButtonLabel?: string;
    onItemClick?: (id: string) => void;
}

export const ContentGrid = ({
    title = "Contenido Destacado",
    items,
    layout = 'grid',
    itemButtonLabel = "Ver Detalles",
    onItemClick
}: ContentGridProps) => {

    const gridClasses = layout === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        : 'flex flex-col gap-12 max-w-4xl mx-auto';

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {title && (
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{title}</h2>
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