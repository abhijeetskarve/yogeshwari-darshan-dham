import { useState } from "react";
import { Link } from "@tanstack/react-router";
import shikhar from "@/assets/t-DSCN3429.jpg.asset.json";
import deity from "@/assets/t-ygd.jpg.asset.json";
import gate from "@/assets/t-DSCN3469.jpg.asset.json";

const panels = [
  {
    title: "गाभारा",
    sub: "मातेचे दर्शन",
    img: deity.url,
    text: "चांदी व शेंदुराने सजलेली श्री योगेश्वरी देवीची स्वयंभू मूर्ती पहाटेपासून रात्रीपर्यंत भक्तांना दर्शन देते.",
    points: ["काकड आरती पहाटे ५:००", "नवरात्रात विशेष अलंकार", "साडी-चोळी व ओटी अर्पण"],
    cta: { to: "/darshan" as const, label: "दर्शन व आरती पाहा" },
  },
  {
    title: "मंदिर",
    sub: "स्थापत्य व प्रांगण",
    img: shikhar.url,
    text: "जयंती नदीच्या काठी घुमटाकार मंदिरे व प्रशस्त प्रांगणावर रंगीबेरंगी शिखर उभे आहे.",
    points: ["सुशोभित रंगीत शिखर", "दीपमाळ व प्रांगणातील मंदिरे", "प्रदक्षिणेसाठी शांत प्राकार"],
    cta: { to: "/heritage" as const, label: "वारसा जाणून घ्या" },
  },
  {
    title: "स्वागत द्वार",
    sub: "यात्रेची सुरुवात",
    img: gate.url,
    text: "महाराष्ट्र, गोवा व इतर भागांतून येणाऱ्या भाविकांचे देवस्थानाचे मुख्य प्रवेशद्वार स्वागत करते.",
    points: ["परळी वैजनाथ स्थानकापासून २५ किमी", "सर्व मोठ्या शहरांतून एसटी बस", "मंदिराजवळ भक्त निवास"],
    cta: { to: "/pilgrimage" as const, label: "यात्रेचे नियोजन करा" },
  },
];

export function TempleShowcase() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-[620px] flex-col gap-2 overflow-hidden rounded-lg shadow-warm md:h-[560px] md:flex-row md:gap-0">
      {panels.map((p, i) => {
        const on = i === active;
        const show = on && open;
        return (
          <div
            key={p.title}
            role="button"
            tabIndex={0}
            onClick={() => { if (!on) { setActive(i); setOpen(false); } }}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !on && (setActive(i), setOpen(false))}
            aria-expanded={on}
            className={`group relative cursor-pointer overflow-hidden transition-[flex-grow] duration-700 ease-out ${on ? "grow-[5]" : "grow"} basis-0`}
          >
            <img src={p.img} alt={p.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${on ? "scale-100" : "scale-110 grayscale-[40%] group-hover:grayscale-0"}`} />
            <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-veil transition-opacity ${show ? "opacity-100" : "opacity-70"}`} />
            <div className="relative flex h-full flex-col items-center justify-end p-4 text-primary-foreground">
              {!show && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActive(i); setOpen(true); }}
                  className="rounded-full bg-sacred px-5 py-2 text-sm font-medium text-primary-foreground shadow-warm transition hover:scale-105"
                >
                  {p.title} — माहिती
                </button>
              )}
              {show && (
                <div className="w-full max-w-xl rounded-lg bg-background/95 p-5 text-foreground backdrop-blur animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary">{p.title}</h3>
                      <p className="text-sm text-accent">{p.sub}</p>
                    </div>
                    <button type="button" aria-label="बंद करा" onClick={(e) => { e.stopPropagation(); setOpen(false); }} className="rounded-full px-2 text-xl text-muted-foreground hover:text-primary">×</button>
                  </div>
                  <p className="mt-2">{p.text}</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {p.points.map((pt) => <li key={pt}><span className="text-accent">✦</span> {pt}</li>)}
                  </ul>
                  <Link to={p.cta.to} onClick={(e) => e.stopPropagation()} className="mt-3 inline-block rounded-full bg-sacred px-5 py-2 text-sm font-medium text-primary-foreground">
                    {p.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
