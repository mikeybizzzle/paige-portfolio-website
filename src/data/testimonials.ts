import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Amanda S.',
    age: 34,
    profession: 'Marketing Executive',
    goal: 'Sustainable weight loss and increased energy',
    results: {
      weightLoss: '18 pounds',
      energyImprovement: 'Eliminated afternoon crashes',
      other: ['Built lean muscle', 'Improved sleep quality'],
    },
    quote:
      "Coach Paige's personalized approach changed everything for me. For the first time, I have a fitness routine that actually works with my body and life. I've not only reached my weight loss goals but feel stronger and more energetic than ever—without extreme diets or spending hours in the gym.",
    timeline: '6 months',
    category: 'weight-loss',
    image: {
      src: '/images/testimonials/amanda-placeholder.jpg',
      alt: 'Amanda S. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Weight Lost', value: '18 lbs', icon: 'TrendingDown' },
      { label: 'Energy Level', value: '+85%', icon: 'Zap' },
      { label: 'Timeline', value: '6 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-2',
    name: 'Jessica M.',
    age: 37,
    profession: 'Mother of Two',
    goal: 'Build strength and improve athletic performance',
    results: {
      strengthGain: '35% increase',
      energyImprovement: 'Consistent energy all day',
      other: ['Improved athletic performance', 'Better sleep'],
    },
    quote:
      "The personalized programming makes all the difference. Coach Paige tailored everything to my specific goals and body, and the results speak for themselves. I'm lifting heavier than I ever thought possible and have consistent energy to keep up with my kids.",
    timeline: '8 months',
    category: 'strength',
    image: {
      src: '/images/testimonials/jessica-placeholder.jpg',
      alt: 'Jessica M. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Strength Gain', value: '+35%', icon: 'TrendingUp' },
      { label: 'Consistency', value: '100%', icon: 'Target' },
      { label: 'Timeline', value: '8 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-3',
    name: 'Sarah K.',
    age: 41,
    profession: 'Business Owner & Mother of Three',
    goal: 'Establish consistent fitness routine despite chaos',
    results: {
      other: [
        'Consistent workout routine',
        'Reduced stress levels',
        'Increased overall strength',
        'Better work-life balance',
      ],
    },
    quote:
      "As a mom of three running a business, I thought consistent fitness was impossible. Coach Paige created a plan that actually works with my chaotic life—and the results have been incredible. My energy is better, my stress is lower, and I'm stronger than I've been in years.",
    timeline: '12 weeks',
    category: 'general',
    image: {
      src: '/images/testimonials/sarah-placeholder.jpg',
      alt: 'Sarah K. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Workout Streak', value: '90 days', icon: 'Calendar' },
      { label: 'Stress Reduction', value: '-60%', icon: 'Heart' },
      { label: 'Timeline', value: '12 weeks', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-4',
    name: 'Jamie L.',
    age: 36,
    profession: 'PCOS Warrior',
    goal: 'Manage PCOS symptoms and balance hormones',
    results: {
      hormoneBalance: 'Regulated cycles',
      other: [
        'Reduced inflammation',
        'Increased energy',
        'Built visible muscle',
        'Improved skin clarity',
      ],
    },
    quote:
      "I came to Viora after being diagnosed with PCOS, feeling betrayed by my body. Coach Paige's hormone-aware approach was exactly what I needed. She helped me understand how to work with my body instead of fighting against it. Six months in, my symptoms have improved dramatically, I've built visible muscle for the first time, and I actually look forward to my workouts. This isn't just fitness—it's healing.",
    timeline: '6+ months',
    category: 'hormones',
    image: {
      src: '/images/testimonials/jamie-placeholder.jpg',
      alt: 'Jamie L. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Cycle Regularity', value: '100%', icon: 'Activity' },
      { label: 'Symptom Reduction', value: '-70%', icon: 'TrendingDown' },
      { label: 'Timeline', value: '6 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-5',
    name: 'Taylor R.',
    age: 31,
    profession: 'Postpartum Mom',
    goal: 'Postpartum recovery and body confidence',
    results: {
      weightLoss: '22 pounds',
      other: ['Rebuilt core strength', 'Improved body confidence', 'Increased energy'],
    },
    quote:
      "This was the first fitness approach that actually felt designed for ME. Coach Paige understood the unique challenges of postpartum recovery and never made me feel like I should \"bounce back\" faster. I've lost 22 pounds and feel stronger than before having kids—both physically and mentally.",
    timeline: '9 months',
    category: 'postpartum',
    image: {
      src: '/images/testimonials/taylor-placeholder.jpg',
      alt: 'Taylor R. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Weight Lost', value: '22 lbs', icon: 'TrendingDown' },
      { label: 'Core Strength', value: '+150%', icon: 'Target' },
      { label: 'Timeline', value: '9 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-6',
    name: 'Morgan P.',
    age: 29,
    profession: 'Software Engineer',
    goal: 'Break through fitness plateau and build muscle',
    results: {
      strengthGain: '40% increase',
      other: ['Visible muscle definition', 'Better posture', 'Improved confidence'],
    },
    quote:
      "I was stuck in a plateau for over a year before working with Coach Paige. Her hormone-optimized approach and personalized programming helped me finally break through. I've gained visible muscle definition and feel more confident in my body than ever.",
    timeline: '5 months',
    category: 'strength',
    image: {
      src: '/images/testimonials/morgan-placeholder.jpg',
      alt: 'Morgan P. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Strength Gain', value: '+40%', icon: 'TrendingUp' },
      { label: 'Muscle Gain', value: '+8 lbs', icon: 'Dumbbell' },
      { label: 'Timeline', value: '5 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-7',
    name: 'Rachel D.',
    age: 43,
    profession: 'Teacher & Perimenopause Navigator',
    goal: 'Navigate perimenopause symptoms while staying fit',
    results: {
      hormoneBalance: 'Reduced hot flashes',
      other: ['Better sleep', 'Stabilized mood', 'Maintained muscle mass', 'Weight management'],
    },
    quote:
      "Perimenopause hit me like a truck—weight gain, sleep issues, mood swings. Coach Paige's understanding of hormonal changes made all the difference. She adapted my training to support my changing body, not fight against it. I feel like myself again.",
    timeline: '7 months',
    category: 'hormones',
    image: {
      src: '/images/testimonials/rachel-placeholder.jpg',
      alt: 'Rachel D. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Symptom Relief', value: '-65%', icon: 'Heart' },
      { label: 'Sleep Quality', value: '+80%', icon: 'Moon' },
      { label: 'Timeline', value: '7 months', icon: 'Clock' },
    ],
  },
  {
    id: 'testimonial-8',
    name: 'Olivia T.',
    age: 38,
    profession: 'Nurse & Night Shift Worker',
    goal: 'Fitness routine that works with irregular schedule',
    results: {
      weightLoss: '15 pounds',
      energyImprovement: 'Stable energy despite shifts',
      other: ['Established sustainable routine', 'Improved sleep despite night shifts'],
    },
    quote:
      "Working night shifts made fitness feel impossible. Coach Paige created a flexible program that adapts to my rotating schedule. I've lost weight, built strength, and finally have a routine I can actually stick to—no matter what shift I'm working.",
    timeline: '10 months',
    category: 'weight-loss',
    image: {
      src: '/images/testimonials/olivia-placeholder.jpg',
      alt: 'Olivia T. - Client Transformation',
      width: 400,
      height: 500,
    },
    stats: [
      { label: 'Weight Lost', value: '15 lbs', icon: 'TrendingDown' },
      { label: 'Consistency', value: '85%', icon: 'Target' },
      { label: 'Timeline', value: '10 months', icon: 'Clock' },
    ],
  },
]

// Filter helpers
export const getTestimonialsByCategory = (category: Testimonial['category']) => {
  return testimonials.filter((t) => t.category === category)
}

export const getFeaturedTestimonials = (count: number = 3) => {
  return testimonials.slice(0, count)
}