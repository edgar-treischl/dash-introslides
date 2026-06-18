# Spectacle Presentation Design Specification for Dash Shell
## AI Prompt: Recreate the Dash Shell Look and Feel

This document provides a complete specification for creating a Spectacle presentation that matches the visual design, typography, colors, and animations of the Dash Shell micro-frontend application.

---

## 🎨 COLOR PALETTE

### Primary Colors
- **Primary Blue**: `#0098d4` (Main brand color)
- **Primary Dark**: `#0077a8` (Hover states, darker accents)
- **Primary Light**: `#66c7e8` (Light accents, backgrounds)

### Text Colors (Semantic)
- **Primary Text**: `#0f172a` (Main headings, body text)
- **Secondary Text**: `#475569` (Subheadings, supporting text)
- **Tertiary Text**: `#64748b` (Captions, meta information)
- **Inverted Text**: `#ffffff` (Text on dark backgrounds)

### Background Colors
- **Primary Background**: `#ffffff` (Card backgrounds, panels)
- **Secondary Background**: `#f8fbff` (Page backgrounds, light sections)
- **Tertiary Background**: `#f1f5f9` (Subtle differentiation)
- **Dark Background**: `#1e293b` (Dark mode sections, footers)

### Accent & Status Colors
- **Success**: `#22c55e`
- **Success Light**: `#dcfce7`
- **Error**: `#ef4444`
- **Warning**: `#f97316`
- **Apps Purple**: `#9333ea` (For app-related elements)
- **Apps Light**: `#ede9fe`

### Borders & Dividers
- **Default Border**: `#cbd5e1`
- **Input Border**: `#e2e8f0`
- **Soft Border**: `1px solid rgba(148, 163, 184, 0.15)`
- **Medium Border**: `1px solid rgba(148, 163, 184, 0.20)`

---

## 📝 TYPOGRAPHY

### Font Families
```css
/* System Font Stack (Body, UI elements) */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;

/* Display Font (Hero titles, decorative headings) */
font-family: 'Playfair Display', serif;
```

### Font Sizes
- **xs**: `0.75rem` (12px)
- **sm**: `0.875rem` (14px)
- **base**: `1rem` (16px)
- **md**: `1.125rem` (18px)
- **lg**: `1.5rem` (24px)
- **xl**: `1.875rem` (30px)
- **2xl**: `2.25rem` (36px)
- **3xl**: `3rem` (48px)
- **6xl**: `3.5rem` (56px)
- **8xl**: `5.5rem` (88px)

### Font Weights
- Regular: `400`
- Medium: `500`
- Semibold: `600`
- Bold: `700`
- Extrabold: `800`

### Typography Rules
1. **Hero Titles**: Use Playfair Display (serif), size 8xl-6xl, weight 800
2. **Section Headings**: System font, size 2xl-3xl, weight 700
3. **Body Text**: System font, size base, weight 400
4. **Captions/Metadata**: System font, size sm, weight 500
5. **Eyebrow Text** (labels above titles): System font, size xs, weight 600, uppercase, letter-spacing 0.12em

---

## 🎭 GRADIENTS & EFFECTS

### Background Gradients
```css
/* Page Background */
background: radial-gradient(circle at top, #f8fbff 0%, #eef2ff 45%, #f1f5f9 100%);

/* Auth/Landing Background */
background: radial-gradient(circle at top, rgba(0, 152, 212, 0.12), transparent 32%),
            linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);

/* Card/Panel Background */
background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);

/* Primary Button */
background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
background-hover: linear-gradient(180deg, #1e293b 0%, #334155 100%);
```

### Text Gradients
```css
/* For highlighted titles */
background: linear-gradient(135deg, #0098d4 0%, #0077a8 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-style: italic;  /* Playfair Display looks great italicized */
```

