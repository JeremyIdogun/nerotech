"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-nerotech-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-14">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo.png"
            alt="NeroTech Consulting"
            width={144}
            height={36}
            priority
            className="[filter:brightness(0)_invert(1)_opacity(0.9)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "border-b-2 border-nerotech-teal pb-1 text-[13px] font-semibold text-white"
                    : "text-[13px] font-medium text-white/50 transition-colors hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full border-[1.5px] border-nerotech-teal px-5 py-2 text-[13px] font-semibold text-nerotech-teal transition-colors hover:bg-nerotech-teal/10"
          >
            Start a conversation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/[0.07] bg-nerotech-charcoal lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base text-white transition-colors hover:text-nerotech-teal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full rounded-full border-[1.5px] border-nerotech-teal py-3 text-center text-sm font-semibold text-nerotech-teal"
                onClick={() => setOpen(false)}
              >
                Start a conversation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
