import type {
  Testimonial,
  PhilosophyCard,
  MethodPillar,
  Service,
  Credential,
  TimelineEvent,
  SocialLink,
  NavigationItem,
  CTAButton,
  StatCounter,
  SEOMetadata,
} from '@/types'

// Hero Stats
export const heroStats: StatCounter[] = [
  {
    id: 'stat-1',
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    duration: 2000,
  },
  {
    id: 'stat-2',
    value: 200,
    suffix: '+',
    label: 'Women Coached',
    duration: 2500,
  },
  {
    id: 'stat-3',
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    duration: 2000,
  },
]

// Navigation Items
export const navigationItems: NavigationItem[] = [
  { id: 'nav-1', label: 'About', href: '#about', order: 1 },
  { id: 'nav-2', label: 'Philosophy', href: '#philosophy', order: 2 },
  { id: 'nav-3', label: 'Method', href: '#method', order: 3 },
  { id: 'nav-4', label: 'Results', href: '#results', order: 4 },
  { id: 'nav-5', label: 'Services', href: '#services', order: 5 },
  { id: 'nav-6', label: 'Credentials', href: '#credentials', order: 6 },
]

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://instagram.com/coach_paige',
    icon: 'Instagram',
    label: 'Follow on Instagram',
  },
  {
    platform: 'email',
    url: 'mailto:hello@vioracoaching.com',
    icon: 'Mail',
    label: 'Email Coach Paige',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/coachpaige',
    icon: 'Linkedin',
    label: 'Connect on LinkedIn',
  },
]

// CTA Buttons
export const ctaButtons: CTAButton[] = [
  {
    id: 'cta-1',
    text: 'Book Discovery Call',
    variant: 'primary',
    action: 'calendly',
    calendlyUrl: 'https://calendly.com/coachpaige/discovery',
    icon: 'Calendar',
  },
  {
    id: 'cta-2',
    text: 'Download Client Guide',
    variant: 'secondary',
    action: 'download',
    downloadFile: '/downloads/viora-client-guide.pdf',
    icon: 'Download',
  },
]

// Timeline Events
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'timeline-1',
    year: '2015-2019',
    title: 'D1 College Track Athlete',
    description: 'Competed at collegiate level, developed discipline and performance mindset.',
    category: 'athletic',
    icon: 'Trophy',
  },
  {
    id: 'timeline-2',
    year: '2019-2023',
    title: 'The Struggle Years',
    description:
      'Experienced weight fluctuations, injuries, hormonal imbalances, and fitness plateaus.',
    category: 'struggle',
    icon: 'AlertCircle',
  },
  {
    id: 'timeline-3',
    year: '2023',
    title: 'The Breakthrough',
    description:
      'Discovered hormone-optimized training and sustainable nutrition approaches.',
    category: 'transformation',
    icon: 'Sparkles',
  },
  {
    id: 'timeline-4',
    year: '2024',
    title: 'Viora Founded',
    description: 'Launched coaching practice dedicated to empowering women through fitness.',
    category: 'professional',
    icon: 'Rocket',
  },
]

// Philosophy Cards
export const philosophyCards: PhilosophyCard[] = [
  {
    id: 'phil-1',
    icon: 'User',
    title: 'Personalization Over Prescription',
    shortDescription: 'Every woman is unique. Your program should be too.',
    fullDescription:
      'Cookie-cutter programs ignore the reality that every woman has different hormones, life circumstances, and goals. I create fully customized approaches tailored specifically to your needs.',
    order: 1,
  },
  {
    id: 'phil-2',
    icon: 'Activity',
    title: 'Hormone-Aware Training',
    shortDescription: 'Work with your cycle, not against it.',
    fullDescription:
      "Women's bodies operate on a 28-day hormonal cycle. Effective programming must account for natural fluctuations in energy, strength, and recovery needs throughout the month.",
    order: 2,
  },
  {
    id: 'phil-3',
    icon: 'TrendingUp',
    title: 'Sustainable Over Extreme',
    shortDescription: 'Build habits that last a lifetime.',
    fullDescription:
      "Quick fixes produce short-term results but can't be maintained. I focus on creating approaches you can sustain for life—not just for a 12-week challenge.",
    order: 3,
  },
  {
    id: 'phil-4',
    icon: 'Heart',
    title: 'Nourishment Over Restriction',
    shortDescription: 'Food is fuel, not the enemy.',
    fullDescription:
      'Rather than eliminating foods or following rigid meal plans, I teach you how to nourish your body in ways that support your goals, hormones, and social life.',
    order: 4,
  },
  {
    id: 'phil-5',
    icon: 'BookOpen',
    title: 'Empowerment Through Education',
    shortDescription: 'Learn to coach yourself with confidence.',
    fullDescription:
      "I don't want clients who depend on me forever. I educate women to understand their bodies, make informed decisions, and eventually coach themselves.",
    order: 5,
  },
  {
    id: 'phil-6',
    icon: 'Sparkles',
    title: 'Whole-Self Transformation',
    shortDescription: 'Transform beyond the physical.',
    fullDescription:
      'True transformation extends beyond physical changes. It encompasses mindset, confidence, energy, hormone balance, and overall life satisfaction.',
    order: 6,
  },
]

