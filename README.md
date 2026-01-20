# Bridge - Financial Management Platform

A clean, accessible, and modern financial management platform that helps users see all their money in one simple view. Bridge aggregates accounts, provides financial insights, and democratizes powerful financial tools once reserved for the wealthy.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview

Bridge is a financial clarity platform that connects all your financial accounts—banks, credit cards, loans, investments—into one unified view. Built with a focus on transparency, simplicity, and accessibility, Bridge aims to make powerful financial management tools available to everyone, not just the wealthy.

### Mission

To democratize financial tools and build a society no longer held back by financial illiteracy through transparent, accessible financial management.

### Core Values

- **Accessibility**: Financial tools for everyone, regardless of background or income
- **Transparency**: No gatekeeping, hidden fees, or fine print
- **Simplicity**: Finance should feel simple, not overwhelming

## Features

### Account Aggregation
- Connect 12,000+ financial institutions via Plaid
- Banks, credit cards, loans, and investment accounts
- Real-time syncing (not nightly batch updates)
- Secure authentication without password storage

### Financial Insights
- Real-time net worth tracking
- Total assets and debt overview
- Transaction history with categorization
- Downloadable financial statements (PDF)
- APR and payment details for debt management

### Bridgette AI
- Personalized financial advice based on your accounts
- Financial marketplace search optimization
- Debt consolidation recommendations
- Savings account comparisons
- Credit card rewards analysis

### Financial Marketplace
- Compare checking accounts, credit cards, savings, loans, investments
- Filter by: no monthly fees, high APY, opening bonuses, 0% intro APR
- Student and military benefits
- Transparency rubric for comparing options
- No sales pressure

### Money Movement (Bridge)
- Instant transfers between your accounts (24/7/365)
- Send money to friends, family, and peers
- Bill pay functionality
- Real-time processing

### Security
- 256-bit AES encryption (in transit and at rest)
- Zero password storage
- Multi-factor authentication
- Plaid-powered secure connections
- Bank-grade security protocols
- FDIC insured up to $250,000

## Project Structure

```
bridge/
├── index.html                      # Homepage
├── README.md                       # This file
├── assets/
│   ├── css/
│   │   ├── main.css               # Core styles & layout
│   │   ├── components.css         # Reusable component styles (currently empty)
│   │   ├── utilities.css          # Utility classes (currently empty)
│   │   └── pages/
│   │       ├── get-started.css    # Get Started page styles
│   │       ├── support.css        # Support page styles
│   │       └── join-the-team.css  # Careers/Investors page styles
│   ├── js/
│   │   ├── main.js                # Navigation, mobile menu, nav indicator
│   │   ├── nav.js                 # Reserved for navigation features
│   │   └── form-validation.js     # Client-side form validation
│   └── images/
│       ├── logos/
│       │   └── bridgeLogo.png     # Bridge brand logo
│       ├── bank_logos/            # Bank/institution logos for integrations
│       ├── phone_image/           # App screenshots
│       ├── qr/                    # QR codes for app downloads
│       └── hand.png               # Hand graphic for CTA sections
├── pages/
│   ├── get-started.html           # Onboarding/download page
│   ├── support.html               # Support center with FAQs
│   ├── join-the-team.html         # Careers and investor relations
│   ├── terms.html                 # Terms of service (TBD)
│   ├── privacy.html               # Privacy policy (TBD)
│   └── ccpa.html                  # CCPA compliance (TBD)
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup with ARIA labels
- **CSS3**: Custom properties (CSS variables), Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, progressive enhancement

### Fonts
- **Raleway**: Headings and display text
- **PT Sans**: Body text

### Integrations
- **Plaid**: Secure account aggregation and authentication
- **Apple App Store**: iOS app distribution

### Design Approach
- Mobile-first responsive design
- Component-based CSS architecture
- Modular JavaScript with separation of concerns
- No inline styles (clean HTML)
- Accessibility-first design

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for development)
- Text editor or IDE

### Installation

1. Clone or download the repository
2. Open the project in your preferred editor
3. Serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000

# Using VSCode (Easiest)
git clone the repository
"cd" into the repository and use "code ." to open the file
Download and use "Live server" to open and view the website
```

4. Navigate to `http://localhost:8000` in your browser

### File Organization Best Practices

- **HTML**: Keep semantic and clean, no inline styles
- **CSS**: Use CSS variables from main.css, organize by component
- **JavaScript**: Separate concerns, use feature detection
- **Images**: Optimize before adding (WebP when possible)

## Design System

### Color Palette

```css
--color-primary: #245968        /* Teal - Primary brand color */
--color-primary-soft: #c8d8e4   /* Soft blue - Backgrounds */
--color-accent: #52ab98         /* Green - CTAs and accents */
--color-white: #ffffff          /* Pure white */
--color-background: #f2f2f2     /* Light gray - Page backgrounds */
--color-dark: #1a1a1a           /* Dark text/backgrounds */
--color-text-main: #2b3c4d      /* Main text color */
--color-text-muted: #6b7280     /* Secondary text */
--color-border-subtle: #e5e7eb  /* Borders and dividers */
```

### Typography Scale

- **Display**: 2.5rem - 3.5rem (clamp for responsive)
- **Heading 2**: 2rem
- **Heading 3**: 1.5rem
- **Large**: 1.125rem
- **Base**: 1rem (16px)
- **Small**: 0.875rem

### Spacing System

