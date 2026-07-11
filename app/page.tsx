import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAF Real Estate | Landing Pages",
  robots: { index: false, follow: false },
};

const pages = [
  { href: "/dubai-villas-for-sale/", label: "LP1 · Villas for Sale in Dubai" },
  { href: "/buying-property-in-dubai-from-uk/", label: "LP2 · Buying Property in Dubai from the UK" },
  { href: "/risks-of-buying-property-in-dubai/", label: "LP3 · The Risks of Buying Property in Dubai" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6">
      <h1 className="display text-3xl text-cream">RAF campaign landing pages</h1>
      <nav className="flex flex-col gap-3 text-center">
        {pages.map((p) => (
          <Link key={p.href} href={p.href} className="text-gold hover:text-gold-bright">
            {p.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
