import { CreativeNavbar } from '../../organisms/Navbar/CreativeNavbar';
import { CreativeFooter } from '../../organisms/Footer/CreativeFooter';
import { ScrollReveal } from '../../effects/ScrollReveal/ScrollReveal';
import { BasicContentGrid, type GridItem } from '../../organisms/ContentGrid/BasicContentGrid';
import { CreativeHero } from '../../organisms/Hero/CreativeHero';
import { CreativeProfileSection } from '../../organisms/ProfileSection/CreativeProfileSection';
import { CreativeTimeline } from '../../molecules/Timeline/CreativeTimeline';
import { ScrollSvg } from '../../effects/ScrollSvg/ScrollSvg';
import { CreativeButton } from '../../atoms/Button/CreativeButton';

// --- MOCK DATA ---
const MOCK_ITEMS: GridItem[] = [
    {
        id: '1',
        title: 'Neon E-commerce',
        description: 'Cyberpunk aesthetic shop with 3D product previews.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        tags: ['Three.js', 'React', 'WebGL'],
        url: '#'
    },
    {
        id: '2',
        title: 'AI Analytics',
        description: 'Data visualization platform with real-time streaming.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['D3.js', 'Python', 'WebSocket'],
        url: '#'
    },
    {
        id: '3',
        title: 'Immersive Story',
        description: 'Interactive long-form journalism experience.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        tags: ['GSAP', 'Next.js'],
        url: '#'
    },
];

export interface PortfolioEffectsTexts {
    navbar: { contact: string };
    hero: {
        prefix: string;
        typewriter: string;
        subtitle: string;
        highlight: string;
        viewWork: string;
        downloadCv: string;
    };
    about: {
        title: string;
        highlight: string;
        description: string;
        philosophyTitle: string;
        philosophyItems: [string, string, string];
    };
    roadmap: {
        skill1: string;
        skill2: string;
        skill3: string;
    };
    experience?: {
        title: string;
        subtitle: string;
    };
    projects: {
        title: string;
        subtitle: string;
        viewCaseStudy: string;
    };
    footer: {
        ctaTitle: string;
        ctaSubtitle: string;
        ctaAction: string;
        legalNotice: string;
    };
}

export interface PortfolioEffectsPageProps {
    enableLanguageToggle?: boolean;
    language?: 'en' | 'es';
    onLanguageChange?: (lang: 'en' | 'es') => void;
    text?: PortfolioEffectsTexts;
}

const DEFAULT_TEXTS: PortfolioEffectsTexts = {
    navbar: { contact: "Let's Talk" },
    hero: {
        prefix: "I build",
        typewriter: "Digital Experiences",
        subtitle: "Combining technical excellence with",
        highlight: "immersive design",
        viewWork: "View Work",
        downloadCv: "Download CV"
    },
    about: {
        title: "Beyond the",
        highlight: "Code",
        description: "I don't just write functions; I craft systems. My background in design allows me to bridge the gap between aesthetics and engineering, ensuring every pixel serves a purpose.",
        philosophyTitle: "Core Philosophy",
        philosophyItems: [
            "Performance First",
            "Accessible by Default",
            "Pixel Perfection"
        ]
    },
    roadmap: {
        skill1: "React & Next.js",
        skill2: "TypeScript System",
        skill3: "WebGL & Three.js"
    },
    projects: {
        title: "Selected Work",
        subtitle: "A curated collection of projects that push the boundaries of web technology.",
        viewCaseStudy: "View Case Study"
    },
    footer: {
        ctaTitle: "Ready to make impact?",
        ctaSubtitle: "I'm currently available for freelance projects and open to full-time opportunities.",
        ctaAction: "Start a Conversation",
        legalNotice: "Privacy Policy"
    }
};

