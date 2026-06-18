# Spectacle Slides Guide

## Overview

This project demonstrates a minimal Spectacle presentation with Markdown-based slides.

## File Structure

```
src/
├── App.tsx                 # Main Deck component (imports markdown slides)
├── slides/
│   ├── title.md           # Title slide (Markdown)
│   ├── agenda.md          # Agenda slide (Markdown)
│   └── theme.css          # CSS styling
└── main.tsx               # React entry point
```

## How to Use

### Adding New Slides

1. **Create a new Markdown file** in `src/slides/`:
   ```bash
   # src/slides/features.md
   
   # ✨ Features
   
   - Fast development with Vite
   - React 19 + TypeScript
   - Markdown-based slides
   - Hot module replacement
   ```

2. **Import and add to App.tsx:**
   ```tsx
   import featuresSlide from './slides/features.md?raw';
   
   // Inside the Deck component:
   <MarkdownSlideSet>
     {featuresSlide}
   </MarkdownSlideSet>
   ```

### Markdown Syntax

Spectacle supports standard Markdown:

- `# Heading` - Creates a slide heading
- `- List item` - Bullet points
- `**bold**` and `*italic*` - Text formatting
- `` `code` `` - Inline code
- Images, links, and more

### Slide Separators

Use `---` (horizontal rule) to create multiple slides in one Markdown file:

```markdown
# First Slide

Content here

---

# Second Slide

More content
```

### Spectacle Components

You can also use Spectacle React components directly in App.tsx for custom layouts:

- `<Deck>` - Main presentation container
- `<MarkdownSlideSet>` - Renders Markdown as slides
- `<Slide>` - Individual slide container
- `<Heading>`, `<Text>` - Typography components
- `<FlexBox>` - Layout component
- `<CodePane>` - Code blocks with syntax highlighting

See [Spectacle docs](https://github.com/FormidableLabs/spectacle) for more.

## Development

```bash
yarn dev      # Start dev server with HMR
yarn build    # Build for production
yarn preview  # Preview production build
yarn lint     # Check code quality
```

## Current Slides

1. **title.md** - Project title and subtitle
2. **agenda.md** - Overview with bullet points

## Theme Customization

Edit the `theme` object in `App.tsx` to customize colors and fonts:

```tsx
theme={{
  colors: {
    primary: '#1f2937',
    secondary: '#f3f4f6',
    tertiary: '#3b82f6',
  },
  fonts: {
    header: 'Helvetica Neue, Arial, sans-serif',
    text: 'Open Sans, Helvetica Neue, Arial, sans-serif',
  },
}}
```

Customize global styles in `src/slides/theme.css`.

