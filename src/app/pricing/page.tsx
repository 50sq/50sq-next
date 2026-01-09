import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'

function plans(option: string) {
  return (
    <>
      <Plan
        name="Starter"
        price={option === 'Monthly' ? '$12' : '$120'}
        period={option === 'Monthly' ? '/month' : '/year'}
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
        price={option === 'Monthly' ? '$29' : '$290'}
        period={option === 'Monthly' ? '/month' : '/year'}
        subheadline={<p>For growing photography businesses</p>}
        badge="Most popular"
        features={[
          'Everything in Starter',
          'Up to 100GB storage',
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
        price={option === 'Monthly' ? '$79' : '$790'}
        period={option === 'Monthly' ? '/month' : '/year'}
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
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Pricing"
        subheadline={
          <p>
            Choose the plan that fits your photography business. All plans include a 14-day free trial with no credit
            card required.
          </p>
        }
        options={['Monthly', 'Yearly']}
        plans={{ Monthly: plans('Monthly'), Yearly: plans('Yearly') }}
      />
      {/* Plan Comparison Table */}
      <PlanComparisonTable
        id="pricing"
        plans={['Starter', 'Professional', 'Studio']}
        features={[
          {
            title: 'Storage & Galleries',
            features: [
              {
                name: 'Storage',
                value: { Starter: '10GB', Professional: '100GB', Studio: 'Unlimited' },
              },
              {
                name: 'Client galleries',
                value: { Starter: '5', Professional: 'Unlimited', Studio: 'Unlimited' },
              },
              { name: 'Download protection', value: true },
              {
                name: 'Custom branding',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'White-label options',
                value: { Starter: false, Professional: false, Studio: true },
              },
            ],
          },
          {
            title: 'E-Commerce',
            features: [
              {
                name: 'Print sales',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'Digital downloads',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'Stripe integration',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'Custom pricing',
                value: { Starter: false, Professional: true, Studio: true },
              },
            ],
          },
          {
            title: 'Team & Clients',
            features: [
              {
                name: 'Client management',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'Team collaboration',
                value: { Starter: false, Professional: false, Studio: true },
              },
              {
                name: 'Analytics dashboard',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'API access',
                value: { Starter: false, Professional: false, Studio: true },
              },
            ],
          },
          {
            title: 'Support',
            features: [
              { name: 'Email support', value: true },
              {
                name: 'Priority support',
                value: { Starter: false, Professional: true, Studio: true },
              },
              {
                name: 'Dedicated manager',
                value: { Starter: false, Professional: false, Studio: true },
              },
            ],
          },
        ]}
      />
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            Switching to 50sq was the best decision for my photography business. The Professional plan gives me
            everything I need at a price that makes sense.
          </p>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Marcus Chen"
        byline="Portrait Photographer"
      />
      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="No credit card required! Start your 14-day free trial and explore all features. We'll only ask for payment details when you're ready to continue."
        />
        <Faq
          id="faq-2"
          question="Can I upgrade or downgrade my plan?"
          answer="Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at your next billing cycle."
        />
        <Faq
          id="faq-3"
          question="What happens if I exceed my storage limit?"
          answer="We'll notify you when you're approaching your limit. You can upgrade to a higher plan or purchase additional storage without changing plans."
        />
        <Faq
          id="faq-4"
          question="Do you offer discounts for annual billing?"
          answer="Yes! Save up to 17% when you choose annual billing. The yearly price is equivalent to 10 months of monthly billing."
        />
      </FAQsAccordion>
      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline="Have any questions?"
        subheadline={
          <p>Our team is here to help you find the perfect plan for your photography business.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Chat with us
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
