# COACH PAIGE PORTFOLIO WEBSITE - TECHNICAL SPECIFICATIONS

## PROJECT OVERVIEW

**Type:** Single-page portfolio/resume website  
**Framework:** Next.js 14+ (App Router)  
**Styling:** Tailwind CSS  
**Animation:** Framer Motion  
**Language:** TypeScript  
**Grid System:** 12-point (desktop), 8-point (tablet), 4-point (mobile)

---

## LAYOUT STRUCTURE

### Desktop Layout (≥1024px)
- **Left Sidebar:** 25% width, fixed position, full height
- **Right Content:** 75% width, scrollable
- **Grid:** 12-point system

### Tablet Layout (768px - 1023px)
- **Left Sidebar:** 30% width, fixed position
- **Right Content:** 70% width, scrollable
- **Grid:** 8-point system

### Mobile Layout (<768px)
- **Single Column:** Full width, scrollable
- **Hero Section:** Profile info above fold, sticky header on scroll
- **Grid:** 4-point system

---

## LEFT SIDEBAR (FIXED)

### Component Hierarchy
1. Profile Image
2. Name & Title
3. Tagline
4. Navigation Menu
5. Social Links
6. Primary CTAs
7. Contact Info

### Specifications

#### Profile Image
- **Size:** 200x200px (desktop), 150x150px (tablet), 120x120px (mobile)
- **Shape:** Circular with subtle border
- **Animation:** Fade in on load, subtle scale on hover
- **Placeholder:** `<Image>` component with `priority` flag

#### Name & Title
- **Name:** Font size 28px (desktop), 24px (tablet/mobile)
- **Title:** Font size 16px (desktop), 14px (tablet/mobile)
- **Color:** Primary brand color
- **Animation:** Slide up with fade in (staggered)

#### Tagline
- **Text:** "Empowering Women Through Fitness"
- **Font size:** 14px
- **Style:** Italic, muted color
- **Animation:** Fade in delay 0.3s

#### Navigation Menu
- **Type:** Anchor links to scroll sections
- **Items:**
  - About
  - Philosophy
  - Method
  - Client Results
  - Services
  - Credentials
- **Interaction:** Smooth scroll, active state indicator
- **Animation:** Highlight active section, smooth transitions

#### Social Links
- **Icons:** Instagram, Email, LinkedIn (if applicable)
- **Size:** 24px icons
- **Layout:** Horizontal row
- **Interaction:** Scale 1.1 on hover, open in new tab
- **Animation:** Staggered fade in

#### Primary CTAs
- **Button 1:** "Book Discovery Call"
- **Button 2:** "Download Client Guide"
- **Style:** Full width, rounded, gradient or solid brand colors
- **Interaction:** Hover lift effect, ripple animation
- **Animation:** Slide up with fade in

#### Contact Info
- **Email:** hello@vioracoaching.com
- **Format:** Click to copy or mailto link
- **Style:** Small text, icon + text
- **Interaction:** Tooltip on hover showing "Click to copy"

### Mobile Adaptation
- Profile section becomes header (sticky on scroll)
- Hamburger menu for navigation
- CTAs move below navigation in mobile menu
- Profile image reduces to 80px when scrolled

---

## RIGHT CONTENT (SCROLLABLE)

### Section Order
1. Hero Statement
2. About Me
3. Philosophy & Approach
4. The Viora Method (3 Pillars)
5. Client Results & Testimonials
6. Services Overview
7. Credentials & Certifications
8. Call to Action Footer

---

## SECTION SPECIFICATIONS

### 1. HERO STATEMENT

**Layout:**
- Full width container
- Centered content, max-width 800px
- Vertical padding: 120px (desktop), 80px (mobile)

**Content:**
- Headline: "Transform Your Body, Reclaim Your Confidence"
- Subheading: Brief mission statement
- Quick stats: Years experience, clients coached, success rate

