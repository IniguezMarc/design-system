import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-Ch-GWmDW.js";const x=({label:r,error:t,className:h,...y})=>e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r}),e.jsx("input",{className:`
          w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
          ${t?"border-red-500 focus:ring-red-500":"border-gray-300"}
          ${h}
        `,...y}),t&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t})]});x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Atoms/Input",component:x,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"max-w-sm",children:e.jsx(r,{})})]},s={args:{placeholder:"Type something..."},tags:["!autodocs"]},a={args:{label:"Email Address",placeholder:"example@gmail.com",type:"email"}},o={args:{label:"Username",value:"Marc",error:"This username already exists"}};var n,l,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...'
  },
  tags: ['!autodocs']
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'example@gmail.com',
    type: 'email'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    value: 'Marc',
    error: 'This username already exists'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["Playground","WithLabel","WithError"];export{s as Playground,o as WithError,a as WithLabel,E as __namedExportsOrder,j as default};
