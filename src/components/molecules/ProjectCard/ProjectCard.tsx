import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';

export interface ProjectCardSlots {
    container?: string;
    imageWrapper?: string;
    content?: string;
    title?: string;
    description?: string;
    tagsContainer?: string;
    /** URL a la que lleva el botón */
    projectUrl?: string;
    linkTarget?: '_self' | '_blank';
    /** Callback opcional (por si prefieres onClick) */
    onViewProject?: () => void;
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    projectUrl?: string;
    linkTarget?: '_self' | '_blank';
    orientation?: 'vertical' | 'horizontal';
    actionLabel?: string;
    onViewProject?: () => void;
    /** Hooks para personalizar estilos de partes internas */
    customStyles?: ProjectCardSlots;
    // className para el contenedor externo (márgenes, etc)
    className?: string;
}

export const ProjectCard = ({
    title,
    description,
    image,
    tags = [],
    orientation = 'vertical',
    actionLabel = "Ver Proyecto",
    projectUrl,
    linkTarget = '_self',
    onViewProject,
    customStyles = {},
    className = ''
}: ProjectCardProps) => {

    const isHorizontal = orientation === 'horizontal';

    return (
        <div className={`
      /* 1. CLASE IDENTIFICADORA */
      ds-card
      
      /* 2. ESTRUCTURA BASE */
      group w-full rounded-xl overflow-hidden border transition-all duration-300
      ${isHorizontal ? 'flex flex-col md:flex-row' : 'flex flex-col'}
      
      /* 3. MODO CLARO (Por defecto) */
      /* Fondo blanco, borde gris, sombra negra al hover */
      bg-white border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1
      
      /* 4. MODO OSCURO (Overrides) */
      /* Fondo oscuro y borde */
      dark:bg-gray-800 dark:border-gray-700
      
      /* IMPORTANTE: */
     /* 1. Quitamos la sombra base */
      dark:shadow-none 
      
      /* 2. Quitamos la sombra negra del hover */
      dark:hover:shadow-none
      
      /* 3. APLICAMOS LA SOMBRA BLANCA PORTABLE (Sin config externa) */
      /* Sintaxis: shadow-[X_Y_Blur_Spread_Color] */
      /* Usamos ! para forzar la prioridad */
      /* 0 (X) | 20px (Y, cae hacia abajo) | 25px (Blur) | -5px (Spread) | Color */
      dark:hover:!shadow-[0_20px_25px_-5px_rgba(255,255,255,0.30)]
      
      /* 5. INYECCIONES EXTERNAS */
      ${customStyles.container || ''} 
      ${className}
    `}>
            {/* Imagen */}
            <div className={`
        ds-card-image overflow-hidden relative
        ${isHorizontal ? 'w-full h-48 md:w-2/5 md:h-auto' : 'w-full h-48'} 
        ${customStyles.imageWrapper || ''} 
      `}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Capa oscura para que la imagen no brille tanto de noche */}
                <div className="absolute inset-0 bg-transparent dark:bg-black/20 transition-colors pointer-events-none" />
            </div>

            {/* Contenido */}
            <div className={`ds-card-content p-6 flex flex-col justify-between flex-1 ${customStyles.content || ''}`}>
                <div>
                    <h3 className={`
            ds-card-title text-2xl font-bold mb-3 transition-colors text-gray-900 dark:text-white
            ${customStyles.title || ''}
          `}>
                        {title}
                    </h3>

                    <p className={`
            ds-card-description mb-4 line-clamp-3 leading-relaxed transition-colors text-gray-600 dark:text-gray-300
            ${customStyles.description || ''}
          `}>
                        {description}
                    </p>

                    <div className={`ds-card-tags flex flex-wrap gap-2 mb-6 ${customStyles.tagsContainer || ''}`}>
                        {tags.map((tag) => (
                            <Badge key={tag} label={tag} variant="secondary" />
                        ))}
                    </div>
                </div>

                <div className="ds-card-actions flex justify-start mt-auto">
                    <Button
                        label={actionLabel}
                        onClick={onViewProject}
                        href={projectUrl}      // El botón decidirá si ser <a> o <button>
                        target={linkTarget}      // Opcional: abrir en pestaña nueva
                        size="medium"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};