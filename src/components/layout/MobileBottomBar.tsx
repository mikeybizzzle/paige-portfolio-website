'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Mail, Linkedin, Calendar, Download } from 'lucide-react'
import { socialLinks, ctaButtons } from '@/data/content'

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCTAs, setShowCTAs] = useState(false)

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      Instagram,
      Mail,
      Linkedin,
      Calendar,
      Download,
    }
    return icons[iconName] || Mail
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-brand-ivory-600 shadow-lg"
        >
          <div className="px-4 py-3">
            {/* Social Icons Row */}
            <div className="flex justify-center gap-2 mb-3">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon)
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-ivory-500 text-brand-midnight transition-colors hover:bg-brand-blush hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>

            {/* CTA Toggle Button */}
            <button
              onClick={() => setShowCTAs(!showCTAs)}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-midnight text-white px-4 py-2.5 text-body-sm font-medium transition-all hover:bg-brand-midnight/90"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Discovery Call</span>
            </button>

            {/* Expandable CTA Buttons */}
            <AnimatePresence>
              {showCTAs && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-2">
                    {ctaButtons.map((button) => {
                      const Icon = getIcon(button.icon)
                      const isPrimary = button.variant === 'primary'

                      return (
                        <a
                          key={button.id}
                          href={button.action === 'calendly' ? button.calendlyUrl : button.downloadFile}
                          target={button.action === 'calendly' ? '_blank' : undefined}
                          rel={button.action === 'calendly' ? 'noopener noreferrer' : undefined}
                          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-body-sm font-medium transition-all ${
                            isPrimary
                              ? 'bg-brand-midnight text-white hover:bg-brand-midnight/90'
                              : 'border-2 border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-white'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{button.text}</span>
                        </a>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
