'use client'

import { motion } from 'framer-motion'
import { buttonPress } from '@/lib/animations/variants'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'
  > {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-midnight focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary:
      'bg-brand-blush text-white shadow-sm hover:bg-brand-blush-600 active:bg-brand-blush-700',
    secondary:
      'bg-white text-brand-midnight border-2 border-brand-midnight hover:bg-brand-midnight hover:text-white',
    ghost: 'text-brand-midnight hover:bg-brand-ivory-400',
  }

  const sizeStyles = {
    sm: 'text-sm h-8 px-4',
    md: 'text-base h-10 px-6',
    lg: 'text-lg h-12 px-8',
  }

  return (
    <motion.button
      variants={buttonPress}
      initial="rest"
      whileHover={!disabled ? 'hover' : 'rest'}
      whileTap={!disabled ? 'tap' : 'rest'}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5" />}
    </motion.button>
  )
}