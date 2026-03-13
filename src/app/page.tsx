import Link from 'next/link'

/* ─── 50sq Logo SVG (reused in Workflow step 2 and Footer) ─── */
function Logo50sq({
  className,
  fill = '#FFFFFF',
  accentFill = '#C9A96E',
  width = 50,
  height = 50,
}: {
  className?: string
  fill?: string
  accentFill?: string
  width?: number
  height?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      className={className}
    >
      <path
        fill={fill}
        d="M4.375 49.195c-.71 0-1.36-.179-1.953-.537a4.207 4.207 0 0 1-1.445-1.426A3.67 3.67 0 0 1 .439 45.3v-.596c0-.059.033-.088.098-.088h2.266c.052 0 .078.03.078.088v.46c0 .448.146.83.44 1.142.292.306.644.459 1.054.459.417 0 .768-.157 1.055-.47a1.64 1.64 0 0 0 .43-1.132v-1.357c0-.417-.15-.765-.45-1.045-.3-.28-.67-.42-1.113-.42-.573 0-1.045.228-1.416.683l-.04.059-2.138-.166c-.071 0-.107-.032-.107-.098L.84 37.34l.117-2.178c0-.052.026-.078.078-.078h6.729c.052 0 .078.026.078.078v2.178c0 .065-.026.097-.078.097H3.076l-.097 2.764a2.72 2.72 0 0 1 .634-.195 3.21 3.21 0 0 1 .703-.088c.723 0 1.387.176 1.993.527.605.358 1.087.83 1.445 1.416.364.586.547 1.234.547 1.944v1.357a4 4 0 0 1-.528 2.012 4.238 4.238 0 0 1-1.425 1.474 3.69 3.69 0 0 1-1.973.547Zm8.97 0c-.846 0-1.598-.182-2.256-.547a4.12 4.12 0 0 1-1.533-1.455 3.859 3.859 0 0 1-.547-2.011l.02-6.338c0-.742.185-1.41.556-2.002a3.998 3.998 0 0 1 1.524-1.436c.65-.364 1.396-.547 2.236-.547.86 0 1.608.18 2.246.538a4.01 4.01 0 0 1 1.504 1.445c.371.599.557 1.266.557 2.002l.02 6.338a3.84 3.84 0 0 1-.548 2.002 4.094 4.094 0 0 1-1.533 1.464c-.644.365-1.393.547-2.246.547Zm1.904-4.013-.02-6.338c0-.469-.175-.85-.527-1.143-.345-.293-.797-.44-1.357-.44-.573 0-1.032.147-1.377.44a1.428 1.428 0 0 0-.518 1.143v6.338c0 .494.173.885.518 1.171.345.287.804.43 1.377.43.56 0 1.015-.143 1.367-.43.358-.286.537-.677.537-1.171Zm8.941 4.013a3.7 3.7 0 0 1-1.963-.547 4.18 4.18 0 0 1-1.426-1.455 3.968 3.968 0 0 1-.528-2.011v-.918c0-.072.033-.108.098-.108h2.246c.052 0 .078.036.078.108v.918c0 .436.147.813.44 1.133.293.312.644.468 1.054.468.417 0 .772-.16 1.065-.478.293-.326.44-.7.44-1.123 0-.489-.32-.915-.958-1.28a7.56 7.56 0 0 0-.41-.234 15.863 15.863 0 0 0-.586-.332l-.664-.361a34.92 34.92 0 0 0-.625-.352c-.729-.43-1.273-.967-1.63-1.611-.352-.651-.528-1.38-.528-2.188 0-.742.182-1.413.547-2.011a4.095 4.095 0 0 1 1.426-1.407 3.704 3.704 0 0 1 1.924-.527c.71 0 1.36.176 1.953.527a4.07 4.07 0 0 1 1.416 1.426c.358.593.537 1.257.537 1.992v1.64c0 .053-.026.079-.078.079H25.77c-.052 0-.078-.026-.078-.078l-.02-1.64c0-.47-.146-.85-.439-1.143a1.428 1.428 0 0 0-1.045-.44c-.41 0-.761.156-1.054.469-.293.312-.44.684-.44 1.113 0 .436.091.801.274 1.094.189.293.53.573 1.025.84a49.005 49.005 0 0 1 .986.547c.235.123.446.237.635.342l.342.175c.664.371 1.188.827 1.572 1.367.39.54.586 1.205.586 1.993 0 .761-.175 1.445-.527 2.05a4.017 4.017 0 0 1-1.426 1.436 3.793 3.793 0 0 1-1.973.527Zm11.694 1.085-1.377-1.397c-.488.208-.99.312-1.504.312-.71 0-1.36-.179-1.953-.537a4.126 4.126 0 0 1-1.445-1.455 3.964 3.964 0 0 1-.537-2.021l.02-6.338c0-.71.175-1.367.526-1.973a4.017 4.017 0 0 1 1.407-1.455 3.658 3.658 0 0 1 1.982-.557c.71 0 1.36.176 1.953.528a4.043 4.043 0 0 1 1.416 1.435c.358.6.537 1.273.537 2.022l.02 6.338c0 .384-.055.758-.166 1.123-.104.358-.244.69-.42.996l1.24 1.26c.065.052.072.097.02.136L36.03 50.28c-.046.04-.095.04-.147 0Zm-2.88-3.497c.455 0 .82-.17 1.093-.508.273-.345.41-.71.41-1.093l-.02-6.338c0-.43-.14-.801-.42-1.114a1.367 1.367 0 0 0-1.064-.468c-.45 0-.81.16-1.084.478a1.65 1.65 0 0 0-.41 1.104v6.338c0 .481.156.869.469 1.162.312.293.654.44 1.025.44Z"
      />
      <path fill={accentFill} d="M.004 30.745h3.581V3.585h42.83v42.83h-6.464v3.581h10.05V0H.004v30.745Z" />
    </svg>
  )
}

