import React from 'react';

export interface InputSlots {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    customStyles?: InputSlots;

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

export const Input = ({
    label,
    error,
    className,
    customStyles = {},

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
}: InputProps) => {
    return (
        <div className={`w-full ${customStyles.container || ''}`}>
            {label && (
                <label className={`block text-sm font-medium ${labelColor} ${darkLabelColor} mb-1 ${customStyles.label || ''}`}>
                    {label}
                </label>
            )}
            <input
                className={`
          w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all
          ${inputBgColor} ${darkInputBgColor}
          ${inputTextColor} ${darkInputTextColor}
          ${focusRingColor}
          ${error
                        ? `${errorBorderColor} focus:ring-red-500 ${darkErrorBorderColor}`
                        : `${inputBorderColor} ${darkInputBorderColor}`
                    }
          ${customStyles.input || ''}
          ${className}
        `}
                {...props}
            />
            {error && <p className={`mt-1 text-xs ${errorTextColor} ${darkErrorTextColor} ${customStyles.error || ''}`}>{error}</p>}
        </div>
    );
};