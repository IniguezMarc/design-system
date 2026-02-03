import type { ReactNode } from 'react';
import { FloatingElement } from '../../effects/FloatingElement/FloatingElement';
import { Button } from '../../atoms/Button/Button';
import { BasicFooter, type BasicFooterProps } from './BasicFooter';

export interface CreativeFooterProps extends BasicFooterProps {
    /** Whether to show ambient background blobs */
    ambientBackground?: boolean;
    /** Enable glassmorphism (transparent background) */
    glass?: boolean;
    /** Optional Large CTA section content */
    ctaTitle?: ReactNode;
    ctaSubtitle?: ReactNode;
    ctaAction?: { label: string; onClick: () => void };

    // Config for blobs
    blobColors?: {
        primary: string; // e.g. "bg-purple-500"
        secondary: string; // e.g. "bg-blue-500"
    };
    // Colors
    ctaTitleColor?: string;
    darkCtaTitleColor?: string;
    ctaSubtitleColor?: string;
    darkCtaSubtitleColor?: string;
    ctaBorderColor?: string;
    darkCtaBorderColor?: string;
}

export const CreativeFooter = ({
    ambientBackground = true,
    glass = false,
    ctaTitle,
    ctaSubtitle,
    ctaAction,
    blobColors = {
        primary: "bg-purple-500",
        secondary: "bg-blue-500"
    },
    className,

    // Color Props
    ctaTitleColor = "text-gray-900",
    darkCtaTitleColor = "dark:text-white",
    ctaSubtitleColor = "text-gray-600",
    darkCtaSubtitleColor = "dark:text-gray-400",
    ctaBorderColor = "border-gray-100",
    darkCtaBorderColor = "dark:border-white/5",

    ...basicProps
}: CreativeFooterProps & { className?: string }) => {

    const baseBg = glass
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md'
        : `${basicProps.backgroundColor || 'bg-white'} ${basicProps.darkBackgroundColor || 'dark:bg-black'}`;

    return (
        <div className={`relative overflow-hidden ${baseBg} ${className || ''}`}>

            {/* AMBIENT BACKGROUND */}
            {ambientBackground && (
                <div
                    className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-normal"
                    style={{
                        maskImage: 'linear-gradient(to top, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 70%, transparent 100%)'
                    }}
                >
                    <FloatingElement duration={15} yOffset={30} className="absolute -top-20 -left-20">
                        <div className={`w-[400px] h-[400px] rounded-full blur-[100px] ${blobColors.primary}`} />
                    </FloatingElement>
                    <FloatingElement duration={12} yOffset={-40} delay={2} className="absolute -bottom-20 -right-20">
                        <div className={`w-[400px] h-[400px] rounded-full blur-[100px] ${blobColors.primary}`} />
                    </FloatingElement>
                    <FloatingElement duration={12} yOffset={-40} delay={2} className="absolute -bottom-20 -right-20">
                        <div className={`w-[500px] h-[500px] rounded-full blur-[100px] ${blobColors.secondary}`} />
                    </FloatingElement>
                </div>
            )}


            <div className="relative z-10">
                {/* LARGE CTA SECTION */}
                {(ctaTitle || ctaAction) && (
                    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-b ${ctaBorderColor} ${darkCtaBorderColor}`}>
                        {ctaTitle && (
                            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${ctaTitleColor} ${darkCtaTitleColor}`}>
                                {ctaTitle}
                            </h2>
                        )}
                        {ctaSubtitle && (
                            <p className={`text-lg max-w-2xl mx-auto mb-10 ${ctaSubtitleColor} ${darkCtaSubtitleColor}`}>
                                {ctaSubtitle}
                            </p>
                        )}
                        {ctaAction && (
                            <Button
                                label={ctaAction.label}
                                onClick={ctaAction.onClick}
                                size="large"
                                variant="primary"
                                className="shadow-xl shadow-purple-500/20"
                            />
                        )}
                    </div>
                )}

                {/* BASIC FOOTER */}
                <BasicFooter
                    {...basicProps}
                    backgroundColor="bg-transparent"
                    darkBackgroundColor="dark:bg-transparent"
                    borderColor="border-none"
                    darkBorderColor="dark:border-none"
                    customStyles={{
                        container: "border-none pt-12 pb-12", // Override border
                        ...basicProps.customStyles
                    }}
                />
            </div>
        </div>
    );
};
