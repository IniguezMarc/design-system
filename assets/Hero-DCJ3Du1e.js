import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-Ch-GWmDW.js";import{B as m}from"./Button-BFgrEJyR.js";const u=({greeting:l="Hello",title:i,subtitle:o,imageUrl:t,actions:s=[],customStyles:a={}})=>{const n=t?"flex flex-col lg:flex-row items-center gap-12 lg:gap-16":"flex flex-col items-center text-center max-w-4xl mx-auto",d=t?"flex-1 text-center lg:text-left":"w-full",x=t?"justify-center lg:justify-start":"justify-center";return e.jsx("section",{className:`
      relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden transition-colors duration-300
      bg-white dark:bg-gray-900 
      ${a.container||""}
    `,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:n,children:[e.jsxs("div",{className:`${d} ${a.content||""}`,children:[l&&e.jsx("p",{className:"text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4",children:l}),e.jsx("h1",{className:`
              text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors
              text-gray-900 dark:text-white
              ${a.title||""}
            `,children:i}),e.jsx("p",{className:`
              text-lg sm:text-xl mb-8 leading-relaxed transition-colors
              text-gray-500 dark:text-gray-400
              ${!t&&"mx-auto max-w-2xl"}
              ${a.subtitle||""}
            `,children:o}),s.length>0&&e.jsx("div",{className:`flex flex-col sm:flex-row gap-4 ${x}`,children:s.map((r,c)=>e.jsx(m,{label:r.label,variant:r.variant||"primary",size:"large",onClick:r.onClick,className:"w-full sm:w-auto"},c))})]}),t&&e.jsx("div",{className:`
              flex-1 w-full max-w-md lg:max-w-full relative 
              ${a.imageWrapper||""}
            `,children:e.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-none dark:border dark:border-gray-800 aspect-[4/3] group",children:[e.jsx("div",{className:"absolute inset-0 bg-gray-900/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"}),e.jsx("img",{src:t,alt:"Hero Visual",className:"w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"})]})})]})})})};u.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{greeting:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Hello"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"HeroAction"}],raw:"HeroAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},customStyles:{required:!1,tsType:{name:"HeroSlots"},description:"",defaultValue:{value:"{}",computed:!1}}}};export{u as H};
