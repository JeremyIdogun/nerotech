import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { navItems } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-[#18232F] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#12A3A2] text-sm font-bold text-white">
                N
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                NeroTech
              </span>
            </Link>
            <p className="text-sm leading-7 text-white/60">
              A data-driven consulting firm helping institutions modernise systems, improve
              decisions and deliver sustainable transformation.
            </p>
            <p className="mt-4 text-xs text-white/40">{siteConfig.rcNumber}</p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
              Company
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#12A3A2]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#12A3A2]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#12A3A2]" />
                <span className="text-sm text-white/60">{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
