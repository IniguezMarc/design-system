import { BasicTimeline, type BasicTimelineProps, type TimelineItem } from './BasicTimeline';

export const Timeline = (props: BasicTimelineProps) => <BasicTimeline {...props} />;
export * from './CreativeTimeline';
export type { BasicTimelineProps, TimelineItem };
