import { useState } from "react";
import { Link } from "@tanstack/react-router";
import shikhar from "@/assets/t-DSCN3429.jpg.asset.json";
import deity from "@/assets/t-ygd.jpg.asset.json";
import gate from "@/assets/t-DSCN3469.jpg.asset.json";

const panels = [
  {
    title: "The Sanctum",
    sub: "Darshan of Mata",
    img: deity.url,
    text: "The self-manifested form of Shri Yogeshwari Devi, adorned in silver and vermilion, receives devotees from dawn till night.",
    points: ["Kakad Aarti at 5:00 AM", "Special alankar on Navratri days", "Sadi-choli and oti offerings"],
    cta: { to: "/darshan" as const, label: "View darshan & aarti" },
  },
  {
    title: "The Temple",
    sub: "Architecture & courtyard",
    img: shikhar.url,
    text: "A colourful shikhar rises over domed shrines and a spacious courtyard on the banks of the Jayanti river.",
    points: ["Ornate painted shikhar", "Deepmal and courtyard shrines", "Peaceful prakar for parikrama"],
    cta: { to: "/heritage" as const, label: "Explore the heritage" },
  },
  {
    title: "Welcome Gate",
    sub: "Begin your pilgrimage",
    img: gate.url,
    text: "The Devasthan's main gate greets pilgrims arriving in Ambajogai from across Maharashtra, Goa and beyond.",
    points: ["25 km from Parli Vaijnath station", "MSRTC buses from all major cities", "Bhakta niwas near the temple"],
    cta: { to: "/pilgrimage" as const, label: "Plan your visit" },
  },
];

export function TempleShowcase() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex h-[620px] flex-col gap-2 overflow-hidden rounded-lg shadow-warm md:h-[520px] md:flex-row md:gap-0">
      {panels.map((p, i) => {
        const on = i === active;
        return (
          <div
            key={p.title}
            role="button"
            tabIndex={0}
            onClick={() => setActive(i)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(i)}
            aria-expanded={on}
            className={`group relative cursor-pointer overflow-hidden text-left transition-[flex-grow] duration-700 ease-out ${on ? "grow-[5]" : "grow"} basis-0`}
          >
            <img src={p.img} alt={p.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${on ? "scale-100" : "scale-110 grayscale-[40%]"}`} />
            <div className="absolute inset-0 bg-veil" />
            <div className="relative flex h-full flex-col p-5 text-primary-foreground md:p-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold md:text-3xl">{p.title}</h3>
                <p className="text-sm text-gold">{p.sub}</p>
                <div className="relative mt-3 hidden md:block">
                  <div className="rangoli-divider" />
                  <span className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-gold ${on ? "bg-gold" : "bg-maroon-deep"}`} />
                </div>
              </div>
              <div className={`mt-auto max-w-xl rounded-lg bg-background/90 p-5 text-foreground backdrop-blur transition-all duration-500 ${on ? "translate-y-0 opacity-100 delay-300" : "pointer-events-none translate-y-6 opacity-0"}`}>
                <p>{p.text}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {p.points.map((pt) => <li key={pt}><span className="text-accent">✦</span> {pt}</li>)}
                </ul>
                <Link to={p.cta.to} onClick={(e) => e.stopPropagation()} className="mt-4 inline-block rounded-full bg-sacred px-5 py-2 text-sm font-medium text-primary-foreground">
                  {p.cta.label}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
