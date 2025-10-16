import { Variants } from 'framer-motion'

// Fade In
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// Fade In Up
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

// Fade In Down
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

// Slide In Left
export const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
}

// Slide In Right
export const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
}

// Scale In
export const scaleIn: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
}

// Stagger Container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger Item
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Card Hover
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Button Press
export const buttonPress: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
}

// Modal Backdrop
export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// Modal Content
export const modalContent: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
}

// Accordion Content
export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

// Icon Rotate
export const iconRotate: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
}

// Page Transition
export const pageTransition: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

// Navbar Scroll
export const navbarScroll: Variants = {
  top: { backgroundColor: 'rgba(249, 246, 242, 0)' },
  scrolled: {
    backgroundColor: 'rgba(249, 246, 242, 0.95)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 4px 0 rgba(61, 90, 92, 0.06)',
  },
}

// Typing Animation (for hero headline)
export const typingCursor: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Counter Animation (for stats)
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
}

// Scroll Progress Bar
export const scrollProgress: Variants = {
  initial: { scaleX: 0, transformOrigin: '0%' },
  animate: { scaleX: 1 },
}