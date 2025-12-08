import{j as a}from"./jsx-runtime-BjG_zV1W.js";import"./index-Ch-GWmDW.js";const d=({src:l,alt:r="Avatar",size:t="md",imageFit:s="cover",customStyles:e={},className:i=""})=>{const n={sm:"h-8 w-8",md:"h-12 w-12",lg:"h-16 w-16",xl:"h-32 w-32"},o=s==="contain"?"object-contain":"object-cover";return a.jsx("div",{className:`
      ds-avatar relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0
      ${n[t]}
      ${e.container||""}
      ${i}
    `,children:a.jsx("img",{src:l,alt:r,className:`
          w-full h-full 
          ${o}
          ${e.image||""}
        `})})};d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Avatar"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},imageFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"}]},description:"",defaultValue:{value:"'cover'",computed:!1}},customStyles:{required:!1,tsType:{name:"AvatarSlots"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{d as A};
