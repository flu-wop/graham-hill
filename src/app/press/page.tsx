import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactFor, contactPending, photos, pressPhotoOrder, priorWork, site, songNotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Press",
  description: `Press kit for ${site.artist}’s ${site.album}: bio, fast facts, photos and contact.`,
};

const downloads = [
  { href: "/press/GrahamHill_TakingInStars_PressKit.zip", label: "Complete press kit", note: "ZIP · one-sheet, cover, photos" },
  { href: "/press/GrahamHill_TakingInStars_PressKit_WebRes.zip", label: "Press kit, web resolution", note: "ZIP · light version for phones" },
  { href: "/press/GrahamHill_TakingInStars_OneSheet.pdf", label: "Press one-sheet", note: "PDF" },
  { href: "/press/GrahamHill_TakingInStars_Cover_3000.jpg", label: "Album cover", note: "3000 × 3000 JPG" },
];

export default function Press() {
  const email = contactFor("press");
  const singles = songNotes.filter((s) => s.label.startsWith("Single"));
  return (
    <>
      <header className="page-head">
        <p className="label text-oxblood">Press</p>
        <h1 className="sleeve-title text-[44px] sm:text-[64px] mt-5">Press kit</h1>
        <p className="mt-6 text-[22px] max-w-prose">
          {email ? (
            <>
              Press contact:{" "}
              <a className="link" href={`mailto:${email}?subject=${encodeURIComponent(`Press — ${site.artist}`)}`}>
                {email}
              </a>
            </>
          ) : (
            "Everything a writer, editor or programmer needs, in one download."
          )}
        </p>
        <a
          href="/press/GrahamHill_TakingInStars_PressKit.zip"
          download
          className="label inline-flex items-center justify-center min-h-[52px] px-7 mt-8 bg-ink text-paper hover:bg-oxblood transition-colors"
        >
          Download the press kit (ZIP) ↓
        </a>
        <p className="label text-muted text-[13px] mt-3">One-sheet PDF · album cover · eight photos · credit Cory Fontenot</p>
      </header>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-12 sm:pt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-20 items-start">
        <div>
          <h2 className="label text-oxblood">Short bio</h2>
          <div className="mt-6 border-t border-ink pt-6 space-y-5 text-[20px] leading-relaxed max-w-prose">
            <p>
              Graham Hill is a songwriter and drummer based in New Orleans. His debut album, <em>{site.album}</em>, was
              written by Hill and produced with Donald “Donny” Markowitz at Mid City Sound Studio, and arrives{" "}
              {site.release}.
            </p>
            <p>
              Hill was the drummer for Beach House from 2008 to 2016, playing on <em>Teen Dream</em> and{" "}
              <em>Depression Cherry</em>, and has recorded with Papercuts, The Parish and his own project Roman Ruins.
              His father, Steve Hill, was the house bassist for NPR’s <em>Mountain Stage</em>; the vintage photograph of
              the two of them is the album’s cover.
            </p>
          </div>
          <Link href="/bio" className="label inline-block mt-6 link">
            Full bio
          </Link>
        </div>

        <div>
          <h2 className="label text-oxblood">Fast facts</h2>
          <dl className="mt-6 border-t border-ink">
            {[
              ["Artist", site.artist],
              ["Album", site.album],
              ["Genre", site.genre],
              ["Based in", site.location],
              ["Release", site.release],
              ["Producers", "Graham Hill & Donald Markowitz"],
              ["Family", "Steve Hill (father) — house bassist, NPR’s Mountain Stage; founding member, Putnam County Pickers"],
            ].map(([k, v]) => (
              <div key={k} className="py-3 border-b border-rule">
                <dt className="label text-muted text-[13px]">{k}</dt>
                <dd className="mt-1 text-[18px] leading-snug">{v}</dd>
              </div>
            ))}
            <div className="py-3 border-b border-rule">
              <dt className="label text-muted text-[13px]">Prior work</dt>
              <dd className="mt-1 text-[18px] leading-snug">
                {priorWork.map(([band, role]) => (
                  <span key={band} className="block">
                    {band} — {role.toLowerCase()}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-24" aria-labelledby="singles">
        <h2 id="singles" className="label text-oxblood">The singles</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {singles.map((s) => (
            <article key={s.title} className="border-t border-ink pt-5">
              <p className="label text-muted text-[13px]">{s.label}</p>
              <h3 className="sleeve-title text-[24px] mt-3">{s.title}</h3>
              <p className="mt-4 text-[18px] leading-relaxed">“{s.text[0]}”</p>
            </article>
          ))}
        </div>
        <Link href="/music" className="label inline-block mt-8 link">
          Notes on every single, in full
        </Link>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-24" aria-labelledby="photos">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="photos" className="label text-oxblood">Photos</h2>
          <p className="label text-muted text-[13px]">Credit: {site.photoCredit} · Full-size TIFFs on request</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
          {pressPhotoOrder.map((key) => {
            const p = photos[key];
            return (
              <li key={key}>
                <div className="grain aspect-[4/5] overflow-hidden bg-sleeve">
                  <Image
                    src={`/images/${p.id}.webp`}
                    width={p.w}
                    height={p.h}
                    alt={p.alt}
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <a
                  href={`/press/GrahamHill_${p.id}_CoryFontenot.jpg`}
                  download
                  className="label inline-flex items-center min-h-[44px] link no-underline hover:underline"
                >
                  Download JPG
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-16" aria-labelledby="downloads">
        <h2 id="downloads" className="label text-oxblood">Downloads</h2>
        <ul className="mt-6 border-t border-ink">
          {downloads.map((d) => (
            <li key={d.href} className="border-b border-rule">
              <a href={d.href} download className="group flex items-baseline justify-between gap-4 py-5">
                <span className="text-[22px] group-hover:text-oxblood transition-colors">{d.label}</span>
                <span className="label text-muted text-[13px]">{d.note} ↓</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
