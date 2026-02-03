# Design System

A modern, scalable, and accessible UI component library built to streamline frontend development.

**[View Documentation (Storybook)](https://IniguezMarc.github.io/design-system/)**

---

## Tech Stack & Tools

This project leverages a modern ecosystem to ensure performance, type safety, and developer experience:

*   **React 19:** Library for building the component-based UI architecture.
*   **TypeScript:** Provides static typing to catch errors early and improve code maintainability.
*   **Vite:** Next-generation frontend tooling for ultra-fast development and optimized builds.
*   **Tailwind CSS (v3):** A utility-first CSS framework for rapid, responsive, and consistent styling without leaving the HTML.
*   **Storybook:** An isolated environment to build, test, and document UI components independently from the main app.
*   **GitHub Pages:** Automated hosting for the static documentation via CI/CD pipelines.

## Architecture: Atomic Design

The library is organized following the **Atomic Design** methodology to ensure modularity:

*   **Atoms:** Basic building blocks (Buttons, Inputs, Typography).
*   **Molecules:** Groups of atoms functioning together (Project Cards, Form Groups).
*   **Organisms:** Complex UI sections (Responsive Grids, Navbars).

## Local Installation

To clone and run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IniguezMarc/design-system.git
    cd design-system
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

    ```bash
    npm run ds
    ```
    Visit `http://localhost:6006` to view the library.

4.  **Build the library:**
    ```bash
    npm run build
    ```

## Usage as a Package

1.  **Install the package:**
    ```bash
    npm install @iniguezmarc/design-system
    ```

2.  **Import styles:**
    Import the CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):
    ```tsx
    import '@iniguezmarc/design-system/dist/style.css';
    ```

3.  **Use components:**
    ```tsx
    import { Button } from '@iniguezmarc/design-system';

    function App() {
      return <Button label="Click Me" />;
    }
    ```

4.  **Configure Tailwind (optional):**
    Add the design system preset to your `tailwind.config.js`:
    ```js
    module.exports = {
      presets: [require('@iniguezmarc/design-system/tailwind.preset')],
      // ... your config
    }
    ```

---

Created by **Marc Iñiguez**.