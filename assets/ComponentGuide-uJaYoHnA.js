import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-DHltmuYf.js";import{M as t}from"./index-BnKYA9KO.js";import"./index-Ch-GWmDW.js";import"./iframe-BFTU6UnS.js";import"./index-DoUWZ_0J.js";import"./index-BVOjTE6T.js";import"./index-DrFu-skq.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Component Guide"}),`
`,e.jsx(n.h1,{id:"component-creation-guide",children:"Component Creation Guide"}),`
`,e.jsxs(n.p,{children:["This guide explains how to create new components following the ",e.jsx(n.strong,{children:"Atomic Design"})," methodology used in this project."]}),`
`,e.jsx(n.h2,{id:"1-choose-the-level",children:"1. Choose the Level"}),`
`,e.jsx(n.p,{children:"Before coding, decide where your component belongs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atom"}),": Is it a basic HTML element with style? (e.g., ",e.jsx(n.code,{children:"Label"}),", ",e.jsx(n.code,{children:"Icon"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecule"}),": Is it a group of atoms functioning together? (e.g., ",e.jsx(n.code,{children:"UserCard"})," = Avatar + Label)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organism"}),": Is it a full section of a page? (e.g., ",e.jsx(n.code,{children:"Header"}),", ",e.jsx(n.code,{children:"Sidebar"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"2-create-the-files",children:"2. Create the Files"}),`
`,e.jsxs(n.p,{children:["Navigate to ",e.jsx(n.code,{children:"src/components/[level]/[ComponentName]/"})," and create these two files:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ComponentName.tsx"})}),": The actual React component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ComponentName.stories.tsx"})}),": The Storybook stories."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"example-creating-a-tag-atom",children:["Example: Creating a ",e.jsx(n.code,{children:"Tag"})," Atom"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["File: ",e.jsx(n.code,{children:"Tag.tsx"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
\r
interface TagProps {\r
  label: string;\r
  color?: 'blue' | 'green';\r
}\r
\r
export const Tag = ({ label, color = 'blue' }: TagProps) => {\r
  const colorClass = color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';\r
  \r
  return (\r
    <span className={\`px-2 py-1 rounded text-xs font-bold \${colorClass}\`}>\r
      {label}\r
    </span>\r
  );\r
};
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["File: ",e.jsx(n.code,{children:"Tag.stories.tsx"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { Meta, StoryObj } from '@storybook/react';\r
import { Tag } from './Tag';\r
\r
const meta: Meta<typeof Tag> = {\r
  title: 'Atoms/Tag', // Folder path in Storybook sidebar\r
  component: Tag,\r
  tags: ['autodocs'],\r
};\r
\r
export default meta;\r
type Story = StoryObj<typeof meta>;\r
\r
// Playground Story\r
export const Playground: Story = {\r
  args: {\r
    label: 'React',\r
    color: 'blue'\r
  }\r
};\r
\r
// Variation Story\r
export const Green: Story = {\r
  args: {\r
    label: 'Vue',\r
    color: 'green'\r
  }\r
};
`})}),`
`,e.jsx(n.h2,{id:"3-best-practices",children:"3. Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Props"}),": Always define a clean TypeScript interface for your props."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Defaults"}),": Provide sensible default values for optional props."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Classes"}),": Use Tailwind CSS for styling. Avoid inline styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stories"}),": distinct stories for different component states (e.g., ",e.jsx(n.code,{children:"Loading"}),", ",e.jsx(n.code,{children:"Error"}),", ",e.jsx(n.code,{children:"Disabled"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Playground vs Preview"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Playground"})," for interactive components where users can tweak controls (e.g., ",e.jsx(n.code,{children:"Button"}),")."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Preview"})," for full pages or complex organisms where there are few or no controls to adjust."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"4-check-storybook",children:"4. Check Storybook"}),`
`,e.jsxs(n.p,{children:["Once saved, Storybook will automatically reload and show your new component under the path defined in ",e.jsx(n.code,{children:"meta.title"}),"."]})]})}function p(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{p as default};
