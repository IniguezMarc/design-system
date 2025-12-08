import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-DHltmuYf.js";import{M as a}from"./index-DgHE-wT1.js";import"./index-Ch-GWmDW.js";import"./iframe-CHCsNLum.js";import"./index-DoUWZ_0J.js";import"./index-BVOjTE6T.js";import"./index-DrFu-skq.js";function t(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Introduction"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-hero",children:e.jsxs("div",{className:"sb-hero-content",children:[e.jsx("h1",{className:"sb-title text-gradient",children:"Design System"}),e.jsxs("div",{className:"sb-badges",children:[e.jsx("span",{className:"sb-badge",children:"v2.0.0"}),e.jsx("span",{className:"sb-badge",children:"TypeScript"}),e.jsx("span",{className:"sb-badge",children:"React 18"}),e.jsx("span",{className:"sb-badge",children:"Dark Mode"})]})]})}),e.jsxs("div",{className:"sb-section",children:[e.jsx("h2",{className:"sb-section-title",children:"Design Principles"}),e.jsxs("div",{className:"sb-grid",children:[e.jsxs("div",{className:"sb-card",children:[e.jsx("div",{className:"sb-icon",children:"⚛️"}),e.jsx("h3",{children:"Atomic Architecture"}),e.jsx("p",{children:"Modular structure based on Atoms, Molecules, and Organisms for maximum reuse."})]}),e.jsxs("div",{className:"sb-card",children:[e.jsx("div",{className:"sb-icon",children:"🌗"}),e.jsx("h3",{children:"Dark Mode Native"}),e.jsx("p",{children:"All components automatically react to the system theme or user preference."})]}),e.jsxs("div",{className:"sb-card",children:[e.jsx("div",{className:"sb-icon",children:"🎨"}),e.jsx("h3",{children:"Customizable & Typed"}),e.jsx("p",{children:"Built with TypeScript for type safety and Tailwind CSS for total styling flexibility."})]}),e.jsxs("div",{className:"sb-card",children:[e.jsx("div",{className:"sb-icon",children:"⚡"}),e.jsx("h3",{children:"Performance First"}),e.jsx("p",{children:"Lightweight components optimized for fast load times and zero unnecessary dependencies."})]})]})]}),e.jsx("div",{className:"sb-footer",children:e.jsxs("p",{children:["Created by ",e.jsx("strong",{children:"Marc Iñiguez"})," · ",new Date().getFullYear()]})})]}),`
`,`
`,e.jsx("style",{children:`
  .sb-container {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #1f2937;
    margin: -1rem; /* Romper márgenes por defecto de SB */
  }

  /* --- HERO --- */
  .sb-hero {
    background: radial-gradient(circle at 10% 20%, rgb(30, 30, 40) 0%, rgb(10, 10, 15) 90%);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .sb-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: -0.05em;
    line-height: 1.1;
  }

  .text-gradient {
    background: linear-gradient(to right, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sb-subtitle {
    font-size: 1.25rem;
    color: #ffffffff;
    max-width: 600px;
    margin: 0 auto 2rem auto;
    line-height: 1.6;
  }

  .sb-badges {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .sb-badge {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #e5e7eb;
  }

  /* --- GRID --- */
  .sb-section {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .sb-section-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #111827; /* Dark gray for light mode */
  }

  .sb-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .sb-card {
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .sb-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  .sb-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .sb-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .sb-card p {
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.5;
  }

  /* --- FOOTER --- */
  .sb-footer {
    text-align: center;
    padding: 2rem;
    border-top: 1px solid #e5e7eb;
    color: #9ca3af;
    font-size: 0.9rem;
  }

  /* --- DARK MODE SUPPORT (Automático según Storybook docs) --- */
  @media (prefers-color-scheme: dark) {
    .sb-section-title { color: white; }
    .sb-card { 
      background: #1f2937; 
      border-color: #374151; 
    }
    .sb-card h3 { color: white; }
    .sb-card p { color: #9ca3af; }
    .sb-footer { border-color: #374151; }
  }
  `})]})}function x(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t()}export{x as default};
