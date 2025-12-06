import React from 'react';
import { Button } from '../../atoms/Button/Button';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    onViewProject?: () => void;
}

export const ProjectCard = ({
    title,
    description,
    image,
    tags = [],
    onViewProject
}: ProjectCardProps) => {
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {/* Imagen del proyecto */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Contenido */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Tags (Ej: React, TS) */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Reutilizamos tu Átomo Button */}
                <div className="flex justify-end">
                    <Button label="Ver Proyecto" onClick={onViewProject} size="small" />
                </div>
            </div>
        </div>
    );
};