'use client'

import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import { credentials } from '@/data/content'
import { useInView } from '@/hooks/useInView'

export default function Credentials() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      Award,
      Trophy,
    }
    return icons[iconName] || Award
  }

  return (
    <section ref={ref} id="credentials" className="py-20 lg:py-32 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-h1 lg:text-display-sm font-bold text-brand-midnight">
            Credentials & Certifications
          </h2>
          <p className="text-body-lg text-charcoal-700 max-w-3xl mx-auto">
            Trusted expertise backed by education, certification, and real-world experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const Icon = getIcon(credential.icon)

            return (
              <motion.div
                key={credential.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-brand-ivory hover:bg-white border-2 border-brand-ivory-600 hover:border-brand-midnight/30 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 group-hover:bg-terracotta/20 transition-colors">
                  <Icon className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="text-body font-semibold text-brand-midnight mb-1">
                  {credential.title}
                </h3>
                <p className="text-body-sm text-charcoal-600 mb-1">{credential.issuer}</p>
                <p className="text-caption text-charcoal-500">{credential.date}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
