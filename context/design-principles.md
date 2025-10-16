# S-Tier Portfolio Website Design Checklist (Coach Paige)

## I. Core Design Philosophy & Strategy

*   [ ] **Authenticity First:** Every design element should reflect Coach Paige's genuine personality, journey, and coaching philosophy.
*   [ ] **Emotional Connection:** Create an inviting, warm atmosphere that makes visitors feel understood and supported.
*   [ ] **Professional Excellence:** Balance approachability with high-end, polished design that conveys expertise and credibility.
*   [ ] **Story-Driven:** Guide visitors through Paige's transformative journey and her clients' successes narratively.
*   [ ] **Conversion Focused:** Design clear pathways to booking discovery calls and downloading resources without feeling pushy.
*   [ ] **Performance Obsessed:** Lightning-fast load times, smooth animations, instant interactions—no janky scrolling or delays.
*   [ ] **Mobile Experience:** Treat mobile as equally important as desktop, not an afterthought.
*   [ ] **Accessibility (WCAG AA):** Inclusive design for all users, including keyboard navigation, screen readers, and sufficient contrast.

## II. Design System Foundation (Tokens & Core Components)

### Color Palette

*   [ ] **Primary Brand Color:**
    *   [ ] Define main brand color (vibrant, energetic—suggests strength and vitality)
    *   [ ] Create tints (lighter variations) and shades (darker variations) for hover/active states
    *   [ ] Ensure brand color passes WCAG AA on white and dark backgrounds
*   [ ] **Neutrals Scale:**
    *   [ ] White: #FFFFFF (pure white for backgrounds)
    *   [ ] Gray 50: Very light gray (subtle backgrounds, dividers)
    *   [ ] Gray 100: Light gray (hover states, disabled elements)
    *   [ ] Gray 300: Mid-light gray (borders, placeholders)
    *   [ ] Gray 500: Mid gray (secondary text, icons)
    *   [ ] Gray 700: Dark gray (body text)
    *   [ ] Gray 900: Near black (headings, emphasis)
    *   [ ] Black: #000000 (pure black for maximum contrast)
