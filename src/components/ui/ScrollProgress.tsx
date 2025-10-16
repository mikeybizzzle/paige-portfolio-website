'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-midnight z-50"
      style={{ scaleX: scrollProgress / 100, transformOrigin: '0%' }}
      initial={{ scaleX: 0 }}
    />
  )
}
