interface SocialLink {
    platform: string;
    url: string;
}
interface FooterLink {
    label: string;
    href: string;
}
export interface FooterSlots {
    container?: string;
    text?: string;
    link?: string;
}
interface FooterProps {
    copyrightOwner: string;
    socialLinks: SocialLink[];
    copyrightText?: string;
    secondaryLinks?: FooterLink[];
    customStyles?: FooterSlots;
}
export declare const Footer: ({ copyrightOwner, copyrightText, socialLinks, secondaryLinks, customStyles }: FooterProps) => import("react/jsx-runtime").JSX.Element;
export {};
