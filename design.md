# Design Style - AI & Metallurgy Consulting Website

## Design Philosophy

### Color Palette -old
- **Primary**: Deep Steel Blue (#2C3E50) - representing industrial strength and reliability
<!--- **Secondary**: Copper Orange (#E67E22) - reflecting metallurgy heritage and warmth -->
- **Secondary**: Neon green (#73FF00)
<!--- **Accent**: Bright Orange (#FF6B35) - for CTAs and highlights, suggesting innovation-->
- **Accent**: Neon green light (#99FF33) - for CTAs and highlights, suggesting innovation
- **Neutral**: Light Gray (#F8F9FA) - clean background for content readability
- **Text**: Charcoal (#333333) - ensuring 4.5:1 contrast ratio for accessibility

<!--### Color Palette - new
**Brand Colors:**
- **Primary (Dark Navy Blue)** (#0F1526) Used as the main background gradient base. Represents depth, reliability, and focus.
- **Secondary (Cool Gray)** (#84888B)  Used in molecular lines and nodes for a sleek, modern touch.
- **Accent (Silver)** (#DBDDDE) Applied to hexagon borders and network structures for a metallic feel.
- **Text (White)**  (#FFFFFF)
  For the company name BORGX and other key textual highlights.

- **Highlight (Neon Green)** (#73FF00)
  Used for highlighted nodes and lines, adds energy, innovation, and visibility.
  -->

### Typography
- **Display Font**: "Crimson Pro" - Bold serif for headings, conveying expertise and authority
- **Body Font**: "Inter" - Clean sans-serif for readability and modern feel
- **Accent Font**: "JetBrains Mono" - For technical/code elements, suggesting precision

### Visual Language
- **Industrial Modernism**: Clean lines with subtle industrial textures
- **Data-Driven Aesthetic**: Visual elements suggesting charts, graphs, and data flow
- **Professional Authority**: Sophisticated color usage with generous white space
- **Technical Precision**: Sharp edges and geometric patterns reflecting engineering mindset

## Visual Effects

### Used Libraries
- **Anime.js**: Smooth micro-interactions and element animations
- **ECharts.js**: Interactive data visualizations for case studies
- **p5.js**: Background particle system representing data flow
- **Splide.js**: Case study carousel and image galleries
- **Typed.js**: Dynamic text animation for hero tagline
- **Splitting.js**: Letter-by-letter text reveal animations

### Effects Implementation
- **Hero Background**: Subtle particle system with copper/orange accents flowing like molten metal
- **Text Animations**: Typewriter effect for main tagline, staggered reveal for section headings
- **Hover Effects**: 3D tilt on cards, glow effects on buttons, color morphing on links
- **Scroll Animations**: Fade-in with subtle upward motion (16-24px) for content sections
- **Data Visualization**: Interactive charts showing AI implementation ROI and efficiency gains

### Header Effect
- **Background**: Gradient mesh from steel blue to dark gray with animated particles
- **Typography**: Large display font with subtle text shadow and color cycling emphasis
- **Interactive Elements**: Smooth hover transitions and micro-interactions

### Styling Approach
- **Layout**: Grid-aligned with consistent spacing (8px base unit)
- **Components**: Card-based design with subtle shadows and rounded corners
- **Images**: High-contrast industrial imagery with consistent filtering
- **Icons**: Custom SVG icons reflecting industrial and AI themes
- **Responsive**: Mobile-first approach with progressive enhancement

### Animation Principles
- **Performance**: Hardware-accelerated transforms, 60fps target
- **Accessibility**: Respects prefers-reduced-motion
- **Timing**: 200-300ms for micro-interactions, 400-600ms for page transitions
- **Easing**: Custom cubic-bezier curves for natural motion feel