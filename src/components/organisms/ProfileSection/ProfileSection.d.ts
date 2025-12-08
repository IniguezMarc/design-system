export interface ProfileSectionSlots {
    container?: string;
    contentWrapper?: string;
    textWrapper?: string;
    title?: string;
    bio?: string;
    skillsTitle?: string;
}
interface ProfileSectionProps {
    /** Section title (ex: About Me) */
    title?: string;
    /** Profile photo URL */
    avatarUrl: string;
    /** Main biography text (accepts line breaks) */
    bio: string;
    /** Title for the skills list */
    skillsTitle?: string;
    /** List of technologies to show as Badges */
    skills?: string[];
    /** Style hooks */
    customStyles?: ProfileSectionSlots;
    id?: string;
}
export declare const ProfileSection: ({ title, avatarUrl, bio, skillsTitle, skills, customStyles, id }: ProfileSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
