export interface AvatarSlots {
    container?: string;
    image?: string;
}
interface AvatarProps {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    imageFit?: 'cover' | 'contain';
    customStyles?: AvatarSlots;
    className?: string;
}
export declare const Avatar: ({ src, alt, size, imageFit, customStyles, className }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export {};