*   [ ] **Semantic Colors:**
    *   [ ] Success: Emerald/Green (#10B981 or similar)
    *   [ ] Warning: Amber/Yellow (#F59E0B or similar)
    *   [ ] Error: Red (#EF4444 or similar)
    *   [ ] Info: Blue (#3B82F6 or similar)
*   [ ] **Accent/Secondary:**
    *   [ ] Define warm accent color (supports brand, creates energy)
    *   [ ] Used sparingly for highlights, badges, special elements
*   [ ] **Background Variations:**
    *   [ ] Primary background: Pure white or very light warm gray
    *   [ ] Secondary background: Subtle off-white or light gray (for section contrast)
    *   [ ] Card background: White with subtle shadow
*   [ ] **Dark Mode Ready:** (Optional for Phase 2)
    *   [ ] Define dark background colors
    *   [ ] Adjust text colors for dark backgrounds
    *   [ ] Ensure all semantic colors work in dark mode

### Typography Scale

*   [ ] **Font Selection:**
    *   [ ] **Primary Typeface:** Modern, clean sans-serif (Inter, Manrope, or Poppins recommended)
    *   [ ] **Display Font:** (Optional) Slightly more personality for large headings
    *   [ ] **Fallback Stack:** Include system-ui fallbacks for performance
*   [ ] **Type Scale (Desktop):**
    *   [ ] Display XL: 64px (Hero statement, rare use)
    *   [ ] Display L: 48px (Main page titles)
    *   [ ] H1: 40px (Section titles, bold)
    *   [ ] H2: 32px (Subsection titles, semibold)
    *   [ ] H3: 24px (Card titles, component headers)
    *   [ ] H4: 20px (Small section headers)
    *   [ ] Body Large: 18px (Intros, important body text)
    *   [ ] Body Default: 16px (Standard body copy)
    *   [ ] Body Small: 14px (Captions, meta info, timestamps)
    *   [ ] Caption: 12px (Fine print, labels)
*   [ ] **Type Scale (Mobile):**
    *   [ ] Reduce by 10-20% for smaller screens
    *   [ ] Display XL: 40px
    *   [ ] Display L: 36px
    *   [ ] H1: 32px
    *   [ ] H2: 28px
    *   [ ] H3: 22px
    *   [ ] Body remains 16px (don't go below 16px for readability)
*   [ ] **Font Weights:**
    *   [ ] Light: 300 (sparingly, for large display text)
    *   [ ] Regular: 400 (body text default)
    *   [ ] Medium: 500 (emphasis, buttons)
    *   [ ] Semibold: 600 (subheadings, important UI elements)
    *   [ ] Bold: 700 (headings, strong emphasis)
*   [ ] **Line Heights:**
    *   [ ] Headings: 1.2-1.3 (tighter for impact)
    *   [ ] Body Text: 1.6-1.7 (generous for readability)
    *   [ ] UI Elements: 1.4-1.5 (buttons, labels)
*   [ ] **Letter Spacing:**
    *   [ ] Headings: -0.02em to -0.01em (slight tightening)
    *   [ ] Body: Default/0
    *   [ ] All Caps Text: +0.05em to +0.1em (increase for readability)

### Spacing System

*   [ ] **Base Unit: 4px** (all spacing is multiple of 4)
*   [ ] **Spacing Scale:**
    *   [ ] xs: 4px (tight spacing, inline elements)
    *   [ ] sm: 8px (small gaps, compact lists)
    *   [ ] md: 12px (default element spacing)
    *   [ ] base: 16px (comfortable spacing, paragraph gaps)
    *   [ ] lg: 24px (section element spacing)
    *   [ ] xl: 32px (between major elements)
    *   [ ] 2xl: 48px (between subsections)
    *   [ ] 3xl: 64px (between major sections on desktop)
    *   [ ] 4xl: 80px (large section padding)
    *   [ ] 5xl: 96px (hero section padding)
    *   [ ] 6xl: 120px (maximum section padding)
*   [ ] **Mobile Spacing Adjustment:**
    *   [ ] Reduce section padding by 30-40% on mobile
    *   [ ] Maintain comfortable breathing room without excess

### Border Radii

*   [ ] **Radius Scale:**
    *   [ ] none: 0px (rare, specific design needs)
    *   [ ] sm: 4px (small elements, badges)
    *   [ ] base: 6px (buttons, inputs)
    *   [ ] md: 8px (cards, small containers)
    *   [ ] lg: 12px (large cards, modals)
    *   [ ] xl: 16px (feature sections, hero elements)
    *   [ ] 2xl: 24px (special design elements)
    *   [ ] full: 9999px (circular elements, pills)

### Shadows

*   [ ] **Shadow Scale:**
    *   [ ] xs: 0 1px 2px rgba(0,0,0,0.05) (subtle depth)
    *   [ ] sm: 0 2px 4px rgba(0,0,0,0.06) (default cards)
    *   [ ] base: 0 4px 6px rgba(0,0,0,0.07) (lifted cards)
    *   [ ] md: 0 8px 16px rgba(0,0,0,0.08) (prominent cards, hover states)
    *   [ ] lg: 0 16px 32px rgba(0,0,0,0.1) (modals, overlays)
    *   [ ] xl: 0 24px 48px rgba(0,0,0,0.12) (maximum elevation)
    *   [ ] colored: Use brand color at 20% opacity for special accents

### Core UI Components

*   [ ] **Buttons:**
    *   [ ] Primary: Solid brand color, white text, shadow on hover
    *   [ ] Secondary: White/light background, brand color text, border
    *   [ ] Tertiary/Ghost: Transparent, brand color text, no border
    *   [ ] Destructive: Red/error color for critical actions
    *   [ ] Sizes: sm (32px height), md (40px), lg (48px)
    *   [ ] States: default, hover (lift + darken), active (press down), focus (ring), disabled (opacity 0.5)
    *   [ ] Icon Support: Left icon, right icon, icon-only variants
*   [ ] **Input Fields:**
    *   [ ] Height: 48px (comfortable touch target)
    *   [ ] Padding: 12px horizontal
    *   [ ] Border: 1px solid gray-300, focused: brand color
    *   [ ] Clear labels above field
    *   [ ] Placeholder text in gray-400
    *   [ ] Helper text below in small font
    *   [ ] Error state: red border, red helper text with icon
    *   [ ] Success state: green border (optional)
*   [ ] **Cards:**
    *   [ ] White background
    *   [ ] Border: 1px solid gray-200 or shadow-sm
    *   [ ] Padding: 24px (desktop), 16px (mobile)
    *   [ ] Hover: Lift with increased shadow (for clickable cards)
    *   [ ] Border radius: md (8px)
*   [ ] **Badges/Tags:**
    *   [ ] Small, rounded-full or rounded-md
    *   [ ] Semantic colors: success, warning, info
    *   [ ] Font size: 12-14px, medium weight
    *   [ ] Padding: 4px 12px
*   [ ] **Avatars:**
    *   [ ] Circular (rounded-full)
    *   [ ] Sizes: sm (32px), md (48px), lg (64px), xl (120px), 2xl (200px)
    *   [ ] Border: 2px white border on dark backgrounds
    *   [ ] Fallback: Initials with gradient background
*   [ ] **Icons:**
    *   [ ] Icon Set: Lucide React (modern, clean, comprehensive)
    *   [ ] Sizes: 16px, 20px, 24px, 32px
    *   [ ] Stroke width: 2px (medium weight)
    *   [ ] Color: Inherit from parent or specific semantic color
*   [ ] **Modals/Dialogs:**
    *   [ ] Centered on screen
    *   [ ] Max-width: 500px (small), 700px (medium), 900px (large)
    *   [ ] Backdrop: rgba(0,0,0,0.5) blur
    *   [ ] Shadow: xl
    *   [ ] Border radius: lg
    *   [ ] Padding: 32px
    *   [ ] Close button: top-right corner
    *   [ ] Animation: Fade in backdrop, scale + fade content (300ms)
*   [ ] **Tooltips:**
    *   [ ] Dark background (gray-900), white text
    *   [ ] Small text (14px)
    *   [ ] Padding: 8px 12px
    *   [ ] Border radius: sm
    *   [ ] Arrow pointing to trigger element
    *   [ ] Appear on hover after 200ms delay
*   [ ] **Progress Indicators:**
    *   [ ] Spinner: Animated circular, brand color
    *   [ ] Progress Bar: Brand color fill, gray background, rounded
    *   [ ] Skeleton Loaders: Subtle gray gradient animation for content blocks
*   [ ] **Accordions:**
    *   [ ] Clear expand/collapse icons (chevron down/up)
    *   [ ] Smooth height transition (300-400ms)
    *   [ ] Subtle background change when expanded
    *   [ ] Border between items

## III. Layout, Visual Hierarchy & Structure

### Desktop Layout (≥1024px)

*   [ ] **Fixed Left Sidebar (25% width):**
    *   [ ] Width: 300-350px (not percentage for better control)
    *   [ ] Position: fixed, height: 100vh
    *   [ ] Padding: 32px
    *   [ ] Sticky: Stays in place during scroll
    *   [ ] Z-index: Ensure proper layering
*   [ ] **Scrollable Right Content (75% width):**
    *   [ ] Margin-left: 300-350px (matches sidebar width)
    *   [ ] Max-width: 1200px (prevents content from being too wide)
    *   [ ] Padding: 48px on sides, 64px top/bottom
    *   [ ] Background: Primary background color
*   [ ] **Grid System:**
    *   [ ] Use 12-column grid for flexible layouts
    *   [ ] Gap: 24px (can adjust per section)
    *   [ ] Container max-width: 1440px total (sidebar + content)

### Tablet Layout (768px - 1023px)

*   [ ] **Fixed Left Sidebar (30% width):**
    *   [ ] Width: 240-280px
    *   [ ] Padding: 24px
    *   [ ] Smaller profile image
*   [ ] **Scrollable Right Content (70% width):**
    *   [ ] Adjusted margin-left
    *   [ ] Padding: 32px sides, 48px top/bottom
*   [ ] **Grid System:**
    *   [ ] Use 8-column grid
    *   [ ] Gap: 16px

### Mobile Layout (<768px)

*   [ ] **Full-Width Single Column:**
    *   [ ] No fixed sidebar
    *   [ ] Profile section at top (above fold)
    *   [ ] Padding: 16px sides, 24px top/bottom
*   [ ] **Sticky Mobile Header:**
    *   [ ] Appears after scrolling past hero
    *   [ ] Height: 64px
    *   [ ] Contains: Small profile image (48px), name, hamburger menu
    *   [ ] Background: White with shadow or blur
    *   [ ] Z-index: 50 (above content)
*   [ ] **Mobile Navigation Menu:**
    *   [ ] Slide-in drawer from left
    *   [ ] Width: 280px
    *   [ ] Backdrop: Dark overlay (rgba(0,0,0,0.5))
    *   [ ] Animation: Slide + fade (300ms)
    *   [ ] Contains: Nav links, social icons, CTAs
*   [ ] **Grid System:**
    *   [ ] Use 4-column grid
    *   [ ] Gap: 12px
*   [ ] **Mobile Optimization:**
    *   [ ] Touch targets: Minimum 44x44px
    *   [ ] Font size: Maintain 16px minimum for body text
    *   [ ] Spacing: Reduce but maintain breathing room
    *   [ ] Images: Optimize for smaller screens, lazy load

### Visual Hierarchy Principles

*   [ ] **Strategic Use of Size:**
    *   [ ] Largest elements: Hero headlines, section titles
    *   [ ] Medium elements: Subheadings, important copy
    *   [ ] Small elements: Body text, captions, metadata
*   [ ] **Weight & Contrast:**
    *   [ ] Bold weight for headings and emphasis
    *   [ ] Regular weight for body text
    *   [ ] Color contrast: Dark text on light background (primary), gray for secondary info
*   [ ] **Spacing & Grouping:**
    *   [ ] Related elements closer together
    *   [ ] Generous space between unrelated sections
    *   [ ] Use white space to create focus and clarity
*   [ ] **Visual Flow:**
    *   [ ] F-pattern or Z-pattern for content scanning
    *   [ ] Eye flow from hero → about → method → results → CTA
    *   [ ] Strategic use of imagery to guide attention
*   [ ] **Consistent Alignment:**
    *   [ ] Left-align body text for readability
    *   [ ] Center-align hero sections and major headlines (sparingly)
    *   [ ] Maintain consistent margins and padding

## IV. Animation & Interaction Design

### Animation Principles

*   [ ] **Purpose-Driven:** Every animation should serve a purpose (feedback, guidance, delight)
*   [ ] **Performance First:** Use transform and opacity only (GPU-accelerated)
*   [ ] **Subtle & Quick:** Animations should be felt, not watched (150-300ms typical)
*   [ ] **Consistent Easing:** Use standard easing functions
    *   [ ] ease-in-out: Default for most animations
    *   [ ] ease-out: Entrances, user-triggered actions
    *   [ ] ease-in: Exits, dismissals
    *   [ ] spring: Playful elements (use sparingly)
*   [ ] **Respect Accessibility:** Honor prefers-reduced-motion, disable decorative animations

### Scroll-Based Animations (Framer Motion)

*   [ ] **Fade In:**
    *   [ ] Elements fade in (opacity: 0 → 1) as they enter viewport
    *   [ ] Duration: 400ms
    *   [ ] Trigger: When element is 20% visible
*   [ ] **Slide Up:**
    *   [ ] Elements slide up (y: 20px → 0) + fade in
    *   [ ] Duration: 500ms
    *   [ ] Common for section headings, cards
*   [ ] **Stagger Children:**
    *   [ ] Parent container reveals children sequentially
    *   [ ] Stagger delay: 50-100ms between items
    *   [ ] Use for lists, grids, navigation items
*   [ ] **Scale In:**
    *   [ ] Elements scale from 0.95 → 1 + fade in
    *   [ ] Duration: 400ms
    *   [ ] Use for cards, images, important elements
*   [ ] **Reveal Text:**
    *   [ ] Characters or words appear sequentially
    *   [ ] Duration: 50ms per character (for headlines)
    *   [ ] Use sparingly for hero text

### Interaction Animations

*   [ ] **Button Hover:**
    *   [ ] Lift: translateY(-2px)
    *   [ ] Shadow: Increase depth
    *   [ ] Color: Darken by 10%
    *   [ ] Duration: 200ms
*   [ ] **Button Click:**
    *   [ ] Scale: 0.98
    *   [ ] Duration: 100ms
    *   [ ] Return to normal: 200ms
*   [ ] **Card Hover:**
    *   [ ] Lift: translateY(-4px)
    *   [ ] Shadow: Increase from sm to md
    *   [ ] Duration: 300ms
    *   [ ] Border: Subtle color shift (optional)
*   [ ] **Link Hover:**
    *   [ ] Underline: Slide in from left (scaleX: 0 → 1)
    *   [ ] Color: Brand color
    *   [ ] Duration: 250ms
*   [ ] **Icon Animation:**
    *   [ ] Rotate: Social icons rotate 360° on hover
    *   [ ] Bounce: CTA icons subtle bounce
    *   [ ] Duration: 300-400ms
*   [ ] **Modal Open/Close:**
    *   [ ] Backdrop: Fade in (opacity: 0 → 1)
    *   [ ] Content: Scale + fade (scale: 0.95 → 1, opacity: 0 → 1)
    *   [ ] Duration: 300ms
    *   [ ] Lock body scroll when open
*   [ ] **Accordion Expand:**
    *   [ ] Height: Auto-animate (Framer Motion `AnimatePresence`)
    *   [ ] Icon rotation: 0° → 180°
    *   [ ] Duration: 400ms
    *   [ ] Ease: ease-in-out
*   [ ] **Mobile Menu:**
    *   [ ] Slide in: translateX(-100% → 0)
    *   [ ] Backdrop fade: opacity: 0 → 1
    *   [ ] Duration: 300ms
    *   [ ] Menu items: Stagger slide + fade

### Loading States

*   [ ] **Page Load:**
    *   [ ] Skeleton screens for major content blocks
    *   [ ] Gradient animation (shimmer effect)
    *   [ ] Duration: Until content ready
*   [ ] **Image Loading:**
    *   [ ] Blur placeholder (Next.js `blurDataURL`)
    *   [ ] Fade in actual image when loaded
    *   [ ] Duration: 400ms fade
*   [ ] **Form Submission:**
    *   [ ] Button: Show spinner, disable button
    *   [ ] Text: "Submitting..." or progress indicator
    *   [ ] Success: Green checkmark animation
    *   [ ] Error: Shake animation + red highlight

### Scroll Progress Indicator

*   [ ] **Top Bar:**
    *   [ ] Fixed to top of viewport
    *   [ ] Height: 3-4px
    *   [ ] Color: Brand color
    *   [ ] Width: 0% → 100% based on scroll position
    *   [ ] Z-index: Above all content

### Navigation Active State

*   [ ] **Sidebar Navigation:**
    *   [ ] Detect current section in viewport (Intersection Observer)
    *   [ ] Highlight corresponding nav item
    *   [ ] Visual: Background color change, border-left accent, or dot indicator
    *   [ ] Smooth transition: 200ms

### Back to Top Button

*   [ ] **Appearance:**
    *   [ ] Fixed: bottom-right corner
    *   [ ] Offset: 24px from edges
    *   [ ] Size: 48x48px circle
    *   [ ] Icon: Up arrow
    *   [ ] Background: Brand color or white with shadow
*   [ ] **Behavior:**
    *   [ ] Fade in when scrolled past 500px
    *   [ ] Smooth scroll to top on click
    *   [ ] Duration: 800ms
    *   [ ] Easing: ease-in-out

## V. Section-Specific Design Guidelines

### Hero Statement Section

*   [ ] **Visual Treatment:**
    *   [ ] Large, bold headline (Display L or XL)
    *   [ ] Subheading with breathing room
    *   [ ] Gradient background or subtle pattern (optional)
    *   [ ] Padding: 120px vertical (desktop), 80px (mobile)
*   [ ] **Animated Elements:**
    *   [ ] Headline: Fade in + slide up (500ms)
    *   [ ] Subheading: Fade in delay 200ms
    *   [ ] Stats: Count-up animation on load
    *   [ ] Scroll indicator: Bounce animation
*   [ ] **Stats Display:**
    *   [ ] Horizontal row of 3-4 stats
    *   [ ] Large number (36-48px), small label (14px)
    *   [ ] Icons for visual interest
    *   [ ] Dividers between stats

### About Me Section

*   [ ] **Two-Column Layout:**
    *   [ ] Left: Text content (60%)
    *   [ ] Right: Image or timeline (40%)
    *   [ ] Stack on mobile
*   [ ] **Timeline Component:**
    *   [ ] Vertical line connecting events
    *   [ ] Dots/circles for milestones
    *   [ ] Expandable details on click
    *   [ ] Animation: Dots appear sequentially on scroll
*   [ ] **Image Gallery:**
    *   [ ] Grid or slider
    *   [ ] Hover: Slight zoom (scale: 1.05)
    *   [ ] Click: Open lightbox modal
    *   [ ] Lazy load images

### Philosophy Section

*   [ ] **Card Grid:**
    *   [ ] 3 columns (desktop), 2 (tablet), 1 (mobile)
    *   [ ] Gap: 24px
    *   [ ] Card hover: Lift effect
*   [ ] **Card Flip Animation:**
    *   [ ] Front: Icon + title + short description
    *   [ ] Back: Detailed explanation
    *   [ ] Flip on hover (desktop) or click (touch)
    *   [ ] Rotation: rotateY(0deg → 180deg)
    *   [ ] Duration: 600ms
    *   [ ] Preserve 3D: transform-style: preserve-3d

### Viora Method (Accordion)

*   [ ] **Vertical Accordion:**
    *   [ ] One pillar open by default
    *   [ ] Auto-close others when one opens
    *   [ ] Clear expand/collapse indicator
*   [ ] **Visual Connection:**
    *   [ ] Vertical line connecting pillar icons
    *   [ ] Line animates/fills as pillars are revealed
    *   [ ] Use SVG for custom animations
*   [ ] **Expanded State:**
    *   [ ] Icon size increase
    *   [ ] Background color change (subtle)
    *   [ ] Content: Fade in + slide down
    *   [ ] Embedded media: Lazy load

### Client Results Section

*   [ ] **Filterable Grid:**
    *   [ ] Filter buttons above grid
    *   [ ] Active filter: Solid background, others ghost
    *   [ ] Masonry or equal-height grid
    *   [ ] Smooth re-layout on filter change
*   [ ] **Result Card:**
    *   [ ] Image placeholder: 400x500px portrait
    *   [ ] Overlay gradient on image bottom
    *   [ ] Text over gradient: Name, role, goal
    *   [ ] Hover: Image zoom (scale: 1.1), lift card
    *   [ ] Click: Open modal with full case study
*   [ ] **Modal Content:**
    *   [ ] Large client image at top
    *   [ ] Detailed stats with icons
    *   [ ] Full testimonial quote
    *   [ ] Before/after metrics
    *   [ ] Timeline of transformation
    *   [ ] Close button and ESC key support

### Services Section

*   [ ] **Side-by-Side Cards:**
    *   [ ] Equal height
    *   [ ] Clear visual distinction (border, shadow)
    *   [ ] Hover: Subtle lift
*   [ ] **Comparison Table:**
    *   [ ] Hidden by default
    *   [ ] Toggle button: "Compare Programs"
    *   [ ] Slide down animation (height: 0 → auto)
    *   [ ] Clear column headers
    *   [ ] Checkmarks for features
    *   [ ] Highlight differences

### Credentials Section

*   [ ] **Badge Grid:**
    *   [ ] Circular or shield-shaped badges
    *   [ ] 4 columns (desktop), 3 (tablet), 2 (mobile)
    *   [ ] Hover: Scale + shadow
*   [ ] **Timeline Variant:**
    *   [ ] Horizontal timeline (desktop)
    *   [ ] Vertical timeline (mobile)
    *   [ ] Year markers
    *   [ ] Icons for credential types

### CTA Footer Section

*   [ ] **Full-Width Impact:**
    *   [ ] Gradient or solid brand color background
    *   [ ] High contrast text (white on brand)
    *   [ ] Centered content, max-width 700px
    *   [ ] Large padding: 120px vertical
*   [ ] **Button Treatment:**
    *   [ ] Primary CTA: Large (56px height), prominent
    *   [ ] Secondary CTA: Ghost style, less emphasis
    *   [ ] Space between buttons: 16px
*   [ ] **Animation:**
    *   [ ] Buttons: Subtle pulse/glow effect
    *   [ ] Headline: Fade in on scroll
    *   [ ] Background: Subtle gradient shift animation (optional)

## VI. Responsive Design Considerations

### Breakpoint Strategy

*   [ ] **Mobile First:**
    *   [ ] Design for mobile (320px+) first
    *   [ ] Enhance for larger screens
*   [ ] **Breakpoints:**
    *   [ ] xs: 0px (mobile portrait)
    *   [ ] sm: 640px (mobile landscape)
    *   [ ] md: 768px (tablet)
    *   [ ] lg: 1024px (desktop)
    *   [ ] xl: 1280px (large desktop)
    *   [ ] 2xl: 1536px (extra large)

### Mobile-Specific Optimizations

*   [ ] **Touch Interactions:**
    *   [ ] Minimum touch target: 44x44px
    *   [ ] No hover states (use focus or active)
    *   [ ] Tap highlight: Remove default (-webkit-tap-highlight-color: transparent)
    *   [ ] Add custom active states for feedback
*   [ ] **Navigation:**
    *   [ ] Sticky header after scroll
    *   [ ] Hamburger menu for navigation
    *   [ ] Full-screen menu overlay
    *   [ ] Large touch targets in menu
*   [ ] **Typography:**
    *   [ ] Maintain 16px minimum for body (prevents zoom on iOS)
    *   [ ] Reduce heading sizes but maintain hierarchy
    *   [ ] Adjust line-height for smaller screens
*   [ ] **Images:**
    *   [ ] Serve appropriate sizes (srcset, Next.js Image)
    *   [ ] Lazy load below-fold images
    *   [ ] Optimize for mobile bandwidth
*   [ ] **Forms:**
    *   [ ] Large input fields (48px height)
    *   [ ] Appropriate input types (email, tel, etc.)
    *   [ ] Auto-focus considerations
    *   [ ] Submit button at bottom, easy to tap
*   [ ] **Spacing:**
    *   [ ] Reduce padding/margin by 30-40%
    *   [ ] Maintain minimum 16px side margins
    *   [ ] Comfortable spacing between elements

### Tablet Considerations

*   [ ] **Layout:**
    *   [ ] Hybrid approach: Smaller sidebar or stacked content
    *   [ ] 2-column grids instead of 3
    *   [ ] Maintain comfortable reading width
*   [ ] **Touch + Mouse:**
    *   [ ] Support both input methods
    *   [ ] Hover states still useful
    *   [ ] Touch targets still important

## VII. Performance & Optimization

### Image Optimization

*   [ ] **Next.js Image Component:**
    *   [ ] Use `next/image` for all images
    *   [ ] Set explicit width and height
    *   [ ] Use `priority` for above-fold images
    *   [ ] Lazy load by default for below-fold
*   [ ] **Format Selection:**
    *   [ ] Use WebP with fallbacks
    *   [ ] Consider AVIF for modern browsers
    *   [ ] Optimize PNG/JPG as fallbacks
*   [ ] **Responsive Images:**
    *   [ ] Provide multiple sizes (srcset)
    *   [ ] Let Next.js Image handle automatically
    *   [ ] Serve appropriate size per viewport
*   [ ] **Blur Placeholders:**
    *   [ ] Generate blur data URLs
    *   [ ] Display while image loads
    *   [ ] Smooth transition to actual image

### Font Loading

*   [ ] **Strategy:**
    *   [ ] Use `next/font` for optimized loading
    *   [ ] Subset fonts to required characters
    *   [ ] Preload critical fonts
    *   [ ] Use font-display: swap
*   [ ] **Variable Fonts:**
    *   [ ] Consider variable fonts to reduce file count
    *   [ ] Single file for multiple weights

### Code Splitting

*   [ ] **Dynamic Imports:**
    *   [ ] Lazy load modals, lightboxes
    *   [ ] Defer non-critical components
    *   [ ] Use React.lazy() and Suspense
*   [ ] **Route-Based Splitting:**
    *   [ ] Next.js handles automatically
    *   [ ] Ensure each section/page is optimized

### Animation Performance

*   [ ] **GPU Acceleration:**
    *   [ ] Use transform (translate, scale, rotate)
    *   [ ] Use opacity
    *   [ ] Avoid animating width, height, top, left
*   [ ] **RequestAnimationFrame:**
    *   [ ] For complex scroll-based animations
    *   [ ] Throttle scroll listeners
*   [ ] **Reduce Motion:**
    *   [ ] Detect prefers-reduced-motion
    *   [ ] Disable decorative animations
    *   [ ] Maintain functional animations (instant)

### Caching & CDN

*   [ ] **Static Assets:**
    *   [ ] Aggressive caching headers
    *   [ ] Content hash in filenames
*   [ ] **API Responses:**
    *   [ ] Cache where appropriate
    *   [ ] Use stale-while-revalidate
*   [ ] **CDN:**
    *   [ ] Vercel Edge Network by default
    *   [ ] Fast delivery worldwide

### Bundle Size

*   [ ] **Analyze Bundle:**
    *   [ ] Use @next/bundle-analyzer
    *   [ ] Identify large dependencies
    *   [ ] Replace or tree-shake where possible
*   [ ] **Tree Shaking:**
    *   [ ] Import only what's needed
    *   [ ] Use ES modules
    *   [ ] Check for unused code

## VIII. Accessibility (WCAG AA Compliance)

### Color & Contrast

*   [ ] **Text Contrast:**
    *   [ ] Minimum 4.5:1 for body text
    *   [ ] Minimum 3:1 for large text (18px+)
    *   [ ] Test all color combinations
*   [ ] **Interactive Elements:**
    *   [ ] Buttons, links pass contrast requirements
    *   [ ] Focus indicators are visible (3:1 contrast)
*   [ ] **Don't Rely on Color Alone:**
    *   [ ] Use icons, labels, patterns
    *   [ ] Error states: Icon + color + text

### Keyboard Navigation

*   [ ] **Tab Order:**
    *   [ ] Logical tab order through page
    *   [ ] No keyboard traps
    *   [ ] Skip to main content link
*   [ ] **Focus Indicators:**
    *   [ ] Visible on all interactive elements
    *   [ ] Clear outline or ring
    *   [ ] Don't remove default unless replacing
*   [ ] **Interactive Elements:**
    *   [ ] All clickable elements keyboard accessible
    *   [ ] Enter or Space triggers actions
    *   [ ] ESC closes modals

### Screen Reader Support

*   [ ] **Semantic HTML:**
    *   [ ] Use proper heading hierarchy (h1 → h6)
    *   [ ] Use semantic elements (nav, main, article, aside, footer)
    *   [ ] No empty links or buttons
*   [ ] **ARIA Labels:**
    *   [ ] Add aria-label for icon-only buttons
    *   [ ] Use aria-labelledby and aria-describedby
    *   [ ] Mark decorative images as aria-hidden
*   [ ] **Alt Text:**
    *   [ ] Descriptive alt text for content images
    *   [ ] Empty alt for decorative images
    *   [ ] Context-appropriate descriptions
*   [ ] **Form Labels:**
    *   [ ] Every input has associated label
    *   [ ] Use label element or aria-label
    *   [ ] Group related inputs (fieldset/legend)
*   [ ] **Dynamic Content:**
    *   [ ] Announce loading states (aria-live)
    *   [ ] Announce errors and successes
    *   [ ] Manage focus on navigation

### Motion & Animations

*   [ ] **Respect Preferences:**
    *   [ ] Detect prefers-reduced-motion media query
    *   [ ] Disable non-essential animations
    *   [ ] Provide instant transitions as alternative
*   [ ] **No Auto-Playing Media:**
    *   [ ] Videos don't auto-play
    *   [ ] Provide play/pause controls
*   [ ] **Avoid Flashing:**
    *   [ ] No elements flash more than 3 times per second
    *   [ ] No rapid animations

### Testing

*   [ ] **Tools:**
    *   [ ] Lighthouse accessibility audit
    *   [ ] axe DevTools
    *   [ ] WAVE browser extension
*   [ ] **Manual Testing:**
    *   [ ] Keyboard-only navigation
    *   [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
    *   [ ] Zoom to 200% (content remains usable)

## IX. Development Best Practices

### Code Organization

*   [ ] **Component Structure:**
    *   [ ] One component per file
    *   [ ] Clear, descriptive names
    *   [ ] Organize by feature or type
*   [ ] **File Naming:**
    *   [ ] PascalCase for components (Button.tsx)
    *   [ ] camelCase for utilities (formatDate.ts)
    *   [ ] kebab-case for routes (about-me/)
*   [ ] **Folder Structure:**
    ```
    /src
      /app
        page.tsx
        layout.tsx
      /components
        /layout
          Sidebar.tsx
          MobileHeader.tsx
        /sections
          Hero.tsx
          About.tsx
          ...
        /ui
          Button.tsx
          Card.tsx
          ...
      /lib
        /utils
        /animations
      /hooks
      /types
      /styles
    ```

### TypeScript

*   [ ] **Strict Mode:**
    *   [ ] Enable strict TypeScript checking
    *   [ ] No implicit any
    *   [ ] Type all props and functions
*   [ ] **Type Definitions:**
    *   [ ] Create interfaces for data structures
    *   [ ] Use types for complex objects
    *   [ ] Export reusable types
*   [ ] **Component Props:**
    ```typescript
    interface ButtonProps {
      variant: 'primary' | 'secondary' | 'ghost';
      size: 'sm' | 'md' | 'lg';
      children: React.ReactNode;
      onClick?: () => void;
      disabled?: boolean;
      icon?: React.ReactNode;
    }
    ```

### Tailwind CSS

*   [ ] **Configuration:**
    *   [ ] Extend default theme with design tokens
    *   [ ] Define custom colors, spacing, fonts
    *   [ ] Set up plugins (forms, typography)
*   [ ] **Custom Theme:**
    ```javascript
    module.exports = {
      theme: {
        extend: {
          colors: {
            brand: { /* color scale */ },
            gray: { /* gray scale */ },
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
          spacing: { /* 4px base */ },
          borderRadius: { /* custom radii */ },
        },
      },
    }
    ```
*   [ ] **Utility Organization:**
    *   [ ] Group utilities logically
    *   [ ] Use @apply sparingly (only for repeated patterns)
    *   [ ] Prefer composition over @apply

### Framer Motion

*   [ ] **Reusable Animations:**
    *   [ ] Create animation variant objects
    *   [ ] Store in /lib/animations
    *   [ ] Import and apply to components
*   [ ] **Example Variants:**
    ```typescript
    export const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    };
    
    export const staggerChildren = {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    ```
*   [ ] **Performance:**
    *   [ ] Use `layoutId` for shared element transitions
    *   [ ] Implement `AnimatePresence` for exit animations
    *   [ ] Use `useReducedMotion` hook

### Environment Variables

*   [ ] **Setup:**
    *   [ ] Create .env.local file
    *   [ ] Never commit sensitive keys
    *   [ ] Use NEXT_PUBLIC_ prefix for client-side variables
*   [ ] **Examples:**
    ```
    NEXT_PUBLIC_SITE_URL=https://coachpaige.com
    NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
    ANALYTICS_ID=...
    ```

### Git Workflow

*   [ ] **Commit Messages:**
    *   [ ] Use conventional commits
    *   [ ] Examples: feat:, fix:, style:, docs:
    *   [ ] Clear, descriptive messages
*   [ ] **Branching:**
    *   [ ] main: Production-ready code
    *   [ ] develop: Integration branch
    *   [ ] feature/*: New features
    *   [ ] fix/*: Bug fixes

## X. Testing & Quality Assurance

### Manual Testing Checklist

*   [ ] **Cross-Browser:**
    *   [ ] Chrome/Edge (Chromium)
    *   [ ] Firefox
    *   [ ] Safari (macOS/iOS)
*   [ ] **Device Testing:**
    *   [ ] Desktop (1920px, 1440px, 1024px)
    *   [ ] Tablet (768px, 1024px landscape)
    *   [ ] Mobile (375px iPhone, 390px iPhone, 414px Android)
*   [ ] **Interaction Testing:**
    *   [ ] All buttons clickable and functional
    *   [ ] All links navigate correctly
    *   [ ] Forms submit properly
    *   [ ] Modals open and close
    *   [ ] Accordions expand/collapse
    *   [ ] Filters work correctly
*   [ ] **Animation Testing:**
    *   [ ] No jank or stuttering
    *   [ ] Animations complete smoothly
    *   [ ] No layout shifts during animations
    *   [ ] Reduced motion works

### Performance Testing

*   [ ] **Lighthouse Audit:**
    *   [ ] Performance: 90+
    *   [ ] Accessibility: 100
    *   [ ] Best Practices: 100
    *   [ ] SEO: 100
*   [ ] **Core Web Vitals:**
    *   [ ] LCP (Largest Contentful Paint): <2.5s
    *   [ ] FID (First Input Delay): <100ms
    *   [ ] CLS (Cumulative Layout Shift): <0.1
*   [ ] **Load Time:**
    *   [ ] First Contentful Paint: <1.5s
    *   [ ] Time to Interactive: <3.5s

### Accessibility Testing

*   [ ] **Automated Tools:**
    *   [ ] Run axe DevTools scan
    *   [ ] Run Lighthouse accessibility audit
    *   [ ] Fix all reported issues
*   [ ] **Manual Testing:**
    *   [ ] Tab through entire page
    *   [ ] Test with screen reader
    *   [ ] Zoom to 200%
    *   [ ] Test with reduced motion

## XI. Launch Checklist

### Pre-Launch

*   [ ] **Content Review:**
    *   [ ] All text proofread
    *   [ ] All images optimized
    *   [ ] All links verified
*   [ ] **SEO Setup:**
    *   [ ] Meta titles and descriptions
    *   [ ] Open Graph tags
    *   [ ] Twitter Card tags
    *   [ ] Sitemap generated
    *   [ ] robots.txt configured
*   [ ] **Analytics:**
    *   [ ] Google Analytics installed
    *   [ ] Conversion tracking setup
    *   [ ] Event tracking configured
*   [ ] **Forms & Integrations:**
    *   [ ] Calendly embedded correctly
    *   [ ] Email capture working
    *   [ ] Contact forms tested
*   [ ] **Performance:**
    *   [ ] Images compressed
    *   [ ] Code minified
    *   [ ] Caching configured
*   [ ] **Security:**
    *   [ ] HTTPS enabled
    *   [ ] Security headers configured
    *   [ ] No exposed API keys

### Post-Launch

*   [ ] **Monitoring:**
    *   [ ] Set up uptime monitoring
    *   [ ] Monitor analytics daily
    *   [ ] Check for errors in console
*   [ ] **Feedback:**
    *   [ ] Collect user feedback
    *   [ ] Test on real devices
    *   [ ] Make iterative improvements

---

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Framework:** Next.js 14+ • TypeScript • Tailwind CSS • Framer Motion  
**Status:** Ready for Claude Code Development