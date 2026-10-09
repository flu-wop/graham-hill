import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-page px-5 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link href="/" className="sleeve-title text-[22px] text-ink hover:text-oxblood transition-colors">
          Graham Hill
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
