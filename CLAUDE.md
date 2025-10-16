# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run type-check` - Run TypeScript type checking

## Architecture Overview

This is a Next.js 14+ portfolio website built with:
- **Next.js 14+** with App Router and React Server Components
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for smooth, performant animations and interactions
- **next/image** for optimized image loading and responsive images
- **Lucide React** for consistent, modern icon system

### Key Architecture Patterns

**Fixed Sidebar + Scrollable Content Layout**: Desktop layout uses a 25% fixed sidebar (left) with profile, navigation, and CTAs, while the main content area (75% right) is scrollable. Mobile collapses to single-column with sticky header. Implementation in `/src/components/layout/`.

**Component-Based Architecture**: Modular components organized by type (layout, sections, ui). Each section is self-contained with its own animations and state. Components in `/src/components/`.

**Design Token System**: All colors, spacing, typography, and other design values are defined as Tailwind theme extensions in `tailwind.config.ts`. No magic numbers in components - always use design tokens.

**Animation Variants**: Reusable Framer Motion animation variants stored in `/src/lib/animations/`. Import and apply consistently across components for unified motion language.

**Responsive Grid System**: 12-point grid (desktop), 8-point grid (tablet), 4-point grid (mobile) with 4px base spacing unit. All spacing values are multiples of 4.

## Visual Development

### Design Principles

- Comprehensive design checklist in `/context/design-principles.md`
- Technical specifications in `/context/paige_website_specs.md`
- About Coach Paige content in `/Docs/about_coach_paige.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check

IMMEDIATELY after implementing any front-end change:

1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp_playwright_browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/paige_website_specs.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp_playwright_browser_console_messages` to identify any console errors

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review

Invoke the /Users/michaelbernard/Desktop/paige-portfolio-website-2/agents/design-reviewer.md subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing

### Component Development Guidelines

**Tailwind CSS Components**:
- Use utility classes directly in JSX
- Extract repeated patterns to reusable components, not @apply
- Follow design token system defined in tailwind.config.ts
- Group utilities logically: layout → spacing → typography → colors → effects
- Use responsive prefixes: `md:`, `lg:` for breakpoint-specific styles
- Components in `/src/components/ui/` for reusable UI elements

**Framer Motion Animations**:
- Import animation variants from `/src/lib/animations/`
- Use `motion` components for animated elements
- Implement scroll-triggered animations with `useInView` hook
- Respect `prefers-reduced-motion` - disable decorative animations
- Keep animations subtle and quick (150-300ms typical)
- Use only `transform` and `opacity` for performance

## Key Features

- **Single-Page Portfolio**: Smooth scrolling between sections with active navigation indicators
- **Fixed Sidebar Navigation**: Persistent left sidebar (desktop) with profile, nav, social links, and CTAs
- **Responsive Mobile Menu**: Hamburger menu with slide-in drawer and sticky header on scroll
- **Interactive Sections**: Accordions, expandable cards, filterable grids, and modals
- **Client Results Gallery**: Filterable masonry grid with lightbox modals for detailed case studies
- **Scroll Progress Indicator**: Visual bar showing reading progress through the page
- **Performance Optimized**: Image optimization, lazy loading, code splitting, and animation performance
- **Accessibility Compliant**: WCAG AA standards with keyboard navigation and screen reader support

## Project Structure

```
/src
  /app
    layout.tsx          # Root layout with metadata
    page.tsx            # Main portfolio page
    globals.css         # Global styles and Tailwind directives
  /components
    /layout
      Sidebar.tsx       # Fixed sidebar (desktop)
      MobileHeader.tsx  # Sticky header (mobile)
      MobileMenu.tsx    # Slide-in navigation drawer
    /sections
      Hero.tsx          # Hero statement section
      About.tsx         # About me with timeline
      Philosophy.tsx    # Philosophy grid with flip cards
      Method.tsx        # Viora Method accordion
      Results.tsx       # Client results with filters
      Services.tsx      # Service offerings
      Credentials.tsx   # Certifications and badges
      CTAFooter.tsx     # Final call-to-action
    /ui
      Button.tsx        # Button component with variants
      Card.tsx          # Card component
      Modal.tsx         # Modal/dialog component
      Accordion.tsx     # Accordion component
      Badge.tsx         # Badge/tag component
      Counter.tsx       # Animated counter
      Tooltip.tsx       # Tooltip component
  /lib
    /animations
      variants.ts       # Framer Motion animation variants
    /utils
      helpers.ts        # Utility functions
  /hooks
    useScrollProgress.ts  # Track scroll position
    useInView.ts          # Detect element visibility
    useMediaQuery.ts      # Responsive breakpoint detection
  /types
    index.ts              # TypeScript type definitions
  /data
    content.ts            # Website content and copy
    testimonials.ts       # Client testimonials data
/public
  /images
    /placeholders       # Image placeholders
  /icons
    favicon.ico
  /patterns             # SVG pattern files for backgrounds
/context
  design-principles.md      # S-Tier design checklist
  paige_website_specs.md    # Technical specifications
/Docs
  about_coach_paige.md      # Content and copy
/agents
  design-reviewer.md        # Design review agent for validation
```

