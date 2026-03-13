import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function HeroLanding({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  className,
  ...props
}: {
  badge?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('pt-24 pb-8', className)} {...props}>
      <Container className="flex flex-col items-center text-center">
        {badge && (
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-400 uppercase">
            <span className="size-1.5 rounded-full bg-gold-400" />
            {badge}
          </div>
        )}
        <h1 className="max-w-4xl font-display text-6xl/[1.1] font-light tracking-[-0.02em] text-white sm:text-7xl/[1.1] lg:text-8xl/[1.05]">
          {headline}
        </h1>
        <div className="mt-8 max-w-xl text-lg/8 text-zinc-400">{subheadline}</div>
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-gold-300"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-white/5"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
