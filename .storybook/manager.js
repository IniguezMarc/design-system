import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    enableShortcuts: false,
    theme: create({
        base: 'dark',
        brandTitle: "Marc's Design System",
        brandUrl: 'https://github.com/IniguezMarc/design-system',
        brandTarget: '_blank',
        colorPrimary: '#3b82f6',
        colorSecondary: '#3b82f6',
        appBg: '#111827',
    }),
});