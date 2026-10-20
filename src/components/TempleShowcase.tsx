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
