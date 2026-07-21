import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  as?: 'button'
  to?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link'
  to: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary:
    'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow-emerald-200/50',
  secondary:
    'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200',
  outline:
    'border border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600',
  ghost: 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${variants[variant]} ${sizes[size]} ${className}`

  if (props.as === 'link') {
    const { as: _, ...rest } = props as ButtonAsLink
    return (
      <Link to={rest.to} className={base}>
        {children}
      </Link>
    )
  }

  const { as: _, ...buttonProps } = props as ButtonAsButton
  return (
    <button type="button" className={base} {...buttonProps}>
      {children}
    </button>
  )
}
