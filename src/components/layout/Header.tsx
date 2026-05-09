"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5ECEC] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo.png"
            alt="NeroTech Consulting"
            width={144}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B7280] transition-colors hover:text-[#12A3A2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Start a conversation</Button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#18232F] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E5ECEC] bg-white lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-[#18232F] transition-colors hover:text-[#12A3A2]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pb-2">
              <Button href="/contact" className="w-full justify-center">
                Start a conversation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
