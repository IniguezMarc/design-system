export interface HeroAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
}
export interface HeroSlots {
    container?: string;
    content?: string;
    title?: string;
    subtitle?: string;
    imageWrapper?: string;
}
interface HeroProps {
    greeting?: string;
    title: string;
    subtitle: string;
    imageUrl?: string;
    actions?: HeroAction[];
    customStyles?: HeroSlots;
}
export declare const Hero: ({ greeting, title, subtitle, imageUrl, actions, customStyles }: HeroProps) => import("react/jsx-runtime").JSX.Element;
export {};
