import { Container } from '@/components/elements/container'
import { Document } from '@/components/elements/document'
import { Heading } from '@/components/elements/heading'
import type { ReactNode } from 'react'

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <Document className="mx-auto max-w-2xl">{children}</Document>
      </Container>
    </section>
  )
}
