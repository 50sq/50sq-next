import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - 50sq',
  description:
    'Stories, tips & updates for photographers. Practical advice on running your photo business, product updates, and inspiration from the 50sq community.',
}

const featuredPost = {
  slug: 'deliver-wedding-gallery-48-hours',
  category: 'Business',
  date: 'March 10, 2026',
  title: 'How to deliver a wedding gallery in under 48 hours',
  excerpt:
    "Speed matters to your clients. Here's the exact workflow three top wedding photographers use to cull, edit, and deliver complete galleries in two days — without sacrificing quality.",
  author: 'Sarah Mitchell',
  readTime: '8 min read',
}

const posts = [
  {
    slug: 'pricing-photography-profitable-packages',
    category: 'Business',
    date: 'March 6, 2026',
    title: 'Pricing your photography: a guide to profitable packages',
    excerpt:
      'Stop undercharging. Learn how to build photography packages that reflect your value and attract ideal clients.',
  },
  {
    slug: 'new-lightroom-classic-plugin',
    category: 'Product',
    date: 'March 1, 2026',
    title: 'Introducing the new Lightroom Classic plugin',
    excerpt:
      "Background sync, smart collections, and 3x faster uploads. Here's everything new in the v2.0 plugin.",
  },
  {
    slug: 'culling-workflow-saves-4-hours',
    category: 'Workflow',
    date: 'Feb 24, 2026',
    title: 'The culling workflow that saves me 4 hours per wedding',
    excerpt:
      'A step-by-step culling system using Photo Mechanic and 50sq that dramatically cuts your post-production time.',
  },
  {
    slug: 'gallery-design-trends-convert',
    category: 'Inspiration',
    date: 'Feb 18, 2026',
    title: 'Gallery design trends that convert browsers into buyers',
    excerpt:
      'What makes a client click "buy"? We analyzed 500 galleries to find the design patterns that drive the most sales.',
  },
  {
    slug: '5-emails-photographers-automate',
    category: 'Business',
    date: 'Feb 12, 2026',
    title: '5 emails every photographer should automate',
    excerpt:
      'From booking confirmations to gallery reminders — templates that save you hours and keep clients happy.',
  },
  {
    slug: 'gallery-analytics-download-tracking',
    category: 'Product',
    date: 'Feb 5, 2026',
    title: "What's new: gallery analytics & download tracking",
    excerpt:
      "See who's viewing your galleries, which photos get the most love, and when clients are downloading.",
  },
]

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-5">
      <div className="h-[220px] shrink-0 rounded-xl bg-[#141414] border border-[#1F1D1B] transition group-hover:border-[#2A2622]" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-[12px] uppercase tracking-[0.06em] leading-none text-[#C9A96E] font-medium">
            {post.category}
          </span>
          <span className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
          <span className="text-[13px] leading-none text-[#6B6560] font-light">{post.date}</span>
        </div>
        <h3 className="font-display text-[24px] tracking-[-0.01em] leading-[1.3] text-[#F2EDE6] group-hover:text-white transition">
          {post.title}
        </h3>
        <p className="text-[14px] leading-[1.6] text-[#8A837A] font-light">{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center pt-[100px] pb-20 gap-4 px-20">
        <span className="text-[13px] uppercase tracking-widest leading-none text-[#C9A96E] font-medium">
          Blog
        </span>
        <h1 className="font-display text-[56px] tracking-[-0.03em] leading-[1.15] text-center max-w-[700px] text-[#F2EDE6] font-light">
          Stories, tips & updates for photographers
        </h1>
        <p className="text-[18px] leading-[1.6] text-center max-w-[520px] text-[#8A837A] font-light">
          Practical advice on running your photo business, product updates, and inspiration from the
          50sq community.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-[1200px] px-20">
        <Link href={`/blog/${featuredPost.slug}`} className="group flex gap-10">
          <div className="flex w-[560px] h-[380px] shrink-0 rounded-2xl overflow-clip bg-[#1A1816] transition group-hover:bg-[#201D1A]" />
          <div className="flex flex-col justify-center grow gap-5">
            <div className="flex items-center gap-3">
              <span className="flex items-center rounded-[100px] py-1.5 px-3.5 bg-[#C9A96E1F]">
                <span className="text-[12px] tracking-[0.08em] leading-none uppercase text-[#C9A96E] font-medium">
                  Featured
                </span>
              </span>
              <span className="text-[13px] leading-none text-[#6B6560] font-light">
                {featuredPost.date}
              </span>
            </div>
            <h2 className="font-display text-[36px] tracking-[-0.02em] leading-[1.25] text-[#F2EDE6] group-hover:text-white transition">
              {featuredPost.title}
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8A837A] font-light">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-2.5">
              <div className="shrink-0 rounded-full bg-[#2A2622] size-8" />
              <span className="text-[14px] leading-none text-[#F2EDE6]">
                {featuredPost.author}
              </span>
              <span className="text-[13px] leading-none text-[#6B6560] font-light">
                · {featuredPost.readTime}
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest Posts Divider */}
      <div className="flex items-center pt-[60px] mx-auto max-w-[1200px] px-20">
        <span className="text-[13px] uppercase tracking-widest leading-none text-[#C9A96E] font-medium">
          Latest Posts
        </span>
        <div className="grow h-px ml-5 bg-[#1F1D1B]" />
      </div>

      {/* Posts Grid */}
      <section className="mx-auto max-w-[1200px] px-20 pt-10 pb-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Load More */}
      <div className="flex items-center justify-center pt-[60px] pb-20 gap-2">
        <button className="flex items-center gap-2 text-[14px] leading-none text-[#C9A96E] hover:text-[#d4b87e] transition cursor-pointer">
          Load more posts
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 3v8M4 8l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
