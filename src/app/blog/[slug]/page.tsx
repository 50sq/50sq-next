import type { Metadata } from 'next'
import Link from 'next/link'

const article = {
  slug: 'deliver-wedding-gallery-48-hours',
  category: 'Business',
  date: 'March 10, 2026',
  readTime: '8 min read',
  title: 'How to deliver a wedding gallery in under 48 hours',
  subtitle:
    "Speed matters to your clients. Here's the exact workflow three top wedding photographers use to cull, edit, and deliver complete galleries in two days — without sacrificing quality.",
  author: {
    name: 'Yaz Jallad',
    role: 'Photographer, creator of 50sq',
  },
}

const relatedPosts = [
  {
    slug: 'culling-workflow-saves-4-hours',
    category: 'Workflow',
    date: 'Feb 24, 2026',
    title: 'The culling workflow that saves me 4 hours per wedding',
  },
  {
    slug: 'new-lightroom-classic-plugin',
    category: 'Product',
    date: 'March 1, 2026',
    title: 'Introducing the new Lightroom Classic plugin',
  },
  {
    slug: 'pricing-photography-profitable-packages',
    category: 'Business',
    date: 'March 6, 2026',
    title: 'Pricing your photography: a guide to profitable packages',
  },
]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${article.title} - 50sq Blog`,
    description: article.subtitle,
    authors: [{ name: 'Yaz Jallad, Photographer, creator of 50sq' }],
  }
}

export default function BlogArticlePage() {
  return (
    <>
      {/* Article Header */}
      <section className="flex flex-col items-center pt-16 sm:pt-20 lg:pt-[100px] pb-12 gap-5 px-5 sm:px-8 lg:px-20">
        <div className="flex items-center gap-3">
          <span className="text-[12px] uppercase tracking-[0.08em] leading-none text-[#C9A96E] font-medium">
            {article.category}
          </span>
          <span className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
          <span className="text-[14px] leading-none text-[#6B6560] font-light">
            {article.date}
          </span>
          <span className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
          <span className="text-[14px] leading-none text-[#6B6560] font-light">
            {article.readTime}
          </span>
        </div>
        <h1 className="font-display text-[28px] sm:text-[40px] lg:text-[56px] tracking-[-0.03em] leading-[1.15] text-center max-w-[800px] text-[#F2EDE6] font-light">
          {article.title}
        </h1>
        <p className="text-[18px] leading-[1.6] text-center max-w-[600px] text-[#8A837A] font-light">
          {article.subtitle}
        </p>
        <div className="flex items-center pt-2 gap-3">
          <div className="shrink-0 rounded-full bg-[#2A2622] size-10" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[14px] leading-none text-[#F2EDE6] font-medium">
              {article.author.name}
            </span>
            <span className="text-[13px] leading-none text-[#6B6560] font-light">
              {article.author.role}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-auto max-w-[1040px] px-5 sm:px-8 lg:px-20">
        <div className="w-full h-[480px] rounded-2xl bg-[#1A1816] border border-[#1F1D1B]" />
      </div>

      {/* Article Body */}
      <article className="flex flex-col items-center pt-14">
        <div className="flex flex-col max-w-[680px] gap-7 px-6">
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            Your wedding clients don&apos;t want to wait three weeks for their gallery. In a world
            of instant everything, speed of delivery has become a real competitive advantage — and
            the photographers who&apos;ve figured it out are booking more repeat clients and
            referrals than ever.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            We talked to three wedding photographers who consistently deliver complete galleries
            within 48 hours of the event. Here&apos;s what they told us.
          </p>

          <h2 className="font-display text-[32px] tracking-[-0.02em] leading-[1.3] pt-3 text-[#F2EDE6]">
            1. Cull ruthlessly on the same day
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            The biggest time sink isn&apos;t editing — it&apos;s deciding which photos to keep.
            Every photographer we spoke to does their first cull within hours of the event, while the
            day is still fresh in their mind.
          </p>

          {/* Pro Tip Callout */}
          <div className="flex flex-col rounded-xl py-6 px-7 gap-2 bg-[#141414] border border-[#1F1D1B]">
            <span className="text-[13px] uppercase tracking-[0.08em] leading-none text-[#C9A96E] font-medium">
              Pro tip
            </span>
            <p className="text-[15px] leading-[1.7] text-[#8A837A] font-light">
              &quot;I flag my selects in Photo Mechanic on the drive home. It takes 45 minutes and
              saves me hours of second-guessing later.&quot; — Mia Torres, Portland
            </p>
          </div>

          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            Photo Mechanic remains the tool of choice for fast culling. Its near-instant image
            loading means you can review 3,000 photos in under an hour. Flag your keepers, reject the
            rest, and move on.
          </p>

          <h2 className="font-display text-[32px] tracking-[-0.02em] leading-[1.3] pt-3 text-[#F2EDE6]">
            2. Batch edit with presets, then refine
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            None of these photographers edit each photo individually. They all use a preset-first
            approach: apply a base look to the entire set, then go through and make targeted
            adjustments to exposure, white balance, and crop on the photos that need it.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            The key insight: your preset should get you 90% of the way there. If you&apos;re
            spending more than 30 seconds on any single photo, your preset needs work — not the
            photo.
          </p>

          <h2 className="font-display text-[32px] tracking-[-0.02em] leading-[1.3] pt-3 text-[#F2EDE6]">
            3. Publish directly from Lightroom
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            This is where the 50sq Lightroom plugin changes the game. Instead of exporting JPEGs,
            uploading to a separate platform, and then building a gallery — you publish directly from
            your Lightroom catalog.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            Select your collection, hit Publish, and 50sq handles the rest: full-resolution upload,
            automatic gallery creation, watermarking, and a branded client link — all in one step.
          </p>
        </div>

        {/* Inline Image */}
        <div className="w-full max-w-[1040px] py-8 px-5 sm:px-8 lg:px-20">
          <div className="w-full h-[360px] rounded-xl bg-[#141414] border border-[#1F1D1B]" />
        </div>

        <div className="flex flex-col max-w-[680px] gap-7 px-6">
          <h2 className="font-display text-[32px] tracking-[-0.02em] leading-[1.3] pt-3 text-[#F2EDE6]">
            The results speak for themselves
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            Photographers who deliver within 48 hours report 3x more social media tags from clients,
            a 40% increase in print sales (clients buy while the excitement is fresh), and
            significantly more referrals.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#B0A99F] font-light">
            The workflow isn&apos;t about cutting corners — it&apos;s about removing friction. When
            your tools work together seamlessly, fast delivery becomes the natural outcome, not a
            stressful sprint.
          </p>
        </div>
      </article>

      {/* Divider */}
      <div className="mx-auto max-w-[1040px] pt-12 px-5 sm:px-8 lg:px-20">
        <div className="w-full h-px bg-[#1F1D1B]" />
      </div>

      {/* Related Posts */}
      <section className="mx-auto max-w-[1200px] pt-14 pb-20 px-5 sm:px-8 lg:px-20">
        <div className="flex items-center mb-8">
          <span className="text-[13px] uppercase tracking-widest leading-none text-[#C9A96E] font-medium">
            Related Posts
          </span>
          <div className="grow h-px ml-5 bg-[#1F1D1B]" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="h-[200px] shrink-0 rounded-xl bg-[#141414] border border-[#1F1D1B] transition group-hover:border-[#2A2622]" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[12px] uppercase tracking-[0.06em] leading-none text-[#C9A96E] font-medium">
                    {post.category}
                  </span>
                  <span className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                  <span className="text-[13px] leading-none text-[#6B6560] font-light">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-display text-[24px] tracking-[-0.01em] leading-[1.3] text-[#F2EDE6] group-hover:text-white transition">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
