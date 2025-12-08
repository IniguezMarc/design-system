import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as o}from"./ProjectCard-DYGVubvt.js";import"./Button-BFgrEJyR.js";import"./index-Ch-GWmDW.js";import"./Badge-BztS9EK-.js";const g={title:"Molecules/ProjectCard",component:o,tags:["autodocs"],argTypes:{isDark:{control:"boolean",description:"Simular modo oscuro",table:{category:"Preview Helper"}},customStyles:{control:"object",description:"Personalizar estilos (Hooks)",table:{category:"Styles"}},className:{table:{disable:!0}},onViewProject:{table:{disable:!0}}},render:({isDark:i,...n})=>e.jsx("div",{className:`
      ${i?"dark bg-gray-950":"bg-gray-100"} 
      p-12 w-full flex justify-center items-center min-h-[400px] transition-colors duration-300
    `,children:e.jsx("div",{className:"max-w-md w-full",children:e.jsx(o,{...n})})})},t={args:{title:"Proyecto Estándar",description:"Tarjeta interactiva. Usa los controles abajo para probar el modo oscuro o editar estilos.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",tags:["React","Tailwind"],orientation:"vertical",projectUrl:"https://github.com/IniguezMarc/design-system",isDark:!1,linkTarget:"_self",actionLabel:"Ver Proyecto",customStyles:{container:"",imageWrapper:"",content:"",title:"",description:"",tagsContainer:""}}};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Proyecto Estándar',
    description: 'Tarjeta interactiva. Usa los controles abajo para probar el modo oscuro o editar estilos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Tailwind'],
    orientation: 'vertical',
    projectUrl: 'https://github.com/IniguezMarc/design-system',
    isDark: false,
    linkTarget: '_self',
    actionLabel: 'Ver Proyecto',
    customStyles: {
      container: '',
      imageWrapper: '',
      content: '',
      title: '',
      description: '',
      tagsContainer: ''
    }
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["Playground"];export{t as Playground,u as __namedExportsOrder,g as default};
