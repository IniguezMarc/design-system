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
    /** Hooks to customize internal style parts */
    customStyles?: ProjectCardSlots;
    className?: string;
}
export declare const ProjectCard: ({ title, description, image, tags, orientation, actionLabel, projectUrl, linkTarget, onViewProject, customStyles, className }: ProjectCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
