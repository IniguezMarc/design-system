import { motion, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { useRef, useId, useEffect } from 'react';

export interface ScrollSvgProps {
    /**
     * The SVG path data (d attribute).
     */
    path: string;
    /**
     * ViewBox for the SVG.
     * @default "0 0 100 100"
     */
    viewBox?: string;
    /**
     * Stroke color.
     * @default "currentColor"
     */
    strokeColor?: string;
    /**
     * Stroke width.
     * @default 2
     */
    strokeWidth?: number;
    /**
     * Whether to add a neon glow effect.
     * @default false
     */
    glow?: boolean;
    /**
     * Whether the line should be dashed.
     * @default false
     */
    dashed?: boolean;
    /**
     * Additional classes for the container.
     */
    className?: string;
    /**
     * Optional gradient colors [start, end]. If provided, overrides strokeColor.
     */
    gradient?: [string, string];
    /**
     * Where in the viewport the animation should complete.
     * 'center' = finishes when bottom of SVG hits center of screen.
     * 'bottom' = finishes when bottom of SVG hits bottom of screen.
     * 'top' = finishes when bottom of SVG hits top of screen (default).
     */
    animationEnd?: 'center' | 'bottom' | 'top';
    /**
     * Optional inline styles.
     */
    style?: React.CSSProperties;
    /**
     * Custom scroll offsets for Framer Motion's useScroll.
     * Overrides animationEnd logic if provided.
     * Example: ['start end', 'end center']
     */
    scrollOffset?: any;
    /**
     * Speed multiplier for the drawing animation relative to scroll.
     * 1 = 1:1 with scroll.
     * > 1 = Faster (completes earlier).
     * < 1 = Slower (might not complete).
     * @default 1
     */
    speed?: number;
    /**
     * Whether to animate the line drawing from 0 to the current scroll position on mount.
     * @default true
     */
    animateOnMount?: boolean;
    /**
     * SVG preserveAspectRatio attribute.
     * Pass "none" to stretch the SVG to fill the container.
     */
    preserveAspectRatio?: string;
}

export const ScrollSvg = ({
    path,
    viewBox = '0 0 100 100',
    strokeColor = 'currentColor',
    strokeWidth = 2,
    glow = false,
    dashed = false,
    className = '',
    style,
    gradient,
    animationEnd = 'top',
    scrollOffset,
    speed = 1,
    animateOnMount = true,
    preserveAspectRatio,
}: ScrollSvgProps) => {
    const ref = useRef(null);
    const id = useId();
    const gradientId = `gradient-${id}`;

    // Map the string prop to actual framer-motion offsets
    const endOffset = animationEnd === 'center' ? 'end center' :
        animationEnd === 'bottom' ? 'end end' :
            'end start'; // default 'top'

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset || ['start end', endOffset],
    });

    // Intro Animation Logic
    const introProgress = useMotionValue(animateOnMount ? 0 : 1);

    useEffect(() => {
        if (animateOnMount) {
            animate(introProgress, 1, { duration: 1.5, ease: "easeOut" });
        }
    }, [animateOnMount, introProgress]);

    // Combine Intro * (Scroll * Speed)
    // If intro is 0 -> result is 0.
    // As intro -> 1, result -> current scroll position.
    const pathValue = useTransform([scrollYProgress, introProgress], ([scroll, intro]) => {
        return ((scroll as number) * speed) * (intro as number);
    });

    const pathLength = useSpring(pathValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // For dashed lines, we might want to animate the dash offset indefinitely? 
    // Or just reveal the dashes. Let's stick to reveal for now.

    const stroke = gradient ? `url(#${gradientId})` : strokeColor;

    return (
        <div ref={ref} className={className} style={style}>
            <motion.svg
                viewBox={viewBox}
                className="w-full h-full overflow-visible"
                style={{
                    pointerEvents: 'none'
                }}
                preserveAspectRatio={preserveAspectRatio}
            >
                <defs>
                    {gradient && (
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={gradient[0]} />
                            <stop offset="100%" stopColor={gradient[1]} />
                        </linearGradient>
                    )}
                </defs>

                {/* Glow Layer */}
                {glow && (
                    <motion.path
                        d={path}
                        fill="none"
                        stroke={stroke}
                        strokeWidth={strokeWidth * 3}
                        strokeLinecap="round"
                        style={{
                            pathLength,
                            opacity: 0.4,
                            filter: 'blur(8px)',
                        }}
                    />
                )}

                {/* Main Path */}
                <motion.path
                    d={path}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={dashed ? "10 10" : "none"}
                    style={{
                        pathLength,
                    }}
                />
            </motion.svg>
        </div>
    );
};