```css
--space-2xs: 0.25rem    /* 4px */
--space-xs: 0.5rem      /* 8px */
--space-sm: 0.75rem     /* 12px */
--space-md: 1rem        /* 16px */
--space-lg: 1.5rem      /* 24px */
--space-xl: 2rem        /* 32px */
--space-2xl: 3rem       /* 48px */
--space-3xl: 4rem       /* 64px */
--space-4xl: 5rem       /* 80px */
```

### Border Radius

- **sm**: 0.4rem
- **md**: 0.6rem
- **lg**: 1rem
- **xl**: 1.5rem
- **pill**: 999px

## Accessibility

Bridge is built with accessibility as a core principle, not an afterthought.

### WCAG 2.1 AA Compliance

- **Semantic HTML**: Proper heading hierarchy, landmarks, lists
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Skip Links**: "Skip to main content" on every page
- **Focus Indicators**: Clear 3px outlines on all focusable elements
- **ARIA Labels**: Descriptive labels for screen readers
- **Alt Text**: All images have descriptive alt text
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Form Validation**: Clear error messages with aria-live regions

### Keyboard Navigation

- **Tab**: Navigate forward through interactive elements
- **Shift+Tab**: Navigate backward
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dropdowns (when implemented)

### Screen Reader Support

- Tested with NVDA, JAWS, and VoiceOver
- Proper landmark regions (header, nav, main, footer)
- Descriptive link text (no "click here")
- Form labels properly associated with inputs

## Browser Support

### Desktop
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

### Mobile
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced features require modern CSS (Grid, Flexbox, Custom Properties)
- Graceful degradation for older browsers

## Performance

### Optimization Techniques

- **CSS**: Single concatenated file, minimal specificity
- **JavaScript**: Vanilla JS, no heavy frameworks (~5KB total)
- **Images**: Optimized PNGs, lazy loading ready
- **Fonts**: Google Fonts with font-display: swap
- **Critical CSS**: Above-the-fold styles prioritized
- **No Blocking Scripts**: Scripts at end of body

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

## Security

### Data Protection

- No sensitive data stored in localStorage or cookies
- All forms designed for HTTPS in production
- Input sanitization on all user inputs
- Content Security Policy headers (recommended for deployment)

### Authentication

- All bank authentication handled through Plaid (never see passwords)
- Multi-factor authentication required for Bridge login
- Session management follows security best practices

### Compliance

- FDIC insured up to $250,000
- Financial Conduct Authority authorized and regulated
- Privacy policy and terms of service (TBD)
- CCPA compliant (California Consumer Privacy Act)

## Responsive Design

### Mobile-First Approach

Breakpoints follow standard device widths:

- **Mobile**: < 768px (base styles)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Key Responsive Features

- Hamburger menu on mobile
- Touch-friendly tap targets (44px minimum)
- Flexible grid layouts
- Responsive typography with clamp()
- Optimized images for different screen sizes

## Testing

### Manual Testing Checklist

- [ ] All links navigate correctly
- [ ] Forms validate properly (client-side)
- [ ] Responsive design works on all breakpoints
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader announces content correctly
- [ ] Images load with proper alt text
- [ ] No console errors
- [ ] Mobile menu toggles correctly
- [ ] Navigation indicator animates smoothly
- [ ] Marquee scrolls without lag
- [ ] Skip link appears on Tab focus

### Cross-Browser Testing

Test in Chrome, Firefox, Safari, and Edge on both desktop and mobile devices.

### Accessibility Testing

- Use Chrome DevTools Lighthouse
- Test with keyboard only (no mouse)
- Test with screen reader (NVDA, JAWS, or VoiceOver)
- Verify color contrast ratios

## Contributing

### Code Style

- **HTML**: 4-space indentation, semantic tags, no inline styles
- **CSS**: Organized by component, use CSS variables, mobile-first
- **JavaScript**: ES6+, vanilla JS only, clear comments

### Git Workflow

1. Create feature branch from main
2. Make changes with clear commit messages
3. Test thoroughly before committing
4. Submit pull request with description

## Roadmap

### Phase 1: MVP (Current)
- ✅ Landing page with features showcase
- ✅ Get Started page with download flow
- ✅ Support center with FAQ
- ✅ Careers/Investor relations page
- 🔲 Terms of Service page
- 🔲 Privacy Policy page
- 🔲 CCPA Compliance page

### Phase 2: Enhancement
- [ ] Blog/Resources section
- [ ] Interactive demo of app features
- [ ] Video testimonials
- [ ] Press/Media kit
- [ ] Integration directory (searchable)

### Phase 3: Advanced
- [ ] User dashboard preview
- [ ] Live chat support integration
- [ ] A/B testing implementation
- [ ] Analytics integration
- [ ] Email capture system

## Contact

- **General Inquiries**: hello@bridgebanking.info
- **Support**: support@bridgebanking.info
- **Careers**: careers@bridgebanking.info
- **Investors**: investors@bridgebanking.info

## License

Copyright 2025 Bridge Financial Inc. All rights reserved.

## Acknowledgments

- Design inspiration from modern fintech applications (Stripe, Plaid, Mercury)
- Accessibility guidance from WCAG 2.1 and WebAIM
- Font pairing: Google Fonts (Raleway + PT Sans)
- Icon system: Custom SVG icons for performance
- Community feedback and testing

---

**Built with care for financial clarity.**

*Last updated: January 2025*
