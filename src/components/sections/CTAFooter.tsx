'use client'

import { motion } from 'framer-motion'
import { Calendar, Download } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function CTAFooter() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 bg-gradient-to-br from-brand-midnight via-brand-midnight/95 to-brand-midnight/90 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 font-display text-display-md lg:text-display-lg font-bold">
            Ready to Transform?
          </h2>
          <p className="mb-12 text-body-lg lg:text-h4 text-white/90 max-w-2xl mx-auto">
            Stop struggling alone. Get the personalized guidance and support you deserve 
            to finally achieve your fitness goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://calendly.com/coachpaige/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-brand-blush text-brand-midnight px-8 py-4 text-body font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Discovery Call</span>
          </a>
          <a
            href="/downloads/viora-client-guide.pdf"
            className="group flex items-center gap-2 rounded-lg bg-white/10 text-white border-2 border-white/30 px-8 py-4 text-body font-semibold hover:bg-white/20 hover:border-white/50 transition-all"
          >
            <Download className="h-5 w-5" />
            <span>Download Client Guide</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-body-sm text-white/70"
        >
          Join 200+ women who have transformed their bodies and their lives with Viora Coaching
        </motion.p>
      </div>
    </section>
  )
}
