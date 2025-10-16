'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Apple, Sun, ChevronDown } from 'lucide-react'
import { methodPillars } from '@/data/content'
import { useInView } from '@/hooks/useInView'

export default function Method() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [expandedPillar, setExpandedPillar] = useState<number | null>(1)

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      Dumbbell, Apple, Sun
    }
    return icons[iconName] || Sun
  }

  return (
    <section ref={ref} id="method" className="py-20 lg:py-32 px-4 bg-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            The Viora Method
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            Three interconnected pillars that create sustainable, whole-person transformation.
          </p>
        </motion.div>

        <div className="space-y-4">
          {methodPillars.map((pillar, index) => {
            const Icon = getIcon(pillar.icon)
            const isExpanded = expandedPillar === pillar.number

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl border-2 transition-all overflow-hidden ${
                  isExpanded
                    ? 'border-terracotta shadow-lg'
                    : 'border-brand-ivory-600 hover:border-brand-midnight/30'
                }`}
              >
                <button
                  onClick={() => setExpandedPillar(isExpanded ? null : pillar.number)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                      isExpanded ? 'bg-terracotta text-white' : 'bg-brand-ivory-500 text-brand-midnight'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-body-sm font-medium text-terracotta">
                        Pillar {pillar.number}
                      </div>
                      <h3 className="text-h3 font-semibold text-brand-midnight">
                        {pillar.title}
                      </h3>
                      <p className="text-body text-charcoal-600">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-brand-midnight transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-body text-charcoal-700">
                          {pillar.expandedContent.description}
                        </p>

                        <div>
                          <h4 className="text-h4 font-semibold text-brand-midnight mb-2">
                            What You Get
                          </h4>
                          <ul className="space-y-1">
                            {pillar.expandedContent.whatYouGet.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-body text-charcoal-600">
                                <span className="text-terracotta mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-h4 font-semibold text-brand-midnight mb-2">
                            Expected Outcomes
                          </h4>
                          <ul className="space-y-1">
                            {pillar.expandedContent.expectedOutcomes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-body text-charcoal-600">
                                <span className="text-terracotta mt-1">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
