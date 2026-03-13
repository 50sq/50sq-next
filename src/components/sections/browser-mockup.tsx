import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function BrowserMockup({
  url,
  children,
  className,
  ...props
}: {
  url?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-zinc-700" />
              <div className="size-3 rounded-full bg-zinc-700" />
              <div className="size-3 rounded-full bg-zinc-700" />
            </div>
            {url && (
              <div className="flex-1">
                <div className="mx-auto max-w-lg rounded-md bg-zinc-800/60 px-4 py-1.5 text-center text-xs text-zinc-500">
                  {url}
                </div>
              </div>
            )}
            <div className="w-12" />
          </div>
          {/* Content */}
          <div className="p-6 sm:p-8">{children}</div>
        </div>
      </Container>
    </section>
  )
}

export function GalleryMockup({
  title,
  photoCount,
  date,
  location,
}: {
  title: string
  photoCount: number
  date: string
  location: string
}) {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-light text-white sm:text-3xl">{title}</h3>
          <p className="mt-1 text-sm text-zinc-500">
            {photoCount} photos · {date} · {location}
          </p>
        </div>
        <div className="flex gap-3">
          <button type="button" className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500">
            Favorites (24)
          </button>
          <button type="button" className="rounded-full bg-gold-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-gold-300">
            Download All
          </button>
        </div>
      </div>
      {/* Photo grid */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              'rounded-lg bg-zinc-800/60',
              i === 1 || i === 3 ? 'aspect-[3/4]' : 'aspect-[4/3]',
            )}
          />
        ))}
      </div>
    </div>
  )
}
