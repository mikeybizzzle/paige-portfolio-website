'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block font-sans text-sm font-medium text-brand-midnight">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[120px] w-full rounded-md border border-brand-ivory-500 bg-white px-3 py-2 font-sans text-sm',
            'placeholder:text-brand-slate/50 focus:border-brand-midnight focus:outline-none focus:ring-2 focus:ring-brand-midnight focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 font-sans text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 font-sans text-sm text-brand-slate">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'