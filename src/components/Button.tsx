import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  variant?: 'solid' | 'gradient' | 'glass' | 'darkGlass'
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

    if (variant === 'glass')
      return 'overflow-hidden rounded-full border border-white/50 bg-white/30 px-4 py-2 text-[#323232] shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px] transition-transform duration-200 ease-in-out hover:scale-105'

    if (variant === 'darkGlass')
      return 'overflow-hidden rounded-full border border-white/50 bg-black/35 px-4 py-2 text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px] transition-transform duration-200 ease-in-out hover:scale-105'

    return
  }

  return (
    <button className={cn(getBaseClasses(), className)} {...props}>
      {icon}
      {children}
    </button>
  )
}
