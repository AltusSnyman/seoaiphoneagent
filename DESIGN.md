# Design System - AI Phone Agent

Complete design documentation for the AI Phone Agent website's visual identity and user experience.

## 🎨 Brand Identity

### Color Palette

#### Primary Colors
```css
--color-neon-blue: #00A3FF    /* Primary brand, CTAs, highlights */
--color-neon-cyan: #00E5FF    /* Secondary accent, gradients */
--color-neon-glow: rgba(0, 163, 255, 0.5)  /* Glow effects */
```

#### Background Colors
```css
--color-dark-400: #060A12     /* Primary background */
--color-dark-300: #0A0E17     /* Section alternates */
--color-dark-200: #131722     /* Card backgrounds */
--color-dark-100: #1A1F2C     /* Lightest dark variant */
```

#### Text Colors
```css
--color-text: #F5F5F5         /* Primary text, headings */
--color-text-muted: #94A3B8   /* Secondary text, descriptions */
```

#### Semantic Colors
```css
--color-success: #4CAF50      /* Success states, testimonials */
--color-warning: #FF9800      /* Warnings, alerts */
--color-error: #FF5252        /* Errors, problems */
```

### Typography

#### Font Stack
```css
/* Headings */
font-family: 'Montserrat', sans-serif;
weights: 400, 500, 600, 700, 800

/* Body Text */
font-family: 'Inter', sans-serif;
weights: 300, 400, 500, 600, 700
```

#### Type Scale
```css
/* Headings */
h1: 3.5rem / 2.5rem mobile   /* Hero titles */
h2: 2.5rem / 2rem mobile     /* Section titles */  
h3: 1.375rem / 1.25rem mobile /* Card titles */
h4: 1.125rem / 1rem mobile   /* Subsections */

/* Body */
body: 1rem                   /* Standard text */
large: 1.25rem              /* Lead paragraphs */
small: 0.875rem             /* Helper text */
```

#### Line Heights
```css
headings: 1.2               /* Tight for impact */
body: 1.6                   /* Readable body text */
display: 1.1                /* Extra tight for hero */
```

### Spacing System

#### Base Unit: 0.25rem (4px)

```css
/* Spacing Scale */
xs: 0.25rem    /* 4px  - tight spacing */
sm: 0.5rem     /* 8px  - small gaps */
md: 1rem       /* 16px - default spacing */
lg: 1.5rem     /* 24px - section spacing */
xl: 2rem       /* 32px - large gaps */
2xl: 3rem      /* 48px - section padding */
3xl: 4rem      /* 64px - major sections */
4xl: 5rem      /* 80px - page sections */
```

#### Layout Spacing
```css
container-padding: 2rem     /* Desktop container */
container-padding-mobile: 1rem /* Mobile container */
section-padding: 5rem 0     /* Desktop sections */
section-padding-mobile: 3rem 0 /* Mobile sections */
```

## 🏗️ Layout System

### Grid System

#### Breakpoints
```css
sm: 640px      /* Mobile landscape */
md: 768px      /* Tablet */
lg: 1024px     /* Desktop */
xl: 1280px     /* Large desktop */
2xl: 1400px    /* Extra large */
```

#### Container
```css
max-width: 1280px
margin: 0 auto
padding: 0 2rem (desktop)
padding: 0 1rem (mobile)
```

#### Common Layouts
```css
/* Two Column */
grid-template-columns: 1fr 1fr
gap: 4rem
/* Mobile: stack */

/* Three Column */
grid-template-columns: repeat(3, 1fr)
gap: 2rem
/* Mobile: 1 column */

/* Feature Grid */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
gap: 2rem
```

### Component Spacing

#### Cards
```css
padding: 2.5rem            /* Desktop */
padding: 2rem              /* Mobile */
border-radius: 1rem        /* Rounded corners */
gap: 1.5rem               /* Internal spacing */
```

#### Buttons
```css
padding: 0.75rem 1.5rem    /* Standard */
padding: 1.25rem 3rem      /* Large CTA */
border-radius: 0.5rem      /* Subtle rounding */
```

## 🎭 Visual Effects

### Glass Morphism

```css
.glass-card {
  background: rgba(10, 14, 23, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

### Neon Effects

#### Text Glow
```css
.neon-text {
  color: var(--color-neon-blue);
  text-shadow: 0 0 5px var(--color-neon-glow);
}
```

#### Border Glow
```css
.neon-border {
  border: 1px solid rgba(0, 163, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 163, 255, 0.5);
}
```

#### Button Glow
```css
.btn-primary {
  background: var(--color-neon-blue);
  box-shadow: 0 0 20px rgba(0, 163, 255, 0.5);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(0, 163, 255, 0.7);
}
```

### Animations

#### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}
```

#### Blob Background Animation
```css
@keyframes blob-animation {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

.blob {
  animation: blob-animation 15s infinite alternate ease-in-out;
}
```

