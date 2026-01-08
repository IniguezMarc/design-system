import React from 'react';

export interface BasicSliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    customStyles?: {
        container?: string;
        label?: string;
        input?: string;
    };
}

export const BasicSlider: React.FC<BasicSliderProps> = ({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    className = '',
    customStyles = {},
    disabled,
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-2 ${customStyles.container || ''} ${className}`}>
            {label && (
                <div className="flex justify-between items-center">
                    <label className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${customStyles.label || ''}`}>
                        {label}
                    </label>
                    <span className="text-xs text-gray-500 font-mono">
                        {value}
                    </span>
                </div>
            )}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                disabled={disabled}
                className={`
                    w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700
                    accent-blue-600 dark:accent-blue-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                    ${customStyles.input || ''}
                `}
                {...props}
            />
        </div>
    );
};