## Recent Updates (Updated: 2025-10-15)

### Project Structure
- Portfolio website is fully implemented with all major sections
- Component architecture follows Next.js 14+ App Router patterns
- Design system integrated with Tailwind CSS custom tokens

### Current Component Inventory

**Layout Components** (src/components/layout/):
- `Sidebar.tsx` - Fixed desktop sidebar with navigation
- `MobileHeader.tsx` - Sticky mobile header
- `MobileMenu.tsx` - Slide-in navigation drawer
- `MobileProfileHero.tsx` - Mobile profile section
- `MobileBottomBar.tsx` - Bottom navigation for mobile

**Section Components** (src/components/sections/):
- `Hero.tsx` - Hero statement section
- `About.tsx` - About me with timeline
- `Philosophy.tsx` - Philosophy grid with flip cards
- `Method.tsx` - Viora Method accordion
- `Results.tsx` - Client results with filters
- `Services.tsx` - Service offerings
- `Credentials.tsx` - Certifications and badges
- `CTAFooter.tsx` - Final call-to-action

**UI Components** (src/components/ui/):
- `button.tsx` - Button component with variants
- `card.tsx` - Card component
- `input.tsx` - Input field component
- `textarea.tsx` - Textarea component
- `AnimatedCounter.tsx` - Animated number counter
- `BackToTop.tsx` - Back to top button
- `ScrollProgress.tsx` - Page scroll indicator

### Documentation Structure
- `/context/` - Design principles and technical specs
- `/Docs/` - Content and copy documentation
- `/agents/` - Design review agent configuration

### Development Status
- Development server configured and running
- All core dependencies installed (Next.js 14, React 18, Framer Motion, Tailwind CSS)
- TypeScript configuration active
- ESLint and type checking available

## Git Commit Guidelines

- Use Conventional Commits formatting: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, etc.
- Use Conventional Branch naming: `feature/`, `fix/`, `refactor/`, `style/`
- Do not mention Claude as a co-author or include links to Claude Code
- Examples:
  - `feat: add client results filterable grid`
  - `fix: correct mobile menu z-index issue`
  - `style: update button hover animations`
  - `refactor: extract accordion animation variants`

## Guidance Memories

- Ask for clarification upfront when direction is unclear or requirements are ambiguous
- Reference design principles and specifications documents before making visual decisions
- Confirm brand color and design token choices with user before implementing
- Verify content and copy with user before finalizing sections
- Check for image assets and placeholders needed before building components

## Linting and Code Quality

- Run `npm run lint` after completing large additions or refactors
- Run `npm run type-check` to catch TypeScript errors before committing
- Fix all ESLint warnings - maintain zero-warning policy
- Ensure all components are properly typed with TypeScript interfaces
- Follow React best practices: hooks rules, component composition, prop drilling avoidance

## Design System Adherence

**Always follow these principles**:

1. **Spacing**: Use only multiples of 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120px)
2. **Colors**: Reference design tokens from tailwind config - never use arbitrary colors
3. **Typography**: Use defined type scale - never arbitrary font sizes
4. **Border Radius**: Use defined radius values (sm: 4px, base: 6px, md: 8px, lg: 12px, xl: 16px)
5. **Shadows**: Use defined shadow scale - never arbitrary shadows
6. **Animations**: Import from `/src/lib/animations/variants.ts` - maintain consistency
7. **Icons**: Use Lucide React with consistent sizing (16px, 20px, 24px, 32px)
8. **Breakpoints**: Use Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## Content and Copy

- All website content is documented in `/Docs/about_coach_paige.md`
- Reference this file for accurate information about Coach Paige's background, services, and philosophy
- Do not invent or modify content - use provided copy exactly
- For testimonials and client stories, use exact quotes from documentation
- Maintain Coach Paige's authentic voice: warm, empowering, professional, supportive

## Performance Standards

- **Lighthouse Performance**: Target 90+ score
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s
- **Bundle Size**: Monitor with `@next/bundle-analyzer`, keep main bundle under 200KB
- **Image Optimization**: All images via next/image with appropriate sizes and formats

## Accessibility Requirements

- **WCAG AA Compliance**: All color contrast ratios meet 4.5:1 (text) or 3:1 (large text)
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus Indicators**: Visible focus states on all interactive elements (3:1 contrast)
- **Screen Readers**: Semantic HTML, proper ARIA labels, alt text for images
- **Reduced Motion**: Respect `prefers-reduced-motion`, disable decorative animations
- **Touch Targets**: Minimum 44x44px for all interactive elements
- Test with: Lighthouse accessibility audit, axe DevTools, keyboard-only navigation

## Browser/Device Support

- **Primary**: Chrome/Edge (latest 2 versions), Safari (latest 2 versions)
- **Secondary**: Firefox (latest 2 versions)
- **Mobile**: iOS Safari 14+, Chrome Android (latest)
- **Viewports**: 
  - Desktop: 1024px - 1920px (optimal at 1440px)
  - Tablet: 768px - 1023px
  - Mobile: 320px - 767px (test at 375px, 390px, 414px)

