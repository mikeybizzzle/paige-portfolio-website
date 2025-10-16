'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroStats } from '@/data/content'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-ivory via-brand-ivory-500 to-brand-blush/20 px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 font-display text-display-md lg:text-display-lg font-bold text-brand-midnight"
        >
          Transform Your Body, <br className="hidden sm:block" />
          Reclaim Your Confidence
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-12 text-body-lg lg:text-h4 text-charcoal-700 max-w-2xl mx-auto"
        >
          Personalized fitness coaching that honors your hormones, your schedule, 
          and your unique journey as a woman.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mb-16 grid grid-cols-3 gap-4 lg:gap-16 max-w-3xl mx-auto"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2 text-display-sm font-bold text-terracotta">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <div className="text-body-sm text-charcoal-600 text-center">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-brand-midnight"
          >
            <span className="text-body-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
