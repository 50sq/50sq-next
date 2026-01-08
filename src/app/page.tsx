import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CloudArrowUpIcon } from '@/components/icons/cloud-arrow-up-icon'
import { FolderIcon } from '@/components/icons/folder-icon'
import { LightingBoltIcon } from '@/components/icons/lighting-bolt-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'
import { UserCircleIcon } from '@/components/icons/user-circle-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Faq, FAQsAccordion } from '@/components/sections/faqs-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import {
  Feature as StackedFeature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { FooterLink, FooterWithLinksAndSocialIcons } from '@/components/sections/footer-with-links-and-social-icons'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'
import Image from 'next/image'

function plans(option: string) {
  return (
    <>
      <Plan
        name="Starter Plan - 100 GB"
        price={option === 'Monthly' ? '$15' : '$150'}
        period={option === 'Monthly' ? '/month' : '/year'}
        subheadline={<></>}
        features={[
          '100 GB Archive Storage',
          'Unlimited Galleries & Albums',
          'Password-Protected Downloads',
          'Auto-Watermarking',
          '0% Commission Online Sales',
          'Client CRM',
          'Secure File Sharing',
          'Usage Analytics',
          'Standard Support',
        ]}
        cta={
          <SoftButtonLink href="https://app.50sq.com/signup" size="lg">
            Choose Starter
          </SoftButtonLink>
        }
      />
      <Plan
        name="Plus Plan - 500 GB"
        price={option === 'Monthly' ? '$30' : '$300'}
        period={option === 'Monthly' ? '/month' : '/year'}
        subheadline={<></>}
        badge="Most Popular"
        features={[
          'Everything In Starter Plan',
          '1 TB Storage',
          'Custom URLs For Galleries And Albums',
          '3 Team Members',
          '3 Active Projects',
          'Custom-Watermarks',
          'Standard Support',
        ]}
        cta={
          <ButtonLink href="https://app.50sq.com/signup" size="lg">
            Choose Plus
          </ButtonLink>
        }
      />
      <Plan
        name="Pro Plan - Unlimited"
        price={option === 'Monthly' ? '$50' : '$500'}
        period={option === 'Monthly' ? '/month' : '/year'}
        subheadline={<></>}
        features={[
          'Everything In Plus Plan',
          'Unlimited Storage',
          'Unlimited Team Members',
          'Unlimited Projects',
          'Advanced Permissions',
          'API Access',
          'Priority Support',
        ]}
        cta={
          <SoftButtonLink href="https://app.50sq.com/signup" size="lg">
            Choose Pro
          </SoftButtonLink>
        }
      />
    </>
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroCenteredWithDemo
        id="hero"
        eyebrow={<Eyebrow>For the Serious Photographer</Eyebrow>}
        headline="Photography software that doesn't slow you down."
        subheadline={
          <p>
            Lightning-fast uploads, smart organization, and secure client galleries. Everything you need to run your
            photography business all in one place.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="https://app.50sq.com/signup" size="lg">
              Start free trial
            </ButtonLink>
            <PlainButtonLink href="#features" size="lg">
              Learn more <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <Screenshot wallpaper="yellow" placement="bottom" className="w-full rounded-lg">
            <Image
              src="/img/screenshots/app-light.jpg"
              alt="50sq application"
              width={1920}
              height={1080}
              className="w-full dark:hidden"
            />
            <Image
              src="/img/screenshots/app-dark.jpg"
              alt="50sq application"
              width={1920}
              height={1080}
              className="hidden w-full dark:block"
            />
          </Screenshot>
        }
      />

      {/* Features */}
      <FeaturesThreeColumn
        id="features"
        eyebrow="Features"
        headline="Everything you need to manage your photography business"
        subheadline="From lightning-fast uploads to secure client galleries, we've built the tools that professional photographers actually need."
        features={
          <>
            <Feature
              icon={<LightingBoltIcon />}
              headline="Lightning-fast uploads"
              subheadline="Upload thousands of high-resolution photos in minutes, not hours. Our infrastructure is optimized for large files and bulk uploads."
            />
            <Feature
              icon={<FolderIcon />}
              headline="Smart organization"
              subheadline="Tag photos on upload and organize them into galleries effortlessly. Spend less time organizing and more time creating."
            />
            <Feature
              icon={<LockIcon />}
              headline="Secure client galleries"
              subheadline="Fine-grained access controls, automatic watermarking, and restricted galleries give you complete control over who sees your work and how."
            />
            <Feature
              icon={<PhotoIcon />}
              headline="Beautiful presentations"
              subheadline="Stunning gallery layouts that showcase your work. Customizable themes that match your brand and impress your clients."
            />
            <Feature
              icon={<CloudArrowUpIcon />}
              headline="Unlimited storage"
              subheadline="Never worry about running out of space. Store your entire portfolio with fast, reliable cloud storage built for photographers."
            />
            <Feature
              icon={<UserCircleIcon />}
              headline="Client management"
              subheadline="Keep track of all your clients, projects, and deliverables in one place. Streamline your workflow from shoot to delivery."
            />
          </>
        }
      />

      {/* Features with Demos */}
      <FeaturesStackedAlternatingWithDemos
        id="more-features"
        features={
          <StackedFeature
            headline="Usage Analytics"
            subheadline={
              <p>
                Track views, downloads, and engagement across all your galleries. See which photos resonate most with
                your clients and make data-driven decisions to grow your business.
              </p>
            }
            cta={
              <PlainButtonLink href="https://app.50sq.com/signup">
                Learn more <ChevronIcon />
              </PlainButtonLink>
            }
            demo={
              <Screenshot wallpaper="yellow" placement="bottom-left" className="h-full">
                <Image
                  src="/img/screenshots/analytics-light.jpg"
                  alt="Analytics dashboard"
                  width={1920}
                  height={1080}
                  className="dark:hidden"
                />
                <Image
                  src="/img/screenshots/analytics-dark.jpg"
                  alt="Analytics dashboard"
                  width={1920}
                  height={1080}
                  className="not-dark:hidden"
                />
              </Screenshot>
            }
          />
        }
      />

      {/* Testimonial */}
      <TestimonialLargeQuote
        id="testimonial"
        quote={
          <>
            <p>
              50sq allows us to not only publish all the photos from Laracon AU, but easily manage them en masse.
              Tagging and grouping is a breeze, and sharing photos privately with our speakers means we have one unified
              platform for all our photography distribution needs!
            </p>
          </>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt="Michael Dyrynda"
            width={1400}
            height={1000}
            className="not-dark:bg-white/75 dark:bg-black/75"
          />
        }
        name="Michael Dyrynda"
        byline="Laracon AU, Organizer."
      />

      {/* Pricing */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Choose Your Plan"
        subheadline={<p>Select the perfect plan for your needs</p>}
        options={['Monthly', 'Yearly']}
        plans={{ Monthly: plans('Monthly'), Yearly: plans('Yearly') }}
      />

      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="Frequently asked questions">
        <Faq
          id="faq-1"
          question="How fast are the uploads?"
          answer="Our infrastructure is optimized for high-resolution photos. Most photographers see upload speeds 3-5x faster than traditional cloud storage. A typical wedding shoot of 2,000 photos can be uploaded in under 10 minutes on a standard connection."
        />
        <Faq
          id="faq-2"
          question="Can my clients download photos directly?"
          answer="Yes! You control exactly what clients can download. Set up password-protected galleries with options for high-res downloads, web-sized versions, or print-ready files. You can also enable digital purchases and print sales."
        />
        <Faq
          id="faq-3"
          question="Do I need a credit card to start the free trial?"
          answer="No credit card required! Start your 14-day free trial and explore all features. We'll only ask for payment details when you're ready to continue."
        />
        <Faq
          id="faq-4"
          question="Can I upgrade or downgrade my plan?"
          answer="Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at your next billing cycle."
        />
        <Faq
          id="faq-5"
          question="Is my data secure?"
          answer="Security is our top priority. All data is encrypted in transit and at rest. We use enterprise-grade infrastructure with automatic backups and 99.9% uptime guarantee."
        />
        <Faq
          id="faq-6"
          question="Can I use my own domain?"
          answer="Yes! Professional and Studio plans support custom domains. Your clients will see your brand, not ours, creating a seamless professional experience."
        />
      </FAQsAccordion>

      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="cta"
        headline="Ready to transform your photography business?"
        subheadline={
          <p>
            Join thousands of professional photographers who trust 50sq to manage their work and delight their clients.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="https://app.50sq.com/signup" size="lg">
              Start your free trial
            </ButtonLink>
            <PlainButtonLink href="mailto:hello@50sq.com" size="lg">
              Contact sales <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />

      {/* Footer */}
      <FooterWithLinksAndSocialIcons
        id="footer"
        links={
          <>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="mailto:hello@50sq.com">Contact</FooterLink>
          </>
        }
        fineprint={<p>&copy; {new Date().getFullYear()} 50sq. All rights reserved.</p>}
      />
    </>
  )
}