// Method Pillars
export const methodPillars: MethodPillar[] = [
  {
    id: 'pillar-1',
    number: 1,
    icon: 'Dumbbell',
    title: 'Empowered Movement',
    subtitle: 'Strength training designed for your body',
    preview:
      'Custom programs that build real strength without depleting you—workouts that energize, not exhaust.',
    expandedContent: {
      description:
        'Personalized strength training based on your fitness level, equipment access, and hormone cycle. Progressive overload strategies for building strength without burnout.',
      whatYouGet: [
        'Customized training programs',
        'Hormone-optimized programming',
        'Form coaching and video reviews',
        'Flexible scheduling (3-5 workouts/week)',
        'Progressive overload strategies',
      ],
      expectedOutcomes: [
        'Increased strength and muscle tone',
        'Higher energy levels',
        'Improved body confidence',
        'Sustainable fitness habits',
      ],
    },
  },
  {
    id: 'pillar-2',
    number: 2,
    icon: 'Apple',
    title: 'Nourishing Nutrition',
    subtitle: 'Fuel without restriction',
    preview:
      'Sustainable eating strategies that fuel your body effectively—no more restriction, guilt, or yo-yo dieting.',
    expandedContent: {
      description:
        'Flexible meal frameworks that teach HOW to eat, not what to eat. Hormone-supporting nutrition protocols to optimize balance.',
      whatYouGet: [
        'Personalized macronutrient targets',
        'Flexible meal frameworks',
        'Hormone-supporting nutrition',
        'Social life integration',
        'Metabolism education',
      ],
      expectedOutcomes: [
        'Sustainable weight loss',
        'Improved energy throughout day',
        'Better hormone balance',
        'Freedom from diet culture',
      ],
    },
  },
  {
    id: 'pillar-3',
    number: 3,
    icon: 'Sun',
    title: 'Whole-Self Wellness',
    subtitle: 'Transform mind, body, and lifestyle',
    preview:
      'Mindset coaching and lifestyle strategies that extend transformation far beyond the gym.',
    expandedContent: {
      description:
        'Comprehensive support for stress management, sleep optimization, hormone education, and mindset coaching.',
      whatYouGet: [
        'Mindset coaching',
        'Hormone health education',
        'Stress management strategies',
        'Sleep optimization guidance',
        'Lifestyle integration support',
      ],
      expectedOutcomes: [
        'Improved confidence',
        'Better stress management',
        'Enhanced sleep quality',
        'Balanced hormones',
      ],
    },
  },
]

// Services
export const services: Service[] = [
  {
    id: 'service-1',
    type: '1:1',
    name: '1:1 Signature Transformation',
    tagline: 'The most comprehensive, personalized coaching experience',
    features: [
      'Comprehensive hormone and lifestyle assessment',
      'Fully customized fitness programming',
      'Personalized nutrition guidance',
      'Weekly check-ins with adjustments',
      'Direct messaging access',
      'Mindset and habit formation coaching',
      'Progress tracking and reassessments',
    ],
    bestFor: [
      'Women with specific hormonal challenges',
      'Those who have tried multiple programs without success',
      'Clients navigating major life transitions',
      'Women seeking maximum personalization',
    ],
    cta: {
      text: 'Apply Now',
      action: 'apply',
      url: '/apply',
    },
    availability: 'Limited availability - Applications reviewed quarterly',
  },
  {
    id: 'service-2',
    type: 'group',
    name: 'The Balanced Collective',
    tagline: 'Guided transformation with community support',
    features: [
      'Foundational hormone optimization education',
      'Structured fitness programming',
      'Nutrition frameworks and guidance',
      'Bi-weekly group coaching calls',
      'Private community support',
      'Progress tracking',
      'Resource library access',
    ],
    bestFor: [
      'Women who thrive with community support',
      'Those seeking structure with flexibility',
      'Clients who learn from shared experiences',
      'Women looking for accessible coaching',
    ],
    cta: {
      text: 'Join Waitlist',
      action: 'waitlist',
      url: '/waitlist',
    },
    availability: 'Cohort-based - Opens multiple times per year',
  },
]

// Credentials
export const credentials: Credential[] = [
  {
    id: 'cred-1',
    title: 'NASM Certified Personal Trainer',
    issuer: 'National Academy of Sports Medicine',
    date: '2022',
    category: 'certification',
    icon: 'Award',
  },
  {
    id: 'cred-2',
    title: 'Functional Nutrition Coach',
    issuer: 'Functional Nutrition Alliance',
    date: '2023',
    category: 'certification',
    icon: 'Award',
  },
  {
    id: 'cred-3',
    title: "Women's Hormone Health Specialist",
    issuer: 'Institute for Integrative Nutrition',
    date: '2023',
    category: 'certification',
    icon: 'Award',
  },
  {
    id: 'cred-4',
    title: 'D1 College Track Athlete',
    issuer: 'NCAA Division 1',
    date: '2015-2019',
    category: 'achievement',
    icon: 'Trophy',
  },
]

// SEO Metadata
export const seoMetadata: SEOMetadata = {
  title: "Coach Paige - Women's Fitness & Hormone Health Coach | Viora Coaching",
  description: 'Transform your body and reclaim your confidence with personalized fitness coaching that honors your hormones. Former D1 athlete Coach Paige specializes in sustainable transformation for ambitious women.',
  keywords: [
    'womens fitness coach',
    'hormone health',
    'personal trainer',
    'sustainable weight loss',
    'strength training for women',
    'PCOS fitness',
    'postpartum fitness',
    'hormone-optimized training',
  ],
  ogImage: '/images/og-image.jpg',
  ogImageAlt: 'Coach Paige - Viora Fitness Coaching',
  twitterCard: 'summary_large_image',
  canonicalUrl: 'https://vioracoaching.com',
}

// Export all
export const siteContent = {
  heroStats,
  navigationItems,
  socialLinks,
  ctaButtons,
  timelineEvents,
  philosophyCards,
  methodPillars,
  services,
  credentials,
  seoMetadata,
}