### Shadows (3-Level System)
```css
/* Small shadow (subtle elements) */
box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);

/* Base shadow (cards) */
box-shadow: 0 2px 4px rgba(15, 23, 42, 0.08);

/* Medium shadow (elevated cards) */
box-shadow: 0 4px 12px rgba(15, 23, 42, 0.10);

/* Large shadow (modals, floating panels) */
box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);

/* Extra large shadow (hero elements) */
box-shadow: 0 20px 45px rgba(15, 23, 42, 0.15);
```

---

## 📐 SPACING & LAYOUT

### Spacing Scale
- **xs**: `4px`
- **sm**: `8px`
- **md**: `12px`
- **lg**: `16px`
- **xl**: `20px`
- **xxl**: `24px`
- **xxxl**: `32px`
- **section**: `48px`

### Border Radius
- **sm**: `8px`
- **md**: `12px`
- **lg**: `16px`
- **xl**: `22px`
- **xxl**: `28px`
- **full**: `999px` (pills, circular buttons)

### Layout Guidelines
- **Max Width**: `1600px` (centered containers)
- **Content Padding**: `32px` (large screens), `24px` (tablets), `16px` (mobile)
- **Card Gap**: `80px` (desktop), `40px` (tablet), `24px` (mobile)
- **Section Padding**: `80px 48px` (hero sections)

---

## ✨ ANIMATIONS & TRANSITIONS

### Transition Timings
```css
--transition-fast: 140ms ease;
--transition-base: 180ms ease;
--transition-slow: 300ms ease-out;
```

### Keyframe Animations

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Usage: animation: fadeIn 300ms ease-out; */
```

#### Fade In Up (Slides + Fades)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Usage: animation: fadeInUp 600ms ease-out; */
```

