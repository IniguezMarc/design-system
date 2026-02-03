import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxOnScroll } from './ParallaxOnScroll';

const meta: Meta<typeof ParallaxOnScroll> = {
    title: 'Effects/ParallaxOnScroll',
    component: ParallaxOnScroll,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        speed: { control: { type: 'range', min: -2, max: 2, step: 0.1 } },
    }
};

export default meta;
type Story = StoryObj<typeof ParallaxOnScroll>;

export const SimpleParallax: Story = {
    render: () => (
        <div className="w-full bg-white dark:bg-gray-900 text-black dark:text-white pb-20 p-4 overflow-x-hidden">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 pt-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-2">Compact Parallax</h1>
                    <p className="text-gray-500 text-sm">Responsive layout that fills the screen naturally.</p>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        Static
                    </div>
                    <ParallaxOnScroll speed={0.5}>
                        <div className="h-40 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-xl">
                            Speed 0.5
                        </div>
                    </ParallaxOnScroll>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4 items-center">
                    <ParallaxOnScroll speed={-0.3}>
                        <div className="h-40 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-xl">
                            Speed -0.3
                        </div>
                    </ParallaxOnScroll>
                    <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        Static
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        Static
                    </div>
                    <ParallaxOnScroll speed={0.8}>
                        <div className="h-40 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-xl">
                            Speed 0.8
                        </div>
                    </ParallaxOnScroll>
                </div>


            </div>
        </div>
    )
};



export const TypographyScroll: Story = {
    render: () => (
        <div className="w-full bg-black text-white min-h-screen overflow-hidden relative flex flex-col items-center justify-center py-20">
            {/* Background Gradient Blob */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black w-[80vw] h-[80vw] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full px-6 flex flex-col items-center gap-20">
                {/* Layer 1: Background Depth Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none mix-blend-overlay opacity-30">
                    <ParallaxOnScroll speed={-0.5}>
                        <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
                            IMPACT
                        </h1>
                    </ParallaxOnScroll>
                </div>

                {/* Layer 2: Main Content */}
                <ParallaxOnScroll speed={0.2} className="relative z-20">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                            Cinematic Depth
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
                            Parallax adds a subtle dimension to typography, separating the foreground message from the background context.
                        </p>
                    </div>
                </ParallaxOnScroll>

                {/* Layer 3: Foreground Accent */}
                <ParallaxOnScroll speed={0.8} className="relative z-30">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-16 w-[1px] bg-gradient-to-b from-blue-500 to-transparent"></div>
                        <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 backdrop-blur-sm shadow-lg shadow-blue-500/20">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                    </div>
                </ParallaxOnScroll>
            </div>
        </div>
    )
};

