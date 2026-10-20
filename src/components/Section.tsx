import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative min-h-[320px] overflow-hidden md:min-h-[360px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-veil" />
      <div className="relative mx-auto flex min-h-[320px] max-w-6xl flex-col justify-end px-5 py-10 text-primary-foreground md:min-h-[360px] md:px-6">
        <p className="text-sm text-gold">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg opacity-90">{intro}</p>
      </div>
    </section>
  );
}

export function Section({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-12">
      {kicker && <p className="text-sm text-accent">{kicker}</p>}
      <h2 className="mt-1 text-3xl font-semibold text-primary">{title}</h2>
      <div className="rangoli-divider my-6 max-w-xs" />
      {children}
    </section>
  );
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-card p-6">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  );
}
