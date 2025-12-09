import { useEffect, useState } from 'react';
import { BasicThemeToggle, type BasicThemeToggleProps } from './BasicThemeToggle';

// Export the slots interface from here as well for convenience
export type { ThemeToggleSlots } from './BasicThemeToggle';

// ThemeToggleProps extends BasicThemeToggleProps but makes isDark and onToggle optional/handled internally
export interface ThemeToggleProps extends Omit<BasicThemeToggleProps, 'isDark' | 'onToggle'> {
    isDark?: boolean; // Optional override for testing/Storybook
    onToggle?: () => void; // Optional callback
}

export const ThemeToggle = ({
    isDark: externalIsDark,
    onToggle: externalOnToggle,
    ...props
}: ThemeToggleProps) => {
    const [internalIsDark, setInternalIsDark] = useState(false);

    useEffect(() => {
        // Sync with system preference and persist selection
        const checkTheme = () => {
            const isDarkNow = document.documentElement.classList.contains('dark');
            setInternalIsDark(isDarkNow);
        };
        checkTheme();

        // Listen for external changes (e.g. system theme change)
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        // If external handler provided, call it
        if (externalOnToggle) {
            externalOnToggle();
        }
    };

    // Use external control if provided (e.g. from Storybook), otherwise use internal state
    const isDark = externalIsDark !== undefined ? externalIsDark : internalIsDark;

    return (
        <BasicThemeToggle
            {...props}
            isDark={isDark}
            onToggle={toggleTheme}
        />
    );
};
