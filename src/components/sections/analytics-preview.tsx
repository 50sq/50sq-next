import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

function AnalyticsStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
      <span className="text-xs font-medium text-zinc-500 uppercase">{label}</span>
      <span className={clsx('font-display text-3xl font-light tracking-tight', color)}>{value}</span>
    </div>
  )
}

export function AnalyticsPreview({
  eyebrow,
  headline,
  subheadline,
  stats,
  className,
  ...props
}: {
  eyebrow?: string
  headline: string
  subheadline?: string
  stats: { label: string; value: string; color?: string }[]
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
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnalyticsStat key={i} label={stat.label} value={stat.value} color={stat.color || 'text-white'} />
          ))}
        </div>
      </Container>
    </section>
  )
}