**Features:**
- **Typing Animation:** Headline types out on load
- **Counter Animation:** Stats count up from 0
- **Background:** Subtle gradient or pattern

**Components:**
```typescript
<HeroSection>
  <AnimatedHeadline />
  <StatCounter stats={[]} />
  <ScrollIndicator />
</HeroSection>
```

---

### 2. ABOUT ME

**Layout:**
- Two-column on desktop (60/40 split)
- Single column on mobile
- Section padding: 80px vertical

**Content:**
- Personal journey story
- D1 athlete background
- Transformation story
- Current mission

**Features:**
- **Expandable Timeline:** Click to expand journey milestones
- **Image Placeholder:** Secondary photo (landscape 800x600px)
- **Quote Highlight:** Pull quote with distinctive styling

**Interactive Elements:**
- Timeline dots reveal details on click
- "Read Full Story" expandable section
- Image gallery slider (3-5 images)

**Components:**
```typescript
<AboutSection>
  <JourneyTimeline events={[]} />
  <ExpandableStory>
  <ImageGallery images={[]} />
</AboutSection>
```

---

### 3. PHILOSOPHY & APPROACH

**Layout:**
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Cards with hover effects
- Section padding: 80px vertical

**Content:**
- 6 core beliefs
- Each with icon, title, description

**Features:**
- **Card Flip Animation:** Hover to reveal more details
- **Staggered Load:** Cards animate in sequentially
- **Icon Animation:** Subtle floating animation

**Interactive Elements:**
- Click card to expand full description
- Modal overlay for detailed philosophy
- Progress indicator for reading

**Components:**
```typescript
<PhilosophySection>
  <PhilosophyGrid>
    <PhilosophyCard 
      icon={} 
      title={} 
      description={}
      expandedContent={}
    />
  </PhilosophyGrid>
</PhilosophySection>
```

---

### 4. THE VIORA METHOD (3 Pillars)

**Layout:**
- Vertical accordion (desktop/tablet)
- Stacked cards (mobile)
- Section padding: 100px vertical

**Content:**
- Pillar 1: Empowered Movement
- Pillar 2: Nourishing Nutrition
- Pillar 3: Whole-Self Wellness

**Features:**
- **Accordion Interaction:** Click to expand each pillar
- **Progress Connection:** Visual line connecting pillars
- **Icon Animation:** Icons animate when pillar expands
- **Content Transition:** Smooth height/opacity transitions

**Interactive Elements:**
- Auto-collapse other pillars when one opens
- "Learn More" button in each pillar
- Embedded video placeholder (if applicable)

**Structure Per Pillar:**
- Icon (animated SVG)
- Title
- Preview text (always visible)
- Expanded content:
  - Detailed description
  - What clients get
  - Expected outcomes
  - Visual diagram/illustration

**Components:**
```typescript
<VioraMethodSection>
  <MethodAccordion>
    <PillarCard
      number={1}
      icon={}
      title={}
      preview={}
      expandedContent={}
      isExpanded={boolean}
      onToggle={}
    />
  </MethodAccordion>
  <VisualConnector />
</VioraMethodSection>
```

---

### 5. CLIENT RESULTS & TESTIMONIALS

**Layout:**
- Masonry grid (desktop), 2 columns (tablet), 1 column (mobile)
- Section padding: 100px vertical
- Background: Subtle contrast from main background

**Content:**
- 6-8 client success stories
- Before/after stats
- Testimonial quotes
- Transformation metrics

**Features:**
- **Filter Buttons:** Filter by goal type (weight loss, strength, hormone balance, postpartum)
- **Card Hover:** Lift and shadow effect
- **Lightbox Modal:** Click to view full case study

**Interactive Elements:**
- Image placeholders: 400x500px portrait orientation
- Stat counters animate on scroll into view
- "Read Full Story" expands modal
- Carousel for multiple client images

**Card Structure:**
- Client image placeholder
- Name, age, profession
- Goal statement
- Key results (bullet points)
- Testimonial quote
- Timeline badge

