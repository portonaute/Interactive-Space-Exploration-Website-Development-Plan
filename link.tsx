'use client'

import NextLink from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => {
    return (
      <NextLink 
        href={href} 
        ref={ref} 
        className={className}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

export default Link
