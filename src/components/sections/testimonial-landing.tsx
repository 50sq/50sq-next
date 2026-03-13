import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function TestimonialLanding({
  quote,
  name,
  byline,
  className,
  ...props
}: {
  quote: string
  name: string
  byline: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container className="flex flex-col items-center">
        <div className="mb-8 h-px w-16 bg-gold-400" />
        <blockquote className="max-w-3xl text-center font-display text-2xl/10 font-light italic tracking-tight text-zinc-200 sm:text-3xl/10">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex flex-col items-center gap-1">
          <span className="text-sm font-semibold text-white">{name}</span>
          <span className="text-sm text-zinc-500">{byline}</span>
        </div>
      </Container>
    </section>
  )
}
