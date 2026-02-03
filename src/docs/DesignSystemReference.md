# Design System Documentation

**Package Name:** `@iniguezmarc/design-system`
**Installation:**
```bash
npm install @iniguezmarc/design-system
```

## Overview

This library follows a **"Basic + Variant"** architecture. Most components are built around a "Basic" core (e.g., `BasicButton`) which handles all logic, styling slots, and color overrides. The standard export (e.g., `Button`) is often a wrapper or the Basic component itself.

### Key Concepts

1.  **Custom Styles (Slots)**:
    Almost every component exposes a `customStyles` prop. This object allows you to inject Tailwind classes into specific internal elements of the component (e.g., `container`, `label`, `icon`).

2.  **Color Props**:
    Components do not have hardcoded colors. They accept color props (like `backgroundColor`, `textColor`) which default to standard styling but can be overridden. These props accept Tailwind utility classes, allowing for full theming and Dark Mode support (e.g., `bg-blue-600 dark:bg-blue-500`).

---

## Components

### Atoms

#### Avatar
Displays a user image with support for sizing and shapes.

**Import:**
```jsx
import { Avatar } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<Avatar 
  src="https://example.com/photo.jpg" 
  size="lg" 
  alt="User Profile"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **Required** | Image source URL. |
| `alt` | `string` | `"Avatar"` | Alt text. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the avatar. |
| `imageFit` | `'cover' \| 'contain'` | `'cover'` | CSS object-fit property. |
| `loading` | `'eager' \| 'lazy'` | `'lazy'` | Native image loading attribute. |
| `customStyles` | `AvatarSlots` | `{}` | Slots: `container`, `image`. |
| `borderColor` | `string` | `'border-gray-200'` | Border color class. |
| `backgroundColor` | `string` | `'bg-gray-100'` | Background color class (behind image). |

#### Badge
Small label for status, tags, or counts.

**Import:**
```jsx
import { Badge } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<Badge 
  label="New" 
  variant="primary" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **Required** | Text to display. |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'success'` | `'primary'` | Visual style variant. |
| `endIcon` | `ReactNode` | `undefined` | Optional icon to display after text. |
| `customStyles` | `BadgeSlots` | `{}` | Slots: `container`, `label`. |

#### Button
Interactive button element with support for links and variants.

**Import:**
```jsx
import { Button } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<Button 
  label="Click Me" 
  variant="primary" 
  onClick={() => console.log('Clicked')} 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **Required** | Button text. |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size. |
| `href` | `string` | `undefined` | If provided, renders as an `<a>` tag. |
| `target` | `string` | `undefined` | Target attribute for links (e.g., `_blank`). |
| `customStyles` | `ButtonSlots` | `{}` | Slots: `container`, `label`. |
| `*Color` | `string` | *(Various)* | Extensive color overrides for each variant state (e.g., `primaryColor`, `primaryHoverColor`). |

#### Input
Form input field with label and error support.

**Import:**
```jsx
import { Input } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<Input 
  label="Email" 
  placeholder="user@example.com" 
  error={emailError}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text above input. |
| `error` | `string` | `undefined` | Error message text below input. |
| `startIcon` | `ReactNode` | `undefined` | Icon inside left of input. |
| `endIcon` | `ReactNode` | `undefined` | Icon inside right of input. |
| `customStyles` | `InputSlots` | `{}` | Slots: `container`, `label`, `input`, `error`, `iconContainer`. |
| `*Color` | `string` | *(Various)* | Color overrides for label, input background, border, text, focus ring, error states. |

#### Slider
Range slider component.

**Import:**
```jsx
import { Slider } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<Slider 
  value={val} 
  onChange={setVal} 
  min={0} 
  max={100} 
  label="Volume" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | **Required** | Current value. |
| `onChange` | `(value: number) => void` | **Required** | Change handler. |
| `label` | `string` | `undefined` | Label text. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | Step increment. |
| `customStyles` | `SliderSlots` | `{}` | Slots: `container`, `label`, `input`. |

#### ThemeToggle
Switch between Light and Dark modes. Handles `<html>` class toggling automatically.

**Import:**
```jsx
import { ThemeToggle } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<ThemeToggle />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isDark` | `boolean` | `undefined` | Controlled state. If undefined, manages state internally via `document.classList`. |
| `onToggle` | `() => void` | `undefined` | Callback on toggle. |
| `iconSun` / `iconMoon` | `ReactNode` | `(SVG)` | Custom icons. |

#### LanguageToggle
Switch between English and Spanish.

**Import:**
```jsx
import { LanguageToggle } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<LanguageToggle 
  initialLanguage="en" 
  onLanguageChange={(lang) => setLang(lang)} 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialLanguage` | `'en' \| 'es'` | `'en'` | Initial state. |
| `onLanguageChange` | `(lang) => void` | `undefined` | Callback. |

---

### Molecules

#### ProjectCard
Card component for displaying project details.