**Components:**
```typescript
<ResultsSection>
  <FilterBar filters={['All', 'Weight Loss', 'Strength', 'Hormones', 'Postpartum']} />
  <ResultsGrid>
    <ResultCard
      clientImage={}
      name={}
      stats={}
      testimonial={}
      onClick={}
    />
  </ResultsGrid>
  <ResultModal isOpen={} onClose={} data={} />
</ResultsSection>
```

---

### 6. SERVICES OVERVIEW

**Layout:**
- Two main service cards side-by-side (desktop)
- Stacked on tablet/mobile
- Section padding: 100px vertical

**Content:**
- 1:1 Signature Coaching card
- Balanced Collective (Group) card
- Comparison table (expandable)

**Features:**
- **Service Cards:** Hover to reveal full details
- **Comparison Toggle:** "Compare Programs" button reveals table
- **Pricing Display:** Optional pricing or "Request Info"
- **CTA Buttons:** "Apply Now" or "Join Waitlist"

**Interactive Elements:**
- Flip cards for service details
- Expandable comparison table
- "What's Included" dropdown lists
- Hover animations and shadows

**Card Structure:**
- Service name
- Tagline
- Key features (5-7 bullets)
- Best for (target client)
- CTA button
- Expandable "Full Details"

**Components:**
```typescript
<ServicesSection>
  <ServiceCard
    type="1:1"
    title={}
    features={}
    bestFor={}
    cta={}
  />
  <ServiceCard
    type="group"
    title={}
    features={}
    bestFor={}
    cta={}
  />
  <ComparisonTable isVisible={} />
</ServicesSection>
```

---

### 7. CREDENTIALS & CERTIFICATIONS

**Layout:**
- Timeline or badge grid
- Section padding: 80px vertical

**Content:**
- Certifications with issuing organizations
- Years of experience
- Professional development
- Speaking engagements (if applicable)

**Features:**
- **Badge Animation:** Badges fade/scale in on scroll
- **Credential Cards:** Hover reveals issuing authority and date
- **Verification Links:** Click to verify credentials (if applicable)

**Interactive Elements:**
- Expandable credential details
- Timeline scroll animation
- Badge collection display

**Components:**
```typescript
<CredentialsSection>
  <CredentialTimeline>
    <CredentialBadge
      title={}
      issuer={}
      date={}
      verificationLink={}
    />
  </CredentialTimeline>
</CredentialsSection>
```

---

### 8. CALL TO ACTION FOOTER

**Layout:**
- Full-width section
- Centered content
- Section padding: 120px vertical
- Background: Gradient or brand color

**Content:**
- Headline: "Ready to Transform?"
- Subheading: Brief closing statement
- Primary CTA buttons
- Secondary navigation

**Features:**
- **Button Animation:** Pulsing glow effect
- **Email Capture:** Optional newsletter signup
- **Social Proof:** Final stat or testimonial snippet

**Components:**
```typescript
<CTAFooter>
  <FinalMessage />
  <CTAButtons>
    <PrimaryButton text="Book Discovery Call" />
    <SecondaryButton text="Download Free Guide" />
  </CTAButtons>
  <NewsletterSignup />
  <FooterNav />
</CTAFooter>
```

---

## GLOBAL FEATURES

### Navigation
- **Scroll Progress Bar:** Top of viewport, shows reading progress
- **Active Section Indicator:** Highlights current section in left nav
- **Smooth Scroll:** Animated scroll to sections
- **Back to Top Button:** Appears after 500px scroll

### Animations (Framer Motion)
- **Scroll Triggered:** Elements fade/slide in on scroll into view
- **Stagger Children:** Sequential animation of list items
- **Page Transitions:** Smooth transitions between states
- **Hover Effects:** Scale, shadow, color transitions

### Responsive Breakpoints
```typescript
const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
}
```

### Color Scheme

