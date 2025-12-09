import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Badge } from '../../atoms/Badge/Badge';

export interface ProfileSectionSlots {
    container?: string;
    contentWrapper?: string;
    textWrapper?: string;
    title?: string;
    bio?: string;
    skillsTitle?: string;
}

export interface BasicProfileSectionProps {
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
    id?: string; // For menu anchor (#about)
}

export const BasicProfileSection = ({
    title = "About Me",
    avatarUrl,
    bio,
    skillsTitle = "Tech Stack",
    skills = [],
    customStyles = {},
    id
}: BasicProfileSectionProps) => {
    return (
        <section
            id={id}
            className={`
        py-20 transition-colors duration-300
        bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800
        ${customStyles.container || ''}
      `}
        >
            <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${customStyles.contentWrapper || ''}`}>

                {/* HEADER (Title) */}
                {title && (
                    <div className="text-center mb-12">
                        <h2 className={`
              text-3xl font-bold text-gray-900 dark:text-white transition-colors
              ${customStyles.title || ''}
            `}>
                            {title}
                        </h2>
                        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* PHOTO (Avatar) */}
                    <div className="flex-shrink-0">
                        <Avatar src={avatarUrl} size="xl" />
                    </div>

                    {/* TEXT AND SKILLS */}
                    <div className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${customStyles.textWrapper || ''}`}>

                        {/* Render bio respecting line breaks */}
                        <p className={`mb-8 whitespace-pre-line ${customStyles.bio || ''}`}>
                            {bio}
                        </p>

                        {/* SKILLS SECTION */}
                        {skills.length > 0 && (
                            <div>
                                {skillsTitle && (
                                    <h3 className={`
                    text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3
                    ${customStyles.skillsTitle || ''}
                  `}>
                                        {skillsTitle}
                                    </h3>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} label={skill} variant="secondary" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
