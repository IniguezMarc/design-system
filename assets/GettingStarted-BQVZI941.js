import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-DHltmuYf.js";import{M as i}from"./index-BnKYA9KO.js";import"./index-Ch-GWmDW.js";import"./iframe-BFTU6UnS.js";import"./index-DoUWZ_0J.js";import"./index-BVOjTE6T.js";import"./index-DrFu-skq.js";function t(s){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:["Welcome to ",n.jsx(e.strong,{children:"Marc's Design System"}),". This guide will help you get up and running with the project locally."]}),`
`,n.jsx(e.h2,{id:"-installation",children:"📦 Installation"}),`
`,n.jsxs(e.p,{children:["This project is built with ",n.jsx(e.strong,{children:"Vite"})," and ",n.jsx(e.strong,{children:"React"}),". To install dependencies, run:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install
`})}),`
`,n.jsx(e.h2,{id:"-running-storybook",children:"🚀 Running Storybook"}),`
`,n.jsx(e.p,{children:"To start the development environment and view the component library:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run storybook
`})}),`
`,n.jsxs(e.p,{children:["This will start the Storybook server (usually at ",n.jsx(e.code,{children:"http://localhost:6006"}),"), where you can explore:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Atoms"}),": Basic building blocks (Buttons, Inputs, Badges)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Molecules"}),": Combinations of atoms (Cards, Search bars)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Organisms"}),": Complex sections (Navbar, Hero, Footer)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pages"}),": Full page layouts."]}),`
`]}),`
`,n.jsx(e.h2,{id:"️-tech-stack",children:"🛠️ Tech Stack"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Framework"}),": React + TypeScript"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styling"}),": Tailwind CSS"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tooling"}),": Vite, Storybook"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Code Quality"}),": ESLint, Prettier"]}),`
`]}),`
`,n.jsx(e.h2,{id:"-usage-in-external-projects",children:"📦 Usage in External Projects"}),`
`,n.jsx(e.p,{children:"If you want to use a component from this library in another project:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Copy the Code"}),": The easiest way is to copy the component file (e.g., ",n.jsx(e.code,{children:"Button.tsx"}),") and its dependencies (like ",n.jsx(e.code,{children:"index.css"})," or Tailwind config) directly into your project."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dependencies"}),": Ensure your project has the required dependencies installed (React, Tailwind CSS, etc.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import"}),": Import the component in your project:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from './components/atoms/Button/Button';
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": In the future, this library could be published as an NPM package for easier installation (",n.jsx(e.code,{children:"npm install @marc-design-system/ui"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"-project-structure",children:"📂 Project Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`src/\r
├── components/\r
│   ├── atoms/       # Smallest units (Button, Avatar)\r
│   ├── molecules/   # Groups of atoms (ProjectCard)\r
│   ├── organisms/   # Complex UI sections (Navbar)\r
│   └── pages/       # Full application pages\r
├── docs/            # Documentation files (.mdx)\r
└── assets/          # Static assets
`})})]})}function p(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
