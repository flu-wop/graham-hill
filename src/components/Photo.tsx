import Image from "next/image";
import { photos, site } from "@/content/site";

type Props = {
  name: keyof typeof photos;
  sizes: string;
  className?: string;
  priority?: boolean;
  caption?: boolean;
};

export default function Photo({ name, sizes, className = "", priority, caption }: Props) {
  const p = photos[name];
  return (
    <figure className={className}>
      <div className="grain">
        <Image
          src={`/images/${p.id}.webp`}
          width={p.w}
          height={p.h}
          alt={p.alt}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto block"
        />
      </div>
      {caption && <figcaption className="label text-muted mt-3 text-[13px]">Photo: {site.photoCredit}</figcaption>}
    </figure>
  );
}
