import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

export function FooterLanding({
  logo,
  links,
  copyright,
  className,
  ...props
}: {
  logo: ReactNode
  links: { label: string; href: string }[]
  copyright: string
} & ComponentProps<'footer'>) {
  return (
    <footer className={clsx('border-t border-zinc-800/50 py-10', className)} {...props}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-10">
        <div className="flex items-center">{logo}</div>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-zinc-500 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-600">{copyright}</p>
      </div>
    </footer>
  )
}
