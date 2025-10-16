'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Activity, TrendingUp, Heart, BookOpen, Sparkles, ChevronDown } from 'lucide-react'
import { philosophyCards } from '@/data/content'
import { useInView } from '@/hooks/useInView'

export default function Philosophy() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      User, Activity, TrendingUp, Heart, BookOpen, Sparkles
    }
    return icons[iconName] || Sparkles
  }

  return (
    <section ref={ref} id="philosophy" className="py-20 lg:py-32 px-4 bg-brand-ivory">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            My Philosophy
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            Six core principles that guide every program, every session, every transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {philosophyCards.map((card, index) => {
            const Icon = getIcon(card.icon)
            const isExpanded = expandedCard === card.id

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                  className="w-full text-left rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all border border-brand-ivory-600"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-terracotta/10">
                      <Icon className="h-6 w-6 text-terracotta" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h5 font-semibold text-brand-midnight mb-1">
                        {card.title}
                      </h3>
                      <p className="text-body-sm text-charcoal-600">
                        {card.shortDescription}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-charcoal-600" />
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-brand-ivory-600">
                          <p className="text-body text-charcoal-700 leading-relaxed">
                            {card.fullDescription}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
