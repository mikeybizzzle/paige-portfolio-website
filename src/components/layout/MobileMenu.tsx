'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Mail, Linkedin, Calendar, Download, X } from 'lucide-react'
import { navigationItems, socialLinks, ctaButtons } from '@/data/content'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return Mail
    const icons: Record<string, React.ElementType> = {
      Instagram,
      Mail,
      Linkedin,
      Calendar,
      Download,
    }
    return icons[iconName] || Mail
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-sm lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-xl overflow-y-auto lg:hidden scrollbar-custom"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg text-brand-midnight hover:bg-brand-ivory-500 focus:outline-none focus:ring-2 focus:ring-brand-midnight"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation */}
              <nav className="mb-8">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block rounded-lg px-4 py-3 text-body text-charcoal transition-colors hover:bg-brand-ivory-500"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div className="mb-8 flex justify-center gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = getIcon(link.icon)
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ivory-500 text-brand-midnight transition-colors hover:bg-brand-blush hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + 0.05 * index }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                {ctaButtons.map((button, index) => {
                  const Icon = getIcon(button.icon)
                  const isPrimary = button.variant === 'primary'

                  return (
                    <motion.a
                      key={button.id}
                      href={button.action === 'calendly' ? button.calendlyUrl : button.downloadFile}
                      target={button.action === 'calendly' ? '_blank' : undefined}
                      rel={button.action === 'calendly' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-body font-medium transition-all ` + (isPrimary ? 'bg-brand-midnight text-white shadow-md hover:bg-brand-midnight/90' : 'border-2 border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-white')}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + 0.05 * index }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{button.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
