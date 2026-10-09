"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/bio", label: "Bio" },
  { href: "/music", label: "Music" },
  { href: "/sync", label: "Sync Licensing" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const path = usePathname();
  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => {
          const active = path === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`label inline-flex items-center min-h-[44px] transition-colors ${
                  active ? "text-oxblood" : "text-ink hover:text-oxblood"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
