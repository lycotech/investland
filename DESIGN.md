---
name: Sovereign Institutional
colors:
  surface: '#11131c'
  surface-dim: '#11131c'
  surface-bright: '#373943'
  surface-container-lowest: '#0b0e16'
  surface-container-low: '#191b24'
  surface-container: '#1d1f28'
  surface-container-high: '#272a33'
  surface-container-highest: '#32343e'
  on-surface: '#e1e2ee'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e1e2ee'
  inverse-on-surface: '#2e303a'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#1565ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0053db'
  secondary: '#ecc246'
  on-secondary: '#3d2e00'
  secondary-container: '#b18c09'
  on-secondary-container: '#352800'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#647386'
  on-tertiary-container: '#f5f8ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#ecc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#d5e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#11131c'
  on-background: '#e1e2ee'
  surface-variant: '#32343e'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a high-net-worth wealth management environment, prioritizing institutional stability, exclusivity, and precision. The brand personality is authoritative yet discreet, moving away from "fintech" trends toward a "private bank" aesthetic.

The style is a hybrid of **Minimalism** and **High-Contrast Dark Mode**. It utilizes deep, near-black canvases to evoke a sense of security and permanence. Visual interest is generated through a sophisticated interplay between razor-sharp typography and strategic metallic accents, rather than decorative graphics or gradients. The emotional response should be one of quiet confidence and absolute reliability.

## Colors

The palette is anchored in a "Midnight" foundation, using `#050B1A` to provide more depth than a standard black. 

- **Primary Accent (Electric Blue):** Used sparingly for primary actions and critical data points. It represents intelligence and modern technology.
- **Metallic Accent (Wealth Gold):** Reserved for prestige elements, premium status indicators, and subtle decorative flourishes. It must never be used for large surfaces.
- **Steel Mist:** This is the utilitarian workhorse of the system, used for secondary text, borders, and icon states to ensure the UI doesn't feel overly harsh.
- **Surface Strategy:** Use a slightly lighter tint (`#0D1526`) for containers to create a subtle sense of layering against the deep background.

## Typography

This system relies on a high-contrast typographic pairing. **Playfair Display** provides a classic, editorial feel for headings, suggesting a legacy of wealth. **Inter** handles all functional and data-heavy content with clinical clarity.

For financial data, use `data-mono` (Inter with tabular lining figures if available) to ensure vertical alignment of numbers. `label-caps` should be used for section headers and small metadata to maintain an organized, institutional grid. Keep line lengths for body text between 45-75 characters to maintain readability against the dark background.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of controlled, curated information. 

- **Desktop (1440px):** 12-column grid with 24px gutters. Use generous outer margins (64px) to create an "airy" premium feel.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters. 
- **Mobile (<768px):** 4-column fluid grid.

Spacing should favor "Macro-white-space." Significant gaps between sections (using multiples of 16px) are encouraged to prevent the dark UI from feeling cramped or overwhelming. Information density should be kept moderate to emphasize high-value data over high-volume data.

## Elevation & Depth

This system avoids traditional drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is created by:
1.  **Z-Index Layering:** The base background is the lowest level. Card surfaces are one step lighter.
2.  **Stroke Definition:** Instead of shadows, use 1px solid borders in `Steel Mist` at low opacity (15-20%) to define container boundaries.
3.  **Active States:** When an element is focused or active, use a subtle 1px border of the `Wealth Gold` or `Electric Blue` to denote elevation, rather than a lift effect.
4.  **Glassmorphism (Selective):** Use a very subtle backdrop blur (20px) with a 5% white tint for sticky navigation bars to maintain context of the content scrolling beneath.

## Shapes

The shape language is "Soft" yet disciplined. While sharp corners feel too aggressive, overly rounded "bubble" shapes feel too casual for wealth management. 

- **Standard Elements:** Use a 4px (`0.25rem`) radius for buttons, input fields, and small tags.
- **Large Containers:** Use an 8px (`0.5rem`) radius for cards and modal windows.
- **Icons:** Icons should be "Outlined" style with a 1.5pt stroke weight and minimal rounding on the paths to match the precision of the Inter typeface.

## Components

### Buttons
- **Primary:** Solid `Electric Blue` background with White text. Sharp 4px corners. 
- **Secondary:** Transparent background with a `Steel Mist` border.
- **Tertiary/Ghost:** No border, White text, Gold icon suffix for "Premium" actions.

### Input Fields
Inputs are dark-filled containers (`#0D1526`) with a 1px border. On focus, the border transitions to `Electric Blue`. Labels always sit above the field in `label-caps`.

### Cards
Cards are the primary vessel for portfolio data. They should have a subtle 1px border (`Steel Mist` at 20% opacity) and no shadow. The header of a card should use `Playfair Display` for the title.

### Status Indicators
- **Positive:** Emerald Green (used only for performance).
- **Caution:** Gold.
- **Negative:** Crimson Red.
All indicators should use a small, 8px solid dot next to the label rather than large color blocks.

### Data Visualization
Charts should use the `Electric Blue` for primary data lines. Use `Wealth Gold` to highlight specific milestones or targets. Background grid lines on charts must be extremely faint, using `Steel Mist` at 10% opacity.