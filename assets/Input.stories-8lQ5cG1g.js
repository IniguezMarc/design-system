import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-Ch-GWmDW.js";const x=({label:r,error:t,className:b,...f})=>e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r}),e.jsx("input",{className:`
          w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
          ${t?"border-red-500 focus:ring-red-500":"border-gray-300"}
          ${b}
        `,...f}),t&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t})]});x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Atoms/Input",component:x,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"max-w-sm",children:e.jsx(r,{})})]},s={args:{placeholder:"Escribe algo..."}},a={args:{label:"Correo Electrónico",placeholder:"ejemplo@gmail.com",type:"email"}},o={args:{label:"Usuario",value:"Marc",error:"Este usuario ya existe"}};var l,c,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Escribe algo...'
  }
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Correo Electrónico',
    placeholder: 'ejemplo@gmail.com',
    type: 'email'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    value: 'Marc',
    error: 'Este usuario ya existe'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["Default","WithLabel","WithError"];export{s as Default,o as WithError,a as WithLabel,E as __namedExportsOrder,y as default};
