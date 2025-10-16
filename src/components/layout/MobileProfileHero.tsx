'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Mail, Linkedin, Calendar, Download } from 'lucide-react'
import { socialLinks, ctaButtons } from '@/data/content'

export default function MobileProfileHero() {
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

  return (
    <section className="lg:hidden bg-white px-4 pt-8 pb-6 border-b border-brand-ivory-600">
      <div className="mx-auto max-w-md">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-brand-blush shadow-md">
            <Image
              src="/images/placeholders/profile.jpg"
              alt="Coach Paige"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 text-center"
        >
          <h1 className="text-h3 font-bold text-brand-midnight">Coach Paige</h1>
          <p className="text-body text-charcoal-600">Women's Fitness Coach</p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-center text-body-sm italic text-slate"
        >
          Empowering Women Through Fitness
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 flex justify-center gap-3"
        >
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
                transition={{ delay: 0.1 * index }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-3"
        >
          {ctaButtons.map((button, index) => {
            const Icon = getIcon(button.icon)
            const isPrimary = button.variant === 'primary'

            return (
              <motion.a
                key={button.id}
                href={button.action === 'calendly' ? button.calendlyUrl : button.downloadFile}
                target={button.action === 'calendly' ? '_blank' : undefined}
                rel={button.action === 'calendly' ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-body font-medium transition-all ${
                  isPrimary
                    ? 'bg-brand-midnight text-white shadow-md hover:bg-brand-midnight/90 hover:shadow-lg'
                    : 'border-2 border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-white'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + 0.1 * index }}
              >
                <Icon className="h-5 w-5" />
                <span>{button.text}</span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
