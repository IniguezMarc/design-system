import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PortfolioPage } from './PortfolioPage';

const meta: Meta<typeof PortfolioPage> = {
    title: 'Pages/PortfolioPage', // This creates the "Pages" folder in the sidebar
    component: PortfolioPage,
    parameters: {
        layout: 'fullscreen', // Removes Storybook's white margins
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- MOCK DATA ---
const ITEMS_EN = [
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

const ITEMS_ES = [
    {
        id: '1',
        title: 'Panel de E-commerce',
        description: 'Panel de administración completo con métricas en tiempo real y modo oscuro.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'TypeScript', 'Tailwind'],
        url: 'https://google.com'
    },
    {
        id: '2',
        title: 'App de Tareas',
        description: 'Aplicación de productividad estilo Kanban.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['Next.js', 'Supabase'],
        url: '#'
    },
    {
        id: '3',
        title: 'Página de Aterrizaje',
        description: 'Sitio web corporativo de alto rendimiento.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
        url: '#'
    },
];

const TEXTS = {
    en: {
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
            bio: "Hi, I'm Marc. I've been passionately developing software for several years. I specialize in the JavaScript/TypeScript ecosystem, building applications that not only work well but feel good to use.",
            skillsTitle: 'Tech Stack'
        },
        projects: { title: 'Featured Projects', viewCaseStudy: 'View Case Study' },
        footer: { legalNotice: 'Legal Notice' }
    },
    es: {
        navbar: { contact: 'Contacto' },
        hero: {
            greeting: "Hola, soy Marc",
            title: 'Transformo ideas en experiencias digitales.',
            subtitle: 'Desarrollador Full Stack apasionado por el código limpio y la arquitectura escalable.',
            viewProjects: 'Ver Proyectos',
            downloadCv: 'Descargar CV'
        },
        about: {
            title: 'Sobre Mí',
            bio: "Hola, soy Marc. Llevo años desarrollando software con pasión. Me especializo en el ecosistema JavaScript/TypeScript, construyendo aplicaciones que no solo funcionan bien, sino que se sienten bien al usarlas.",
            skillsTitle: 'Tecnologías'
        },
        projects: { title: 'Proyectos Destacados', viewCaseStudy: 'Ver Caso de Estudio' },
        footer: { legalNotice: 'Aviso Legal' }
    }
};

export const Preview: Story = {
    render: () => {
        const [language, setLanguage] = useState<'en' | 'es'>('en');
        return (
            <PortfolioPage
                enableLanguageToggle={true}
                language={language}
                onLanguageChange={setLanguage}
                text={TEXTS[language]}
                items={language === 'en' ? ITEMS_EN : ITEMS_ES}
            />
        );
    }
};

