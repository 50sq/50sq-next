import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

function TeamMember({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3">
      <div className="size-8 overflow-hidden rounded-full bg-zinc-800">
        <Image src={avatar} alt={name} width={32} height={32} className="size-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-zinc-500">{role}</span>
      </div>
    </div>
  )
}

export function TeamPreview({
  eyebrow,
  headline,
  description,
  members,
  className,
  ...props
}: {
  eyebrow?: string
  headline: string
  description: string
  members: { name: string; role: string; avatar: string }[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-20', className)} {...props}>
      <Container>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex max-w-md flex-col gap-4">
            {eyebrow && (
              <span className="text-sm font-medium tracking-wide text-gold-400 uppercase">{eyebrow}</span>
            )}
            <h2 className="font-display text-4xl/[1.15] font-light tracking-tight text-white sm:text-5xl/[1.15]">
              {headline}
            </h2>
            <p className="text-base/7 text-zinc-400">{description}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {members.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
