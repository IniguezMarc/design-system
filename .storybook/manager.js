
// @ts-ignore
import { addons } from '@storybook/manager-api';
// @ts-ignore
import { create } from '@storybook/theming';
// @ts-ignore
import logo from './favicon.png';

addons.setConfig({
    theme: create({
        base: 'dark',
        brandTitle: "Marc's Design System",
        brandUrl: 'https://github.com/IniguezMarc/design-system',
        brandTarget: '_self',
        brandImage: logo,
        colorPrimary: '#3b82f6',
        colorSecondary: '#3b82f6',
        appBg: '#0f172a',
        appContentBg: '#1e293b',
    }),
});