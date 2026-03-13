import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

export function ChangelogEntry({
  date,
  title,
  description,
  tag,
}: {
  date: string
  title: string
  description: string
  tag?: string
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-6 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <time className="text-xs text-zinc-600">{date}</time>
        {tag && (
          <span className="rounded-full bg-gold-400/10 px-2 py-0.5 text-[10px] font-medium text-gold-400 uppercase">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-sm/6 text-zinc-500">{description}</p>
    </div>
  )
}

export function ChangelogList({
  headline,
  subheadline,
  children,
  className,
  ...props
}: {
  headline: string
  subheadline?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
            {headline}
          </h2>
          {subheadline && <p className="text-base/7 text-zinc-400">{subheadline}</p>}
        </div>
        <div className="flex w-full max-w-2xl flex-col gap-6">{children}</div>
      </Container>
    </section>
  )
}