#### Fade In Animation
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.7s ease-out forwards;
}
```

## 🧩 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-neon-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(0, 163, 255, 0.5);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #0080CC;
  box-shadow: 0 0 30px rgba(0, 163, 255, 0.7);
  transform: translateY(-2px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--color-neon-blue);
  border: 2px solid var(--color-neon-blue);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(0, 163, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(0, 163, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 163, 255, 0.5);
  transform: translateY(-2px);
}
```

### Cards

#### Glass Card
```css
.glass-card {
  background: rgba(10, 14, 23, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 163, 255, 0.2);
}
```

#### Feature Card Icon
```css
.feature-icon {
  width: 60px;
  height: 60px;
  background: rgba(0, 163, 255, 0.1);
  border: 2px solid rgba(0, 163, 255, 0.3);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  background: rgba(0, 163, 255, 0.2);
  border-color: var(--color-neon-blue);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 163, 255, 0.5);
}
```

### Navigation

#### Fixed Header
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(6, 10, 18, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}
```

#### Navigation Links
```css
.nav-link {
  color: var(--color-text);
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-cyan));
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-neon-blue);
}

.nav-link:hover::after {
  width: 100%;
}
```

## 📱 Responsive Design

### Mobile-First Approach

#### Design Philosophy
1. **Mobile-first CSS**: Start with mobile styles, enhance for desktop
2. **Touch-friendly**: Minimum 44px touch targets
3. **Readable text**: Minimum 16px base font size
4. **Fast loading**: Optimize for 3G networks

#### Breakpoint Strategy
```css
/* Mobile First */
.component {
  /* Mobile styles here */
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

#### Mobile Optimizations

##### Typography
```css
/* Mobile */
h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }
body { font-size: 1rem; }

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.5rem; }
  body { font-size: 1.125rem; }
}
```

##### Spacing
```css
/* Mobile */
.section-padding {
  padding: 3rem 0;
}

.container {
  padding: 0 1rem;
}

/* Desktop */
@media (min-width: 1024px) {
  .section-padding {
    padding: 5rem 0;
  }
  
  .container {
    padding: 0 2rem;
  }
}
```

##### Grid Layouts
```css
/* Mobile: Single column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Desktop: Multi-column */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

## 🎯 User Experience Guidelines

### Interaction Design

#### Hover States
- **Subtle elevation**: 2-5px translateY for cards
- **Glow enhancement**: Increase box-shadow intensity
- **Color transitions**: 0.3s ease for smooth changes
- **Scale effects**: 1.05-1.1x for interactive elements

#### Focus States
- **Keyboard navigation**: Visible focus rings
- **Color consistency**: Use brand blue for focus
- **High contrast**: Ensure accessibility compliance
- **Clear indication**: Never remove focus styles

#### Loading States
- **Progressive enhancement**: Content loads gracefully
- **Skeleton screens**: For dynamic content
- **Smooth transitions**: Fade in completed elements
- **Performance feedback**: Show loading for >0.5s operations

### Accessibility

#### Color Contrast
- **Text on background**: Minimum 4.5:1 ratio
- **Interactive elements**: High contrast states
- **Error states**: Don't rely on color alone
- **Focus indicators**: Clearly visible

#### Typography
- **Readable fonts**: Clear, legible typefaces
- **Sufficient size**: Minimum 16px on mobile
- **Line spacing**: 1.4+ for body text
- **Content hierarchy**: Clear heading structure

#### Interactive Elements
- **Touch targets**: Minimum 44x44px
- **Keyboard access**: All functions accessible
- **Screen readers**: Semantic HTML structure
- **Alternative text**: Descriptive image alt text

### Performance Considerations

#### Animation Performance
- **Use transforms**: Avoid animating layout properties
- **Hardware acceleration**: will-change for moving elements
- **Reduced motion**: Respect prefers-reduced-motion
- **Frame rates**: Target 60fps for smooth animations

#### CSS Optimization
- **Critical CSS**: Inline above-fold styles
- **Unused CSS**: Remove unused rules
- **Compression**: Minify production CSS
- **Caching**: Long cache headers for styles

#### Image Strategy
- **Responsive images**: Multiple sizes for devices
- **Modern formats**: WebP/AVIF when supported  
- **Lazy loading**: Load images as needed
- **Optimization**: Compress all images

## 🎨 Brand Application

### Logo Usage
- **Primary**: Use neon blue (#00A3FF)
- **On dark**: White or neon blue
- **Minimum size**: 120px width
- **Clear space**: Equal to logo height

### Color Applications
- **Primary actions**: Neon blue backgrounds
- **Secondary actions**: Blue borders, transparent backgrounds
- **Success states**: Green (#4CAF50)
- **Warnings**: Orange (#FF9800)
- **Errors**: Red (#FF5252)

### Voice and Tone
- **Professional**: Authoritative but approachable
- **Innovative**: Cutting-edge technology focus
- **Results-driven**: Emphasize business value
- **Supportive**: Helpful and understanding

### Content Guidelines
- **Headlines**: Bold, benefit-focused
- **Body text**: Clear, conversational
- **CTAs**: Action-oriented, urgent
- **Technical details**: Accessible language