**Import:**
```jsx
import { ProjectCard } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | Project title. |
| `description` | `string` | **Required** | Project description. |
| `image` | `string` | **Required** | Image URL. |
| `tags` | `string[]` | `[]` | List of tags/skills. |
| `projectUrl` | `string` | `undefined` | URL for the primary action button. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation. |
| `onViewProject` | `() => void` | `undefined` | Callback for button click. |
| `customStyles` | `ProjectCardSlots` | `{}` | Slots: `container`, `imageWrapper`, `content`, `title`, `description`, `tagsContainer`. |

#### ControlPanel
Container with a header and content area.

**Import:**
```jsx
import { ControlPanel } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Content. |
| `title` | `string` | `undefined` | Header title. |
| `actions` | `ReactNode` | `undefined` | Element (e.g. Button) to render in header. |

---

### Organisms

#### Navbar
Responsive navigation bar with scroll effects, mobile menu, and theme/language toggles.

**Import:**
```jsx
import { Navbar } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `NavbarLink[]` | **Required** | Array of `{ label, href, active }`. |
| `logo` | `string` | `"Marc.Dev"` | Logo text or URL if `isLogoImage` is true. |
| `actions` | `NavbarAction[]` | `[]` | Array of buttons to show in nav. |
| `enableLanguageToggle` | `boolean` | `false` | Shows LanguageToggle. |
| `language` | `'en' \| 'es'` | `'en'` | Current language (controlled). |

#### Hero
Hero section with large title, subtitle, and optional image.

**Import:**
```jsx
import { Hero } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | **Required** | Main headline. |
| `subtitle` | `ReactNode` | **Required** | Subtext. |
| `greeting` | `ReactNode` | `"Hello"` | Small text above title. |
| `imageUrl` | `string` | `undefined` | Optional side image. |
| `actions` | `HeroAction[]` | `[]` | Array of CTA buttons. |
| `renderBackground` | `() => ReactNode` | `undefined` | Function to render background elements. |

#### ContentGrid
Grid layout for projects or content items.

**Import:**
```jsx
import { ContentGrid } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `GridItem[]` | **Required** | Data items to display. |
| `title` | `string` | `"Featured Content"` | Section title. |
| `layout` | `'grid' \| 'list'` | `'grid'` | Layout mode. |
| `renderItemWrapper` | `func` | `undefined` | Wrapper for animations (e.g. ScrollReveal). |

#### ProfileSection
About Me section with avatar, bio, and skills.

**Import:**
```jsx
import { ProfileSection } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bio` | `ReactNode` | **Required** | Biography text. |
| `avatarUrl` | `string` | `undefined` | Profile image URL. |
| `skills` | `string[]` | `[]` | List of skills. |
| `renderVisual` | `() => ReactNode` | `undefined` | Replace avatar with custom visual. |

#### Footer
Standard footer.

**Import:**
```jsx
import { Footer } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `copyrightOwner` | `string` | Name for copyright notice. |
| `socialLinks` | `SocialLink[]` | Array of `{ platform, url }`. |

#### SplitLayout
Resizable split-pane layout.

**Import:**
```jsx
import { SplitLayout } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default |
|------|------|---------|
| `leftContent` | `ReactNode` | - |
| `rightContent` | `ReactNode` | - |
| `initialLeftWidth` | `number` | `30` |

#### InteractiveGrid
Grid of cells that handles mouse interactions (click, drag-paint).

**Import:**
```jsx
import { InteractiveGrid } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type |
|------|------|
| `rows` | `number` |
| `cols` | `number` |
| `renderCell` | `(row, col) => ReactNode` |

---

### Effects

#### ScrollReveal
Animates children when they come into viewport.

**Import:**
```jsx
import { ScrollReveal } from '@iniguezmarc/design-system';
```

**Usage:**
```jsx
<ScrollReveal base="fade" direction="up">
  <h1>I appear on scroll!</h1>
</ScrollReveal>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `base` | `'fade' \| 'slide' \| 'zoom' \| 'rotate'` | `'fade'` | Animation style. |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'` | Direction of entry. |
| `distance` | `number` | `20` | Pixels to move. |
| `duration` | `number` | `0.6` | Seconds. |

#### Typewriter
Typewriter text effect.

**Import:**
```jsx
import { Typewriter } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default |
|------|------|---------|
| `text` | `string` | **Required** |
| `speed` | `number` | `50` |
| `delay` | `number` | `0` |

#### ScrollSvg
SVG that draws itself as you scroll.

**Import:**
```jsx
import { ScrollSvg } from '@iniguezmarc/design-system';
```

**Props:**
| Prop | Type | Default |
|------|------|---------|
| `path` | `string` | **Required** |
| `viewBox` | `string` | `"0 0 100 100"` |
| `speed` | `number` | `1` |
| `animationEnd` | `'top' \| 'center' \| 'bottom'` | `'top'` |

#### FloatingElement
Simple floating/levitation animation.

**Import:**
```jsx
import { FloatingElement } from '@iniguezmarc/design-system';
```

#### ParallaxOnScroll
Moves children at a different speed than scroll.

**Import:**
```jsx
import { ParallaxOnScroll } from '@iniguezmarc/design-system';
```

---

### Pages

#### PortfolioPage
Full page template assembling other components.

**Import:**
```jsx
import { PortfolioPage } from '@iniguezmarc/design-system';
```

