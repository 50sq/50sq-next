import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function SharingFeature({
  headline,
  description,
  imageSrc,
  imageAlt,
  reverse,
}: {
  headline: string
  description: string
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 lg:flex-row lg:items-center lg:gap-12 lg:p-8',
        reverse && 'lg:flex-row-reverse',
      )}
    >
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{headline}</h3>
        <p className="text-sm/6 text-zinc-400">{description}</p>
      </div>
      {imageSrc && (
        <div className="flex-1 overflow-hidden rounded-lg bg-zinc-800/50">
          <Image src={imageSrc} alt={imageAlt || headline} width={600} height={400} className="w-full" />
        </div>
      )}
    </div>
  )
}

export function SharingFeatures({
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
        <div className="flex w-full flex-col gap-6">{children}</div>
      </Container>
    </section>
  )
}
