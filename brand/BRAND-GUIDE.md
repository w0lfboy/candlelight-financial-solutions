# Candlelight Financial Solutions — Brand Guide

## Brand Overview

Candlelight Financial Solutions (CFS) is an independent, fiduciary Registered Investment Advisor providing personalized financial planning and wealth management. The brand communicates **clarity, trust, professionalism, and forward-thinking financial guidance**.

---

## Logo System

### Primary Logo — Horizontal Lockup
The primary logo consists of the CFS monogram with integrated flame mark, a vertical separator, and the full company name. Use this wherever space allows.

- **Dark background**: `logos/dark/cfs-horizontal-v2.png`
- **Light background**: `logos/light/cfs-horizontal-light.png`

### Icon Mark
The standalone CFS monogram with flame. Use for favicons, app icons, social media avatars, and small-scale applications.

- **Dark**: `logos/icon/cfs-icon-dark.png`

### Stacked Layout
Centered vertical layout with flame icon above the wordmark. Use for presentations, letterheads, and formal documents.

- **Dark**: `logos/dark/cfs-stacked.png`

### One-Color White
All-white version for use over photography, gradients, or colored backgrounds.

- **White**: `logos/onecolor/cfs-onecolor-white.png`

### Clear Space
Maintain a minimum clear space equal to the height of the flame mark on all sides of the logo.

### Minimum Size
- Horizontal lockup: 160px wide minimum
- Icon mark: 32px minimum

---

## Color Palette

### Primary Colors

| Name          | Hex       | Usage                                    |
|---------------|-----------|------------------------------------------|
| Teal Deep     | `#091f2c` | Primary dark backgrounds, hero sections  |
| Teal Dark     | `#0c2d3d` | Secondary dark backgrounds, cards        |
| Cyan          | `#4ec5d4` | Primary accent, CTAs, links, highlights  |
| Cyan Light    | `#6fd6e3` | Hover states, secondary accent           |

### Neutral Colors

| Name          | Hex       | Usage                                    |
|---------------|-----------|------------------------------------------|
| Slate 50      | `#f7f9fa` | Page background, light sections          |
| Slate 100     | `#eef2f4` | Alternate section backgrounds            |
| Slate 200     | `#dce3e6` | Borders, dividers                        |
| Slate 400     | `#8a9da6` | Muted text, secondary content            |
| Slate 500     | `#647983` | Body text                                |
| Slate 900     | `#142129` | Headings, primary text                   |
| White         | `#ffffff` | Card backgrounds, text on dark           |

### Usage Rules
- Cyan (`#4ec5d4`) is the primary brand accent — use on CTAs, key highlights, and interactive elements
- Never use cyan for large background fills; it's an accent color
- Dark sections use Teal Deep (`#091f2c`) as the background
- Light sections alternate between Slate 50 (`#f7f9fa`) and White

---

## Typography

### Headings — Sora
- **Family**: [Sora](https://fonts.google.com/specimen/Sora) (Google Fonts)
- **Weights**: 600 (Semibold), 700 (Bold)
- **Usage**: All headings, navigation labels, CTAs, stats
- **Character**: Geometric, modern, authoritative

### Body — Manrope
- **Family**: [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
- **Usage**: Body text, descriptions, form labels, compliance text
- **Character**: Clean, professional, highly readable

### Type Scale (Desktop)
- **H1**: 4.5rem / Bold / -0.02em tracking
- **H2**: 2.75rem / Bold / tight leading
- **H3**: 1.125rem / Semibold
- **Body**: 0.938rem / Regular / relaxed leading
- **Small/Labels**: 0.75rem / Semibold / 0.2em tracking / uppercase

---

## Iconography

- Style: Outlined, 1.5px stroke weight
- Size: 24x24 default grid
- Color: Inherits from parent (typically `teal` or `cyan-muted`)
- Corners: Rounded line caps and joins

---

## UI Components

### Buttons
- **Primary**: Cyan background, teal-deep text, rounded-lg, semibold
- **Secondary**: Transparent with white/15 border, white/80 text
- **Hover**: Primary lightens to cyan-light; secondary border shifts to cyan/40

### Cards
- Border: 1px `slate-200`, rounded-xl
- Background: `slate-50` or white
- Hover: Border shifts to `cyan/30`, subtle lift (-3px translateY)
- Padding: 28px (mobile) / 32px (desktop)

### Form Inputs
- Border: 1px `white/10` on dark backgrounds
- Background: `teal-dark/50`
- Focus: Border `cyan/40`, ring `cyan/15`
- Rounded-lg

---

## Brand Voice

- **Professional but approachable** — not stiff, not casual
- **Direct and clear** — short sentences, no jargon
- **Confident but not aggressive** — "Get Started" not "ACT NOW"
- **Relationship-focused** — "conversation" not "consultation", "partnership" not "contract"

---

## File Structure

```
brand/
├── BRAND-GUIDE.md          ← This file
└── logos/
    ├── dark/               ← Logos for dark backgrounds
    │   ├── cfs-horizontal-v1.png
    │   ├── cfs-horizontal-v2.png
    │   └── cfs-stacked.png
    ├── light/              ← Logos for light backgrounds
    │   ├── cfs-horizontal-light.png
    │   └── cfs-horizontal-light-alt.png
    ├── icon/               ← Icon/favicon marks
    │   ├── cfs-icon-dark.png
    │   └── cfs-icon-alt.png
    └── onecolor/           ← Single-color versions
        └── cfs-onecolor-white.png
```
