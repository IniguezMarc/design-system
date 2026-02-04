import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface TypewriterProps {
    /**
     * The text to display.
     */
    text: string;
    /**
     * Speed of typing in ms per character.
     * @default 50
     */
    speed?: number;
    /**
     * Delay before starting in ms.
     * @default 0
     */
    delay?: number;
    /**
     * Whether to show a blinking cursor.
     * @default true
     */
    cursor?: boolean;
    /**
     * Whether to start only when in view.
     * @default true
     */
    startWhenInView?: boolean;
    /**
     * Additional classes for the cursor
     */
    cursorClassName?: string;
    /**
     * Inline styles for the cursor
     */
    cursorStyle?: import('react').CSSProperties;
    /**
     * Additional classes for the container.
     */
    className?: string;
    /**
     * Inline styles for the container.
     */
    style?: import('react').CSSProperties;
    /**
     * Element type to render as.
     * @default "span"
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p';
}

/**
 * An animated typewriter text effect that types out characters one by one.
 * Supports custom speed, delay, cursor styling, and in-view triggering.
 * 
 * @example
 * ```tsx
 * <Typewriter text="Hello World" speed={80} cursor={true} />
 * ```
 */
export const Typewriter = ({
    text,
    speed = 50,
    delay = 0,
    cursor = true,
    startWhenInView = true,
    className = '',
    style,
    cursorClassName = '',
    cursorStyle,
    as: Component = 'span',
}: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (startWhenInView && !isInView) return;

        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [isInView, startWhenInView, delay]);

    useEffect(() => {
        if (!started) return;

        // Reset text when starting or when text changes
        setDisplayedText('');

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            // Using functional update is not needed if we use slice from the prop 'text'
            // We increment index first to show at least one char if we want immediate feedback, 
            // but standard typewriter waits 'speed' ms for first char.
            currentIndex++;
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [started, text, speed]);

    return (
        <Component ref={ref} className={className} style={style}>
            <span style={{ whiteSpace: 'nowrap' }}>
                {displayedText}
                {cursor && (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className={`inline-block ml-0.5 w-[2px] h-[1em] bg-current align-middle ${cursorClassName}`}
                        style={cursorStyle}
                    />
                )}
            </span>
        </Component>
    );
};
