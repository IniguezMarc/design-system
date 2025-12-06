
// @ts-ignore
import { addons } from '@storybook/manager-api';
// @ts-ignore
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: "Marc's Design System",
        brandUrl: 'https://github.com/IniguezMarc/design-system',
        brandTarget: '_self',
    }),
});