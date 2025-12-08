import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-DHltmuYf.js";import{M as i}from"./index-DgHE-wT1.js";import"./index-Ch-GWmDW.js";import"./iframe-CHCsNLum.js";import"./index-DoUWZ_0J.js";import"./index-BVOjTE6T.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.p,{children:["Welcome to ",e.jsx(n.strong,{children:"Marc's Design System"})," (",e.jsx(n.code,{children:"@iniguezmarc/design-system"}),"). A modern, accessible, and type-safe React component library."]}),`
`,e.jsx(n.h2,{id:"-installation",children:"� Installation"}),`
`,e.jsx(n.p,{children:"Install the package using NPM:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @iniguezmarc/design-system
`})}),`
`,e.jsx(n.h2,{id:"️-setup",children:"⚙️ Setup"}),`
`,e.jsx(n.h3,{id:"1-import-styles",children:"1. Import Styles"}),`
`,e.jsxs(n.p,{children:["You ",e.jsx(n.strong,{children:"must"})," import the library's CSS in your application's entry point (e.g., ",e.jsx(n.code,{children:"main.tsx"}),", ",e.jsx(n.code,{children:"App.tsx"}),") to ensure components are styled correctly."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@iniguezmarc/design-system/dist/style.css';
`})}),`
`,e.jsx(n.h3,{id:"2-usage",children:"2. Usage"}),`
`,e.jsx(n.p,{children:"Import components directly from the package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, ProjectCard } from '@iniguezmarc/design-system';\r
\r
function App() {\r
  return (\r
    <div className="p-10">\r
      <Button label="Click Me" variant="primary" />\r
\r
      <ProjectCard\r
         title="My Project"\r
         description="A cool project using the design system."\r
         tags={['React', 'TypeScript']}\r
         image="https://via.placeholder.com/300"\r
      />\r
    </div>\r
  );\r
}
`})}),`
`,e.jsx(n.h2,{id:"-library-structure",children:"🧩 Library Structure"}),`
`,e.jsxs(n.p,{children:["The library follows ",e.jsx(n.strong,{children:"Atomic Design"})," principles:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": Basic building blocks (Buttons, Inputs, Badges, Avatars)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"}),": Simple groups of atoms (Project Cards)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"}),": Complex UI sections (Navbar, Hero, Footer, ProfileSection)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"-developer-guide",children:"🛠 Developer Guide"}),`
`,e.jsx(n.p,{children:"If you want to run this project locally for development:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clone the repo:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone https://github.com/IniguezMarc/design-system.git
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Install dependencies:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start Storybook:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run storybook
`})}),`
`,"Visit ",e.jsx(n.code,{children:"http://localhost:6006"})," to interact with components."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
