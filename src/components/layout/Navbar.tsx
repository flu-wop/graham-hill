"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/",       label: "Home"    },
  { href: "/about",  label: "About"   },
  { href: "/music",  label: "Music"   },
  { href: "/sync",   label: "Sync Licensing" },
  { href: "/press",  label: "Press"   },
  { href: "/contact",label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Subtle backdrop blur */}
      <div className="absolute inset-0 bg-studio-black/60 backdrop-blur-sm border-b border-border/30" />

      {/* Logo / wordmark */}
      <Link href="/" className="relative z-10 flex flex-col leading-none">
        <span className="font-serif text-base font-light tracking-widest text-cream">
          GRAHAM HILL
        </span>
        <span className="font-sans text-[0.55rem] tracking-[0.3em] text-mist uppercase mt-0.5">
          The Drummer Steps Forward
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="relative z-10 hidden md:flex items-center gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname === href
                  ? "text-gold"
                  : "text-mist hover:text-cream"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="relative z-10 md:hidden text-mist hover:text-cream transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-charcoal border-b border-border/50 py-6 px-6 z-40">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-sans text-sm tracking-[0.2em] uppercase ${
                    pathname === href ? "text-gold" : "text-cream"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
