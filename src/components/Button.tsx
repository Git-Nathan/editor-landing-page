import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  variant?: 'solid' | 'gradient'
}

export function Button({
  children,
  className,
  icon,
  variant = 'solid',
  ...props
}: IButtonProps) {
  const getBaseClasses = () => {
    if (variant === 'solid')
      return 'cursor-pointer rounded-lg bg-black px-3 py-2 text-white'

    return
  }

  return (
    <button className={cn(getBaseClasses(), className)} {...props}>
      {icon}
      {children}
    </button>
  )
}