#### Slide In Right
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
/* Usage: animation: slideInRight 700ms ease-out; */
```

#### Floating Animation (Images)
```css
@keyframes floatingImage {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
/* Usage: animation: floatingImage 7s infinite ease-in-out; */
```

#### Fade In Down
```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Animation Choreography (Stagger Pattern)
Use delays to create staggered reveals:
```css
.element:nth-child(1) { animation-delay: 0.25s; }
.element:nth-child(2) { animation-delay: 0.35s; }
.element:nth-child(3) { animation-delay: 0.45s; }
```

### Hover States
```css
/* Cards and buttons should lift on hover */
transition: transform 180ms ease, box-shadow 180ms ease;

/* Hover effect */
transform: translateY(-2px);
box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);

/* Active/pressed effect */
transform: translateY(0);
```

---

## 🏗️ COMPONENT PATTERNS

### Hero Section Pattern
```
┌─────────────────────────────────────────┐
│  [EYEBROW TEXT]                         │
│  [HUGE TITLE - Playfair Display]       │
│  [Highlighted Word - Gradient + Italic] │
│  [Subtitle - Secondary text color]     │
│  [CTA Button]                           │
│                                         │
│                              [IMAGE]    │
└─────────────────────────────────────────┘
```

**Specifications:**
- Grid: 1fr 1fr (50/50 split, desktop)
- Gap: `80px`
- Title: Playfair Display, 8xl, weight 800
- Highlighted words: Gradient text (#0098d4 → #0077a8), italic
- Button: Rounded (12px), gradient background, shadow on hover

### Card Pattern
```
┌───────────────────────┐
│  [Preview Image]      │
│                       │
├───────────────────────┤
│  [Label - Semibold]   │
│  [Description - sm]   │
│                       │
│  [Action Link →]      │
└───────────────────────┘
```

**Specifications:**
- Background: White (#ffffff)
- Border: `1px solid rgba(148, 163, 184, 0.15)`
- Border Radius: `16px`
- Box Shadow: `0 4px 12px rgba(15, 23, 42, 0.10)`
- Padding: `24px`
- Hover: `translateY(-2px)` + enhanced shadow

### Panel/Container Pattern
- Background: White with subtle gradient
- Border Radius: `28px`
- Border: `1px solid rgba(148, 163, 184, 0.15)`
- Box Shadow: Large (`0 12px 24px rgba(15, 23, 42, 0.12)`)
- Padding: `32px`

---

## 🎯 SPECTACLE-SPECIFIC IMPLEMENTATION GUIDE

### Slide Layout Recommendations

#### Title Slide
```jsx
<Slide backgroundColor="#f8fbff">
  <FlexBox height="100%" flexDirection="column" justifyContent="center">
    <Text fontSize="12px" fontWeight="600" letterSpacing="0.12em" 
          textTransform="uppercase" color="#0f172a" opacity={0.8}>
      EYEBROW TEXT
    </Text>
    <Heading fontSize="88px" fontFamily="'Playfair Display', serif" 
             fontWeight="800" lineHeight="1.1" color="#0f172a"
             margin="24px 0">
      Main Title
    </Heading>
    <Heading fontSize="88px" fontFamily="'Playfair Display', serif" 
             fontWeight="800" fontStyle="italic" 
             style={{
               background: 'linear-gradient(135deg, #0098d4 0%, #0077a8 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'
             }}>
      Highlighted Word
    </Heading>
    <Text fontSize="20px" color="#475569" maxWidth="600px" margin="24px 0">
      Supporting subtitle text goes here
    </Text>
  </FlexBox>
</Slide>
```

#### Content Slide
```jsx
<Slide backgroundColor="#ffffff">
  <Box padding="48px" borderRadius="28px" 
       boxShadow="0 12px 24px rgba(15, 23, 42, 0.12)"
       backgroundColor="white">
    <Heading fontSize="48px" color="#0f172a" marginBottom="24px">
      Section Title
    </Heading>
    <Text fontSize="18px" color="#475569" lineHeight="1.6">
      Content here
    </Text>
  </Box>
</Slide>
```

### Theme Configuration
```javascript
const dashTheme = {
  colors: {
    primary: '#0098d4',
    secondary: '#0077a8',
    tertiary: '#66c7e8',
    text: '#0f172a',
    textSecondary: '#475569',
    background: '#f8fbff',
    backgroundLight: '#f1f5f9',
  },
  fonts: {
    header: "'Playfair Display', serif",
    text: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  },
  fontSizes: {
    h1: '88px',
    h2: '56px',
    h3: '48px',
    text: '18px',
    small: '14px',
  },
  space: [4, 8, 12, 16, 20, 24, 32, 48, 80],
};
```

---

## 🎨 COLOR USAGE GUIDELINES

### When to Use Each Color

**Primary Blue (#0098d4)**
- Primary CTAs and buttons
- Links and interactive elements
- Icon highlights
- Progress indicators
- Gradient text for emphasis

**Primary Dark (#0077a8)**
- Hover states for primary elements
- Secondary headings
- Dark accents
- Gradient endpoints

**Primary Light (#66c7e8)**
- Backgrounds for highlighted sections
- Subtle hover states
- Badge backgrounds
- Light accents

**Text Primary (#0f172a)**
- Main headings
- Body text
- High-contrast elements

**Text Secondary (#475569)**
- Subheadings
- Supporting text
- Captions
- Meta information

**Background Gradients**
- Use radial gradients from top for page backgrounds
- Use linear gradients for panels and cards
- Combine subtle color shifts (only 5-10% difference)

---

## 📱 RESPONSIVE CONSIDERATIONS

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 640px

### Scaling Rules
```css
/* Desktop */
font-size: 88px;
padding: 80px 48px;
gap: 80px;

/* Tablet */
font-size: 56px;
padding: 60px 40px;
gap: 40px;

/* Mobile */
font-size: 48px;
padding: 40px 24px;
gap: 24px;
```

---

## ✅ PRESENTATION DESIGN CHECKLIST

### Before You Start
- [ ] Import Playfair Display from Google Fonts
- [ ] Set up system font stack as fallback
- [ ] Define color variables/theme
- [ ] Configure spacing scale
- [ ] Set up animation keyframes

### For Each Slide
- [ ] Use appropriate background (gradient or solid)
- [ ] Apply consistent padding (48px minimum)
- [ ] Use border-radius on panels (28px)
- [ ] Add subtle shadows to elevated elements
- [ ] Implement entrance animations (fadeInUp, slideInRight)
- [ ] Ensure text hierarchy (eyebrow → title → body)
- [ ] Test color contrast for accessibility

### Typography Per Slide
- [ ] One main heading (Playfair Display, 48px-88px)
- [ ] Optional eyebrow text (12px, uppercase, tracking)
- [ ] Body text at 18px minimum
- [ ] Consistent line-height (1.6 for body, 1.1 for headings)
- [ ] Use gradient text for 1-2 highlight words per slide

### Visual Polish
- [ ] Cards have soft borders (rgba)
- [ ] Buttons have hover states
- [ ] Images have floating animation
- [ ] Staggered animations for lists
- [ ] Smooth transitions (180ms ease)

---

## 🎬 ANIMATION SEQUENCE EXAMPLE

For a typical content slide:

```javascript
// Entrance sequence
1. Slide background fades in (300ms)
2. Panel/card scales in (400ms, delay 100ms)
3. Eyebrow text fades down (500ms, delay 200ms)
4. Main heading slides right (700ms, delay 300ms)
5. Highlighted word slides right (700ms, delay 400ms)
6. Body text fades up (600ms, delay 500ms)
7. CTA button fades up (600ms, delay 600ms)
8. Image floats (continuous 7s ease-in-out)
```

---

## 💡 PRO TIPS

1. **Gradient Text**: Use sparingly (1-2 words per slide) for maximum impact
2. **Playfair Display**: Reserve for main titles only; don't overuse
3. **White Space**: Embrace it. Use min 32px padding everywhere
4. **Shadows**: Layer them (small on cards, large on modals)
5. **Animations**: Keep entrance animations under 800ms; use ease-out curves
6. **Color Balance**: 80% neutral colors, 15% primary blue, 5% accents
7. **Typography Scale**: Jump 2-3 steps between hierarchy levels (e.g., 18px → 48px)
8. **Borders**: Use transparent rgba borders for subtle separation
9. **Button Style**: Always round (12px+), always shadow, always lift on hover
10. **Icons**: If using, keep them simple line icons, primary color

---

## 🔗 EXTERNAL RESOURCES

### Fonts
- **Playfair Display**: [Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
  - Import: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');`

### Color Tools
- Generate gradients: [CSS Gradient Generator](https://cssgradient.io/)
- Check contrast: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📋 FINAL PROMPT FOR AI GENERATION

**"Create a Spectacle presentation with the following design system:**

**Colors:** Primary #0098d4, backgrounds #f8fbff to #f1f5f9, text #0f172a
**Typography:** Playfair Display serif for titles (88px, weight 800), system font stack for body (18px)
**Layout:** Max width 1600px, padding 48px, border-radius 28px on panels
**Shadows:** Layered (0 12px 24px rgba(15, 23, 42, 0.12) for cards)
**Gradients:** Radial from top for backgrounds, linear 135deg for panels
**Animations:** fadeInUp (600ms), slideInRight (700ms), floating images (7s infinite)
**Components:** Cards with soft borders (rgba(148, 163, 184, 0.15)), hover lift 2px
**Accent:** Use gradient text (#0098d4 → #0077a8) with italic style for emphasis
**Spacing:** 80px between sections (desktop), 40px (tablet), 24px (mobile)

Apply these consistently across all slides for a cohesive, professional micro-frontend shell aesthetic."**

---

*This specification document provides everything needed to recreate the Dash Shell design system in Spectacle. Follow the patterns, use the exact colors and measurements, and your presentation will perfectly match the application's look and feel.*
