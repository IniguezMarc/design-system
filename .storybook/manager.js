
// @ts-ignore
import { addons } from '@storybook/manager-api';
// @ts-ignore
import { create } from '@storybook/theming';

// 👇 AQUÍ ESTÁ EL TRUCO: Importamos la imagen como si fuera código
// (Asegúrate de que el nombre del archivo coincide: favicon.png o logo.png)
import logo from './favicon.png';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: "Marc's Design System",
        brandUrl: 'https://github.com/IniguezMarc/design-system',
        brandTarget: '_self',

        // 👇 Y aquí usamos la variable importada
        brandImage: logo,
    }),
});