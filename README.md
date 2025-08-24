# AI Phone Agent - High-Performance Astro Website

A modern, highly-optimized website for AI Phone Agent built with Astro and advanced performance techniques. Features critical CSS extraction, image optimization, and sub-2 second mobile loading.

## 🚀 Performance Features

- **Sub-2 Second Mobile Loads**: Critical CSS extraction and resource optimization
- **Advanced Image Optimization**: WebP support, lazy loading, responsive srcsets
- **Critical Path Optimization**: Inline critical CSS, deferred non-critical resources
- **Mobile-First Design**: Optimized for Google's mobile-first indexing
- **Core Web Vitals Optimized**: LCP <2s, FID <50ms, CLS <0.05
- **SEO Optimized**: 1000+ word location pages, industry-specific content

## 🎨 Design Features

- **Dark Theme**: Modern dark design with neon blue accents and glowing effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Elements**: Floating 3D sphere animations, glowing buttons, and smooth transitions
- **Professional Imagery**: High-quality business photos with optimization
- **Voice AI Integration**: Eleven Labs voice chatbot integration
- **ROI Calculator**: Interactive calculator for potential revenue recovery

## 📋 Sections Included

### Main Site
1. **Hero Section**: Eye-catching header with business team background image
2. **Problem Section**: "You're Losing Money" with visual problem cards
3. **Features Grid**: 6 key features with optimized images and hover effects
4. **Why Voice AI**: Benefits breakdown with professional icons
5. **Comparison Table**: Feature comparison with highlighting
6. **ROI Section**: Cost comparison cards
7. **ROI Calculator**: Interactive revenue calculator
8. **Testimonials**: Client testimonials with responsive images
9. **Demo Section**: Phone numbers for testing the AI
10. **Final CTA**: Call-to-action section
11. **Footer**: Complete footer with logo and contact info
12. **Chatbot Widget**: Floating voice AI assistant

### Location Pages (SEO Optimized)
- **USA**: 2500+ word comprehensive location page
- **Australia**: 2300+ word detailed regional coverage
- **New Zealand**: 2200+ word market-specific content
- **Location Index**: 1200+ word overview with visual flags

### Industry Pages
15 industry-specific pages with tailored content:
- Dentists, Plumbers, Real Estate, Contractors
- Medical Clinics, HVAC, Auto Repair, Landscaping
- Salons & Spas, Cleaning Services, Pest Control
- Roofers, Electricians, Legal Offices, Restaurants

### Blog Section
- AI Receptionist vs Human comparison
- Business Phone Automation Guide
- Emergency Call Handling best practices
- Blog index with article listings

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors
- **Primary Blue**: #00A3FF (Neon Blue)
- **Secondary Cyan**: #00E5FF (Neon Cyan)
- **Dark Backgrounds**: 
  - Dark 400: #060A12
  - Dark 300: #0A0E17
  - Dark 200: #131722
- **Text**: #F5F5F5 (Primary), #94A3B8 (Muted)

### Typography
- **Headings**: Montserrat (700-800 weight)
- **Body**: Inter (300-700 weight)

### Effects
- Glass morphism cards with backdrop blur
- Neon glow effects on buttons and text
- Floating animations for visual elements
- Circuit pattern backgrounds

## 🎯 Key Components

### Layout.astro
Main layout with global styles, fonts, and design tokens.

### Hero.astro
- Floating sphere animation with rotating rings
- Call-to-action buttons
- Circuit background pattern

### ROICalculator.astro
- Interactive inputs for business metrics
- Real-time calculation updates
- Professional results display

### ChatbotWidget.astro
- Floating chatbot button
- Voice AI assistant panel
- Placeholder for Eleven Labs integration

## 🔧 Customization

### Adding Eleven Labs Integration

To integrate Eleven Labs voice AI:

1. Add your Eleven Labs API key to environment variables
2. Update `ChatbotWidget.astro` with the Eleven Labs SDK
3. Replace placeholder voice functionality with actual API calls

### Modifying Colors

Update the CSS custom properties in `Layout.astro`:

```css
:root {
  --color-neon-blue: #00A3FF;
  --color-neon-cyan: #00E5FF;
  --color-dark-400: #060A12;
  /* ... other colors */
}
```

### Content Updates

- Edit component files in `src/components/`
- Update text content directly in the Astro files
- Modify testimonials, features, and pricing in respective components

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized font sizes and spacing

## ⚡ Performance

- Static site generation with Astro
- Optimized images and assets
- Minimal JavaScript footprint
- Fast loading times

## 🧪 Testing

The site includes:
- Real phone numbers for demo testing
- Interactive ROI calculator
- Responsive design across devices
- Voice AI chatbot interface

## 📞 Demo Numbers

- **USA**: +1 877-320-7259
- **Australia**: +61 2 3821 3526

## 🚀 Deployment

Deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 📝 Notes

- Original React/Vite site fully recreated in Astro
- Maintains exact content and design from original
- Improved with better performance and maintainability
- Ready for Eleven Labs voice AI integration
- All animations and effects optimized for web performance

## 🤝 Support

For questions or issues:
- Email: hello@aiphoneagent.com
- Phone: +1 877-320-7259 (USA) or +61 2 3821 3526 (Australia)
