"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from "./logo";

const NAV_LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};
const NAV_ITEMS = [
  { name: "Features", link: "/features" },
  { name: "Articles", link: "/articles" },
  { name: "Roadmap", link: "/roadmap" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Determine active item based on current pathname
  const getActiveItem = () => {
    if (pathname === "/") {
      return null; // No active item for home page
    }
    const currentNavItem = NAV_ITEMS.find((item) => {
      if (item.link.startsWith("/#")) {
        return false; // Don't activate hash links when not on home
      }
      return pathname === item.link;
    });
    return currentNavItem?.name || null;
  };

  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`,
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4 z-50 fixed top-0 left-0 right-0 bg-background/10 backdrop-blur-md border-b">
      <nav className="container flex items-center justify-between mx-auto">
        {/* Left WordMark */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          {/*<img src={NAV_LOGO.src} className="max-h-8 w-8" alt={NAV_LOGO.alt} />*/}
          <span className="text-lg font-semibold tracking-tighter">
            {/*{NAV_LOGO.title}*/}
          </span>
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.link}
                      data-nav-item={item.name}
                      className={`relative cursor-pointer hover:text-primary text-sm font-medium bg-transparent hover:bg-transparent ${
                        activeItem === item.name
                          ? "text-foreground bg-transparent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-primary h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            size="sm"
            className="h-10 py-2.5 text-sm font-normal"
            variant="link"
            asChild
          >
            <a href="https://app.50sq.com/register">Sign up</a>
          </Button>

          <Button
            size="sm"
            className="h-10 py-2.5 text-sm font-normal"
            variant="link"
            asChild
          >
            <a href="https://app.50sq.com/login">Customer Login</a>
          </Button>
        </div>
      </nav>
    </section>
  );
};

export { Navbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({ activeItem }: { activeItem: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <Link
                  href={navItem.link}
                  onClick={() => setIsOpen(false)}
                  className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button variant="outline" asChild>
                <a href="https://app.50sq.com/register">Sign Up</a>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
