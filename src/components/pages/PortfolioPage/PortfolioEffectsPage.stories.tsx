import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioEffectsPage, PortfolioEffectsTexts } from './PortfolioEffectsPage';
import { useState } from 'react';

const meta: Meta<typeof PortfolioEffectsPage> = {
    title: 'Pages/PortfolioEffectsPage',
    component: PortfolioEffectsPage,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const TEXTS_EN: PortfolioEffectsTexts = {
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
        philosophyItems: ["Performance First", "Accessible by Default", "Pixel Perfection"]
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
        legalNotice: "Privacy Policy",
        ctaTitle: "Ready to work?",
        ctaSubtitle: "Let's build something.",
        ctaAction: "Contact Me"
    }
};

const TEXTS_ES: PortfolioEffectsTexts = {
    navbar: { contact: "Hablemos" },
    hero: {
        prefix: "Construyo",
        typewriter: "Experiencias Digitales",
        subtitle: "Combinando excelencia técnica con",
        highlight: "diseño inmersivo",
        viewWork: "Ver Proyectos",
        downloadCv: "Descargar CV"
    },
    about: {
        title: "Más allá del",
        highlight: "Código",
        description: "No solo escribo funciones; diseño sistemas. Mi experiencia en diseño me permite unir la estética con la ingeniería, asegurando que cada píxel tenga un propósito.",
        philosophyTitle: "Filosofía Core",
        philosophyItems: ["Rendimiento Primero", "Accesible por Defecto", "Perfección de Píxel"]
    },
    roadmap: {
        skill1: "React y Next.js",
        skill2: "Sistemas TypeScript",
        skill3: "WebGL y Three.js"
    },
    projects: {
        title: "Trabajos Destacados",
        subtitle: "Una colección curada de proyectos que exploran los límites de la tecnología web.",
        viewCaseStudy: "Ver Caso de Estudio"
    },
    footer: {
        legalNotice: "Política de Privacidad",
        ctaTitle: "¿Listo para empezar?",
        ctaSubtitle: "Construyamos algo juntos.",
        ctaAction: "Contáctame"
    }
};

export const FullExperience: Story = {
    render: () => {
        const [language, setLanguage] = useState<'en' | 'es'>('en');
        return (
            <PortfolioEffectsPage
                enableLanguageToggle={true}
                language={language}
                onLanguageChange={setLanguage}
                text={language === 'en' ? TEXTS_EN : TEXTS_ES}
            />
        );
    }
};
