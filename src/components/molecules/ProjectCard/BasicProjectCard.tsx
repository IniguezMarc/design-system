
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';

export interface ProjectCardSlots {
    container?: string;
    imageWrapper?: string;
    content?: string;
    title?: string;
    description?: string;
    tagsContainer?: string;
    /** URL the button links to */
    projectUrl?: string;
    linkTarget?: '_self' | '_blank';
    /** Optional callback (if you prefer onClick) */
    onViewProject?: () => void;
}

export interface BasicProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    projectUrl?: string;
    linkTarget?: '_self' | '_blank';
    orientation?: 'vertical' | 'horizontal';
    actionLabel?: string;
    onViewProject?: () => void;
    /** Hooks to customize internal style parts */
    customStyles?: ProjectCardSlots;
    // className for the outer container (margins, etc)
    className?: string;
}

export const BasicProjectCard = ({
    title,
    description,
    image,
    tags = [],
    orientation = 'vertical',
    actionLabel = "View Project",
    projectUrl,
    linkTarget = '_self',
    onViewProject,
    customStyles = {},
    className = ''
}: BasicProjectCardProps) => {

    const isHorizontal = orientation === 'horizontal';

    return (
        <div className={`
      /* 1. IDENTIFIER CLASS */
      ds-card
      
      /* 2. BASE STRUCTURE */
      group w-full rounded-xl overflow-hidden border transition-all duration-300
      /* Switch layout based on orientation prop */
      ${isHorizontal ? 'flex flex-col md:flex-row' : 'flex flex-col'}
      
      /* 3. LIGHT MODE (Default) */
      /* White background, gray border, black shadow on hover */
      bg-white border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1
      
      /* 4. DARK MODE (Overrides) */
      /* Dark background and border */
      dark:bg-gray-800 dark:border-gray-700
      
      /* IMPORTANT: */
      /* 1. Remove base shadow */
      dark:shadow-none 
      
      /* 2. Remove black hover shadow */
      dark:hover:shadow-none
      
      /* 3. APPLY PORTABLE WHITE SHADOW (No external config) */
      /* Syntax: shadow-[X_Y_Blur_Spread_Color] */
      /* Use ! to force priority */
      /* 0 (X) | 20px (Y, falls down) | 25px (Blur) | -5px (Spread) | Color */
      dark:hover:!shadow-[0_20px_25px_-5px_rgba(255,255,255,0.30)]
      
      /* 5. EXTERNAL INJECTIONS */
      ${customStyles.container || ''} 
      ${className}
    `}>
            {/* Image */}
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
                {/* Dark overlay so the image isn't too bright at night */}
                <div className="absolute inset-0 bg-transparent dark:bg-black/20 transition-colors pointer-events-none" />
            </div>

            {/* Content */}
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
                        href={projectUrl}      // The button will decide whether to be <a> or <button>
                        target={linkTarget}      // Optional: open in new tab
                        size="medium"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};
