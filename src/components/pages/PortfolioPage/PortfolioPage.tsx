import React from 'react';
import { Navbar, type NavbarLink } from '../../organisms/Navbar/Navbar';
import { Hero } from '../../organisms/Hero/Hero';
import { ContentGrid, type GridItem } from '../../organisms/ContentGrid/ContentGrid';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileSection } from '../../organisms/ProfileSection/ProfileSection';

import.meta.env.BASE_URL

// --- DATOS MOCK ---
const MOCK_ITEMS: GridItem[] = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Panel de administración completo con métricas en tiempo real y modo oscuro.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'TypeScript', 'Tailwind'],
        url: 'https://google.com'
    },
    {
        id: '2',
        title: 'Task App',
        description: 'Aplicación de productividad estilo Kanban.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['Next.js', 'Supabase'],
        url: '#'
    },
    {
        id: '3',
        title: 'Landing Page',
        description: 'Sitio web corporativo de alto rendimiento.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'CSS'],
        url: '#'
    },
];

export const PortfolioPage = () => {

    // 👇 1. LÓGICA DE DESCARGA DEL CV
    const handleDownloadCV = () => {
        const link = document.createElement('a');

        // 👇 TRUCO PRO: Esto detecta si estás en local o en GitHub Pages automáticamente
        // En local será: /cv.pdf
        // En GitHub será: /design-system/cv.pdf
        const baseUrl = import.meta.env.BASE_URL;

        // Nos aseguramos de no duplicar barras '/'
        const path = baseUrl.endsWith('/') ? baseUrl + 'cv.pdf' : baseUrl + '/cv.pdf';

        link.href = path;
        link.download = 'Marc_Iniguez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // 2. LÓGICA DE CONTACTO
    const handleContact = () => {
        const email = "marc@example.com"; // Tu email
        const subject = "Hola Marc, vi tu portfolio";

        // Construimos la URL específica de Gmail
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;

        // Abrimos pestaña nueva
        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">

            {/* NAVBAR */}
            <Navbar
                logo="Marc.Dev"
                links={[]}
                actions={[
                    {
                        label: 'Contactar',
                        onClick: handleContact,
                        variant: 'primary'
                    }
                ]}
            />

            <main>
                <div id="home">
                    <Hero
                        title="Transformo ideas en experiencias digitales."
                        subtitle="Desarrollador Full Stack apasionado por el código limpio y la arquitectura escalable."
                        actions={[
                            {
                                label: "Ver Proyectos",
                                variant: "primary",
                                onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            },
                            {
                                label: "Descargar CV",
                                variant: "secondary",
                                onClick: handleDownloadCV // 👈 Conectado aquí
                            }
                        ]}
                    />
                </div>

                <ProfileSection
                    id="about"
                    avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                    bio={`Hola, soy Marc. Llevo desarrollando software con pasión desde hace varios años. 
          Me especializo en el ecosistema JavaScript/TypeScript, creando aplicaciones que no solo funcionan bien, sino que se sienten bien al usarlas.`}
                    skills={['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Docker', 'Storybook']}
                />

                <div id="projects">
                    <ContentGrid
                        title="Proyectos Destacados"
                        items={MOCK_ITEMS}
                        layout="grid"
                        itemButtonLabel="Ver Caso de Estudio"
                    />
                </div>
            </main>

            <Footer
                copyrightOwner="Marc Iñiguez"
                socialLinks={[{ platform: 'GitHub', url: '#' }]}
                secondaryLinks={[{ label: 'Aviso Legal', href: '#' }]}
            />
        </div>
    );
};