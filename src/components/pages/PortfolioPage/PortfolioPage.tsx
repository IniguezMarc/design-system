
import { BasicNavbar } from '../../organisms/Navbar/BasicNavbar';
import { Hero } from '../../organisms/Hero/Hero';
import { ContentGrid, type GridItem } from '../../organisms/ContentGrid/ContentGrid';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileSection } from '../../organisms/ProfileSection/ProfileSection';



// --- MOCK DATA ---
const MOCK_ITEMS: GridItem[] = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Complete admin dashboard with real-time metrics and dark mode.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'TypeScript', 'Tailwind'],
        url: 'https://google.com'
    },
    {
        id: '2',
        title: 'Task App',
        description: 'Kanban-style productivity app.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['Next.js', 'Supabase'],
        url: '#'
    },
    {
        id: '3',
        title: 'Landing Page',
        description: 'High-performance corporate website.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
        url: '#'
    },
];

export interface PortfolioPageTexts {
    navbar: { contact: string };
    hero: { greeting: string; title: string; subtitle: string; viewProjects: string; downloadCv: string };
    about: { title: string; bio: string; skillsTitle: string };
    projects: { title: string; viewCaseStudy: string };
    footer: { legalNotice: string };
}

export interface PortfolioPageProps {
    enableLanguageToggle?: boolean;
    language?: 'en' | 'es';
    onLanguageChange?: (lang: 'en' | 'es') => void;
    text?: PortfolioPageTexts;
    items?: GridItem[];
}

export const PortfolioPage = ({
    enableLanguageToggle = false,
    language = 'en',
    onLanguageChange,
    items = MOCK_ITEMS,
    text = {
        navbar: { contact: 'Contact' },
        hero: {
            greeting: "Hi, I'm Marc",
            title: 'I transform ideas into digital experiences.',
            subtitle: 'Full Stack Developer passionate about clean code and scalable architecture.',
            viewProjects: 'View Projects',
            downloadCv: 'Download CV'
        },
        about: {
            title: 'About Me',
            bio: `Hi, I'm Marc. I've been passionately developing software for several years. 
          I specialize in the JavaScript/TypeScript ecosystem, building applications that only work well but feel good to use.`,
            skillsTitle: 'Tech Stack'
        },
        projects: { title: 'Featured Projects', viewCaseStudy: 'View Case Study' },
        footer: { legalNotice: 'Legal Notice' }
    }
}: PortfolioPageProps) => {

    // 👇 1. CV DOWNLOAD LOGIC
    const handleDownloadCV = () => {
        const link = document.createElement('a');

        // 👇 PRO TIP: This automatically detects if you are on local or GitHub Pages
        // Local: /cv.pdf
        // GitHub: /design-system/cv.pdf
        const baseUrl = import.meta.env.BASE_URL;

        // Ensure no duplicate '/' slashes
        const path = baseUrl.endsWith('/') ? baseUrl + 'cv.pdf' : baseUrl + '/cv.pdf';

        link.href = path;
        link.download = 'Marc_Iniguez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // 2. CONTACT LOGIC
    const handleContact = () => {
        const email = "marc@example.com"; // Your email
        const subject = "Hi Marc, I saw your portfolio";

        // Build specific Gmail URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;

        // Open new tab
        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">

            {/* NAVBAR */}
            <BasicNavbar
                logo="Marc.Dev"
                links={[]}
                actions={[
                    {
                        label: text.navbar.contact,
                        onClick: handleContact,
                        variant: 'primary'
                    }
                ]}
                enableLanguageToggle={enableLanguageToggle}
                language={language}
                onLanguageChange={onLanguageChange}
            />

            <main>
                <div id="home">
                    <Hero
                        greeting={text.hero.greeting}
                        title={text.hero.title}
                        subtitle={text.hero.subtitle}
                        actions={[
                            {
                                label: text.hero.viewProjects,
                                variant: "primary",
                                onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            },
                            {
                                label: text.hero.downloadCv,
                                variant: "secondary",
                                onClick: handleDownloadCV // 👈 Connected here
                            }
                        ]}
                    />
                </div>

                <ProfileSection
                    id="about"
                    title={text.about.title}
                    avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                    bio={text.about.bio}
                    skillsTitle={text.about.skillsTitle}
                    skills={['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Docker', 'Storybook']}
                />

                <div id="projects">
                    <ContentGrid
                        title={text.projects.title}
                        items={items}
                        layout="grid"
                        itemButtonLabel={text.projects.viewCaseStudy}
                    />
                </div>
            </main>

            <Footer
                copyrightOwner="Marc Iñiguez"
                socialLinks={[{ platform: 'GitHub', url: '#' }]}
                secondaryLinks={[{ label: text.footer.legalNotice, href: '#' }]}
            />
        </div>
    );
};