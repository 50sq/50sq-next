import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

export function CtaLanding({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  className,
  ...props
}: {
  headline: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-24', className)} {...props}>
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-3xl font-display text-5xl/[1.1] font-light tracking-tight text-white sm:text-6xl/[1.1]">
          {headline}
        </h2>
        {subheadline && <p className="text-base/7 text-zinc-400">{subheadline}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
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
