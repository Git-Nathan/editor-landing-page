import { cn } from '@/utils/cn'
import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface IAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode
  href: string
  children?: ReactNode
}

export function AppLink({
  icon,
  href,
  children,
  className,
  ...restProps
}: IAppLinkProps) {
  return (
    <Link className={cn(className)} href={href} {...restProps}>
      {icon}
      {children}
    </Link>
  )
}
