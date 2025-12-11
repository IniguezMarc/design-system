


export interface ToggleSlots {
    container?: string;
    icon?: string;
}

export interface BasicToggleProps {
    isToggled: boolean;
    onToggle: () => void;
    iconOn?: React.ReactNode;
    iconOff?: React.ReactNode;
    imageOn?: string;
    imageOff?: string;
    imageFit?: 'cover' | 'contain';
    customStyles?: ToggleSlots;
    className?: string;
    title?: string;
}

export const BasicToggle = ({
    isToggled,
    onToggle,
    iconOn,
    iconOff,
    imageOn,
    imageOff,
    imageFit = 'contain',
    customStyles = {},
    className = '',
    title
}: BasicToggleProps) => {
    const iconBaseClasses = `w-6 h-6 ${customStyles.icon || ''}`;

    const renderContent = () => {
        const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

        if (isToggled) {
            if (imageOn) {
                return <img src={imageOn} alt="Toggled On" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconOn;
        } else {
            if (imageOff) {
                return <img src={imageOff} alt="Toggled Off" className={`${iconBaseClasses} ${fitClass}`} />;
            }
            return iconOff;
        }
    };

    return (
        <button
            onClick={onToggle}
            title={title}
            className={`
                p-2 rounded-full transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-blue-500 hover:rotate-12 hover:scale-110 overflow-hidden
                ${isToggled
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }
                ${customStyles.container || ''}
                ${className}
            `}
        >
            {renderContent()}
        </button>
    );
};
