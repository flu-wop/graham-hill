"use client";

import { useEffect, useRef, useState } from "react";
import { leadSingle, site } from "@/content/site";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export default function SinglePlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [d, setD] = useState(0);
  const has = Boolean(leadSingle.audioSrc);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const time = () => setT(a.currentTime);
    const meta = () => setD(a.duration);
    const end = () => setPlaying(false);
    a.addEventListener("timeupdate", time);
    a.addEventListener("loadedmetadata", meta);
    a.addEventListener("ended", end);
    return () => {
      a.removeEventListener("timeupdate", time);
      a.removeEventListener("loadedmetadata", meta);
      a.removeEventListener("ended", end);
    };
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const streams = Object.entries(site.streaming).filter(([, url]) => url);
  const names: Record<string, string> = { spotify: "Spotify", apple: "Apple Music", bandcamp: "Bandcamp" };

  return (
    <div className="border-t border-ink pt-5">
      <div className="flex items-center gap-5">
        {has ? (
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? `Pause ${leadSingle.title}` : `Play ${leadSingle.title}`}
            className="shrink-0 w-14 h-14 rounded-full border border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
          >
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            )}
          </button>
        ) : (
          <span aria-hidden="true" className="shrink-0 w-14 h-14 rounded-full border border-rule flex items-center justify-center text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[22px] leading-tight">{leadSingle.title}</span>
            <span className="label text-muted text-[13px] shrink-0">
              {has ? `${fmt(t)} / ${fmt(d || 0)}` : leadSingle.length}
            </span>
          </div>
          <div className="mt-2 h-[2px] bg-rule" aria-hidden="true">
            <div className="h-[2px] bg-ink" style={{ width: has && d ? `${(t / d) * 100}%` : "0%" }} />
          </div>
          {!has && <p className="label text-muted text-[13px] mt-3">{leadSingle.status}</p>}
        </div>
      </div>
      {has && <audio ref={audio} src={leadSingle.audioSrc} preload="metadata" />}
      {streams.length > 0 && (
        <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:pl-[76px]">
          {streams.map(([k, url]) => (
            <li key={k}>
              <a href={url} className="label link no-underline hover:underline" target="_blank" rel="noreferrer">
                {names[k]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
