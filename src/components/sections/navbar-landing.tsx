import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

export function NavbarLandingLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx('text-[15px] font-light leading-[18px] tracking-[0.01em] text-[#F2EDE6] transition hover:text-white', className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export function NavbarLanding({
  logo,
  links,
  cta,
  className,
  ...props
}: {
  logo: ReactNode
  links: ReactNode
  cta?: ReactNode
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md', className)} {...props}>
      <nav className="flex items-center justify-between px-20 py-7">
        <div className="flex items-center">{logo}</div>
        <div className="flex items-center gap-10">
          <div className="hidden items-center gap-10 md:flex">{links}</div>
          {cta}
        </div>
      </nav>
    </header>
  )
}
