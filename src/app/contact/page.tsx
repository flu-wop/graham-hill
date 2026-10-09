import type { Metadata } from "next";
import { contactFor, contactPending, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Press, sync licensing and general contact for ${site.artist}.`,
};

const rows = [
  { kind: "press" as const, label: "Press", note: "Interviews, reviews, premieres", subject: "Press" },
  { kind: "sync" as const, label: "Sync licensing", note: "Film, television, advertising, games", subject: "Sync inquiry" },
  { kind: "general" as const, label: "General", note: "Everything else", subject: "Hello" },
];

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <p className="label text-oxblood">Contact</p>
        <h1 className="sleeve-title text-[44px] sm:text-[64px] mt-5">Get in touch</h1>
      </header>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-12 sm:pt-16">
        <ul className="border-t border-ink">
          {rows.map((r) => {
            const email = contactFor(r.kind);
            return (
              <li key={r.kind} className="grid gap-2 sm:grid-cols-[260px_1fr_auto] sm:items-baseline sm:gap-8 py-7 border-b border-rule">
                <span className="sleeve-title text-[24px]">{r.label}</span>
                <span className="text-muted">{r.note}</span>
                {email ? (
                  <a
                    className="link text-[20px] break-all"
                    href={`mailto:${email}?subject=${encodeURIComponent(`${r.subject} — ${site.artist}`)}`}
                  >
                    {email}
                  </a>
                ) : (
                  <span className="label text-muted text-[13px]">Coming soon</span>
                )}
              </li>
            );
          })}
        </ul>
        {!rows.some((r) => contactFor(r.kind)) && (
          <p className="mt-8 text-[20px] max-w-prose">{contactPending}</p>
        )}
        <p className="mt-6">
          <a className="link label" href="/press/GrahamHill_TakingInStars_PressKit.zip" download>
            Press kit (ZIP) ↓
          </a>
        </p>
      </section>
    </>
  );
}
