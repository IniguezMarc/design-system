import { BasicControlPanel, type BasicControlPanelProps } from './BasicControlPanel';

export type ControlPanelProps = BasicControlPanelProps;

export const ControlPanel = (props: ControlPanelProps) => <BasicControlPanel {...props} />;
