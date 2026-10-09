import Image from "next/image";
import Link from "next/link";
import SinglePlayer from "@/components/SinglePlayer";
import Photo from "@/components/Photo";
import { site, songNotes } from "@/content/site";

export default function Home() {
  const gravel = songNotes[0];
  return (
    <>
      {/* Hero: the cover photograph does the work */}
      <section className="mx-auto max-w-page lg:max-w-none lg:mx-0 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:min-h-[calc(100svh-77px)]">
        <div className="grain bg-sleeve lg:h-full lg:min-h-[640px] relative">
          <Image
            src="/images/hero.webp"
            alt="Young Graham Hill in a baseball cap, drumsticks in hand, with his father Steve Hill playing guitar behind him"
            width={2000}
            height={1720}
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-[30%_center]"
          />
        </div>

        <div className="px-5 sm:px-10 lg:px-16 xl:px-20 py-10 lg:py-16 flex flex-col justify-end gap-10">
          <div>
            <h1 className="sleeve-title text-[44px] sm:text-[64px] xl:text-[76px] text-ink">{site.artist}</h1>
            <p className="sleeve-title text-oxblood text-[20px] sm:text-[24px] mt-5">{site.album}</p>
          </div>
          <p className="text-[24px] sm:text-[26px] leading-snug max-w-[460px]">
            The debut album, {site.release}. The first song is “Gravel Ghost.”
          </p>
          <div className="max-w-[520px]">
            <SinglePlayer />
          </div>
        </div>
      </section>

      {/* Gravel Ghost, in his words */}
      <section className="mx-auto max-w-page px-5 sm:px-10 pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16 items-start">
          <Photo name="junkyard" sizes="(min-width: 1024px) 600px, 100vw" caption />
          <div>
            <p className="label text-oxblood">{gravel.label}</p>
            <h2 className="sleeve-title text-[34px] sm:text-[40px] mt-4">{gravel.title}</h2>
            <blockquote className="mt-6 text-[20px] leading-relaxed">
              <p>“{gravel.text[0]}”</p>
            </blockquote>
            <p className="label text-muted mt-5 text-[13px]">— Graham Hill</p>
            <Link href="/music" className="label inline-block mt-8 link">
              The album and the songs
            </Link>
          </div>
        </div>
      </section>

      {/* Two doors for the two readers the site is built for */}
      <section className="mx-auto max-w-page px-5 sm:px-10 pt-20 sm:pt-28">
        <div className="grid sm:grid-cols-2 border-t border-ink">
          <Link href="/sync" className="group block py-8 sm:pr-10 border-b sm:border-b-0 sm:border-r border-rule">
            <p className="label text-muted">For music supervisors</p>
            <p className="text-[26px] mt-3 group-hover:text-oxblood transition-colors">Sync licensing →</p>
          </Link>
          <Link href="/press" className="group block py-8 sm:pl-10">
            <p className="label text-muted">For writers and outlets</p>
            <p className="text-[26px] mt-3 group-hover:text-oxblood transition-colors">Press kit and photos →</p>
          </Link>
        </div>
      </section>
    </>
  );
}
