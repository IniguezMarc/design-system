export interface BadgeSlots {
    container?: string;
}
interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'success';
    customStyles?: BadgeSlots;
    className?: string;
}
export declare const Badge: ({ label, variant, customStyles, className }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
