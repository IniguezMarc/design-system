import React from 'react';
import { Navbar } from '../../organisms/Navbar/Navbar';
import { Hero } from '../../organisms/Hero/Hero';
import { ContentGrid } from '../../organisms/ContentGrid/ContentGrid';
import { Footer } from '../../organisms/Footer/Footer';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Badge } from '../../atoms/Badge/Badge';

// Datos falsos para la preview (luego vendrán de una API o archivo de datos)
const MOCK_ITEMS = [
    {
        id: '1',
        title: 'E-commerce Dashboard',
        description: 'Panel de administración completo con métricas en tiempo real, gestión de inventario y modo oscuro. Desarrollado para escalar.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Aplicación de productividad estilo Kanban con drag & drop, autenticación de usuarios y sincronización en la nube.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
        tags: ['Next.js', 'Supabase', 'DnD Kit'],
    },
    {
        id: '3',
        title: 'Financial Landing Page',
        description: 'Sitio web corporativo de alto rendimiento con animaciones suaves y optimización SEO avanzada.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        tags: ['Astro', 'Framer Motion', 'Tailwind'],
    },
];

const NAV_LINKS = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
];

export const PortfolioPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* 1. NAVEGACIÓN FIJA */}
            <Navbar
                logo="Marc.Dev"
                links={NAV_LINKS}
                // Ahora usamos 'actions' (array) en lugar de onContactClick
                actions={[
                    {
                        label: 'Contactar',
                        onClick: () => window.open('mailto:marc@example.com'),
                        variant: 'primary'
                    }
                ]}
            />

            <main>
                {/* 2. HERO SECTION (Portada) */}
                <div id="home">
                    <Hero
                        title="Transformo ideas en experiencias digitales."
                        subtitle="Desarrollador Full Stack apasionado por el código limpio."
                        // 👇 ASÍ SE USA AHORA:
                        actions={[
                            {
                                label: "Ver Proyectos",
                                variant: "primary",
                                onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            },
                            {
                                label: "Descargar CV",
                                variant: "secondary",
                                onClick: () => window.open('/cv.pdf')
                            }
                        ]}
                    />
                </div>

                {/* 3. SECCIÓN SOBRE MÍ (Construida con Átomos) */}
                <section id="about" className="py-20 bg-white border-y border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
                            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Foto */}
                            <div className="flex-shrink-0">
                                <Avatar
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                                    size="xl"
                                />
                            </div>

                            {/* Texto Bio */}
                            <div className="text-lg text-gray-600 leading-relaxed">
                                <p className="mb-6">
                                    Hola, soy Marc. Llevo desarrollando software con pasión desde hace varios años.
                                    Me especializo en el ecosistema <strong>JavaScript/TypeScript</strong>, creando aplicaciones
                                    que no solo funcionan bien, sino que se sienten bien al usarlas.
                                </p>
                                <p className="mb-6">
                                    Actualmente estoy enfocado en profundizar en arquitecturas frontend escalables
                                    y en crear sistemas de diseño como este.
                                </p>

                                {/* Stack Tecnológico con Badges */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                        Mi Stack Técnico
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Docker', 'Storybook'].map(tech => (
                                            <Badge key={tech} label={tech} variant="secondary" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO GRID FLEXIBLE */}
                <div id="projects">
                    <ContentGrid
                        title="Proyectos Destacados"
                        items={MOCK_ITEMS}
                        layout="grid"
                        // Ahora podemos personalizar el botón
                        itemButtonLabel="Ver Caso de Estudio"
                    />
                </div>
            </main>

            {/* FOOTER FLEXIBLE */}
            <Footer
                copyrightOwner="Marc Iñiguez"
                socialLinks={[
                    { platform: 'GitHub', url: '#' },
                    { platform: 'LinkedIn', url: '#' },
                ]}
                // Añadimos enlaces legales
                secondaryLinks={[
                    { label: 'Aviso Legal', href: '#' },
                    { label: 'Privacidad', href: '#' },
                ]}
            />
        </div>
    );
};