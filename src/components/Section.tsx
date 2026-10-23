import type { ReactNode } from "react";

export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" aria-hidden="true" className={`h-6 w-10 text-accent ${className}`} fill="currentColor">
      <path d="M24 2c4 5 5 11 0 20-5-9-4-15 0-20Z" />
      <path d="M22 22C17 18 12 12 13 6c5 2 9 8 9 16Z" opacity=".75" />
      <path d="M26 22c5-4 10-10 9-16-5 2-9 8-9 16Z" opacity=".75" />
      <path d="M21 23C14 22 7 18 4 12c6-1 13 3 17 11Z" opacity=".5" />
      <path d="M27 23c7-1 14-5 17-11-6-1-13 3-17 11Z" opacity=".5" />
      <rect x="10" y="24" width="28" height="2" rx="1" opacity=".4" />
    </svg>
  );
}

export function SectionHeading({ title, kicker, watermark }: { title: string; kicker?: string; watermark?: string }) {
  return (
    <div className="relative mx-auto mb-8 max-w-3xl text-center">
      {watermark && <span aria-hidden="true" className="watermark pointer-events-none absolute inset-x-0 top-1 -z-0 select-none text-5xl md:text-7xl">{watermark}</span>}
      <div className="relative">
        <Lotus className="mx-auto" />
        <h2 className="mt-2 text-3xl text-primary md:text-4xl">{title}</h2>
        {kicker && <p className="mt-1 text-base text-accent">{kicker}</p>}
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative min-h-[320px] overflow-hidden md:min-h-[380px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero" />
      <div className="relative mx-auto flex min-h-[320px] max-w-6xl flex-col justify-center px-5 py-10 text-primary-foreground md:min-h-[380px] md:px-6">
        <p className="font-display text-lg italic text-gold">{eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-4xl md:text-5xl">{title}</h1>
        <div className="mt-4 max-w-xl border-l-2 border-gold pl-4"><p className="text-lg opacity-90">{intro}</p></div>
      </div>
    </section>
  );
}

export function Section({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
      <SectionHeading title={title} kicker={kicker} watermark={kicker} />
      {children}
    </section>
  );
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
      <h3 className="text-xl text-accent">{title}</h3>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  );
}
