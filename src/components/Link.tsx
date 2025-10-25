import { cn } from '@/utils/cn'
import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface IAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode
  href: string
  children?: ReactNode
  variant?: 'default' | 'darkGlass'
}

export function AppLink({
  icon,
  href,
  children,
  className,
  ...restProps
}: IAppLinkProps) {
  const getClassesByVariant = () => {
    if (restProps.variant === 'darkGlass')
      return 'border border-white/50 bg-black/35 text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px]'

    return 'overflow-hidden rounded-full border border-white/50 bg-white/50 px-4 py-2 text-black shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px] transition-transform duration-200 ease-in-out hover:scale-105'
  }

  return (
    <Link href={href} {...restProps}>
      <div className={cn('font-medium', getClassesByVariant(), className)}>
        {icon}
        {children}
      </div>
    </Link>
  )
}
