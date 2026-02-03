import type { Meta, StoryObj } from '@storybook/react';
import { ScrollSvg } from './ScrollSvg';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

const meta: Meta<typeof ScrollSvg> = {
    title: 'Effects/ScrollSvg',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        strokeColor: { control: 'color' },
        gradient: { control: 'object' },
        strokeWidth: { control: { type: 'range', min: 1, max: 20 } },
        glow: { control: 'boolean' },
        dashed: { control: 'boolean' },
        animationEnd: {
            control: 'select',
            options: ['top', 'center', 'bottom'],
            description: 'Where in the viewport the animation should complete'
        },
        viewBox: { control: 'text' },
        path: { control: 'text' },
        scrollOffset: { control: 'object', description: 'Custom Framer Motion offsets (e.g. ["start end", "end center"])' },
        speed: { control: { type: 'number', min: 0.1, max: 5, step: 0.1 }, description: 'Animation speed multiplier (1 = normal, >1 = faster)' },
        animateOnMount: { control: 'boolean', description: 'Animate from 0 to current scroll position on mount' },
    }
};

export default meta;

// A winding path generated for a 400x1200 viewBox
const roadmapPath = `
    M 200 0 
    L 200 100
    C 200 200 50 200 50 300
    L 50 500
    C 50 600 350 600 350 700
    L 350 900
    C 350 1000 200 1000 200 1100
    L 200 1200
`;

export const Roadmap: StoryObj<typeof ScrollSvg> = {
    args: {
        path: roadmapPath,
        viewBox: "0 0 400 1200",
        strokeWidth: 3,
        glow: true,
        dashed: false,
        gradient: ['#22d3ee', '#3b82f6'], // Cyan to Blue
        animationEnd: 'center', // Fix: Finish drawing when centered
    },
    render: (args) => (
        <div className="bg-gray-900 min-h-screen text-white font-sans overflow-hidden relative">

            <div className="max-w-4xl mx-auto relative pt-20 pb-40">
                <div className="text-center mb-20 z-10 relative">
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                        The Journey
                    </h1>
                    <p className="text-gray-400">Follow the path to success.</p>
                </div>

                {/* The SVG Layer - Absolute centered */}
                <div className="absolute top-40 left-0 w-full h-[1200px] pointer-events-none z-0">
                    <ScrollSvg
                        {...args}
                        className="w-full h-full opacity-50"
                    />
                </div>

                {/* Content Layer - Grid positioned to match the curvy path */}
                <div className="relative z-10 flex flex-col gap-32">

                    {/* Step 1: Center Start */}
                    <div className="flex justify-center">
                        <ScrollReveal base="zoom">
                            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                                🚀
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Step 2: Left Curve */}
                    <div className="flex justify-start pl-[10%] pr-[50%]">
                        <ScrollReveal direction="right" distance={50} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
                            <h3 className="text-xl font-bold text-cyan-400 mb-2">Phase 1: Concept</h3>
                            <p className="text-gray-400 text-sm">Initial brainstorming and feasibility studies. Mapping out the unknown.</p>
                        </ScrollReveal>
                    </div>

                    {/* Step 3: Right Curve */}
                    <div className="flex justify-end pr-[10%] pl-[50%] mt-20">
                        <ScrollReveal direction="left" distance={50} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl text-right">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">Phase 2: Development</h3>
                            <p className="text-gray-400 text-sm">Building the core infrastructure and implementing key features.</p>
                        </ScrollReveal>
                    </div>

                    {/* Step 4: Center End */}
                    <div className="flex justify-center mt-20">
                        <ScrollReveal base="zoom" delay={0.2} blur={true}>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(59,130,246,0.6)] mb-6 mx-auto">
                                    🏆
                                </div>
                                <h3 className="text-2xl font-bold">Launch</h3>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>

            <div className="h-20" />
        </div>
    )
};


