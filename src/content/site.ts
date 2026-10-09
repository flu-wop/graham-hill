// Every fact on the site lives here. Source of truth: Graham's shared Drive folder
// ("PR" — Album Credits & Lyrics, Artist Quotes, EPK, LP Release Timeline, Website Brief).
// Genre is Alternative only — no other genre label anywhere (copy, metadata, alt text).
// `npm run lint-genre` checks for the banned labels.

export const site = {
  artist: "Graham Hill",
  album: "Taking In Stars",
  genre: "Alternative",
  location: "New Orleans, LA",
  url: "https://graham-hill.vercel.app",

  // Timeline target is January 22, 2027 — the EPK still marks the date "to be confirmed".
  release: "January 2027",

  // No address is published until Graham confirms the press contact (brief: "structured so it's
  // easy to split later"). Fill these in and the mailto links appear everywhere automatically.
  contacts: {
    press: "", // set when the press contact is confirmed
    sync: "",
    general: "",
  },

  // Fill these in as links go live; empty ones are hidden.
  streaming: {
    spotify: "",
    apple: "",
    bandcamp: "",
  },

  photoCredit: "Cory Fontenot",
};

// Returns "" until an address is confirmed; pages show a plain note instead of a mailto link.
export function contactFor(kind: keyof typeof site.contacts) {
  return site.contacts[kind] || site.contacts.general || "";
}

export const contactPending = "Contact details are being confirmed. Inquiries are handled through Mid City Sound, New Orleans.";

export type Track = {
  n: number;
  title: string;
  length: string;
  feature?: string;
  single?: number;
};

export const tracks: Track[] = [
  { n: 1, title: "Better Ways", length: "4:18", single: 3 },
  { n: 2, title: "Your Own River", length: "3:08" },
  { n: 3, title: "Monster In My Head", length: "2:46", single: 2 },
  { n: 4, title: "Gravel Ghost", length: "4:40", single: 1 },
  { n: 5, title: "Taking In Stars", length: "3:30" },
  { n: 6, title: "Promise That You Live For", length: "3:50", feature: "Tif Lamson" },
  { n: 7, title: "Heart Like The Sun", length: "4:18" },
  { n: 8, title: "Pink House Blues", length: "3:22", feature: "phin" },
  { n: 9, title: "Sunday Return", length: "4:31" },
  { n: 10, title: "Wrong Place Saloon", length: "8:26" },
];

// The lead single. Add the audio file (or a preview URL) when the master is ready.
export const leadSingle = {
  title: "Gravel Ghost",
  length: "4:40",
  audioSrc: "",
  status: "First single — out soon",
};

// Graham's own words, from "Graham Hill - Artist Quotes".
export const songNotes: { title: string; label: string; text: string[] }[] = [
  {
    title: "Gravel Ghost",
    label: "Single 1",
    text: [
      "This song is about letting go of what no longer serves. The images and story are autobiographical, taken from my high school days growing up in rural West Virginia. I was driving home from my girlfriend’s house late at night and totaled my car by hitting a deer. It was really traumatic, and caused me to rethink pretty much everything I was doing at that point in life, from my relationships, habits, and patterns of behavior that were keeping me from growing.",
      "The ‘hungry ghost’ metaphor is less of the traditional Buddhist meaning or symbolism, and more about the specter of my lower self that I realized was holding me back.",
    ],
  },
  {
    title: "Monster In My Head",
    label: "Single 2",
    text: [
      "I wrote this song after having a late night conversation with my son when he was having trouble falling asleep consistently as he was hitting his teenage years. The line “When I hear the smallest thing, and it snowballs into a scream” was pretty much verbatim how he described the issue to me. His particular experience was music playing repeatedly that he couldn’t stop.",
      "It really resonated with me, as someone who has an active mind and sometimes obsessive tendency to overthink, especially when there are unresolved or uncertain things playing out in my current day-to-day reality.",
    ],
  },
  {
    title: "Better Ways",
    label: "Single 3",
    text: [
      "This song felt like it was beamed down to me from the heavens. It sounds corny, but that’s why I think I was able to write the words “Can you hear the angel’s song?” and not feel self-conscious about it.",
      "The lyrics are about holding on to hope for the future, which includes forgiving yourself while acknowledging the pain and suffering that we have caused, both as individuals and collectively. In continuing to push for a world that seems out of reach or impossible, somehow we find a light still on the horizon, guiding us into a better world that we all deserve.",
    ],
  },
  {
    title: "Sunday Return",
    label: "Track 9",
    text: [
      "I met my wife when we were both very young (she was 20, I was 21), and we’ve been together ever since. It’s been 25 years, which is wild to think about. When you’re that close to someone, it aches when they’re not around.",
      "This song was written when she had been out of town on a weekend trip with friends, and was flying back to New Orleans. I was checking her flight status every few minutes in anticipation of her return. Thinking of what she could see out the airplane window got things rolling, and through those few hours, I realized the feeling was universal.",
    ],
  },
];

