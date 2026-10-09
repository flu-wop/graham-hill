import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { priorWork, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bio",
  description: `${site.artist} — ${site.album}, the debut album, made in New Orleans with Donald Markowitz.`,
};

export default function Bio() {
  return (
    <>
      <header className="page-head">
        <p className="label text-oxblood">Bio</p>
        <h1 className="sleeve-title text-[44px] sm:text-[64px] mt-5">{site.artist}</h1>
      </header>

      <div className="mx-auto max-w-page px-5 sm:px-10 pt-12 sm:pt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-20 items-start">
        <div className="max-w-prose space-y-6 text-[20px] leading-relaxed">
          <p className="text-[24px] leading-snug">
            <em>{site.album}</em> is the debut album from Graham Hill: ten songs he wrote and produced with Donald
            “Donny” Markowitz at Mid City Sound Studio in New Orleans between March and September 2026.
          </p>
          <p>
            It is an unhurried, sunlit record with a steady pull toward hope. The world can look dark, and there is
            still light left in it. The songs are about letting go of what no longer serves, a son who can’t sleep, a
            wife flying home, a party in a pink house, a deer on a West Virginia road at night.
          </p>
          <p>
            For eight years Hill kept time for Beach House, touring and recording with the band from 2008 to 2016,
            including <em>Teen Dream</em> and <em>Depression Cherry</em> and the live drums on “Space Song.” Through the
            2000s and 2010s he also played drums and sang harmonies with Bay Area bands The Parish, Papercuts and
            Vetiver, and made layered, beat-driven records of his own as Roman Ruins.
          </p>
          <p>
            The songs reach further back than any of that. His father, Steve Hill, was the longtime house bassist for
            NPR’s <em>Mountain Stage</em> and a founding member of the Putnam County Pickers. The photograph on the
            album cover — a young drummer in a baseball cap, sticks in hand, his father on guitar behind him — comes
            from that house.
          </p>
          <p>
            Markowitz, whose catalog runs four decades and includes the Academy Award–winning “(I’ve Had) The Time of
            My Life,” produced alongside Hill with a cast of New Orleans players, among them Steve Hill on guitar.
          </p>
        </div>

        <Photo name="wall" sizes="(min-width: 1024px) 380px, 100vw" caption className="lg:sticky lg:top-10" />
      </div>

      <section className="mx-auto max-w-page px-5 sm:px-10 pt-20" aria-labelledby="before">
        <h2 id="before" className="label text-oxblood">Before</h2>
        <ul className="mt-6 border-t border-ink">
          {priorWork.map(([band, role, records]) => (
            <li key={band} className="grid gap-1 sm:grid-cols-[220px_260px_1fr] sm:gap-6 py-5 border-b border-rule">
              <span className="sleeve-title text-[20px]">{band}</span>
              <span className="text-muted">{role}</span>
              <span className="italic">{records}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
