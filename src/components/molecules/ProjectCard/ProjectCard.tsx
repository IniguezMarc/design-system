import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    orientation?: 'vertical' | 'horizontal';
    onViewProject?: () => void;
    actionLabel?: string;
}

export const ProjectCard = ({
    title,
    description,
    image,
    tags = [],
    orientation = 'vertical', // Valor por defecto
    actionLabel = "Ver Proyecto", // Valor por defecto
    onViewProject
}: ProjectCardProps) => {

    // Clases dinámicas: Si es horizontal, usamos flex-row
    const containerClasses = orientation === 'horizontal'
        ? 'flex flex-col md:flex-row'
        : 'flex flex-col';

    // Si es horizontal, la imagen ocupa un ancho fijo en desktop
    const imageContainerClasses = orientation === 'horizontal'
        ? 'w-full h-48 md:w-2/5 md:h-auto'
        : 'w-full h-48';

    return (
        <div className={`w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 ${containerClasses}`}>

            {/* Imagen */}
            <div className={`${imageContainerClasses} overflow-hidden relative group`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                label={tag}
                                variant="secondary"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-start mt-auto">
                    {/* Usamos el label dinámico */}
                    <Button label={actionLabel} onClick={onViewProject} size="medium" />
                </div>
            </div>
        </div>
    );
};