export const PortfolioEffectsPage = ({
    enableLanguageToggle = false,
    language = 'en',
    onLanguageChange,
    text = DEFAULT_TEXTS
}: PortfolioEffectsPageProps) => {

    return (
        <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-300">

            {/* BACKGROUND SCROLL SVG */}
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden">
                <ScrollSvg
                    path="M 50 0 Q 200 150 50 300 T 50 600 T 50 900 T 50 1200 T 50 1500 T 50 1800 T 50 2100 T 50 2400 T 50 2700 T 50 3000"
                    viewBox="-50 0 200 3000"
                    scrollOffset={['start end', 'end start']}
                    speed={1.0}
                    animateOnMount={true}
                    preserveAspectRatio="none"
                    strokeColor="#9333ea"
                    strokeWidth={4}
                    glow={true}
                    className="opacity-20"
                />
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 flex flex-col">

                {/* 1. CREATIVE NAVBAR */}
                <CreativeNavbar
                    logo="Marc.Dev"
                    links={[]} // Add links if needed
                    actions={[{ label: text.navbar.contact, onClick: () => { }, variant: 'primary' }]}
                    enableLanguageToggle={enableLanguageToggle}
                    language={language}
                    onLanguageChange={onLanguageChange}
                    glassOnScroll={true}
                    hideOnScroll={false}
                    glassDensity={50}
                />

                {/* 2. CREATIVE HERO */}
                <CreativeHero
                    prefix={text.hero.prefix}
                    typewriterText={text.hero.typewriter}
                    typewriterDelay={1000}
                    typewriterSpeed={80}
                    subtitle={text.hero.subtitle}
                    subtitleHighlight={text.hero.highlight}
                    primaryAction={{ label: text.hero.viewWork, onClick: () => { } }}
                    secondaryAction={{ label: text.hero.downloadCv, onClick: () => { } }}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                    backgroundEffect='blobs'
                    highlightColor="bg-purple-600 text-purple-600"
                    darkHighlightColor="dark:bg-purple-500 dark:text-purple-500"
                    prefixColor="text-purple-600"
                    darkPrefixColor="dark:text-purple-300"
                    statusTextColor="text-gray-600"
                    darkStatusTextColor="dark:text-gray-300"
                />

                {/* 3. CREATIVE PROFILE SECTION */}
                <CreativeProfileSection
                    title={text.about.title}
                    titleHighlight={text.about.highlight}
                    bio={text.about.description}
                    philosophyTitle={text.about.philosophyTitle}
                    philosophyItems={text.about.philosophyItems}
                    floatingSkills={[
                        { label: text.roadmap.skill1, color: "text-blue-600 dark:text-blue-400", speed: 0.2, xOffset: 40 },
                        { label: text.roadmap.skill2, color: "text-purple-600 dark:text-purple-400", speed: -0.1, xOffset: -40 },
                        { label: text.roadmap.skill3, color: "text-pink-600 dark:text-pink-400", speed: 0.3, xOffset: 20 },
                    ]}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                />

                {/* 4. EXPERIENCE (Timeline) */}
                <CreativeTimeline
                    title={text.experience?.title}
                    subtitle={text.experience?.subtitle}
                    items={[
                        {
                            id: '1',
                            date: '2023 - Present',
                            title: 'Senior Frontend Engineer',
                            subtitle: 'Tech Innovators Inc.',
                            description: 'Spearheading the migration to a modern React stack and establishing a comprehensive design system used by 40+ developers.',
                            tags: ['React', 'Next.js', 'Design Systems']
                        },
                        {
                            id: '2',
                            date: '2021 - 2023',
                            title: 'Creative Technologist',
                            subtitle: 'Digital Agency One',
                            description: 'Created award-winning interactive experiments and webGL visualizations for Fortune 500 clients.',
                            tags: ['Three.js', 'WebGL', 'GSAP']
                        },
                        {
                            id: '3',
                            date: '2019 - 2021',
                            title: 'Frontend Developer',
                            subtitle: 'StartUp Rocket',
                            description: 'Early employee contributing to the core product UI, optimizing performance, and scaling the frontend architecture.',
                            tags: ['Vue', 'D3.js']
                        }
                    ]}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                />

                {/* 5. WORK (Interactive Grid) */}
                <BasicContentGrid
                    title={text.projects.title}
                    items={MOCK_ITEMS}
                    itemButtonLabel={text.projects.viewCaseStudy}
                    onItemClick={() => { }}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                    titleColor="text-gray-900"
                    darkTitleColor="dark:text-white"
                    customStyles={{
                        container: "py-40 border-t border-gray-100 dark:border-white/5",
                        title: "text-center mb-20 text-4xl md:text-6xl font-bold"
                    }}
                    renderItemWrapper={(children, item, index) => (
                        <ScrollReveal key={item.id} base="fade" direction="up" delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors duration-500 shadow-sm hover:shadow-xl dark:shadow-none h-full">
                                {children}
                            </div>
                        </ScrollReveal>
                    )}
                    renderItemAction={(item) => (
                        <CreativeButton
                            label={text.projects.viewCaseStudy}
                            onClick={() => console.log('View project:', item.id)}
                            variant="arrow-slide"
                            className="text-sm font-semibold"
                        />
                    )}
                />

                {/* 6. CREATIVE FOOTER */}
                <CreativeFooter
                    copyrightOwner="Marc.Dev"
                    socialLinks={[
                        { platform: 'Twitter', url: '#' },
                        { platform: 'LinkedIn', url: '#' },
                        { platform: 'GitHub', url: '#' }
                    ]}
                    ambientBackground
                    glass={false}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                />
            </div>
        </div>
    );
};

