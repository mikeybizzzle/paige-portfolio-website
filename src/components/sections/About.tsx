
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Trophy, AlertCircle, Sparkles, Rocket } from 'lucide-react'
import { timelineEvents } from '@/data/content'
import { useInView } from '@/hooks/useInView'

export default function About() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      Trophy,
      AlertCircle,
      Sparkles,
      Rocket,
    }
    return icons[iconName] || Sparkles
  }

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 lg:py-32 px-4 bg-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            My Story
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            From D1 athlete to fitness coach—my journey through struggle, 
            transformation, and finding my mission to empower women.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {timelineEvents.map((event, index) => {
              const Icon = getIcon(event.icon)
              const isExpanded = expandedEvent === event.id

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative border-l-4 pl-6 pb-6 transition-colors border-brand-midnight/30`}
                >
                  <div className="absolute left-[-12px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white border-4 border-current">
                    <Icon className="h-3 w-3" />
                  </div>
                  <div className="text-body-sm font-medium text-terracotta mb-1">{event.year}</div>
                  <h3 className="text-h4 font-semibold text-brand-midnight mb-2">{event.title}</h3>
                  <p className="text-body text-charcoal-600">{event.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/placeholders/about.svg"
                alt="Coach Paige"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-body text-charcoal-700 leading-relaxed">
                I know what it is like to feel stuck in your fitness journey. After competing as a D1 track athlete, 
                I struggled with weight fluctuations, injuries, and hormonal imbalances that left me frustrated and defeated.
              </p>
              <p className="text-body text-charcoal-700 leading-relaxed">
                Everything changed when I discovered hormone-optimized training and sustainable nutrition approaches. 
                I transformed not just my body, but my entire relationship with fitness and food.
              </p>
              <p className="text-body text-charcoal-700 leading-relaxed">
                Now, I am on a mission to help ambitious women skip the years of trial and error I went through. 
                Together, we will build a sustainable approach that works with your body, not against it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
