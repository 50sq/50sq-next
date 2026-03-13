import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function AppShowcase({
  eyebrow,
  headline,
  description,
  features,
  phoneSrc,
  phoneAlt,
  className,
  ...props
}: {
  eyebrow?: string
  headline: string
  description: string
  features: { label: string; icon?: ReactNode }[]
  phoneSrc: string
  phoneAlt: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex max-w-md flex-col gap-6 lg:pt-12">
            {eyebrow && (
              <span className="text-sm font-medium tracking-wide text-gold-400 uppercase">{eyebrow}</span>
            )}
            <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
              {headline}
            </h2>
            <p className="text-base/7 text-zinc-400">{description}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300"
                >
                  {feature.icon}
                  {feature.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative w-64 shrink-0 sm:w-72">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-zinc-800 bg-zinc-900 shadow-2xl">
              <Image
                src={phoneSrc}
                alt={phoneAlt}
                width={640}
                height={1280}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