## Dependencies and Constraints

- **Do not add new dependencies** without explicit approval
- Prefer **Tailwind utilities** over additional CSS-in-JS libraries
- Use **Lucide React** for all icons - do not mix icon libraries
- Avoid **large animation libraries** - Framer Motion handles all needs
- No **jQuery** or other legacy dependencies
- Prefer **native browser APIs** over polyfills when possible

## Image Handling

- **Always use next/image**: Automatic optimization, responsive images, lazy loading
- **Provide width and height**: Prevents layout shift, required by next/image
- **Use priority for above-fold**: Hero images and critical content
- **Placeholder blur**: Generate blur data URLs for smooth loading transitions
- **Formats**: Prefer WebP with fallbacks, Next.js handles automatically
- **Sizes prop**: Define responsive sizes for proper image selection
- **Placeholders**: Use placeholder images from `/public/images/placeholders/`

## Animation Best Practices

- **GPU-accelerated only**: Use `transform` (translate, scale, rotate) and `opacity`
- **Avoid layout thrashing**: Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- **Quick and subtle**: 150-300ms for most animations, use ease-in-out
- **Purposeful**: Every animation should provide feedback or guide attention
- **Scroll-triggered**: Use `useInView` hook for revealing elements on scroll
- **Stagger children**: Sequential animation of list items for polish
- **Reduced motion**: Always check and respect user preferences

## Error Handling

- **Console errors**: Zero tolerance - fix all console errors and warnings
- **Type errors**: Run `npm run type-check` regularly, fix all TypeScript errors
- **Graceful degradation**: Ensure core functionality works even if JavaScript fails
- **Loading states**: Implement skeleton screens or spinners for async operations
- **Error boundaries**: Wrap sections in error boundaries to prevent full-page crashes
- **User-facing errors**: Clear, friendly messages with actionable next steps

## Testing Approach

- **Manual testing**: Test all interactive features in browser after changes
- **Responsive testing**: Check all three breakpoints (mobile, tablet, desktop)
- **Cross-browser**: Test in Chrome, Safari, and Firefox
- **Accessibility testing**: Run Lighthouse audit and axe DevTools scan
- **Performance testing**: Check Lighthouse performance score
- **Console check**: Verify no errors or warnings in browser console

## Environment and Configuration

- **Development**: Runs on port 3000 (http://localhost:3000)
- **Environment variables**: Store in `.env.local` (not committed to git)
- **Public variables**: Prefix with `NEXT_PUBLIC_` for client-side access
- **Example variables**:
  ```
  NEXT_PUBLIC_SITE_URL=https://coachpaige.com
  NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
  ANALYTICS_ID=...
  ```

## Deployment Notes

- **Platform**: Vercel (optimized for Next.js)
- **Build command**: `npm run build`
- **Output**: `.next` directory (static and server-rendered pages)
- **Automatic deployments**: Connected to Git repository
- **Preview deployments**: Every push creates a preview URL
- **Environment variables**: Configure in Vercel dashboard
- **Custom domain**: Configure DNS and SSL in Vercel

## Common Pitfalls to Avoid

1. **Arbitrary values**: Never use arbitrary Tailwind values like `w-[375px]` - use design tokens
2. **Inline styles**: Avoid style prop - use Tailwind classes or styled components
3. **Missing alt text**: Every image must have descriptive alt text or aria-hidden
4. **Hover on mobile**: Don't rely on hover states for touch devices - use active states
5. **Fixed heights**: Avoid fixed heights that break on content changes - use min-height
6. **z-index chaos**: Follow z-index scale: 0 (default), 10 (dropdowns), 20 (sticky), 50 (modals)
7. **Forgetting loading states**: Always show feedback during async operations
8. **Breaking keyboard nav**: Test tab order after adding interactive elements
9. **Ignoring console**: Check browser console after every change
10. **Skipping mobile test**: Always test mobile viewport after desktop implementation

## Before Marking Task Complete

Run through this checklist:

- [ ] Code follows TypeScript best practices with proper types
- [ ] All Tailwind classes use design tokens (no arbitrary values)
- [ ] Animations use defined variants from `/src/lib/animations/`
- [ ] Component is responsive (tested at mobile, tablet, desktop)
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible and meet contrast requirements
- [ ] Images use next/image with proper width, height, and alt text
- [ ] No console errors or warnings in browser
- [ ] Changes match design specifications in `/context/` files
- [ ] Content and copy are accurate per documentation
- [ ] `npm run lint` passes with no errors
- [ ] Lighthouse accessibility score is 100
- [ ] Feature works with JavaScript disabled (where applicable)
- [ ] Reduced motion preference is respected
- [ ] Git commit follows Conventional Commits format

## Additional Resources

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Framer Motion Documentation: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/icons/
- Vercel Deployment: https://vercel.com/docs

---

**Project**: Coach Paige Portfolio Website  
**Framework**: Next.js 14+ with App Router  
**Styling**: Tailwind CSS with custom design system  
**Animations**: Framer Motion  
**Status**: Ready for Development