**Primary Brand Colors:**
- **Midnight Sage** `#3D5A5C` - Primary brand color, logos, headers, navigation, key messaging
- **Warm Blush** `#E8B4A8` - CTA buttons, accents, highlights, feminine touches
- **Creamy Ivory** `#F9F6F2` - Backgrounds, breathing room, clean space

**Secondary Colors:**
- **Deep Charcoal** `#2C2C2C` - Body copy, primary text, icons
- **Soft Moss** `#A8B5A0` - Subtle backgrounds, secondary elements, nature accents
- **Terracotta Clay** `#C77B65` - Energy indicators, progress bars, bold CTAs, hover states
- **Soft Slate** `#8B9693` - Secondary text, borders, dividers

**Usage Ratios:**
- 60% Neutrals (Creamy Ivory, Deep Charcoal, Soft Slate)
- 30% Midnight Sage
- 10% Warm Blush + Accents (Terracotta Clay, Soft Moss)

### Typography

**Headings & Display:**
- **Font:** Freight Display Pro (fallback: Cormorant Garamond)
- **H1:** Bold, 48-72px
- **H2:** Semibold, 36-48px
- **H3:** Medium, 24-32px

**Body Copy & UI:**
- **Font:** Circular (fallback: Inter, DM Sans)
- **Body Text:** Regular, 16-18px
- **Captions:** Regular, 14px
- **Buttons/CTAs:** Medium/Semibold, 14-16px
- **Navigation:** Medium, 14-16px

**Accents (Minimal Use - Max 5%):**
- **Font:** Script font (Amelaryas or Sacramento)
- **Usage:** Coach Paige signature, pull quotes, special headers

**Size Scale:** 12/14/16/18/24/32/36/48/64/72px

---

## COMPONENT ARCHITECTURE

### Core Components

```typescript
// Layout Components
<PortfolioLayout>
  <FixedSidebar />
  <ScrollableContent />
</PortfolioLayout>

// Sidebar Components
<Sidebar>
  <ProfileSection />
  <Navigation />
  <SocialLinks />
  <CTAButtons />
</Sidebar>

// Section Components
<Section id={} className={}>
  <SectionHeader />
  <SectionContent />
</Section>

// Interactive Components
<ExpandableCard />
<AccordionItem />
<FilterableGrid />
<Modal />
<Tooltip />
<AnimatedCounter />
```

### Utility Hooks

```typescript
useScrollProgress() // Track scroll position
useInView() // Detect element in viewport
useMediaQuery() // Responsive behavior
useLocalStorage() // Persist user preferences
```

---

## PERFORMANCE OPTIMIZATIONS

### Image Handling
- Next.js `<Image>` component for all images
- Lazy loading for below-fold images
- Responsive image sizes
- WebP format with fallbacks
- Blur placeholder during load

### Code Splitting
- Dynamic imports for modals
- Lazy load heavy components
- Route-based code splitting

### Animation Performance
- Use `transform` and `opacity` for animations
- `will-change` CSS property sparingly
- Reduce motion for accessibility preferences
- GPU-accelerated animations

---

## ACCESSIBILITY

### Requirements
- **ARIA Labels:** All interactive elements
- **Keyboard Navigation:** Full keyboard support
- **Focus Indicators:** Visible focus states
- **Alt Text:** All images and icons
- **Screen Reader:** Semantic HTML
- **Color Contrast:** WCAG AA compliance
- **Reduced Motion:** Respect prefers-reduced-motion

### Implementation
```typescript
// Example accessible button
<button
  aria-label="Book discovery call"
  onClick={handleClick}
  className="focus:ring-2 focus:ring-primary"
>
  Book Call
</button>
```

---

## INTERACTION STATES

### Button States
- Default
- Hover (scale 1.05, shadow)
- Active (scale 0.98)
- Focus (ring indicator)
- Disabled (opacity 0.5)

### Link States
- Default
- Hover (color transition, underline)
- Active (color change)
- Visited (subtle color difference)

### Card States
- Default
- Hover (lift with shadow)
- Active/Selected (border highlight)
- Loading (skeleton or spinner)