export const credits = {
  writing: "All songs written by Graham LeDoux Hill (BMI) © 2026",
  production: "Produced by Graham Hill & Donald Markowitz",
  recording: "Recorded at Mid City Sound Studio, New Orleans, March–September 2026",
  mixing: "Mixed by Mack Major in New Orleans",
  features: [
    "Tif (Teddy) Lamson — vocals on “Promise That You Live For”",
    "phin (Phin Choukas) — vocals on “Pink House Blues”",
  ],
  players: [
    ["Graham Hill", "vocals, guitars, drums, percussion, bass"],
    ["Donald Markowitz", "bass, guitars, keyboards"],
    ["Paul Provosty", "bass, guitars"],
    ["Buck Provosty", "piano, keyboards"],
    ["Danny Harrell", "pedal steel guitar"],
    ["Gabe Stillman", "slide guitar (courtesy Gulf Coast Records)"],
    ["Shane Theriot", "guitars"],
    ["Steve Hill", "guitar"],
    ["Sam Saunders", "ambient composition"],
    ["James Fournet", "piano, organ"],
    ["Sebastian St. John", "mandolin, violin"],
    ["Chris Senac", "bass"],
    ["CASMÈ", "background vocals"],
  ] as [string, string][],
  photos: "Photos and video by Cory Fontenot",
};

export const priorWork: [string, string, string][] = [
  ["Beach House", "Drums, 2008–2016", "Teen Dream · Depression Cherry · Thank Your Lucky Stars"],
  ["Papercuts", "Drums, 2008–2013", "You Can Have What You Want · Fading Parade · Life Among The Savages"],
  ["The Parish", "Drums, 2005–2012", "The Way We Bend · Storm Driven Bird"],
  ["Roman Ruins", "Producer/composer, 2010–2024", "Homebuilding · Source of Pride · Isotropes"],
];

export type Photo = { id: string; w: number; h: number; alt: string };

export const photos: Record<string, Photo> = {
  kit: { id: "CF16087", w: 1600, h: 1395, alt: "Graham Hill’s drum kit and guitars laid out from above on a pale floor" },
  guitar: { id: "CF16156", w: 1600, h: 1066, alt: "Graham Hill playing acoustic guitar in a leather chair" },
  doorway: { id: "CF16198", w: 1066, h: 1600, alt: "Graham Hill seated outside a French Quarter doorway in sunglasses" },
  wall: { id: "CF16246", w: 1066, h: 1600, alt: "Black-and-white portrait of Graham Hill against a weathered plaster wall" },
  desk: { id: "CF16360", w: 1600, h: 1066, alt: "Black-and-white photo of Graham Hill at the mixing desk at Mid City Sound" },
  drums: { id: "CF16478", w: 1600, h: 1066, alt: "Black-and-white photo of Graham Hill behind the drum kit in the studio" },
  car: { id: "CF16504", w: 1066, h: 1600, alt: "Black-and-white photo of Graham Hill sitting in an open car door at a junkyard" },
  junkyard: { id: "CF16849", w: 1600, h: 1066, alt: "Graham Hill crouched on a tire in a gravel junkyard lined with cars" },
};

export const pressPhotoOrder = ["wall", "junkyard", "doorway", "drums", "guitar", "car", "desk", "kit"] as const;
