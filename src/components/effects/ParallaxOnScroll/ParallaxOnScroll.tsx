import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

export interface ParallaxOnScrollProps {
    children: ReactNode;
    /**
     * Parallax speed factor.
     * Positive values move slower than scroll (adding depth).
     * Negative values move faster/opposite to scroll.
     * @default 0.5
     */
    speed?: number;
    className?: string;
}

export const ParallaxOnScroll = ({
    children,
    speed = 0.5,
    className = '',
}: ParallaxOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Translate Y based on scroll progress.
    // Range: -100px to 100px multiplied by speed.
    const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

    return (
        <div ref={ref} className={`${className} w-fit h-fit`}>
            <motion.div style={{ y }} className="will-change-transform">
                {children}
            </motion.div>
        </div>
    );
};
