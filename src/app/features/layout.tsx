import { Container } from '@/components/elements/container'
import { Document } from '@/components/elements/document'
import type { ReactNode } from 'react'

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="mx-auto max-w-4xl rounded-xl bg-zinc-950/2.5 p-6 sm:p-10 dark:bg-zinc-950/90">
          <Document>{children}</Document>
        </div>
      </Container>
    </section>
  )
}
