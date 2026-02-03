import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { BasicNavbar, type BasicNavbarProps } from './BasicNavbar';
import { CreativeButton } from '../../atoms/Button/CreativeButton';

export interface CreativeNavbarProps extends BasicNavbarProps {
    /** Whether to hide the navbar when scrolling down */
    hideOnScroll?: boolean;
    /** Whether to apply glassmorphism effect when scrolled */
    /** Whether to apply glassmorphism effect when scrolled */
    glassOnScroll?: boolean;
    /** Opacity of the glass effect (0-100) */
    glassDensity?: number;
    /** Threshold (px) to trigger the scrolled state */
    scrollThreshold?: number;
}

export const CreativeNavbar = ({
    hideOnScroll = false,
    glassOnScroll = true,
    glassDensity = 80,
    scrollThreshold = 50,
    className,
    ...basicProps
}: CreativeNavbarProps & { className?: string }) => {

    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Internal state for mobile menu if not controlled
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = basicProps.isOpen !== undefined ? basicProps.isOpen : internalIsOpen;
    const onToggleMenu = basicProps.onToggleMenu || (() => setInternalIsOpen(!internalIsOpen));

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Toggle Scrolled State
        const scrolled = latest > scrollThreshold;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }

        // Hide on scroll logic
        if (hideOnScroll) {
            if (latest > lastScrollY && latest > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }
        setLastScrollY(latest);
    });

    // Dynamic styles based on state
    // Responsive padding: smaller on mobile
    const navBackground = glassOnScroll
        ? (isScrolled ? 'bg-white dark:bg-black backdrop-blur-md border-b border-gray-100/50 dark:border-white/5' : 'bg-transparent border-transparent')
        : (isScrolled ? 'bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800' : 'bg-transparent border-transparent');

    const navPadding = isScrolled ? 'py-0' : 'py-1 md:py-2'; // Shrink effect, responsive base padding

    const navStyle = (glassOnScroll && isScrolled)
        ? { '--tw-bg-opacity': glassDensity / 100 } as React.CSSProperties
        : {};

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground} ${navPadding} ${className || ''}`}
            style={navStyle}
            initial={{ y: 0 }}
            animate={{ y: isHidden ? -100 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <BasicNavbar
                {...basicProps}
                isOpen={isOpen}
                onToggleMenu={onToggleMenu}
                backgroundColor="bg-transparent"
                darkBackgroundColor="dark:bg-transparent"
                borderColor="border-none"
                darkBorderColor="dark:border-none"
                customStyles={{
                    container: "border-none", // Override internal BasicNavbar border
                    ...basicProps.customStyles
                }}
                renderAction={(action, idx) => (
                    <CreativeButton
                        key={idx}
                        label={action.label}
                        onClick={action.onClick}
                        variant="glow"
                        primaryColor="#3b82f6"
                        className="text-sm px-5 py-2"
                    />
                )}
                renderMobileAction={(action, idx) => (
                    <CreativeButton
                        key={idx}
                        label={action.label}
                        onClick={action.onClick}
                        variant="glow"
                        primaryColor="#3b82f6"
                        className="w-full justify-center"
                    />
                )}
            />
        </motion.div>
    );
};
