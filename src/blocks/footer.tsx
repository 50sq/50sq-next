"use client";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/global/logo";
import { Badge } from "@/components/ui/badge";
import { useSystemStatus } from "@/hooks/useSystemStatus";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

const NAVIGATION = [
  {
    title: "Platform",
    links: [
      { name: "Overview", href: "#" },
      { name: "Use Cases", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Team", href: "#" },
      { name: "Support", href: "#" },
      { name: "Legal", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { name: "Tutorials", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Quickstart", href: "#" },
    ],
  },
];

const Footer = () => {
  const { status } = useSystemStatus();

  const getStatusConfig = () => {
    switch (status) {
      case "operational":
        return {
          bgColor: "bg-green-500",
          pulseColor: "bg-green-400/50",
          text: "All systems operational",
        };
      case "degraded":
        return {
          bgColor: "bg-yellow-500",
          pulseColor: "bg-yellow-400/50",
          text: "Some systems degraded",
        };
      case "outage":
        return {
          bgColor: "bg-red-500",
          pulseColor: "bg-red-400/50",
          text: "Service outage detected",
        };
      case "loading":
      default:
        return {
          bgColor: "bg-gray-500",
          pulseColor: "bg-gray-400/50",
          text: "Checking system status...",
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <section className="bg-background py-32">
      <footer className="container mx-auto flex flex-col gap-32">
        <div className="flex w-full flex-col justify-between gap-y-24 lg:flex-row">
          <div className="flex shrink-0 grow-0 basis-auto flex-col items-start justify-start gap-6">
            {/* Logo */}
            <a href="https://shadcnblocks.com">
              <Logo />
            </a>
            <p className="max-w-54 text-muted-foreground w-full text-base leading-normal md:text-lg">
              Enhance and tailor your digital experiences effortlessly, at
              scale.
            </p>
            <div className="flex w-full items-center justify-start gap-7">
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  href={item.href}
                  key={`social-link-${i}`}
                  className="flex size-6 opacity-100 transition-opacity hover:opacity-50"
                >
                  <item.icon className="stroke-foreground m-auto size-full" />
                </a>
              ))}
            </div>
            <div className="pt-6">
              <Badge className="border-muted bg-background text-foreground rounded-full p-0">
                <a href="https://app.50sq.com/up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2">
                  <div className="relative size-[0.4375rem]">
                    <span className={`-translate-1/2 absolute left-1/2 top-1/2 z-10 size-[0.6875rem] animate-pulse rounded-full ${statusConfig.pulseColor}`} />
                    <span className={`-translate-1/2 absolute left-1/2 top-1/2 z-20 size-full rounded-full ${statusConfig.bgColor}`} />
                  </div>
                  <div className="text-[0.9375rem] font-normal leading-none">
                    {statusConfig.text}
                  </div>
                </a>
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <nav className="flex flex-wrap gap-24 md:gap-40">
              {NAVIGATION.map((section, _) => (
                <div
                  key={section.title}
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <p className="text-foreground mb-2 text-sm font-semibold md:text-base">
                    {section.title}
                  </p>
                  {section.links.map((link, _) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-foreground text-sm font-medium leading-none opacity-50 transition-opacity hover:opacity-100"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="text-muted-foreground text-sm font-medium">
            &copy;{new Date().getFullYear()} Ninjaparade Digital Product
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
            Proudly Made in Canada{" "}
            <svg
              className="w-6 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9600 4800"
            >
              <title>Flag of Canada</title>
              <path
                fill="#f00"
                d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"
              />
              <path
                fill="#fff"
                d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
              />
            </svg>
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer };
