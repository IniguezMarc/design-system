export interface NavbarLink {
    label: string;
    href: string;
    active?: boolean;
}
export interface NavbarAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
}
export interface NavbarSlots {
    container?: string;
    logo?: string;
    link?: string;
    mobileMenu?: string;
}
interface NavbarProps {
    logo?: string;
    isLogoImage?: boolean;
    links: NavbarLink[];
    actions?: NavbarAction[];
    customStyles?: NavbarSlots;
}
export declare const Navbar: ({ logo, isLogoImage, links, actions, customStyles }: NavbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
