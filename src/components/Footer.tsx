import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-page px-5 sm:px-10 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-muted">
        <p className="label">
          {site.artist} · {site.album}
        </p>
        <p className="label">
          {site.genre} · {site.location}
        </p>
        <p className="label">
          <a className="hover:text-oxblood transition-colors" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
