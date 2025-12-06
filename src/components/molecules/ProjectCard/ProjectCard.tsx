import React from 'react';
import { Button } from '../../atoms/Button/Button';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    /** 👇 ESTO ES LO QUE TE FALTA EN TU ARCHIVO ACTUAL */
    orientation?: 'vertical' | 'horizontal';
    onViewProject?: () => void;
}

export const ProjectCard = ({
    title,
    description,
    image,
    tags = [],
    orientation = 'vertical', // Valor por defecto
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
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-start mt-auto">
                    <Button label="Ver Caso de Estudio" onClick={onViewProject} size="medium" />
                </div>
            </div>
        </div>
    );
};