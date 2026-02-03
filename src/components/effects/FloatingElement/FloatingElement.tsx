import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export interface FloatingElementProps {
    children: ReactNode;
    /**
     * Duration of one full float cycle in seconds.
     * @default 3
     */
    duration?: number;
    /**
     * Vertical floating distance in pixels.
     * @default 15
     */
    yOffset?: number;
    /**
     * Delay before animation starts (seconds).
     * @default 0
     */
    delay?: number;
    className?: string;
}

export const FloatingElement = ({
    children,
    duration = 3,
    yOffset = 15,
    delay = 0,
    className = '',
}: FloatingElementProps) => {
    return (
        <div className={`${className} w-fit h-fit`}>
            <motion.div
                animate={{
                    y: [0, -yOffset, 0]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
