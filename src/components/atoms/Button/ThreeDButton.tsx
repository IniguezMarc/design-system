
import { BasicButton, type ButtonProps } from './BasicButton';

export const ThreeDButton = (props: ButtonProps) => {
    return (
        <BasicButton
            {...props}
            primaryColor={props.primaryColor || 'bg-indigo-500'}
            primaryHoverColor={props.primaryHoverColor || 'hover:bg-indigo-600'}
            customStyles={{
                ...props.customStyles,
                container: `shadow-[0_6px_0_0_#312e81] active:shadow-none active:translate-y-[6px] transition-all duration-75 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#312e81] rounded-none border-2 border-indigo-900 ${props.customStyles?.container || ''}`,
            }}
        />
    );
};
