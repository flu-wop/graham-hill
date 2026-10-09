import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { contactFor, credits, site, tracks } from "@/content/site";

export const metadata: Metadata = {
  title: "Sync Licensing",
  description: `Licensing ${site.artist}’s ${site.album} for film, television and advertising: track details, credits and contact.`,
};

export default function Sync() {
  const email = contactFor("sync");
  const subject = encodeURIComponent(`Sync inquiry — ${site.artist}, ${site.album}`);
  return (
    <>
      <header className="page-head">
        <p className="label text-oxblood">Sync Licensing</p>
        <h1 className="sleeve-title text-[40px] sm:text-[60px] mt-5">License the record</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="text-[22px] sm:text-[24px] leading-snug max-w-prose">
            Ten songs with big, plain-spoken choruses and a wide emotional range: hope after a hard stretch, letting
            go, missing someone, first love, a mind that won’t switch off at night.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${email}?subject=${subject}`}
              className="label inline-flex items-center justify-center min-h-[48px] px-6 bg-ink text-paper hover:bg-oxblood transition-colors"
            >
              Licensing inquiry
            </a>
            <a
              href="/press/GrahamHill_TakingInStars_OneSheet.pdf"
              className="label inline-flex items-center justify-center min-h-[48px] px-6 border border-ink hover:bg-ink hover:text-paper transition-colors"
              download
            >
              One-sheet (PDF)
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-12 sm:pt-16" aria-labelledby="facts">
        <h2 id="facts" className="sr-only">
          At a glance
        </h2>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink">
          {[
            ["Genre", site.genre],
            ["Release", site.release],
            ["Writer", "Graham LeDoux Hill (BMI)"],
            ["Producers", "Graham Hill & Donald Markowitz"],
          ].map(([k, v]) => (
            <div key={k} className="py-5 border-b border-rule sm:pr-6">
              <dt className="label text-muted text-[13px]">{k}</dt>
              <dd className="mt-2 text-[20px] leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-16" aria-labelledby="tracks">
        <h2 id="tracks" className="label text-oxblood">Tracks</h2>
        <div className="mt-6">
          <table className="w-full text-left border-t border-ink">
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="label text-muted text-[13px] font-normal py-3 pr-4 w-10">#</th>
                <th scope="col" className="label text-muted text-[13px] font-normal py-3 pr-4">Title</th>
                <th scope="col" className="hidden sm:table-cell label text-muted text-[13px] font-normal py-3 pr-4">Vocals</th>
                <th scope="col" className="label text-muted text-[13px] font-normal py-3 text-right">Length</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.n} className="border-b border-rule align-baseline">
                  <td className="label text-muted py-4 pr-4">{t.n}</td>
                  <td className="py-4 pr-4 text-[20px] leading-snug">
                    {t.title}
                    {t.feature && <span className="sm:hidden block text-muted text-[16px]">with {t.feature}</span>}
                  </td>
                  <td className="hidden sm:table-cell py-4 pr-4 text-muted text-[17px]">
                    {t.feature ? `Graham Hill with ${t.feature}` : "Graham Hill"}
                  </td>
                  <td className="label py-4 text-right">{t.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-muted text-[17px] max-w-prose">
          Tempo, key and mood tags for each track are added here with the final mixes. Instrumentals and stems: ask.
        </p>
      </section>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-20 items-start">
        <div>
          <h2 className="label text-oxblood">Clearance</h2>
          <div className="mt-6 border-t border-ink pt-6 space-y-3 text-[19px]">
            <p>{credits.writing}.</p>
            <p>{credits.production}.</p>
            <p>Featured vocals: Tif Lamson (“Promise That You Live For”), phin (“Pink House Blues”).</p>
            <p>
              For master and publishing clearance, quotes and screeners, write to{" "}
              <a className="link" href={`mailto:${email}?subject=${subject}`}>
                {email}
              </a>
              .
            </p>
          </div>
        </div>
        <Photo name="desk" sizes="(min-width: 1024px) 460px, 100vw" caption />
      </section>
    </>
  );
}
