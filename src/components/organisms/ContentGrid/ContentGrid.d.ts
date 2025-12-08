export interface GridItem {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
}
export interface ContentGridSlots {
    container?: string;
    title?: string;
}
interface ContentGridProps {
    title?: string;
    items: GridItem[];
    layout?: 'grid' | 'list';
    itemButtonLabel?: string;
    onItemClick?: (id: string) => void;
    customStyles?: ContentGridSlots;
}
export declare const ContentGrid: ({ title, items, layout, itemButtonLabel, onItemClick, customStyles }: ContentGridProps) => import("react/jsx-runtime").JSX.Element;
export {};