/* ─── Checkmark icon (reused in pricing) ─── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: Hero
      ═══════════════════════════════════════════ */}
      <section className="relative flex w-full flex-col items-center gap-8 px-20 pt-[100px] pb-20">
        {/* Subtle radial glow behind hero */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#C9A96E] opacity-[0.03] blur-[150px]" />
        <div className="flex items-center gap-2 rounded-[100px] border border-[#C9A96E66] px-4 py-2">
          <div className="size-1.5 shrink-0 rounded-full bg-[#C9A96E]" />
          <span className="font-sans text-[13px] leading-none font-medium tracking-widest text-[#C9A96E] uppercase">
            NOW IN BETA
          </span>
        </div>
        <div className="flex max-w-[960px] flex-col items-center">
          <h1 className="text-center font-display text-[92px] leading-24 font-light tracking-[-0.04em] text-[#F2EDE6]">
            Run your photo business
          </h1>
          <h1 className="text-center font-display text-[92px] leading-24 font-light tracking-[-0.04em] text-[#F2EDE6]">
            from one place.
          </h1>
        </div>
        <p className="max-w-140 text-center font-sans text-[20px] leading-8 font-light text-[#8A837A]">
          Lightning-fast uploads, smart organization, secure client galleries, and a built-in storefront — everything a
          working photographer needs.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: Hero CTA
      ═══════════════════════════════════════════ */}
      <section className="flex w-full items-center justify-center gap-4 px-20">
        <Link
          href="https://app.50sq.com/signup"
          className="flex items-center justify-center rounded-[100px] bg-[#C9A96E] px-10 py-4"
        >
          <span className="font-sans text-[16px] leading-5 font-medium tracking-[0.01em] text-[#0A0A0A]">
            Start Free Trial
          </span>
        </Link>
        <Link
          href="#examples"
          className="flex items-center justify-center rounded-[100px] border border-[#C9A96E4D] px-10 py-4"
        >
          <span className="font-sans text-[16px] leading-5 tracking-[0.01em] text-[#F2EDE6]">See Demo Gallery</span>
        </Link>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: Photo Grid
      ═══════════════════════════════════════════ */}
      <section id="examples" className="flex w-full items-center justify-center gap-4 px-20 pt-20">
        <div className="h-[280px] w-[280px] shrink-0 rounded-xl bg-[#1A1816]" />
        <div className="h-[280px] w-[280px] shrink-0 rounded-xl bg-[#201D1A]" />
        <div className="h-[280px] w-[280px] shrink-0 rounded-xl bg-[#C9A96E] opacity-[0.12]" />
        <div className="h-[280px] w-[280px] shrink-0 rounded-xl bg-[#1A1816]" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: Features
      ═══════════════════════════════════════════ */}
      <section id="features" className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex max-w-[600px] flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            WHY 50SQ
          </span>
          <h2 className="text-center font-display text-[52px] leading-[58px] tracking-[-0.03em] text-[#F2EDE6]">
            Less admin. More shooting.
          </h2>
          <p className="text-center font-sans text-[18px] leading-7 font-light text-[#8A837A]">
            Everything you need to deliver, sell, and showcase your work — without the tech headaches.
          </p>
        </div>
        <div className="flex w-full justify-center gap-6 px-20">
          {/* Card: Client Galleries */}
          <div className="flex w-[380px] shrink-0 flex-col gap-6 rounded-2xl border border-[#1F1D1B] bg-[#141414] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A96E]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0A0A0A" strokeWidth="1.5" />
                <line x1="3" y1="9" x2="21" y2="9" stroke="#0A0A0A" strokeWidth="1.5" />
                <line x1="9" y1="9" x2="9" y2="21" stroke="#0A0A0A" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-[22px] leading-7 font-medium tracking-[-0.02em] text-[#F2EDE6]">
                Client Galleries
              </h3>
              <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
                Beautiful, password-protected galleries your clients will love. Easy selecting, downloading, and sharing
                — all on your domain.
              </p>
            </div>
          </div>
          {/* Card: Print Storefront */}
          <div className="flex w-[380px] shrink-0 flex-col gap-6 rounded-2xl border border-[#1F1D1B] bg-[#141414] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A96E]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#0A0A0A" strokeWidth="1.5" />
                <path d="M12 8v4l3 3" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-[22px] leading-7 font-medium tracking-[-0.02em] text-[#F2EDE6]">
                Sales & Ecommerce
              </h3>
              <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
                Turn on sales with one flip of a switch. Sell prints, albums, and digital downloads directly from your
                galleries.
              </p>
            </div>
          </div>
          {/* Card: Portfolio Sites */}
          <div className="flex w-[380px] shrink-0 flex-col gap-6 rounded-2xl border border-[#1F1D1B] bg-[#141414] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A96E]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="9" cy="7" r="4" stroke="#0A0A0A" strokeWidth="1.5" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-[22px] leading-7 font-medium tracking-[-0.02em] text-[#F2EDE6]">
                Customer Portals
              </h3>
              <p className="font-sans text-[16px] leading-6.5 font-light text-[#8A837A]">
                Give each client their own branded portal to view galleries, download files, and manage their orders —
                all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: Stats
      ═══════════════════════════════════════════ */}
      <section className="relative flex w-full items-center justify-center gap-[120px] px-20 py-[120px]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A96E]/[0.02] to-transparent" />
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[72px] leading-18 font-light tracking-[-0.04em] text-[#F2EDE6]">
            560 GB
          </span>
          <span className="font-sans text-[14px] leading-4.5 font-light tracking-[0.06em] text-[#8A837A] uppercase">
            Images Stored
          </span>
        </div>
        <div className="h-20 w-px shrink-0 bg-[#2A2622]" />
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[72px] leading-18 font-light tracking-[-0.04em] text-[#F2EDE6]">5m+</span>
          <span className="font-sans text-[14px] leading-4.5 font-light tracking-[0.06em] text-[#8A837A] uppercase">
            Photos Delivered
          </span>
        </div>
        <div className="h-20 w-px shrink-0 bg-[#2A2622]" />
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[72px] leading-18 font-light tracking-[-0.04em] text-[#F2EDE6]">
            99.9%
          </span>
          <span className="font-sans text-[14px] leading-4.5 font-light tracking-[0.06em] text-[#8A837A] uppercase">
            Uptime
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: Testimonial
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-8 px-20 pt-10 pb-30">
        <div className="h-px w-16 shrink-0 bg-[#2A2622]" />
        <p className="max-w-180 text-center font-display text-[32px] leading-12 font-light tracking-[-0.01em] text-[#F2EDE6] italic">
          "50sq allows us to not only publish all the photos from Laracon AU, but easily manage them en masse. Tagging
          and grouping is a breeze, and sharing photos privately with our speakers means we have one unified platform
          for all our photography distribution needs!"
        </p>
        <div className="flex flex-col items-center gap-3">
          <img
            src="/img/avatars/michaeldyrynda.jpg"
            alt="Sarah Mitchell"
            className="size-12 rounded-full object-cover"
          />
          <div className="flex flex-col items-center gap-1">
            <span className="font-sans text-[15px] leading-4.5 font-medium text-[#F2EDE6]">Michael Dyrynda</span>
            <span className="font-sans text-[14px] leading-4.5 font-light text-[#8A837A]">Laracon AU, Organizer.</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: App Showcase
      ═══════════════════════════════════════════ */}
      <section className="flex w-full items-center justify-center gap-20 px-[120px]">
        <div className="flex max-w-[440px] shrink-0 flex-col gap-8">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            THE PLATFORM
          </span>
          <h2 className="font-display text-[48px] leading-14 tracking-[-0.03em] text-[#F2EDE6]">
            3–5x faster uploads. Zero headaches.
          </h2>
          <p className="font-sans text-[17px] leading-7 font-light text-[#8A837A]">
            Smart tagging, automatic watermarking, client CRM, and usage analytics — all in a clean interface that stays
            out of your way.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="size-2 shrink-0 rounded-full bg-[#C9A96E]" />
              <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">Custom domains</span>
            </div>
            <div className="flex items-center gap-2 pl-3">
              <div className="size-2 shrink-0 rounded-full bg-[#C9A96E]" />
              <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">Team access</span>
            </div>
            <div className="flex items-center gap-2 pl-3">
              <div className="size-2 shrink-0 rounded-full bg-[#C9A96E]" />
              <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">API access</span>
            </div>
          </div>
        </div>
        {/* Phone mockup */}
        <div className="relative flex h-[640px] w-[320px] shrink-0 flex-col rounded-[40px] border border-[#1F1D1B] bg-[#141414] p-4 shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
          <div className="flex justify-center pt-2 pb-4">
            <div className="h-1 w-20 shrink-0 rounded-[100px] bg-[#C9A96E26]" />
          </div>
          <div className="flex grow flex-col gap-2 overflow-clip rounded-[28px]">
            <div className="flex grow gap-2">
              <div className="grow rounded-sm bg-[#1A1816]" />
              <div className="grow rounded-sm bg-[#252220]" />
            </div>
            <div className="flex grow gap-2">
              <div className="grow rounded-sm bg-[#201D1A]" />
              <div className="grow rounded-sm bg-[#2A2622]" />
            </div>
            <div className="flex grow gap-2">
              <div className="grow rounded-sm bg-[#252220]" />
              <div className="grow rounded-sm bg-[#1A1816]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: Workflow
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex max-w-[640px] flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            How It Works
          </span>
          <h2 className="text-center font-display text-[52px] leading-[58px] tracking-[-0.03em] text-[#F2EDE6]">
            From Lightroom to client in seconds.
          </h2>
          <p className="text-center font-sans text-[17px] leading-7 font-light text-[#8A837A]">
            Our Lightroom Classic plugin exports directly to 50sq. Your clients get a beautiful, branded gallery —
            instantly.
          </p>
        </div>
        <div className="flex items-center justify-center">
          {/* Step 1 */}
          <div className="flex w-[240px] shrink-0 flex-col items-center gap-6">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-[20px] border border-[#2A2622] bg-[#141414]">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="4" width="28" height="28" rx="4" stroke="#C9A96E" strokeWidth="1.5" />
                <rect x="8" y="8" width="8" height="8" rx="1" fill="#C9A96E" opacity="0.3" />
                <rect x="8" y="20" width="8" height="8" rx="1" fill="#C9A96E" opacity="0.3" />
                <rect x="20" y="8" width="8" height="20" rx="1" fill="#C9A96E" opacity="0.5" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-[11px] leading-3.5 font-medium tracking-[0.12em] text-[#C9A96E] uppercase">
                Step 1
              </span>
              <h3 className="text-center font-display text-[24px] leading-[30px] font-medium text-[#F2EDE6]">
                Edit in Lightroom
              </h3>
              <p className="text-center font-sans text-[14px] leading-[22px] font-light text-[#8A837A]">
                Work in your familiar Lightroom Classic workflow. No changes needed.
              </p>
            </div>
          </div>
          {/* Arrow 1 */}
          <div className="mb-[60px] flex items-center px-4">
            <div
              className="h-px w-12 shrink-0"
              style={{ backgroundImage: 'linear-gradient(90deg, #2A2622 0%, #C9A96E 100%)' }}
            />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div
              className="h-px w-12 shrink-0"
              style={{ backgroundImage: 'linear-gradient(90deg, #C9A96E 0%, #2A2622 100%)' }}
            />
          </div>
          {/* Step 2 */}
          <div className="flex w-[240px] shrink-0 flex-col items-center gap-6">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-[20px] bg-[#C9A96E] shadow-[0_0_40px_rgba(201,169,110,0.3)]">
              <Logo50sq width={44} height={44} fill="#0A0A0A" accentFill="#0A0A0A" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-[11px] leading-3.5 font-medium tracking-[0.12em] text-[#C9A96E] uppercase">
                Step 2
              </span>
              <h3 className="text-center font-display text-[24px] leading-[30px] font-medium text-[#F2EDE6]">
                Publish to 50sq
              </h3>
              <p className="text-center font-sans text-[14px] leading-[22px] font-light text-[#8A837A]">
                One click from the plugin. Photos sync with full resolution and metadata.
              </p>
            </div>
          </div>
          {/* Arrow 2 */}
          <div className="mb-[60px] flex items-center px-4">
            <div
              className="h-px w-12 shrink-0"
              style={{ backgroundImage: 'linear-gradient(90deg, #2A2622 0%, #C9A96E 100%)' }}
            />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div
              className="h-px w-12 shrink-0"
              style={{ backgroundImage: 'linear-gradient(90deg, #C9A96E 0%, #2A2622 100%)' }}
            />
          </div>
          {/* Step 3 */}
          <div className="flex w-[240px] shrink-0 flex-col items-center gap-6">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-[20px] border border-[#2A2622] bg-[#141414]">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M28 12l-12 12-6-6"
                  stroke="#C9A96E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-[11px] leading-3.5 font-medium tracking-[0.12em] text-[#C9A96E] uppercase">
                Step 3
              </span>
              <h3 className="text-center font-display text-[24px] leading-[30px] font-medium text-[#F2EDE6]">
                Clients receive gallery
              </h3>
              <p className="text-center font-sans text-[14px] leading-[22px] font-light text-[#8A837A]">
                Branded gallery link sent automatically. Clients browse, favorite, and download.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9: Browser Mockup
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center px-[120px] pt-20">
        <div className="flex w-full flex-col overflow-clip rounded-xl border border-[#1F1D1B] shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 bg-[#141414] px-5 py-3.5">
            <div className="flex gap-2">
              <div className="size-3 shrink-0 rounded-full bg-[#2A2622]" />
              <div className="size-3 shrink-0 rounded-full bg-[#2A2622]" />
              <div className="size-3 shrink-0 rounded-full bg-[#2A2622]" />
            </div>
            <div className="flex grow items-center justify-center rounded-md bg-[#0A0A0A] px-4 py-1.5">
              <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">
                yourdomain.50sq.com/g/johnson-wedding
              </span>
            </div>
          </div>
          {/* Gallery content */}
          <div className="flex flex-col bg-[#0E0E0E] p-8">
            <div className="flex items-center justify-between pb-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[28px] leading-[34px] text-[#F2EDE6]">Johnson Wedding</h3>
                <span className="font-sans text-[13px] leading-4 font-light text-[#6B6560]">
                  248 photos · March 8, 2026 · Portland, OR
                </span>
              </div>
              <div className="flex gap-3">
                <div className="rounded-md border border-[#2A2622] bg-[#141414] px-5 py-2">
                  <span className="font-sans text-[14px] leading-5 text-[#F2EDE6]">Favorites (24)</span>
                </div>
                <div className="rounded-md bg-[#C9A96E] px-5 py-2">
                  <span className="font-sans text-[14px] leading-5 font-medium text-[#0A0A0A]">Download All</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              <div className="aspect-square rounded-sm bg-[#1A1816]" />
              <div className="aspect-square rounded-sm bg-[#201D1A]" />
              <div className="aspect-square rounded-sm bg-[#1A1816]" />
              <div className="aspect-square rounded-sm bg-[#252220]" />
              <div className="aspect-square rounded-sm bg-[#201D1A]" />
              <div className="aspect-square rounded-sm bg-[#1A1816]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10: Detailed Features
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Everything You Need
          </span>
          <h2 className="text-center font-display text-[48px] leading-[54px] tracking-[-0.02em] text-[#F2EDE6]">
            Tools that work as hard as you do.
          </h2>
        </div>
        <div className="flex max-w-[1200px] flex-wrap justify-center gap-5">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9 3v12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: 'Smart Watermarking',
              desc: 'Automatic watermarks on proofing galleries. Removed instantly when clients purchase or you deliver finals.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="3" stroke="#C9A96E" strokeWidth="1.5" />
                  <path
                    d="M6 9l2 2 4-4"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Client Proofing',
              desc: 'Clients mark their favorites directly in the gallery. You see selections in real-time — no more email chains.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#C9A96E" strokeWidth="1.5" />
                  <path d="M9 5v4l3 2" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: 'Download Controls',
              desc: 'Set download limits, expiration dates, and resolution options per gallery. Full control over how your work is delivered.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 13l4-4 3 3 5-6 2 2"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Gallery Analytics',
              desc: 'See who viewed your gallery, which photos get the most attention, and track download activity in real-time.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 3h12v12H3z"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3 7h12M7 7v8" stroke="#C9A96E" strokeWidth="1.5" />
                </svg>
              ),
              title: 'Custom Branding',
              desc: "Your logo, colors, domain, and fonts. Every gallery and storefront looks like an extension of your studio's brand.",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="5" width="10" height="8" rx="1" stroke="#C9A96E" strokeWidth="1.5" />
                  <path
                    d="M11 8l5-2v7l-5-2"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Mobile-Ready',
              desc: 'Galleries look stunning on any device. Clients can browse, proof, and purchase from their phone or tablet.',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex w-[380px] shrink-0 flex-col gap-4 rounded-xl border border-[#1F1D1B] bg-[#0E0E0E] p-9 shadow-[0_2px_24px_rgba(0,0,0,0.3)] transition-colors hover:border-[#2A2622]"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E1A]">
                  {f.icon}
                </div>
                <h3 className="font-sans text-[17px] leading-[22px] font-medium text-[#F2EDE6]">{f.title}</h3>
              </div>
              <p className="font-sans text-[14px] leading-[22px] font-light text-[#8A837A]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11: Pricing
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Simple Pricing
          </span>
          <h2 className="text-center font-display text-[48px] leading-[54px] tracking-[-0.02em] text-[#F2EDE6]">
            0% commission. Always.
          </h2>
        </div>
        <div className="flex justify-center gap-5">
          {/* Starter */}
          <div className="flex w-[360px] shrink-0 flex-col gap-8 rounded-2xl border border-[#1F1D1B] bg-[#0E0E0E] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[14px] leading-4.5 font-medium tracking-[0.06em] text-[#8A837A] uppercase">
                Starter
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-[48px] leading-12 text-[#F2EDE6]">$15</span>
                <span className="font-sans text-[14px] leading-4.5 font-light text-[#6B6560]">/month</span>
              </div>
              <span className="font-sans text-[14px] leading-4.5 font-light text-[#8A837A]">100 GB storage</span>
            </div>
            <div className="h-px w-full shrink-0 bg-[#1F1D1B]" />
            <div className="flex flex-col gap-3.5">
              {['Unlimited galleries', 'Client proofing', 'Print storefront', 'Watermarking'].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="font-sans text-[14px] leading-4.5 font-light text-[#B0A99F]">{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="https://app.50sq.com/signup"
              className="flex items-center justify-center rounded-[100px] border border-[#C9A96E4D] p-3.5"
            >
              <span className="font-sans text-[15px] leading-4.5 font-medium text-[#F2EDE6]">Start Free Trial</span>
            </Link>
          </div>
          {/* Plus (highlighted) */}
          <div className="relative flex w-[360px] shrink-0 flex-col gap-8 rounded-2xl border border-[#C9A96E] bg-[#141414] p-10 shadow-[0_4px_40px_rgba(201,169,110,0.1)]">
            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center rounded-[100px] bg-[#C9A96E] px-4 py-1.5">
              <span className="font-sans text-[11px] leading-none font-semibold text-[#0A0A0A] uppercase">
                Most Popular
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[14px] leading-4.5 font-medium tracking-[0.06em] text-[#C9A96E] uppercase">
                Plus
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-[48px] leading-12 text-[#F2EDE6]">$30</span>
                <span className="font-sans text-[14px] leading-4.5 font-light text-[#6B6560]">/month</span>
              </div>
              <span className="font-sans text-[14px] leading-4.5 font-light text-[#8A837A]">1 TB storage</span>
            </div>
            <div className="h-px w-full shrink-0 bg-[#2A2622]" />
            <div className="flex flex-col gap-3.5">
              {[
                'Everything in Starter',
                'Custom domain',
                'Team members (3)',
                'Gallery analytics',
                'Lightroom plugin',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="font-sans text-[14px] leading-4.5 font-light text-[#B0A99F]">{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="https://app.50sq.com/signup"
              className="flex items-center justify-center rounded-[100px] bg-[#C9A96E] p-3.5"
            >
              <span className="font-sans text-[15px] leading-4.5 font-medium text-[#0A0A0A]">Start Free Trial</span>
            </Link>
          </div>
          {/* Pro */}
          <div className="flex w-[360px] shrink-0 flex-col gap-8 rounded-2xl border border-[#1F1D1B] bg-[#0E0E0E] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[14px] leading-4.5 font-medium tracking-[0.06em] text-[#8A837A] uppercase">
                Pro
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-[48px] leading-12 text-[#F2EDE6]">$50</span>
                <span className="font-sans text-[14px] leading-4.5 font-light text-[#6B6560]">/month</span>
              </div>
              <span className="font-sans text-[14px] leading-4.5 font-light text-[#8A837A]">Unlimited storage</span>
            </div>
            <div className="h-px w-full shrink-0 bg-[#1F1D1B]" />
            <div className="flex flex-col gap-3.5">
              {['Everything in Plus', 'Unlimited team members', 'API access', 'Priority support'].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="font-sans text-[14px] leading-4.5 font-light text-[#B0A99F]">{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="https://app.50sq.com/signup"
              className="flex items-center justify-center rounded-[100px] border border-[#C9A96E4D] p-3.5"
            >
              <span className="font-sans text-[15px] leading-4.5 font-medium text-[#F2EDE6]">Start Free Trial</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: Sharing — Private Link Sharing
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex max-w-[640px] flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Share &amp; Protect
          </span>
          <h2 className="text-center font-display text-[52px] leading-[58px] tracking-[-0.03em] text-[#F2EDE6]">
            Your work. Your rules.
          </h2>
          <p className="text-center font-sans text-[17px] leading-7 font-light text-[#8A837A]">
            Private sharing, granular permissions, and secure file delivery — all built in. No third-party tools needed.
          </p>
        </div>

        {/* Sub-feature 1: Private Link Sharing */}
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-20">
          <div className="flex max-w-[480px] shrink-0 flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#C9A96E1A]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8 12l4-4M6.5 9.5L4.6 11.4a2.83 2.83 0 0 0 4 4l1.9-1.9M13.5 10.5l1.9-1.9a2.83 2.83 0 0 0-4-4L9.5 6.5"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-sans text-[13px] leading-4 font-medium tracking-[0.08em] text-[#C9A96E] uppercase">
                Private Link Sharing
              </span>
            </div>
            <h3 className="font-display text-[36px] leading-11 tracking-[-0.02em] text-[#F2EDE6]">
              Share galleries like you share files — with a private link.
            </h3>
            <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
              Generate secure, shareable links for any gallery or collection. Clients click and browse instantly — no
              account creation required. Just like Dropbox, but built for photographers.
            </p>
          </div>
          <div className="flex grow flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 border-b border-[#1F1D1B] bg-[#141414] px-6 py-5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h8" stroke="#6B6560" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="font-sans text-[13px] leading-4 font-light text-[#6B6560]">
                gallery.yourstudio.com/s/aJ7kx92m
              </span>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">Thompson Family Session</span>
                <div className="flex items-center rounded-[100px] bg-[#C9A96E1F] px-3 py-1.5">
                  <span className="font-sans text-[11px] leading-none font-semibold tracking-wider text-[#C9A96E] uppercase">
                    PRIVATE LINK
                  </span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="size-[72px] shrink-0 rounded-sm bg-[#1A1816]" />
                <div className="size-[72px] shrink-0 rounded-sm bg-[#201D1A]" />
                <div className="size-[72px] shrink-0 rounded-sm bg-[#1A1816]" />
                <div className="size-[72px] shrink-0 rounded-sm bg-[#252220]" />
                <div className="size-[72px] shrink-0 rounded-sm bg-[#201D1A]" />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">86 photos</span>
                <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Expires Mar 26</span>
                <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Password protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-feature 2: Client Permissions */}
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-20 pt-16">
          <div className="flex grow flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center border-b border-[#1F1D1B] bg-[#141414] px-6 py-4">
              <span className="font-sans text-[14px] leading-4.5 font-medium text-[#F2EDE6]">
                Gallery Settings — Chen Wedding
              </span>
            </div>
            <div className="flex flex-col">
              {[
                { label: 'Allow downloads', sub: 'Clients can download full-resolution files', on: true },
                { label: 'Password protection', sub: 'Require a password to view this gallery', on: true },
                { label: 'Client favoriting', sub: 'Let clients mark their favorite photos', on: true },
                { label: 'Show watermarks', sub: 'Display watermarks until purchase', on: false },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-4 ${i < arr.length - 1 ? 'border-b border-[#1F1D1B]' : ''}`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">{row.label}</span>
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">{row.sub}</span>
                  </div>
                  {row.on ? (
                    <div className="flex h-[22px] w-10 shrink-0 items-center justify-end rounded-[11px] bg-[#C9A96E] p-0.5">
                      <div className="size-[18px] shrink-0 rounded-full bg-[#0A0A0A]" />
                    </div>
                  ) : (
                    <div className="flex h-[22px] w-10 shrink-0 items-center justify-start rounded-[11px] bg-[#2A2622] p-0.5">
                      <div className="size-[18px] shrink-0 rounded-full bg-[#6B6560]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex max-w-[480px] shrink-0 flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#C9A96E1A]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="9" width="14" height="9" rx="2" stroke="#C9A96E" strokeWidth="1.5" />
                  <path d="M6 9V6a4 4 0 0 1 8 0v3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="13.5" r="1.5" fill="#C9A96E" />
                </svg>
              </div>
              <span className="font-sans text-[13px] leading-4 font-medium tracking-[0.08em] text-[#C9A96E] uppercase">
                Client Permissions
              </span>
            </div>
            <h3 className="font-display text-[36px] leading-11 tracking-[-0.02em] text-[#F2EDE6]">
              Every gallery, tailored to every client.
            </h3>
            <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
              Set permissions per gallery and per client. Control who can download, favorite, purchase, and share.
              Toggle watermarks, password protection, and visibility — all from one settings panel.
            </p>
          </div>
        </div>

        {/* Sub-feature 3: Archive Storage */}
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-20 pt-16">
          <div className="flex max-w-[480px] shrink-0 flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#C9A96E1A]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 3h12a1 1 0 0 1 1 1v3H3V4a1 1 0 0 1 1-1zM3 7h14v3H3zM3 10h14v3H3zM3 13h14v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3z"
                    stroke="#C9A96E"
                    strokeWidth="1.2"
                  />
                  <circle cx="6" cy="5" r="0.8" fill="#C9A96E" />
                  <circle cx="6" cy="8.5" r="0.8" fill="#C9A96E" />
                  <circle cx="6" cy="11.5" r="0.8" fill="#C9A96E" />
                  <circle cx="6" cy="15" r="0.8" fill="#C9A96E" />
                </svg>
              </div>
              <span className="font-sans text-[13px] leading-4 font-medium tracking-[0.08em] text-[#C9A96E] uppercase">
                Archive Storage
              </span>
            </div>
            <h3 className="font-display text-[36px] leading-11 tracking-[-0.02em] text-[#F2EDE6]">
              Large file delivery, without the large price tag.
            </h3>
            <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
              Store full-resolution archives and RAW files. Generate secure download links with expiration dates, usage
              limits, and optional password protection. Your clients get exactly what they need — on your terms.
            </p>
          </div>
          <div className="flex grow flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between border-b border-[#1F1D1B] bg-[#141414] px-6 py-4">
              <span className="font-sans text-[14px] leading-4.5 font-medium text-[#F2EDE6]">Download Links</span>
              <div className="rounded-md bg-[#C9A96E] px-3.5 py-1.5">
                <span className="font-sans text-[13px] leading-4 font-medium text-[#0A0A0A]">+ New Link</span>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Row 1 */}
              <div className="flex items-center justify-between border-b border-[#1F1D1B] px-6 py-4">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">Chen_Wedding_Finals.zip</span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">4.2 GB</span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Expires in 7 days</span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">
                      3/5 downloads used
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-[100px] bg-[#4CAF501F] px-2.5 py-1.5">
                  <span className="font-sans text-[11px] leading-none font-semibold tracking-wider text-[#4CAF50] uppercase">
                    ACTIVE
                  </span>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-between border-b border-[#1F1D1B] px-6 py-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">Park_Portraits_RAW.zip</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="5" width="8" height="5" rx="1" stroke="#6B6560" />
                      <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="#6B6560" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">8.7 GB</span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">
                      Expires in 14 days
                    </span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">
                      Password protected
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-[100px] bg-[#4CAF501F] px-2.5 py-1.5">
                  <span className="font-sans text-[11px] leading-none font-semibold tracking-wider text-[#4CAF50] uppercase">
                    ACTIVE
                  </span>
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[14px] leading-4.5 text-[#6B6560]">Martinez_Engagement.zip</span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">2.1 GB</span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Expired Feb 28</span>
                    <div className="size-[3px] shrink-0 rounded-full bg-[#3A3632]" />
                    <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">
                      5/5 downloads used
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-[100px] bg-[#C9A96E1F] px-2.5 py-1.5">
                  <span className="font-sans text-[11px] leading-none font-semibold tracking-wider text-[#C9A96E] uppercase">
                    EXPIRED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 13: Analytics
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex max-w-[640px] flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Analytics
          </span>
          <h2 className="text-center font-display text-[52px] leading-[58px] tracking-[-0.03em] text-[#F2EDE6]">
            Know what&rsquo;s working.
          </h2>
          <p className="text-center font-sans text-[17px] leading-7 font-light text-[#8A837A]">
            Track gallery views, client engagement, and revenue — all from one dashboard.
          </p>
        </div>
        <div className="flex w-full max-w-[1100px] flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1F1D1B] bg-[#141414] px-6 py-4">
            <span className="font-sans text-[14px] leading-4.5 font-medium text-[#F2EDE6]">Dashboard — March 2026</span>
            <div className="flex gap-2">
              <div className="flex items-center rounded-md bg-[#C9A96E1F] px-3.5 py-1.5">
                <span className="font-sans text-[12px] leading-none font-medium text-[#C9A96E]">This Month</span>
              </div>
              <div className="flex items-center rounded-md bg-[#0A0A0A] px-3.5 py-1.5">
                <span className="font-sans text-[12px] leading-none font-light text-[#6B6560]">All Time</span>
              </div>
            </div>
          </div>
          {/* Stats row */}
          <div className="flex">
            <div className="flex grow flex-col items-center gap-1 border-r border-[#1F1D1B] py-7">
              <span className="font-display text-[36px] leading-9 text-[#F2EDE6]">1,247</span>
              <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Gallery Views</span>
            </div>
            <div className="flex grow flex-col items-center gap-1 border-r border-[#1F1D1B] py-7">
              <span className="font-display text-[36px] leading-9 text-[#C9A96E]">$3,840</span>
              <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Revenue</span>
            </div>
            <div className="flex grow flex-col items-center gap-1 border-r border-[#1F1D1B] py-7">
              <span className="font-display text-[36px] leading-9 text-[#F2EDE6]">342</span>
              <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Downloads</span>
            </div>
            <div className="flex grow flex-col items-center gap-1 py-7">
              <span className="font-display text-[36px] leading-9 text-[#F2EDE6]">89%</span>
              <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">Client Engagement</span>
            </div>
          </div>
          {/* Gallery rows */}
          <div className="flex flex-col border-t border-[#1F1D1B]">
            {[
              { name: 'Chen Wedding', views: '487 views', downloads: '156 downloads', revenue: '$1,240' },
              { name: 'Park Family Portraits', views: '312 views', downloads: '98 downloads', revenue: '$890' },
              { name: 'Thompson Engagement', views: '448 views', downloads: '88 downloads', revenue: '$1,710' },
            ].map((row, i, arr) => (
              <div
                key={row.name}
                className={`flex items-center justify-between px-6 py-3.5 ${i < arr.length - 1 ? 'border-b border-[#1F1D1B]' : ''}`}
              >
                <span className="font-sans text-[13px] leading-4 text-[#F2EDE6]">{row.name}</span>
                <div className="flex items-center gap-8">
                  <span className="font-sans text-[13px] leading-4 font-light text-[#8A837A]">{row.views}</span>
                  <span className="font-sans text-[13px] leading-4 font-light text-[#8A837A]">{row.downloads}</span>
                  <span className="font-sans text-[13px] leading-4 text-[#C9A96E]">{row.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 14: Team
      ═══════════════════════════════════════════ */}
      <section className="mx-auto flex w-full max-w-[1200px] items-center gap-20 px-20 pt-[120px]">
        <div className="flex max-w-[480px] shrink-0 flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#C9A96E1A]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="7" cy="7" r="3" stroke="#C9A96E" strokeWidth="1.5" />
                <path
                  d="M1 17v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="15" cy="6" r="2.5" stroke="#C9A96E" strokeWidth="1.2" />
                <path d="M15 11.5a3.5 3.5 0 0 1 3.5 3.5v1" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-sans text-[13px] leading-4 font-medium tracking-[0.08em] text-[#C9A96E] uppercase">
              Team Management
            </span>
          </div>
          <h2 className="font-display text-[36px] leading-11 tracking-[-0.02em] text-[#F2EDE6]">
            Run your studio, not just your camera.
          </h2>
          <p className="font-sans text-[16px] leading-[26px] font-light text-[#8A837A]">
            Invite second shooters, editors, and studio managers with role-based access. Everyone sees exactly what they
            need — nothing more.
          </p>
        </div>
        <div className="flex grow flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between border-b border-[#1F1D1B] bg-[#141414] px-6 py-4">
            <span className="font-sans text-[14px] leading-4.5 font-medium text-[#F2EDE6]">Team Members</span>
            <div className="rounded-md bg-[#C9A96E] px-3.5 py-1.5">
              <span className="font-sans text-[13px] leading-4 font-medium text-[#0A0A0A]">+ Invite</span>
            </div>
          </div>
          {[
            {
              initials: 'YJ',
              name: 'You',
              email: 'you@yourstudio.com',
              role: 'OWNER',
              bg: 'bg-[#C9A96E]',
              textColor: 'text-[#0A0A0A]',
              roleBg: 'bg-[#C9A96E1F]',
              roleColor: 'text-[#C9A96E]',
            },
            {
              initials: 'MK',
              name: 'Maya Kim',
              email: 'maya@yourstudio.com',
              role: 'EDITOR',
              bg: 'bg-[#2A2622]',
              textColor: 'text-[#8A837A]',
              roleBg: 'bg-[#C9A96E14]',
              roleColor: 'text-[#8A837A]',
            },
            {
              initials: 'JR',
              name: 'James Rivera',
              email: 'james@freelance.com',
              role: '2ND SHOOTER',
              bg: 'bg-[#2A2622]',
              textColor: 'text-[#8A837A]',
              roleBg: 'bg-[#C9A96E14]',
              roleColor: 'text-[#8A837A]',
            },
            {
              initials: 'SL',
              name: 'Sara Lopez',
              email: 'sara@yourstudio.com',
              role: 'MANAGER',
              bg: 'bg-[#2A2622]',
              textColor: 'text-[#8A837A]',
              roleBg: 'bg-[#C9A96E14]',
              roleColor: 'text-[#8A837A]',
            },
          ].map((member, i, arr) => (
            <div
              key={member.initials}
              className={`flex items-center justify-between px-6 py-4 ${i < arr.length - 1 ? 'border-b border-[#1F1D1B]' : ''}`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${member.bg}`}>
                  <span className={`font-sans text-[14px] leading-4.5 font-semibold ${member.textColor}`}>
                    {member.initials}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-sans text-[14px] leading-4.5 text-[#F2EDE6]">{member.name}</span>
                  <span className="font-sans text-[12px] leading-4 font-light text-[#6B6560]">{member.email}</span>
                </div>
              </div>
              <div className={`flex items-center rounded-[100px] px-3 py-1.5 ${member.roleBg}`}>
                <span
                  className={`font-sans text-[11px] leading-none font-semibold tracking-wider uppercase ${member.roleColor}`}
                >
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 15: Roadmap
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-16 px-20 pt-[120px]">
        <div className="flex max-w-[640px] flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Roadmap
          </span>
          <h2 className="text-center font-display text-[52px] leading-[58px] tracking-[-0.03em] text-[#F2EDE6]">
            We&rsquo;re just getting started.
          </h2>
          <p className="text-center font-sans text-[17px] leading-7 font-light text-[#8A837A]">
            Here&rsquo;s what&rsquo;s coming next. Built by photographers, for photographers.
          </p>
        </div>
        <div className="flex w-full max-w-[1000px] flex-col px-20">
          {[
            {
              status: 'In Progress',
              statusBg: 'bg-[#143D1A]',
              statusBorder: 'border-[#2D6B35]',
              statusColor: 'text-[#6FD67A]',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="#C9A96E" strokeWidth="1.2" />
                  <path d="M5 6h6M5 8h6M5 10h4" stroke="#C9A96E" strokeLinecap="round" />
                </svg>
              ),
              title: 'Portfolio Websites',
              desc: 'Beautiful, fast portfolio sites that live alongside your galleries and storefront — all under one domain. No more juggling Squarespace and a separate gallery tool.',
            },
            {
              status: 'Planned',
              statusBg: 'bg-[#2A2210]',
              statusBorder: 'border-[#5C4D1E]',
              statusColor: 'text-[#D4B45C]',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" stroke="#C9A96E" strokeWidth="1.2" />
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" stroke="#C9A96E" strokeWidth="1.2" />
                  <path
                    d="M6 7l2 2 2-2"
                    stroke="#C9A96E"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Custom Forms',
              desc: 'Embeddable forms for client booking, inquiries, and questionnaires. Capture leads directly on your portfolio site or share a link — responses go straight to your dashboard.',
            },
            {
              status: 'Planned',
              statusBg: 'bg-[#2A2210]',
              statusBorder: 'border-[#5C4D1E]',
              statusColor: 'text-[#D4B45C]',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="2" stroke="#C9A96E" strokeWidth="1.2" />
                  <path d="M2 6h12" stroke="#C9A96E" strokeWidth="1.2" />
                  <path d="M5 9h2M9 9h2" stroke="#C9A96E" strokeLinecap="round" />
                </svg>
              ),
              title: 'Payment Forms',
              desc: 'Require payment to complete a form submission. Collect deposits, session fees, or retainer payments upfront — no separate invoicing tool needed.',
            },
            {
              status: 'Planned',
              statusBg: 'bg-[#2A2210]',
              statusBorder: 'border-[#5C4D1E]',
              statusColor: 'text-[#D4B45C]',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="2" width="10" height="12" rx="1" stroke="#C9A96E" strokeWidth="1.2" />
                  <path d="M6 5h4M6 7.5h4M6 10h2" stroke="#C9A96E" strokeLinecap="round" />
                </svg>
              ),
              title: 'Booking Management',
              desc: 'A full booking calendar with availability, automated reminders, contracts, and session workflows. Manage your entire client pipeline from inquiry to delivery.',
            },
            {
              status: 'Planned',
              statusBg: 'bg-[#2A2210]',
              statusBorder: 'border-[#5C4D1E]',
              statusColor: 'text-[#D4B45C]',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="4" y="2" width="8" height="12" rx="2" stroke="#C9A96E" strokeWidth="1.2" />
                  <line x1="6.5" y1="12" x2="9.5" y2="12" stroke="#C9A96E" strokeLinecap="round" />
                </svg>
              ),
              title: 'iOS & Android Client Apps',
              desc: 'Native mobile apps for your clients. Push notifications when galleries are ready, easy favoriting and purchasing on the go, and offline viewing for downloaded collections.',
              last: true,
            },
          ].map((item) => (
            <div key={item.title} className={`flex gap-8 py-8 ${!item.last ? 'border-b border-[#1F1D1B]' : ''}`}>
              <div className="flex w-[100px] shrink-0 flex-col items-center gap-2 pt-1.5">
                <div
                  className={`flex items-center rounded-[100px] border px-3.5 py-1.5 ${item.statusBg} ${item.statusBorder}`}
                >
                  <span className={`font-sans text-[11px] leading-none ${item.statusColor}`}>{item.status}</span>
                </div>
              </div>
              <div className="flex grow flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E1A]">
                    {item.icon}
                  </div>
                  <h3 className="font-sans text-[18px] leading-[22px] font-medium text-[#F2EDE6]">{item.title}</h3>
                </div>
                <p className="pl-11 font-sans text-[15px] leading-6 font-light text-[#8A837A]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 16: Changelog
      ═══════════════════════════════════════════ */}
      <section className="flex w-full flex-col items-center gap-12 px-20 pt-[120px]">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[13px] leading-4 font-medium tracking-widest text-[#C9A96E] uppercase">
            Changelog
          </span>
          <h2 className="text-center font-display text-[44px] leading-[50px] tracking-[-0.02em] text-[#F2EDE6]">
            What&rsquo;s new in 50sq
          </h2>
        </div>
        <div className="flex w-full max-w-[800px] flex-col overflow-clip rounded-2xl border border-[#1F1D1B] shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
          {[
            {
              date: 'Mar 10',
              version: 'v2.4.0',
              title: 'Batch watermark controls',
              tag: 'New',
              tagBg: 'bg-[#4CAF501F]',
              tagColor: 'text-[#4CAF50]',
              desc: 'Apply or remove watermarks across entire galleries in one click. Supports custom positioning and opacity per gallery.',
            },
            {
              date: 'Mar 4',
              version: 'v2.3.2',
              title: 'Lightroom plugin performance boost',
              tag: 'Improved',
              tagBg: 'bg-[#C9A96E1F]',
              tagColor: 'text-[#C9A96E]',
              desc: 'Upload speeds now 40% faster for RAW files. Improved sync reliability for collections over 500 photos.',
            },
            {
              date: 'Feb 26',
              version: 'v2.3.0',
              title: 'Gallery expiration settings',
              tag: 'New',
              tagBg: 'bg-[#4CAF501F]',
              tagColor: 'text-[#4CAF50]',
              desc: 'Set auto-expiry dates on galleries and download links. Clients get reminders before access expires.',
            },
          ].map((entry, i) => (
            <div key={entry.version} className="flex items-start gap-5 border-b border-[#1F1D1B] p-6">
              <div className="flex w-[90px] shrink-0 flex-col items-start gap-0.5 pt-0.5">
                <span className="font-sans text-[13px] leading-4 font-medium text-[#F2EDE6]">{entry.date}</span>
                <span className="font-sans text-[11px] leading-3.5 font-light text-[#6B6560]">{entry.version}</span>
              </div>
              <div className="flex grow flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-[15px] leading-4.5 font-medium text-[#F2EDE6]">{entry.title}</span>
                  <div className={`flex items-center rounded-[100px] px-2 py-1 ${entry.tagBg}`}>
                    <span
                      className={`font-sans text-[11px] leading-none font-semibold tracking-wider uppercase ${entry.tagColor}`}
                    >
                      {entry.tag}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-[13px] leading-5 font-light text-[#8A837A]">{entry.desc}</p>
              </div>
            </div>
          ))}
          {/* View full changelog footer */}
          <div className="flex items-center justify-center bg-[#141414] px-6 py-5">
            <Link href="/changelog" className="flex items-center gap-2">
              <span className="font-sans text-[14px] leading-4.5 text-[#C9A96E]">View full changelog</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 3l4 4-4 4"
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 17: CTA
      ═══════════════════════════════════════════ */}
      <section className="relative mt-[120px] w-full overflow-hidden bg-[#141414]">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#C9A96E] opacity-[0.04] blur-[120px]" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-20 py-[120px]">
          <h2 className="max-w-[700px] text-center font-display text-[60px] leading-[68px] font-light tracking-[-0.03em] text-[#F2EDE6]">
            Start growing your photography business today.
          </h2>
          <p className="max-w-[480px] text-center font-sans text-[18px] leading-7 font-light text-[#8A837A]">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://app.50sq.com/signup"
              className="flex items-center justify-center rounded-[100px] bg-[#C9A96E] px-11 py-4 shadow-[0_0_30px_rgba(201,169,110,0.25)] transition hover:shadow-[0_0_40px_rgba(201,169,110,0.35)]"
            >
              <span className="font-sans text-[16px] leading-5 font-medium text-[#0A0A0A]">Start Free Trial</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center rounded-[100px] border border-[#C9A96E4D] px-11 py-4"
            >
              <span className="font-sans text-[16px] leading-5 text-[#F2EDE6]">Book a Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 18: Footer
      ═══════════════════════════════════════════ */}
      <footer className="w-full border-t border-[#1F1D1B] bg-[#141414]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-20 py-10">
          <Logo50sq width={36} height={36} />
          <div className="flex items-center gap-8">
            {['Privacy', 'Terms', 'Contact', 'Twitter'].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="font-sans text-[14px] leading-4.5 font-light text-[#F2EDE666] transition hover:text-[#F2EDE6]"
              >
                {link}
              </Link>
            ))}
          </div>
          <span className="font-sans text-[13px] leading-4 font-light text-[#F2EDE640]">
            © 2026 50sq. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  )
}
