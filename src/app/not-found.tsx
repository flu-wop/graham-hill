import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not found", description: "That page isn’t here." };

export default function NotFound() {
  return (
    <div className="page-head border-b-0">
      <p className="label text-oxblood">Not found</p>
      <h1 className="sleeve-title text-[44px] sm:text-[64px] mt-5">Wrong place</h1>
      <Link href="/" className="label inline-block mt-8 link">
        Back home
      </Link>
    </div>
  );
}
