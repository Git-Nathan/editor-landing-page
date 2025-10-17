import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function Button({ children, className, icon, ...props }: IButtonProps) {
  return (
    <button className={cn(className)} {...props}>
      {icon}
      {children}
    </button>
  )
}
