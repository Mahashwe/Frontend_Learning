# Frontend Learning
# Web Development Learning Project - Dog Guide

A multi-page website project demonstrating fundamental and intermediate HTML & CSS concepts through a dog-themed guide website.

## 📁 Project Structure

```
├── home.html          # Main landing page with navigation and sections
├── about.html         # About page with profile layout
├── grid.html          # Advanced CSS Grid layouts demonstration
├── style.css          # Centralized stylesheet for all pages
└── images/            # Image assets
```

---

## 🎓 Concepts Learned

### 1. **HTML Fundamentals**

#### Document Structure
- **DOCTYPE declaration**: `<!doctype html>` for HTML5
- **Meta tags**: Character set (`charset="UTF-8"`) and responsive viewport
- **Semantic HTML**: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`

#### Links & Navigation
- **Internal links**: `href="about.html"` for page navigation
- **Anchor links**: `href="#guide"` for same-page navigation
- **External links**: `target="_blank"` to open in new tab
- **Download attribute**: `download` for file downloads

#### Forms
- **Input types**: Text inputs with placeholders
- **Select dropdowns**: Multiple options with default values
- **Labels**: Connected to inputs via `for` attribute
- **Submit buttons**: Form submission handling

#### Images
- **`<img>` tag**: Proper use of `src` and `alt` attributes
- **Accessibility**: Descriptive alt text for screen readers

---

### 2. **CSS Fundamentals**

#### Selectors
- **Element selectors**: `body`, `h1`, `p`
- **Class selectors**: `.sample`, `.btn`, `.header`
- **ID selectors**: `#guide` for unique elements
- **Multiple classes**: Elements with multiple class names

#### Box Model
- **Padding**: `padding: 20px` - inner spacing
- **Margin**: `margin: 0 auto` - outer spacing and centering
- **Border**: Rounded corners with `border-radius`

#### Typography
- **Font family**: `font-family: poppins, sans-serif`
- **Font weight**: `font-weight: bold`, `font-weight: lighter`
- **Font style**: `font-style: italic`
- **Text alignment**: `text-align: center`, `text-align: left`
- **Line height**: `line-height: 1.4` for text spacing

#### Colors & Backgrounds
- **RGB colors**: `rgb(239, 135, 17)`
- **Background images**: `background: url(images/bg.jpg)`
- **Background properties**: `background-size: cover`, `background-position: center`
- **Background blend mode**: `background-blend-mode: overlay`
- **RGBA transparency**: `rgba(0, 0, 0, 0.8)`

---

### 3. **CSS Layout Techniques**

#### Flexbox (`display: flex`)
- **Flex container**: `display: flex` to create flexible layouts
- **Justify content**: `justify-content: space-between`, `justify-content: center`
- **Align items**: `align-items: center` for vertical alignment
- **Gap**: `gap: 20px` for spacing between flex items
- **Flex basis**: `flex-basis: 20%` for proportional sizing
- **Flex direction**: `flex-direction: column` for vertical stacking

> **Quick Reference**: Use Flexbox for 1D layouts (rows or columns). Use `justify-content` for main axis, `align-items` for cross axis.

#### CSS Grid (`display: grid`)
- **Basic grid**: `display: grid` with `grid-template-columns` and `grid-template-rows`
- **Auto-fit**: `repeat(auto-fit, minmax(300px, 1fr))` for responsive columns
- **Grid span**: `grid-column: span 2`, `grid-row: span 2` for multi-cell items
- **Grid areas**: Named grid areas with `grid-template-areas`
- **Fractional units**: `1fr` for flexible space distribution
- **Gap**: `gap: 1rem` for grid cell spacing

**Grid Layout Examples in Project:**
- **Auto-fit grid** (Latest Images): Cards automatically wrap
- **Complex layout** (News Grid): Large card + smaller cards
- **Named areas** (Complex Grid): Using grid-template-areas for custom layouts

> **Quick Reference**: Use Grid for 2D layouts. `repeat(auto-fit, minmax(min, 1fr))` creates responsive columns. Use `span` to merge cells, or `grid-template-areas` for complex layouts.

---

### 4. **Positioning**

