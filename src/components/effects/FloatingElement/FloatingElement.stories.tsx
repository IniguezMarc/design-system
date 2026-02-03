import type { Meta, StoryObj } from '@storybook/react';
import { FloatingElement } from './FloatingElement';

const meta: Meta<typeof FloatingElement> = {
    title: 'Effects/FloatingElement',
    component: FloatingElement,
    tags: ['autodocs'],
    argTypes: {
        duration: { control: { type: 'range', min: 0.5, max: 10, step: 0.5 } },
        yOffset: { control: { type: 'range', min: 0, max: 100 } },
        delay: { control: { type: 'range', min: 0, max: 5 } },
    }
};

export default meta;
type Story = StoryObj<typeof FloatingElement>;

export const AmbientShowcase: Story = {
    render: (args) => (
        <div className="w-full min-h-[500px] flex items-center justify-center bg-gray-900 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0">
                <FloatingElement duration={8} yOffset={40} className="absolute top-20 left-20 opacity-30">
                    <div className="w-64 h-64 rounded-full bg-purple-600 blur-[80px]" />
                </FloatingElement>
                <FloatingElement duration={7} yOffset={-30} delay={1} className="absolute bottom-20 right-20 opacity-30">
                    <div className="w-80 h-80 rounded-full bg-blue-600 blur-[80px]" />
                </FloatingElement>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <FloatingElement duration={4} yOffset={20}>
                    <div className="p-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-sm">
                        <span className="text-4xl">✨</span>
                        <h2 className="text-2xl font-bold text-white mt-4 mb-2">Ambient Motion</h2>
                        <p className="text-gray-400">
                            Adds life to your interface without the complexity of scroll events.
                            Perfect for hero sections and decorative elements.
                        </p>
                    </div>
                </FloatingElement>

                <div className="flex flex-col gap-6">
                    <FloatingElement duration={3} yOffset={10} delay={0.5}>
                        <div className="px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 text-white flex items-center gap-3 shadow-lg">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span>System Online</span>
                        </div>
                    </FloatingElement>

                    <FloatingElement duration={3.5} yOffset={10} delay={1}>
                        <div className="px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 text-white flex items-center gap-3 shadow-lg">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            <span>Data Synced</span>
                        </div>
                    </FloatingElement>

                    <FloatingElement duration={2.5} yOffset={10} delay={1.5}>
                        <div className="px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 text-white flex items-center gap-3 shadow-lg">
                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                            <span>Magic Active</span>
                        </div>
                    </FloatingElement>
                </div>
            </div>
        </div>
    )
};
