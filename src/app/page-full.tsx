import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroCenteredWithDemo
        id="hero"
        eyebrow={
          <AnnouncementBadge href="#" text="50sq launches new gallery features" cta="Learn more" variant="normal" />
        }
        headline="Transform your photography business with the professional platform you deserve."
        subheadline={
          <p>
            Lightning-fast photo uploads, smart organization, and secure client galleries — everything you need to
            deliver stunning work and grow your business.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" wallpaper="brown" placement="top">
              <Image
                src="/img/screenshots/1-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mist-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src="/img/screenshots/1-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mist-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="white" placement="bottom">
              <Image
                src="/img/screenshots/1.webp"
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src="/img/screenshots/1-color-mist.webp"
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Powerful features"
        headline="Everything you need to manage photos, delight clients, and grow your business."
        subheadline={
          <p>
            From upload to delivery, streamline your entire photography workflow with tools designed by photographers,
            for photographers.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="white" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Gallery Management"
              subheadline={
                <p>
                  Drag-and-drop organization, batch uploads, and automatic image optimization. Your photos, beautifully
                  organized and ready to share.
                </p>
              }
              cta={
                <Link href="/features/gallery-management">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="white" placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-right-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-right-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Lightning-Fast Uploading"
              subheadline={
                <p>
                  Upload gigabytes of photos in minutes with parallel uploads and automatic optimization. Professional
                  plan supports up to 3GB per image.
                </p>
              }
              cta={
                <Link href="/features/uploading">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="white" placement="top-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mist-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Lightroom Classic Plugin"
              subheadline={
                <p>
                  Export directly from Lightroom Classic to 50sq. Create galleries, apply tags, and organize your
                  uploads without leaving your editing workflow.
                </p>
              }
              cta={
                <Link href="/features/lightroom-plugin">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Built for scale"
        headline="The platform powering professional photographers everywhere."
        subheadline={
          <p>
            50sq helps photographers deliver stunning galleries, manage clients effortlessly, and grow their business.
            From solo shooters to large studios, we handle millions of photos every month.
          </p>
        }
      >
        <Stat stat="10M+" text="Photos delivered to happy clients across thousands of galleries." />
        <Stat stat="99.99%" text="Uptime — because your clients expect nothing less." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What photographers are saying"
        subheadline={<p>Join thousands of photographers who trust 50sq to power their business.</p>}
      >
        <Testimonial
          quote={
            <p>
              50sq has completely transformed how I deliver photos to clients. The galleries are beautiful and my
              clients love the seamless experience.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Sarah Mitchell"
          byline="Wedding Photographer"
        />
        <Testimonial
          quote={
            <p>
              The built-in e-commerce features have been a game-changer. I've increased my print sales by 200% since
              switching to 50sq.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Marcus Chen"
          byline="Portrait Photographer"
        />
        <Testimonial
          quote={
            <p>
              50sq saves me hours every week on photo organization and client delivery. More time shooting, less time
              managing files.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Emma Rodriguez"
          byline="Event Photographer"
        />
        <Testimonial
          quote={
            <p>
              The analytics dashboard gives me insights into which photos clients love most. It's helped me refine my
              shooting style and grow my business.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="James Park"
          byline="Commercial Photographer"
        />
        <Testimonial
          quote={
            <p>
              As a solo photographer, 50sq makes me look like a professional studio. The branded galleries and seamless
              delivery impress every client.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Alex Rivera"
          byline="Freelance Photographer"
        />
        <Testimonial
          quote={
            <p>
              Our studio switched to 50sq last year and we've streamlined our entire workflow. Client satisfaction is at
              an all-time high.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lisa Thompson"
          byline="Studio Owner"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      {/*<FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="No credit card required! Start your 14-day free trial and explore all features. We'll only ask for payment details when you're ready to continue."
        />
        <Faq
          id="faq-2"
          question="How many photos can I upload?"
          answer="Our plans are based on storage, not photo count. Upload as many photos as you need within your storage limit. Need more? Upgrade anytime."
        />
        <Faq
          id="faq-3"
          question="Can my clients download photos directly?"
          answer="Yes! You control the download options for each gallery. Enable high-res downloads, web-sized versions, or restrict downloads entirely — it's up to you."
        />
        <Faq
          id="faq-4"
          question="Do you offer print fulfillment?"
          answer="We integrate with leading print labs so your clients can order prints directly from their gallery. You set the prices and keep the profits."
        />
      </FAQsTwoColumnAccordion>*/}

      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        plans={
          <>
            <Plan
              name="Starter"
              price="$12"
              period="/mo"
              subheadline={<p>Perfect for photographers just getting started</p>}
              features={[
                'Up to 10GB storage',
                '5 client galleries',
                'Basic gallery customization',
                'Download protection',
                'Email support',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Professional"
              price="$29"
              period="/mo"
              subheadline={<p>For growing photography businesses</p>}
              badge="Most popular"
              features={[
                'Everything in Starter',
                'Up to 100GB storage',
                '3GB file limit per image',
                'Unlimited galleries',
                'Custom branding',
                'E-commerce & print sales',
                'Client management',
                'Analytics dashboard',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Studio"
              price="$79"
              period="/mo"
              subheadline={<p>For studios and high-volume photographers</p>}
              features={[
                'Everything in Professional',
                'Unlimited storage',
                'Team collaboration',
                'API access',
                'Priority support',
                'White-label options',
                'Advanced analytics',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to transform your photography business?"
        subheadline={
          <p>
            Join thousands of photographers using 50sq to deliver stunning galleries, streamline their workflow, and
            grow their business.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