- **Absolute positioning**: `position: absolute` - removed from flow
- **Top/Right positioning**: `top: 20px`, `right: 20px` for placement
- **Float**: `float: left` with `clear: both` to clear floats

> **Quick Reference**: Absolute positioning removes element from normal flow. Always set `top`, `right`, `bottom`, or `left` to position it.

---

### 5. **Styling Components**

#### Buttons
- **Padding & sizing**: Creating clickable areas
- **Border radius**: Rounded corners
- **Hover effects**: `:hover` pseudo-class for interactivity
- **Cursor**: `cursor: pointer` for user feedback
- **Display types**: `display: inline-block` vs `display: block`

#### Images
- **Object fit**: `object-fit: cover` to maintain aspect ratio
- **Sizing**: Fixed widths, `width: 100%` for responsive
- **Border radius**: Creating rounded images
- **Overflow**: `overflow: hidden` to clip content

#### Cards
- **Box shadow**: `box-shadow` for depth (though set to none in this project)
- **Overflow**: `overflow: hidden` for image clipping
- **Border radius**: Rounded card corners

---

### 6. **Responsive Design**

#### Media Queries
```css
@media screen and (max-width: 768px) {
    /* Styles for screens 768px and smaller */
}
```

**Responsive strategies used:**
- **Grid reconfiguration**: Changing column counts on mobile
- **Layout stacking**: Multi-column to single-column
- **Grid area remapping**: Reorganizing grid-template-areas for mobile

> **Quick Reference**: Mobile-first approach starts with small screens. Use `max-width` to target smaller screens, `min-width` for larger. Common breakpoint: 768px for tablets.

---

### 7. **Advanced CSS Concepts**

#### Pseudo-classes
- **:hover**: Interactive hover states for links and buttons

#### Universal Selector
- **`*` selector**: Applies font-family to all elements

#### Box Sizing
- **Default box model**: Width/height affected by padding and border

#### Z-Index & Layering
- **Overlapping elements**: Positioning for layered layouts

---

## 🎯 Key Takeaways

### Layout Decision Tree
1. **Single direction alignment** (row or column) → Use **Flexbox**
2. **2D grid layout** (rows AND columns) → Use **CSS Grid**
3. **Overlapping elements** → Use **absolute/relative positioning**

### Common Patterns
- **Navbar**: Flexbox with `justify-content: space-between`
- **Card grid**: CSS Grid with `auto-fit` and `minmax()`
- **Centered content**: `margin: 0 auto` with defined width
- **Hero sections**: Background images with overlay using RGBA
- **Buttons**: Padding + border-radius + hover effects

---

## 📝 Side Notes (Quick Reference)

### Flexbox Cheat Sheet
```css
.container {
    display: flex;
    justify-content: center;        /* Horizontal: start, center, end, space-between */
    align-items: center;            /* Vertical: start, center, end, stretch */
    gap: 20px;                      /* Spacing between items */
    flex-direction: row;            /* row or column */
}
```

### Grid Cheat Sheet
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    gap: 20px;
}

/* Responsive auto-fit */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

/* Spanning cells */
.item {
    grid-column: span 2;           /* Take 2 columns */
    grid-row: span 2;              /* Take 2 rows */
}
```

### Common CSS Properties
- **Spacing**: `margin`, `padding` (shorthand: top right bottom left)
- **Size**: `width`, `height`, `max-width`, `min-height`
- **Colors**: Use `rgb()`, `rgba()`, hex codes, or named colors
- **Text**: `font-size`, `font-weight`, `text-align`, `line-height`
- **Display**: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`

### Responsive Breakpoints
- **Mobile**: up to 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

---

## 🚀 Project Features

✅ Multi-page navigation system  
✅ Responsive image galleries  
✅ Complex grid layouts with spanning  
✅ Form elements (input, select, submit)  
✅ Hover effects and interactivity  
✅ Background images with overlays  
✅ Semantic HTML structure  
✅ Mobile-responsive design  

---

## 🔍 What I Built

A **dog-themed guide website** featuring:
- Home page with navigation, multiple sections, image galleries, and contact form
- About page with profile layout and call-to-action
- Grid page showcasing advanced CSS Grid techniques
- Responsive design that adapts to mobile devices

---

*This project serves as a comprehensive reference for fundamental web development concepts learned during my HTML & CSS journey.*
