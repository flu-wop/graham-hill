import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-studio-black border-t border-border/40 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border/40">
          {/* Wordmark */}
          <div>
            <p className="font-serif text-2xl font-light text-cream tracking-wide">Graham Hill</p>
            <p className="font-sans text-xs tracking-[0.25em] text-mist uppercase mt-1">
              Alternative · 2026
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { href: "/",        label: "Home"    },
                { href: "/about",   label: "About"   },
                { href: "/music",   label: "Music"   },
                { href: "/sync",    label: "Sync Licensing" },
                { href: "/press",   label: "Press & EPK" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-xs tracking-[0.18em] uppercase text-mist hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-mist/60 tracking-wide">
            © {new Date().getFullYear()} Graham Hill. All rights reserved.
          </p>
          <p className="font-sans text-xs text-mist/60 tracking-wide">
            Represented by{" "}
            <a
              href="https://midcitysound.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              Mid City Sound Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
