import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-5xl font-light tracking-tight text-white">{value}</span>
      <span className="text-sm text-zinc-500">{label}</span>
    </div>
  )
}

export function StatsBar({
  stats,
  className,
  ...props
}: {
  stats: { value: string; label: string }[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="mx-12 hidden h-16 w-px bg-zinc-800 sm:block lg:mx-20" />}
              <Stat value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
