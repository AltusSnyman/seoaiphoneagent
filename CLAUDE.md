# AI Phone Agent - Claude Code Guide

This is an Astro-based website for AI Phone Agent, migrated from React/Vite for improved performance. This guide provides essential information for Claude Code instances working in this repository.

## 🚀 Quick Commands

**Development Workflow:**
```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:4321)
npm run build       # Build for production
npm run preview     # Preview production build
```

**Key Scripts:**
- `dev` - Astro development server with hot reload
- `build` - Static site generation for production
- `preview` - Preview built site locally
- `astro` - Direct Astro CLI access

## 🏗️ Architecture Overview

### Framework & Structure
- **Framework**: Astro 5.13.2+ (Static Site Generator)
- **Architecture**: Component-based with .astro files
- **Rendering**: Static generation with optional client-side hydration
- **Styling**: CSS with custom properties, no external CSS frameworks

### Directory Structure
```
src/
├── layouts/
│   ├── Layout.astro        # Main layout with global styles
│   └── PageLayout.astro    # Page wrapper with Header/Footer
├── components/             # Reusable components
├── pages/                 # Route-based pages (.astro files)
└── assets/                # Static assets
```

### Key Files
- **package.json**: Contains all npm scripts and dependencies
- **astro.config.mjs**: Basic Astro configuration
- **README.md**: Comprehensive project documentation
- **src/layouts/Layout.astro**: Global styles and design tokens

## 🎨 Design System

### Color Palette
```css
--color-dark-400: #060A12;    /* Primary background */
--color-dark-300: #0A0E17;    /* Secondary background */
--color-dark-200: #131722;    /* Tertiary background */
--color-neon-blue: #00A3FF;   /* Primary accent */
--color-neon-cyan: #00E5FF;   /* Secondary accent */
--color-text: #F5F5F5;        /* Primary text */
--color-text-muted: #94A3B8;  /* Muted text */
```

### Typography
- **Headings**: Montserrat (700-800 weight)
- **Body**: Inter (300-700 weight)
- **Loading**: Google Fonts with preconnect optimization

### Visual Effects
- **Glass Morphism**: `backdrop-filter: blur(12px)` with rgba backgrounds
- **Neon Glow**: `box-shadow` and `text-shadow` with blue accent colors
- **Animations**: CSS keyframes for particles, blobs, and floating effects

## 🧩 Component Architecture

### Layout System
1. **Layout.astro**: Base HTML structure, global styles, design tokens
2. **PageLayout.astro**: Common page wrapper with Header, Footer, ChatbotWidget

### Key Components (Referenced in README)
- **Hero.astro**: Landing section with floating sphere animation
- **Header.astro**: Navigation and mobile menu
- **Footer.astro**: Site footer with contact information
- **ChatbotWidget.astro**: Eleven Labs voice AI integration
- **ROICalculator.astro**: Interactive revenue calculator

## 🔌 External Integrations

### Go HighLevel
- **Forms**: Contact and booking form submissions
- **Calendar**: Appointment booking system
- **Location**: Forms point to Go HighLevel endpoints

### Eleven Labs ConvAI
- **Widget**: Voice AI chatbot integration
- **Implementation**: ChatbotWidget component (placeholder for full integration)
- **Demo Numbers**: +1 877-320-7259 (USA), +61 2 3821 3526 (Australia)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1rem container padding)
- **Desktop**: ≥ 768px (2rem container padding)
- **Max Width**: 1280px container with auto margins

### Mobile Optimization
- Mobile-first CSS approach
- Touch-friendly interactive elements
- Optimized font sizes and spacing
- Responsive grid layouts

## 🎯 Key Features

### Content Sections (per README.md)
1. Hero with 3D sphere animation
2. Problem identification cards
3. Feature grid (6 key features)
4. Voice AI benefits breakdown
5. Feature comparison table
6. ROI cost comparison
7. Interactive ROI calculator
8. Client testimonials
9. Demo phone numbers
10. Final call-to-action
11. Complete footer
12. Floating chatbot widget

### Interactive Elements
- **ROI Calculator**: Real-time calculation with business metrics
- **Animations**: Floating spheres, particle effects, blob animations
- **Hover Effects**: Glowing buttons, card interactions
- **Form Handling**: Integration with Go HighLevel

## 🛠️ Development Guidelines

### File Conventions
- **Pages**: Use .astro extension for routes
- **Components**: Reusable .astro components in /components
- **Styling**: CSS-in-Astro with scoped styles
- **Assets**: Static files in public/ or src/assets/

### Code Standards
- **Import Order**: Framework imports first, then components
- **CSS**: Use CSS custom properties from Layout.astro
- **Components**: Follow existing patterns for consistency
- **Accessibility**: Maintain WCAG compliance

### Performance
- **Static Generation**: Astro builds to static files
- **Minimal JS**: Only hydrate interactive components
- **Optimized Assets**: Images and fonts optimized for web
- **Fast Loading**: < 3s on 3G networks (per README)

## 🚀 Deployment

### Build Process
1. `npm run build` - Generates static files in dist/
2. Deploy dist/ folder to static hosting
3. Configure domain and SSL

### Hosting Options (per README)
- Vercel (recommended for Astro)
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 🔍 Troubleshooting

### Common Issues
- **Import Errors**: Check file extensions (.astro required)
- **CSS Not Loading**: Ensure scoped styles in components
- **Build Failures**: Check Astro compatibility and syntax
- **Styling Issues**: Use CSS custom properties from Layout.astro

### Debug Commands
```bash
npm run dev -- --verbose    # Verbose development server
npm run build -- --verbose  # Verbose build output
```

## 📞 Demo & Testing

### Test Numbers
- **USA**: +1 877-320-7259
- **Australia**: +61 2 3821 3526

### Testing Areas
- Responsive design across devices
- Form submissions to Go HighLevel
- ROI calculator functionality
- Voice AI chatbot interface
- Page load performance
- Mobile touch interactions

## 📚 Additional Resources

- **Astro Docs**: https://docs.astro.build/
- **Project README**: Complete feature and setup documentation
- **Design Reference**: Layout.astro contains all design tokens
- **Integration Docs**: README.md has integration guidelines

---

*This guide provides the essential context for working with the AI Phone Agent Astro codebase. The README.md contains comprehensive details about features, customization, and deployment.*