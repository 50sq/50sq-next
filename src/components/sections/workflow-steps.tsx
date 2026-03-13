import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function WorkflowSteps({
  eyebrow,
  headline,
  subheadline,
  steps,
  className,
  ...props
}: {
  eyebrow?: string
  headline: string
  subheadline?: string
  steps: { icon: ReactNode; title: string; description: string; highlighted?: boolean }[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-24', className)} {...props}>
      <Container className="flex flex-col items-center gap-16">
        <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
          {eyebrow && (
            <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">{eyebrow}</span>
          )}
          <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
            {headline}
          </h2>
          {subheadline && <p className="max-w-xl text-base/7 text-zinc-400">{subheadline}</p>}
        </div>

        {/* Steps row */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.flatMap((step, i) => {
            const items = [
              <div key={`step-${i}`} className="flex flex-col items-center gap-4 text-center">
                <div
                  className={clsx(
                    'flex size-20 items-center justify-center rounded-2xl border',
                    step.highlighted
                      ? 'border-gold-400/30 bg-gold-400/10'
                      : 'border-zinc-800 bg-zinc-900/80',
                  )}
                >
                  <div className={clsx('text-2xl', step.highlighted ? 'text-gold-400' : 'text-zinc-400')}>
                    {step.icon}
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-gold-400 uppercase">
                  Step {i + 1}
                </span>
                <h3 className="font-display text-xl font-light tracking-tight text-white">{step.title}</h3>
                <p className="max-w-xs text-sm/6 text-zinc-500">{step.description}</p>
              </div>,
            ]
            if (i < steps.length - 1) {
              items.push(
                <div key={`arrow-${i}`} className="hidden items-center self-start pt-10 sm:flex">
                  <div className="h-px w-12 border-t border-dashed border-zinc-700 lg:w-20" />
                  <svg className="-ml-px size-2.5 text-zinc-700" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M4 1l6 5-6 5V1z" />
                  </svg>
                </div>,
              )
            }
            return items
          })}
        </div>
      </Container>
    </section>
  )
}
