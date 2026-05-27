import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { navItems } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0E1820]">
      <div className="mx-auto w-full max-w-7xl px-5 pb-7 pt-16 sm:px-6 lg:px-14">
        {/* 4-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center">
              <Image
                src="/brand/logo.png"
                alt="NeroTech Consulting"
                width={144}
                height={36}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="mb-4 max-w-[340px] text-[13px] leading-[1.78] text-white/50">
              A data-driven consulting firm helping institutions modernise systems, improve
              decisions and deliver sustainable transformation.
            </p>
            <p className="text-[11px] tracking-[0.06em] text-white/32">
              {siteConfig.rcNumber}
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-nerotech-teal">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-nerotech-teal">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="mb-4 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-nerotech-teal">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/36">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[13px] text-white/78 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/36">
                  Office
                </p>
                <p className="text-[13px] text-white/78">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-white/36">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[11.5px] text-white/36">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
