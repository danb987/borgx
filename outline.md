# Project Outline - AI & Metallurgy Consulting Website

## File Structure
```
/mnt/okcomputer/output/
├── index.html          # Main landing page with hero and client types
├── about.html          # Company story and team
├── services.html       # Detailed service offerings
├── insights.html       # Blog/articles section
├── main.js            # Interactive functionality
└── resources/         # Images and assets
    ├── hero-bg.jpg    # Generated hero background
    ├── metallurgy-1.jpg
    ├── metallurgy-2.jpg
    ├── ai-data-1.jpg
    ├── ai-data-2.jpg
    └── industrial-*.jpg
```

## Page Breakdown

### index.html - Landing Page
**Purpose**: Create immediate impact and drive conversions
**Sections**:
1. **Navigation Bar** - Logo, menu items (About, Services, Insights)
2. **Hero Section** - 
   - Background: Generated industrial/AI imagery
   - Motto: "From Data to Innovation" (animated)
   - Tagline: "Human Expertise + Machine Intelligence = Industrial Impact" (typewriter effect)
   - CTA: "Book a call with us" button
3. **Who We Help Section** - 4 client type cards with hover effects
4. **Services Preview** - Brief overview with links to services page
5. **Contact Information** - Phone, email, location
6. **Footer** - Copyright and social links

### about.html - Company Story
**Purpose**: Build trust and credibility
**Sections**:
1. **Navigation Bar** (consistent across all pages)
2. **Company Story** - Mission, vision, values
3. **Team Section** - Key personnel (generated avatars)
4. **Why Choose Us** - Differentiators and approach
5. **Contact CTA** - Encourage engagement

### services.html - Service Offerings
**Purpose**: Detailed service information and lead generation
**Sections**:
1. **Navigation Bar**
2. **Services Overview** - Three main service categories
3. **Data & AI Readiness Audit** - Detailed description, process, benefits
4. **Synthetic Data Generation** - Technical approach, use cases, ROI
5. **Education & Coaching** - Training programs, workshops, certifications
6. **Case Studies** - Interactive examples with data visualizations
7. **Contact Form** - Service-specific inquiry form

### insights.html - Thought Leadership
**Purpose**: Demonstrate expertise and improve SEO
**Sections**:
1. **Navigation Bar**
2. **Featured Articles** - Latest insights and research
3. **Industry Trends** - AI in metallurgy analysis
4. **Case Studies** - Detailed project examples
5. **Resource Library** - Whitepapers, guides, tools
6. **Newsletter Signup** - Lead capture

## Interactive Elements

### index.html
- **Book a Call Modal** - Contact form overlay
- **Client Type Cards** - Hover reveals additional info
- **Service Preview Cards** - Click to navigate to services
- **Scroll Animations** - Reveal content as user scrolls

### services.html
- **Service Category Tabs** - Filter content by service type
- **ROI Calculator** - Interactive tool for synthetic data benefits
- **Case Study Carousel** - Swipeable project examples
- **Process Flow Diagram** - Animated service delivery steps

### insights.html
- **Article Filter** - Search and filter by topic/date
- **Reading Time Estimator** - Dynamic reading time calculation
- **Social Sharing** - Share articles on LinkedIn/Twitter
- **Related Articles** - Suggested content based on current article

## Technical Implementation

### Core Libraries
- **Anime.js** - Smooth animations and micro-interactions
- **ECharts.js** - Data visualization for case studies and ROI
- **p5.js** - Hero background particle system
- **Splide.js** - Image carousels and sliders
- **Typed.js** - Dynamic text animations
- **Splitting.js** - Advanced text effects

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: 320px, 768px, 1024px, 1440px
- **Flexible grid** system using CSS Grid and Flexbox
- **Optimized images** with multiple resolutions

### Performance Optimization
- **Lazy loading** for images and heavy content
- **Minified CSS/JS** for production
- **Optimized animations** for 60fps performance
- **Compressed images** without quality loss

## Content Strategy

### SEO Keywords
- "AI consulting metallurgy"
- "Synthetic data generation industrial"
- "Data readiness audit manufacturing"
- "AI education materials science"
- "Machine learning steel industry"

### Content Themes
- Industrial AI implementation challenges
- Synthetic data ROI and benefits
- Metallurgy industry digital transformation
- AI workforce development
- Manufacturing process optimization