// Testimonial/Client Result Type
export interface Testimonial {
    id: string
    name: string
    age: number
    profession: string
    goal: string
    results: {
      weightLoss?: string
      strengthGain?: string
      energyImprovement?: string
      hormoneBalance?: string
      other?: string[]
    }
    quote: string
    timeline: string
    category: 'weight-loss' | 'strength' | 'hormones' | 'postpartum' | 'general'
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    stats?: Array<{
      label: string
      value: string
      icon?: string
    }>
  }
  
  // Philosophy Card Type
  export interface PhilosophyCard {
    id: string
    icon: string // Lucide icon name
    title: string
    shortDescription: string
    fullDescription: string
    order: number
  }
  
  // Viora Method Pillar Type
  export interface MethodPillar {
    id: string
    number: 1 | 2 | 3
    icon: string // Lucide icon name
    title: string
    subtitle: string
    preview: string
    expandedContent: {
      description: string
      whatYouGet: string[]
      expectedOutcomes: string[]
    }
  }
  
  // Service Type
  export interface Service {
    id: string
    type: '1:1' | 'group'
    name: string
    tagline: string
    features: string[]
    bestFor: string[]
    cta: {
      text: string
      action: 'apply' | 'waitlist' | 'learn-more'
      url?: string
    }
    availability?: string
  }
  
  // Credential/Badge Type
  export interface Credential {
    id: string
    title: string
    issuer: string
    date: string
    verificationUrl?: string
    icon?: string
    category: 'certification' | 'education' | 'speaking' | 'achievement'
  }
  
  // Timeline Event Type
  export interface TimelineEvent {
    id: string
    year: string
    title: string
    description: string
    category: 'athletic' | 'struggle' | 'transformation' | 'professional'
    icon?: string
  }
  
  // Social Link Type
  export interface SocialLink {
    platform: 'instagram' | 'email' | 'linkedin' | 'facebook'
    url: string
    icon: string // Lucide icon name
    label: string
  }
  
  // Navigation Item Type
  export interface NavigationItem {
    id: string
    label: string
    href: string
    order: number
  }
  
  // CTA Button Type
  export interface CTAButton {
    id: string
    text: string
    variant: 'primary' | 'secondary' | 'ghost'
    action: 'calendly' | 'download' | 'link'
    url?: string
    calendlyUrl?: string
    downloadFile?: string
    icon?: string
  }
  
  // Stat Counter Type
  export interface StatCounter {
    id: string
    value: number
    suffix?: string
    label: string
    duration?: number // Animation duration in ms
  }
  
  // SEO Metadata Type
  export interface SEOMetadata {
    title: string
    description: string
    keywords: string[]
    ogImage: string
    ogImageAlt: string
    twitterCard: 'summary' | 'summary_large_image'
    canonicalUrl: string
  }