
// @ts-ignore
import { addons } from '@storybook/manager-api';
// @ts-ignore
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: "Marc's Design System",

        // 👇 SOLUCIÓN:
        // 1. Asegúrate de poner la extensión correcta (.png o .ico según tu archivo)
        // 2. Añade '/design-system/' delante para que funcione en GitHub Pages
        brandImage: '/design-system/favicon.png',

        brandUrl: 'https://github.com/IniguezMarc/design-system',
        brandTarget: '_self',
    }),
});