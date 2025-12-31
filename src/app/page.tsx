import { Button } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

export default function Page() {
  return (
    <section className="flex min-h-[calc(100vh-200px)] items-center">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-medium text-yellow-600 dark:text-yellow-500">Coming Soon</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
          The professional photo platform you deserve.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-700 dark:text-zinc-400">
          Lightning-fast uploads, smart organization, and secure client galleries. Join the waitlist to be the first to
          know when we launch.
        </p>
        <form className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
            className="flex-1 rounded-lg border border-zinc-950/20 bg-white px-4 py-3 text-zinc-950 placeholder:text-zinc-500 focus:border-zinc-950 focus:outline-none dark:border-white/20 dark:bg-zinc-950/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
          />
          <Button type="submit" size="lg">
            Join Waitlist <ArrowNarrowRightIcon />
          </Button>
        </form>
        <p className="mt-4 text-sm text-zinc-500">We respect your privacy. Unsubscribe at any time.</p>
      </Container>
    </section>
  )
}
