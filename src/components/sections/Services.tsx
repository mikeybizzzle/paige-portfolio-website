'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '@/data/content'
import { useInView } from '@/hooks/useInView'

export default function Services() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            Work With Me
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            Choose the coaching experience that fits your goals and lifestyle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-xl border-2 border-brand-midnight/20 bg-white p-8 shadow-md hover:shadow-lg transition-all hover:border-brand-midnight/40"
            >
              <div className="mb-4">
                <div className="text-body-sm font-medium text-terracotta mb-1">{service.type === '1:1' ? '1:1 Coaching' : 'Group Coaching'}</div>
                <h3 className="text-h2 font-bold text-brand-midnight mb-2">{service.name}</h3>
                <p className="text-body text-charcoal-600">{service.tagline}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-h4 font-semibold text-brand-midnight mb-3">What&apos;s Included</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-body text-charcoal-600">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-h4 font-semibold text-brand-midnight mb-3">Best For</h4>
                <ul className="space-y-1">
                  {service.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-body text-charcoal-600">
                      <span className="text-terracotta">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-body-sm text-charcoal-600 mb-6 p-3 bg-brand-ivory-500 rounded-lg">
                {service.availability}
              </div>

              <a
                href={service.cta.url}
                className="block w-full rounded-lg bg-brand-midnight text-white text-center py-3 font-medium hover:bg-brand-midnight/90 transition-colors"
              >
                {service.cta.text}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
