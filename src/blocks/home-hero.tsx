"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HomeHero({ className }: { className?: string }) {
  const images = [
    "/images/hero/1.png",
    "/images/hero/2.png",
    "/images/hero/3.png",
    "/images/hero/4.png",
    "/images/hero/5.png",
    "/images/hero/1.png",
    "/images/hero/6.png",
    "/images/hero/7.png",
    "/images/hero/8.png",
    "/images/hero/9.png",
    "/images/hero/1.png",
    "/images/hero/6.png",
    "/images/hero/7.png",
    "/images/hero/8.png",
    "/images/hero/9.png",
    "/images/hero/2.png",
    "/images/hero/6.png",
    "/images/hero/7.png",
    "/images/hero/8.png",
    "/images/hero/9.png",
    "/images/hero/2.png",
    "/images/hero/6.png",
    "/images/hero/7.png",
    "/images/hero/8.png",
    "/images/hero/9.png",
    "/images/hero/1.png",
    "/images/hero/6.png",
    "/images/hero/5.png",
    // "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    // "https://assets.aceternity.com/animated-modal.png",
    // "https://assets.aceternity.com/animated-testimonials.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    // "https://assets.aceternity.com/github-globe.png",
    // "https://assets.aceternity.com/glare-card.png",
    // "https://assets.aceternity.com/layout-grid.png",
    // "https://assets.aceternity.com/flip-text.png",
    // "https://assets.aceternity.com/hero-highlight.png",
    // "https://assets.aceternity.com/carousel.webp",
    // "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    // "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    // "https://assets.aceternity.com/signup-form.png",
    // "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    // "https://assets.aceternity.com/spotlight-new.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    // "https://assets.aceternity.com/tabs.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    // "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    // "https://assets.aceternity.com/glowing-effect.webp",
    // "https://assets.aceternity.com/hover-border-gradient.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    // "https://assets.aceternity.com/macbook-scroll.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    // "https://assets.aceternity.com/multi-step-loader.png",
    // "https://assets.aceternity.com/vortex.png",
    // "https://assets.aceternity.com/wobble-card.png",
    // "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div
      className={cn(
        "relative mx-auto flex h-full min-h-[960px] w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-3xl",
        className,
      )}
    >
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-primary md:text-4xl lg:text-6xl">
        Transform your photography business with the{" "}
        <span className="relative z-20 inline-block rounded-xl bg-primary/0 px-2 py-2 text-foreground underline decoration-foreground decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          professional
        </span>{" "}
        platform you deserve.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Streamline your workflow, deliver exceptional client experiences, and
        grow your business with our comprehensive photography platform designed
        by photographers, for photographers.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button variant="outline" asChild>
          <a href="https://app.50sq.com/register">Start Free Trial</a>
        </Button>
        <Button variant="link" asChild>
          <Link href="/#features">View Features</Link>
        </Button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
