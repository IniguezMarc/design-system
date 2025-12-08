interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
    href?: string;
    target?: string;
}
export declare const Button: ({ label, variant, size, onClick, className, href, target }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
