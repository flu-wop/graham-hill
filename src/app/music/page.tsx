import type { Metadata } from "next";
import Image from "next/image";
import SinglePlayer from "@/components/SinglePlayer";
import { credits, site, songNotes, tracks } from "@/content/site";

export const metadata: Metadata = {
  title: "Music",
  description: `${site.album} — tracklist, credits and notes on the songs from ${site.artist}.`,
};

export default function Music() {
  return (
    <>
      <header className="page-head">
        <p className="label text-oxblood">Music</p>
        <h1 className="sleeve-title text-[44px] sm:text-[64px] mt-5">{site.album}</h1>
        <p className="mt-6 text-[22px]">
          The debut album, {site.release}. {site.genre}.
        </p>
      </header>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-12 sm:pt-16 grid gap-12 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-20 items-start">
        <div>
          <Image
            src="/images/cover.jpg"
            alt={`${site.album} album cover: young Graham Hill with drumsticks, his father on guitar behind him`}
            width={1200}
            height={1200}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="w-full h-auto shadow-[0_1px_0_#DCD3BE,0_18px_40px_-24px_rgba(35,27,23,0.45)]"
          />
          <div className="mt-10">
            <p className="label text-muted mb-3">Listen</p>
            <SinglePlayer />
          </div>
        </div>

        <div>
          <h2 className="label text-oxblood">Tracklist</h2>
          <ol className="mt-6 border-t border-ink">
            {tracks.map((t) => (
              <li key={t.n} className="flex items-baseline gap-5 py-4 border-b border-rule">
                <span className="label text-muted w-6 text-right shrink-0">{t.n}</span>
                <span className="flex-1 min-w-0 text-[21px] leading-snug">
                  {t.title}
                  {t.feature && <span className="text-muted"> (feat. {t.feature})</span>}
                  {t.single && <span className="label text-oxblood text-[12px] ml-3 align-middle">Single {t.single}</span>}
                </span>
                <span className="label text-muted text-[14px] shrink-0">{t.length}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-muted text-[17px]">
            Streaming links arrive with each single. Full streaming embeds follow the album release.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-24" aria-labelledby="notes">
        <h2 id="notes" className="label text-oxblood">The songs, in his words</h2>
        <div className="mt-8 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {songNotes.map((s) => (
            <article key={s.title} className="border-t border-ink pt-6">
              <p className="label text-muted text-[13px]">{s.label}</p>
              <h3 className="sleeve-title text-[28px] mt-3">{s.title}</h3>
              <div className="mt-5 space-y-4 text-[19px] leading-relaxed">
                {s.text.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-24" aria-labelledby="credits">
        <h2 id="credits" className="label text-oxblood">Credits</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2 border-t border-ink pt-8">
          <div className="space-y-2 text-[18px]">
            <p>{credits.writing}</p>
            <p>{credits.production}</p>
            <p>{credits.recording}</p>
            <p>{credits.mixing}</p>
            <div className="pt-4 space-y-1">
              {credits.features.map((f) => (
                <p key={f}>{f}</p>
              ))}
            </div>
            <p className="pt-4">{credits.photos}</p>
          </div>
          <dl className="text-[17px]">
            {credits.players.map(([name, parts]) => (
              <div key={name} className="flex gap-4 py-2 border-b border-rule">
                <dt className="w-[170px] shrink-0">{name}</dt>
                <dd className="text-muted">{parts}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
