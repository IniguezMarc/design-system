import React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard';

// 1. Definimos el objeto Project
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

// 2. AQUÍ ES DONDE FALTABA EL 'layout' 👇
interface PortfolioGridProps {
    title?: string;
    projects: Project[];
    /** Grid = horizontal (3 col), List = vertical (1 col) */
    layout?: 'grid' | 'list';
    onProjectClick?: (id: string) => void;
}

export const PortfolioGrid = ({
    title = "Mis Proyectos",
    projects,
    layout = 'grid', // 3. Y aquí lo recibimos con valor por defecto
    onProjectClick
}: PortfolioGridProps) => {

    // Lógica para cambiar las clases según el layout
    const gridClasses = layout === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        : 'flex flex-col gap-12 max-w-4xl mx-auto';

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{title}</h2>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className={gridClasses}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tags={project.tags}
                            // 4. Pasamos la orientación correcta a la tarjeta
                            orientation={layout === 'list' ? 'horizontal' : 'vertical'}
                            onViewProject={() => onProjectClick?.(project.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};