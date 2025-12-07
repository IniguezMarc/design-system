import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-Ch-GWmDW.js";import{B as f}from"./Button-BFgrEJyR.js";import{B as x}from"./Badge-BztS9EK-.js";const g=({title:r,description:o,image:i,tags:l=[],orientation:n="vertical",actionLabel:d="Ver Proyecto",projectUrl:c,linkTarget:p="_self",onViewProject:u,customStyles:a={},className:m=""})=>{const t=n==="horizontal";return e.jsxs("div",{className:`
      /* 1. CLASE IDENTIFICADORA */
      ds-card
      
      /* 2. ESTRUCTURA BASE */
      group w-full rounded-xl overflow-hidden border transition-all duration-300
      ${t?"flex flex-col md:flex-row":"flex flex-col"}
      
      /* 3. MODO CLARO (Por defecto) */
      /* Fondo blanco, borde gris, sombra negra al hover */
      bg-white border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1
      
      /* 4. MODO OSCURO (Overrides) */
      /* Fondo oscuro y borde */
      dark:bg-gray-800 dark:border-gray-700
      
      /* IMPORTANTE: */
     /* 1. Quitamos la sombra base */
      dark:shadow-none 
      
      /* 2. Quitamos la sombra negra del hover */
      dark:hover:shadow-none
      
      /* 3. APLICAMOS LA SOMBRA BLANCA PORTABLE (Sin config externa) */
      /* Sintaxis: shadow-[X_Y_Blur_Spread_Color] */
      /* Usamos ! para forzar la prioridad */
      /* 0 (X) | 20px (Y, cae hacia abajo) | 25px (Blur) | -5px (Spread) | Color */
      dark:hover:!shadow-[0_20px_25px_-5px_rgba(255,255,255,0.30)]
      
      /* 5. INYECCIONES EXTERNAS */
      ${a.container||""} 
      ${m}
    `,children:[e.jsxs("div",{className:`
        ds-card-image overflow-hidden relative
        ${t?"w-full h-48 md:w-2/5 md:h-auto":"w-full h-48"} 
        ${a.imageWrapper||""} 
      `,children:[e.jsx("img",{src:i,alt:r,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-transparent dark:bg-black/20 transition-colors pointer-events-none"})]}),e.jsxs("div",{className:`ds-card-content p-6 flex flex-col justify-between flex-1 ${a.content||""}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`
            ds-card-title text-2xl font-bold mb-3 transition-colors text-gray-900 dark:text-white
            ${a.title||""}
          `,children:r}),e.jsx("p",{className:`
            ds-card-description mb-4 line-clamp-3 leading-relaxed transition-colors text-gray-600 dark:text-gray-300
            ${a.description||""}
          `,children:o}),e.jsx("div",{className:`ds-card-tags flex flex-wrap gap-2 mb-6 ${a.tagsContainer||""}`,children:l.map(s=>e.jsx(x,{label:s,variant:"secondary"},s))})]}),e.jsx("div",{className:"ds-card-actions flex justify-start mt-auto",children:e.jsx(f,{label:d,onClick:u,href:c,target:p,size:"medium",variant:"primary"})})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},projectUrl:{required:!1,tsType:{name:"string"},description:""},linkTarget:{required:!1,tsType:{name:"union",raw:"'_self' | '_blank'",elements:[{name:"literal",value:"'_self'"},{name:"literal",value:"'_blank'"}]},description:"",defaultValue:{value:"'_self'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ver Proyecto"',computed:!1}},onViewProject:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customStyles:{required:!1,tsType:{name:"ProjectCardSlots"},description:"Hooks para personalizar estilos de partes internas",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{g as P};
