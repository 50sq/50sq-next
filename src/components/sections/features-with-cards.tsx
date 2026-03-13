import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6',
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm/6 text-zinc-400">{description}</p>
    </div>
  )
}

export function FeaturesWithCards({
  eyebrow,
  headline,
  subheadline,
  children,
  className,
  ...props
}: {
  eyebrow?: string
  headline: string
  subheadline?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          {eyebrow && (
            <span className="text-sm font-medium tracking-wide text-gold-400 uppercase">{eyebrow}</span>
          )}
          <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
            {headline}
          </h2>
          {subheadline && <p className="text-base/7 text-zinc-400">{subheadline}</p>}
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
      </Container>
    </section>
  )
}
