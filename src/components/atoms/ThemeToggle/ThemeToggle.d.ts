import React from 'react';
export interface ThemeToggleSlots {
    container?: string;
    icon?: string;
}
export interface ThemeToggleProps {
    iconSun?: React.ReactNode;
    iconMoon?: React.ReactNode;
    sunImage?: string;
    moonImage?: string;
    imageFit?: 'cover' | 'contain';
    customStyles?: ThemeToggleSlots;
    className?: string;
}
export declare const ThemeToggle: ({ iconSun, iconMoon, sunImage, moonImage, imageFit, customStyles, className }: ThemeToggleProps) => import("react/jsx-runtime").JSX.Element;
