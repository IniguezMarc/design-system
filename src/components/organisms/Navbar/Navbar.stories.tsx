import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Organisms/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        customStyles: { control: 'object', table: { category: 'Styles' } },
        // Ocultamos controles técnicos
        actions: { control: 'object' }, // Forzamos que sea objeto simple
    },
    // Decorador para simular una página larga y probar el scroll
    decorators: [
        (Story) => (
            <div className="bg-gray-50">
                <Story />
                {/* Simulamos las secciones para que el scroll funcione al hacer click */}
                <div id="home" className="h-screen bg-blue-50 flex items-center justify-center text-3xl font-bold text-blue-200">
                    Sección Inicio (Hero)
                </div>
                <div id="about" className="h-screen bg-white flex items-center justify-center text-3xl font-bold text-gray-200">
                    Sección Sobre Mí + Perfil Técnico
                </div>
                <div id="projects" className="h-screen bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-300">
                    Sección Proyectos
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        logo: 'Marc.Design',
        isLogoImage: false,
        links: [
            { label: 'Inicio', href: '#home', active: true },
            { label: 'Sobre mí', href: '#about' }, // Aquí irá tu avatar y perfil técnico
            { label: 'Proyectos', href: '#projects' }, // Aquí irá el Grid
        ],
        actions: [
            { label: 'Contacto', variant: 'primary', onClick: () => { } },
        ],
        customStyles: { container: '', logo: '', link: '', mobileMenu: '' }
    },
};