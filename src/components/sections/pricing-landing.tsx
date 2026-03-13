'use client'

import { clsx } from 'clsx/lite'
import Link from 'next/link'
import { useState, type ComponentProps } from 'react'
import { Container } from '../elements/container'

export function PricingPlan({
  name,
  price,
  period,
  features,
  ctaLabel,
  ctaHref,
  highlighted,
}: {
  name: string
  price: string
  period: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-xl border p-6',
        highlighted ? 'border-gold-400/30 bg-gold-400/5' : 'border-zinc-800 bg-zinc-900/50',
      )}
    >
      <div className="mb-6">
        <h3 className="text-sm font-medium text-zinc-400">{name}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-display text-4xl font-light text-white">{price}</span>
          <span className="text-sm text-zinc-500">{period}</span>
        </div>
      </div>
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
            <svg className="mt-0.5 size-4 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={clsx(
          'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition',
          highlighted
            ? 'bg-gold-400 text-zinc-950 hover:bg-gold-300'
            : 'border border-zinc-700 text-white hover:border-zinc-500 hover:bg-white/5',
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

export function PricingLanding({
  headline,
  subheadline,
  plans,
  className,
  ...props
}: {
  headline: string
  subheadline: string
  plans: {
    monthly: { name: string; price: string; features: string[]; highlighted?: boolean }[]
    yearly: { name: string; price: string; features: string[]; highlighted?: boolean }[]
  }
} & ComponentProps<'section'>) {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const currentPlans = plans[billing]

  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
            {headline}
          </h2>
          <p className="text-base/7 text-zinc-400">{subheadline}</p>
          <div className="mt-2 flex items-center gap-1 rounded-full border border-zinc-800 p-1">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={clsx(
                'rounded-full px-4 py-1.5 text-sm font-medium transition',
                billing === 'monthly' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300',
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={clsx(
                'rounded-full px-4 py-1.5 text-sm font-medium transition',
                billing === 'yearly' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300',
              )}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentPlans.map((plan, i) => (
            <PricingPlan
              key={i}
              name={plan.name}
              price={plan.price}
              period={billing === 'monthly' ? '/month' : '/year'}
              features={plan.features}
              ctaLabel="Start Free Trial"
              ctaHref="https://app.50sq.com/signup"
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
