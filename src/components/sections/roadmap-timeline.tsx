import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function RoadmapItem({
  icon,
  title,
  description,
  status,
}: {
  icon?: ReactNode
  title: string
  description?: string
  status: 'done' | 'in-progress' | 'planned'
}) {
  return (
    <div className="relative flex gap-4 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            'flex size-8 shrink-0 items-center justify-center rounded-full border text-xs',
            status === 'done' && 'border-gold-400 bg-gold-400/10 text-gold-400',
            status === 'in-progress' && 'border-gold-400/50 bg-gold-400/5 text-gold-400',
            status === 'planned' && 'border-zinc-700 bg-zinc-900 text-zinc-500',
          )}
        >
          {icon || (status === 'done' ? '✓' : '○')}
        </div>
        <div className="mt-2 w-px flex-1 bg-zinc-800 last:hidden" />
      </div>
      <div className="flex flex-col gap-1 pt-1">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <span
            className={clsx(
              'rounded-full px-2 py-0.5 text-[10px] font-medium uppercase',
              status === 'done' && 'bg-gold-400/10 text-gold-400',
              status === 'in-progress' && 'bg-blue-500/10 text-blue-400',
              status === 'planned' && 'bg-zinc-800 text-zinc-500',
            )}
          >
            {status === 'in-progress' ? 'In Progress' : status === 'done' ? 'Shipped' : 'Planned'}
          </span>
        </div>
        {description && <p className="text-sm/6 text-zinc-500">{description}</p>}
      </div>
    </div>
  )
}

export function RoadmapTimeline({
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
        <div className="w-full max-w-xl">{children}</div>
      </Container>
    </section>
  )
}
