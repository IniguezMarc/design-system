import type { Meta, StoryObj } from '@storybook/react';
import { ScrollReveal } from './ScrollReveal';

const meta: Meta<typeof ScrollReveal> = {
    title: 'Effects/ScrollReveal',
    component: ScrollReveal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        base: { control: 'select', options: ['fade', 'slide', 'zoom', 'rotate'] },
        direction: { control: 'select', options: ['up', 'down', 'left', 'right', 'none'] },
        blur: { control: 'boolean' },
        distance: { control: { type: 'range', min: 0, max: 100 } },
        duration: { control: { type: 'range', min: 0.1, max: 2, step: 0.1 } },
    },
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const LandingPage: Story = {
    render: () => (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 relative overflow-hidden">
                <ScrollReveal base="fade" direction="down" distance={40} delay={0.2} className="z-10 relative">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
                        New Release v2.0
                    </span>
                </ScrollReveal>

                <ScrollReveal base="zoom" direction="up" distance={30} blur={true} className="z-10 relative max-w-4xl text-center">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                        Design with <br /> Absolute Clarity
                    </h1>
                </ScrollReveal>

                <ScrollReveal base="fade" direction="up" delay={0.4} className="z-10 relative max-w-xl text-center">
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                        A premium design system that creates stunning user experiences with minimal effort. Animations that feel natural, not mechanical.
                    </p>
                </ScrollReveal>

                <ScrollReveal base="fade" direction="up" delay={0.6} className="z-10 relative">
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors">
                            Get Started
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                            Documentation
                        </button>
                    </div>
                </ScrollReveal>

                {/* Decorative Elements */}
                <ScrollReveal base="fade" delay={1} duration={1.5} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                    <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                </ScrollReveal>
            </div>

            {/* Features Grid */}
            <div className="py-32 px-8 max-w-7xl mx-auto">
                <ScrollReveal base="fade" direction="up" threshold={0.5} className="mb-24 text-center">
                    <h2 className="text-4xl font-bold mb-4">Crafted for Perfection</h2>
                    <p className="text-gray-500">Every detail has been meticulously obsessessed over.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'Fluid Motion', desc: 'Animations that respect physics and feeling.' },
                        { title: 'Accessible', desc: 'Built with a11y as a first-class citizen.' },
                        { title: 'Customizable', desc: 'Your brand, your rules, your design.' }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} base="slide" direction="up" delay={i * 0.1} distance={40} className="h-full">
                            <div className="p-8 rounded-2xl bg-gray-50 h-full hover:bg-gray-100 transition-colors cursor-default">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-center text-2xl">
                                    ✦
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Big Image Section */}
            <div className="py-32 px-8 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal base="slide" direction="right" distance={50} duration={0.8}>
                        <div className="space-y-8">
                            <div className="w-20 h-1 bg-blue-500" />
                            <h2 className="text-5xl font-bold leading-tight">Dark Mode <br /> Reimagined</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Experience a dark mode that adds depth and dimensionality to your interface, highlighting what matters most.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal base="zoom" delay={0.2} duration={0.8} className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-2xl flex items-center justify-center group">
                            <div className="text-9xl group-hover:scale-110 transition-transform duration-700">🌑</div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Footer Spacer */}
            <div className="h-40 bg-white" />
        </div>
    ),
};

export const Playground: Story = {
    args: {
        children: (
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold">
                Reveal Me
            </div>
        ),
        base: 'fade',
        direction: 'up',
        distance: 30,
        blur: true,
        duration: 0.6,
    },
    render: (args) => (
        <div className="min-h-[150vh] flex flex-col items-center justify-center bg-gray-50">
            <div className="mb-[50vh] text-gray-400">Scroll down...</div>
            <ScrollReveal {...args} />
            <div className="mt-[50vh] text-gray-400">End</div>
        </div>
    )
};
