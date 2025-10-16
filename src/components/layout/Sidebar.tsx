'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Mail, Linkedin, Calendar, Download } from 'lucide-react'
import { navigationItems, socialLinks, ctaButtons } from '@/data/content'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-[350px] lg:flex-col lg:overflow-y-auto lg:bg-white lg:p-8 lg:shadow-md scrollbar-custom">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-brand-blush shadow-md">
          <Image
            src="/images/placeholders/profile.jpg"
            alt="Coach Paige"
            fill
            sizes="192px"
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
        <h1 className="text-h2 font-bold text-brand-midnight">Coach Paige</h1>
        <p className="text-body text-charcoal-600">Women&apos;s Fitness Coach</p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-center text-body-sm italic text-slate"
      >
        Empowering Women Through Fitness
      </motion.p>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 flex-1"
      >
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block rounded-lg px-4 py-2 text-body transition-colors ${
                    isActive
                      ? 'bg-brand-midnight text-white'
                      : 'text-charcoal hover:bg-brand-ivory-500'
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6 flex justify-center gap-4"
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
        transition={{ duration: 0.5, delay: 0.5 }}
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
              transition={{ delay: 0.6 + 0.1 * index }}
            >
              <Icon className="h-5 w-5" />
              <span>{button.text}</span>
            </motion.a>
          )
        })}
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-6 border-t border-brand-ivory-600 pt-6 text-center"
      >
        <a
          href="mailto:hello@vioracoaching.com"
          className="group flex items-center justify-center gap-2 text-body-sm text-slate transition-colors hover:text-brand-midnight"
        >
          <Mail className="h-4 w-4" />
          <span className="group-hover:underline">hello@vioracoaching.com</span>
        </a>
      </motion.div>
    </aside>
  )
}
