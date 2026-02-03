import { useRef } from 'react';
import { motion, useInView, type Variants, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

export interface ScrollRevealProps {
    children: ReactNode;
    /**
     * The base animation style.
     * @default 'fade'
     */
    base?: 'fade' | 'slide' | 'zoom' | 'rotate';
    /**
    * Direction of the entrance.
    * @default 'up'
    */
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    /**
    * Distance of movement in pixels.
    * @default 20
    */
    distance?: number;
    /**
    * Whether to apply a blur effect (aesthetic mist).
    * @default true
    */
    blur?: boolean;
    /**
     * Duration of the animation in seconds.
     * @default 0.6
     */
    duration?: number;
    /**
     * Delay before animation starts in seconds.
     * @default 0
     */
    delay?: number;
    /**
    * Amount of element visible before triggering (0 to 1).
    * @default 0.2
    */
    threshold?: number;
    /**
     * Whether to animate only once.
     * @default true
     */
    once?: boolean;
    /**
     * Custom className for the wrapper.
     */
    className?: string;
}

/**
 * A scroll-triggered reveal animation wrapper using Framer Motion.
 * Supports fade, slide, zoom, and rotate animations with customizable
 * direction, distance, blur, and timing.
 * 
 * @example
 * ```tsx
 * <ScrollReveal base="slide" direction="up" distance={30}>
 *   <Card />
 * </ScrollReveal>
 * ```
 */
export const ScrollReveal = ({
    children,
    base = 'fade',
    direction = 'up',
    distance = 20,
    blur = true,
    duration = 0.6,
    delay = 0,
    threshold = 0.2,
    once = true,
    className = '',
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: threshold, once });

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: distance };
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            default: return {};
        }
    };

    const getInitialState = () => {
        const offset = getDirectionOffset();
        const state: any = { opacity: 0, ...offset };

        if (blur) state.filter = 'blur(10px)';

        if (base === 'zoom') state.scale = 0.95;
        if (base === 'rotate') state.rotate = direction === 'left' || direction === 'right' ? 5 : 0;

        return state;
    };

    const getFinalState = () => {
        const state: any = { opacity: 1, x: 0, y: 0 };

        if (blur) state.filter = 'blur(0px)';
        if (base === 'zoom') state.scale = 1;
        if (base === 'rotate') state.rotate = 0;

        return state;
    };

    const variants: Variants = {
        hidden: getInitialState(),
        visible: getFinalState(),
    };

    const transition: Transition = {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Cubic bezier for smooth premium feel
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
};
