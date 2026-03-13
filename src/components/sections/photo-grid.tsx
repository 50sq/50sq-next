import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'

export function PhotoGridItem({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={clsx('aspect-square overflow-hidden rounded-lg bg-zinc-900', className)}>
      <Image src={src} alt={alt} width={280} height={280} className="size-full object-cover" />
    </div>
  )
}

export function PhotoGrid({
  photos,
  className,
  ...props
}: {
  photos: { src: string; alt: string }[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-12', className)} {...props}>
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo, i) => (
            <PhotoGridItem key={i} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </Container>
    </section>
  )
}