---

## MOBILE-SPECIFIC FEATURES

### Sticky Header (Mobile)
- Profile image (small) + name
- Hamburger menu icon
- Appears after scrolling past hero
- Smooth slide-down animation

### Touch Interactions
- Swipe gestures for carousels
- Pull-to-refresh consideration
- Touch-friendly button sizes (min 44x44px)
- Prevent hover states on touch devices

### Mobile Menu
- Slide-in from left
- Overlay with backdrop
- Navigation links
- Social icons
- CTAs
- Close button

---

## FORMS & MODALS

### Discovery Call Modal
- Calendly or custom scheduling embed
- Email capture
- Name, phone, preferred time
- Close button (X) and overlay click
- Smooth fade/scale animation

### Newsletter Signup
- Email input
- Privacy notice
- Success/error states
- Loading indicator

### Modal Behavior
- Lock body scroll when open
- ESC key to close
- Focus trap within modal
- Return focus on close

---

## ANALYTICS & TRACKING

### Events to Track
- CTA button clicks
- Section scroll depth
- Time on page
- Link clicks
- Form submissions
- Download clicks
- Video plays (if applicable)

### Implementation
```typescript
// Example tracking
const trackEvent = (category: string, action: string, label?: string) => {
  // Google Analytics or other
}
```

---

## SEO OPTIMIZATION

### Meta Tags
```typescript
<Head>
  <title>Coach Paige - Women's Fitness & Hormone Health Coach</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="..." />
  <meta name="twitter:card" content="summary_large_image" />
</Head>
```

### Structured Data
- Person schema
- Organization schema
- Review schema for testimonials

---

## DEPLOYMENT REQUIREMENTS

### Hosting
- Vercel (recommended for Next.js)
- Automatic deployments from Git
- Edge network for performance

### Domain
- Custom domain setup
- SSL certificate (automatic with Vercel)

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=
CALENDLY_URL=
ANALYTICS_ID=
```

---

## FILE STRUCTURE

```
/src
  /app
    layout.tsx
    page.tsx
  /components
    /layout
      Sidebar.tsx
      MobileHeader.tsx
    /sections
      Hero.tsx
      About.tsx
      Philosophy.tsx
      Method.tsx
      Results.tsx
      Services.tsx
      Credentials.tsx
      CTAFooter.tsx
    /ui
      Button.tsx
      Card.tsx
      Modal.tsx
      Accordion.tsx
      Counter.tsx
  /lib
    /animations
    /utils
  /hooks
    useScrollProgress.ts
    useInView.ts
  /types
    index.ts
  /styles
    globals.css
/public
  /images
    placeholders/
  /icons
```

---

## DESIGN TOKENS

### Spacing Scale (12-point base)
```typescript
const spacing = {
  0: '0px',
  1: '12px',
  2: '24px',
  3: '36px',
  4: '48px',
  5: '60px',
  6: '72px',
  8: '96px',
  10: '120px',
}
```

### Animation Durations
```typescript
const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
}
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

---

## DEVELOPMENT CHECKLIST

- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind CSS with custom theme
- [ ] Install Framer Motion
- [ ] Create layout structure (sidebar + content)
- [ ] Implement responsive navigation
- [ ] Build all section components
- [ ] Add image placeholders
- [ ] Implement animations
- [ ] Add interactive features (accordions, modals, filters)
- [ ] Ensure accessibility compliance
- [ ] Test mobile responsiveness
- [ ] Optimize performance
- [ ] Add analytics
- [ ] SEO optimization
- [ ] Cross-browser testing
- [ ] Deploy to production

---

## MAINTENANCE NOTES

### Content Updates
- All text content in separate data files
- Easy to update testimonials
- Modular section structure

### Future Enhancements
- Blog integration
- Video testimonials
- Podcast embed
- Calendar integration
- Client portal link
- Multi-language support

---

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Status:** Ready for Development
