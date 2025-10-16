'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function Results() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Weight Loss', 'Strength', 'Hormones', 'Postpartum']

  const mockResults = [
    {
      id: 1,
      name: 'Sarah M.',
      goal: 'Weight Loss',
      results: 'Lost 30 lbs, improved energy',
      testimonial: 'Working with Coach Paige changed my life. I finally understand my body.',
    },
    {
      id: 2,
      name: 'Jessica K.',
      goal: 'Strength',
      results: 'Gained strength, built confidence',
      testimonial: 'The hormone-aware programming made all the difference for me.',
    },
    {
      id: 3,
      name: 'Amanda R.',
      goal: 'Postpartum',
      results: 'Recovered strength after pregnancy',
      testimonial: 'Paige helped me safely rebuild strength after having my baby.',
    },
  ]

  // Filter results based on activeFilter
  const getFilteredResults = () => {
    if (activeFilter === 'All') {
      return mockResults
    }
    return mockResults.filter((result) => result.goal === activeFilter)
  }

  const filteredResults = getFilteredResults()

  return (
    <section ref={ref} id="results" className="py-20 lg:py-32 px-4 bg-brand-ivory">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            Client Transformations
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            Real women, real results, real sustainable transformation.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-body font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-brand-midnight text-white shadow-md'
                  : 'bg-white text-brand-midnight hover:bg-brand-ivory-500'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border border-brand-ivory-600"
            >
              <div className="mb-4">
                <div className="relative h-48 rounded-lg overflow-hidden bg-brand-ivory-500">
                  <Image
                    src={`/images/placeholders/client-${result.id}.png`}
                    alt={result.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-h4 font-semibold text-brand-midnight mb-1">{result.name}</h3>
              <div className="text-body-sm font-medium text-terracotta mb-2">{result.goal}</div>
              <p className="text-body text-charcoal-600 mb-3">{result.results}</p>
              <blockquote className="italic text-body-sm text-charcoal-600 border-l-4 border-brand-blush pl-3">
                {result.testimonial}
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
