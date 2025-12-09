import React from 'react';

export interface InputSlots {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
    iconContainer?: string;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> { // Omit size if it conflicts, or just generic
    label?: string;
    error?: string;
    customStyles?: InputSlots;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;

    // Color Overrides
    labelColor?: string;
    darkLabelColor?: string;

    inputBgColor?: string;
    darkInputBgColor?: string;

    inputBorderColor?: string;
    darkInputBorderColor?: string;

    inputTextColor?: string;
    darkInputTextColor?: string;

    focusRingColor?: string;

    errorBorderColor?: string;
    darkErrorBorderColor?: string;

    errorTextColor?: string;
    darkErrorTextColor?: string;
}

export const BasicInput = React.forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    className,
    customStyles = {},
    startIcon,
    endIcon,

    // Default Colors
    labelColor = "text-gray-700",
    darkLabelColor = "dark:text-gray-200",

    inputBgColor = "bg-white",
    darkInputBgColor = "dark:bg-gray-800",

    inputBorderColor = "border-gray-300",
    darkInputBorderColor = "dark:border-gray-600",

    inputTextColor = "text-gray-900",
    darkInputTextColor = "dark:text-white",

    focusRingColor = "focus:ring-blue-500",

    errorBorderColor = "border-red-500",
    darkErrorBorderColor = "dark:border-red-500",

    errorTextColor = "text-red-500",
    darkErrorTextColor = "dark:text-red-400",

    ...props
}, ref) => {

    const baseInputStyles = `
        w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all
        ${startIcon ? 'pl-10' : 'px-3'} 
        ${endIcon ? 'pr-10' : 'px-3'}
        ${inputBgColor} ${darkInputBgColor}
        ${inputTextColor} ${darkInputTextColor}
        ${focusRingColor}
    `;

    const borderStyles = error
        ? `${errorBorderColor} focus:ring-red-500 ${darkErrorBorderColor}`
        : `${inputBorderColor} ${darkInputBorderColor}`;

    return (
        <div className={`w-full ${customStyles.container || ''} ${className}`}>
            {label && (
                <label className={`block text-sm font-medium ${labelColor} ${darkLabelColor} mb-1 ${customStyles.label || ''}`}>
                    {label}
                </label>
            )}

            <div className="relative">
                {startIcon && (
                    <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${customStyles.iconContainer || ''}`}>
                        {startIcon}
                    </div>
                )}

                <input
                    ref={ref}
                    className={`
                        ${baseInputStyles}
                        ${borderStyles}
                        ${customStyles.input || ''}
                    `}
                    {...props}
                />

                {endIcon && (
                    <div className={`absolute inset-y-0 right-0 pr-3 flex items-center ${customStyles.iconContainer || ''}`}>
                        {endIcon}
                    </div>
                )}
            </div>

            {error && <p className={`mt-1 text-xs ${errorTextColor} ${darkErrorTextColor} ${customStyles.error || ''}`}>{error}</p>}
        </div>
    );
});

BasicInput.displayName = 'BasicInput';
