import React, { ReactNode } from 'react';

export interface BasicControlPanelProps {
    children: ReactNode;
    title?: string;
    actions?: ReactNode;
    className?: string;
    customStyles?: {
        container?: string;
        header?: string;
        title?: string;
        content?: string;
        actions?: string;
    };
}

export const BasicControlPanel: React.FC<BasicControlPanelProps> = ({
    children,
    title,
    actions,
    className = '',
    customStyles = {}
}) => {
    return (
        <div
            className={`
                bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                rounded-xl shadow-sm overflow-hidden
                ${customStyles.container || ''} ${className}
            `}
        >
            {(title || actions) && (
                <div className={`
                    px-4 py-3 border-b border-gray-100 dark:border-gray-700 
                    flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50
                    ${customStyles.header || ''}
                `}>
                    {title && (
                        <h3 className={`text-sm font-semibold text-gray-900 dark:text-gray-100 ${customStyles.title || ''}`}>
                            {title}
                        </h3>
                    )}
                    {actions && (
                        <div className={`flex items-center gap-2 ${customStyles.actions || ''}`}>
                            {actions}
                        </div>
                    )}
                </div>
            )}
            <div className={`p-4 ${customStyles.content || ''}`}>
                {children}
            </div>
        </div>
    );
};
