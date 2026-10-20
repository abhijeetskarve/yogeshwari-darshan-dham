import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const selected = active === null ? undefined : panels[active];
  const details = selected && (
    <div className="relative border-l-2 border-accent bg-secondary px-5 py-5 animate-in fade-in slide-in-from-top-2 md:px-7">
      <Button variant="ghost" size="icon" aria-label="बंद करा" className="absolute right-2 top-2" onClick={() => setOpen(false)}><X /></Button>
      <div className="grid min-w-0 gap-4 pr-7 md:grid-cols-[1.3fr_1fr] md:gap-10">
        <div><p className="text-xs text-accent">{selected.sub}</p><h2 className="mt-1 text-2xl font-semibold">{selected.title}</h2><p className="mt-2 text-sm text-muted-foreground">{selected.text}</p></div>
        <div className="min-w-0"><ul className="space-y-1 text-sm text-muted-foreground">{selected.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-accent">·</span>{pt}</li>)}</ul><Button asChild variant="link" className="mt-3 h-auto max-w-full whitespace-normal p-0 text-accent"><Link to={selected.cta.to}>{selected.cta.label}<ArrowUpRight className="shrink-0" /></Link></Button></div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:flex md:h-[380px] md:gap-3">
        {panels.map((p, i) => {
          const on = i === active;
          return (
            <div key={p.title} className={`group min-w-0 md:relative md:basis-0 md:overflow-hidden md:rounded-md md:transition-[flex-grow] md:duration-500 md:ease-out ${on ? "md:grow-[2.4]" : "md:grow"}`}>
              <div className="overflow-hidden rounded-t-md bg-secondary md:rounded-none">
                <img src={p.img} alt={p.title} className="aspect-[4/3] w-full object-contain md:absolute md:inset-0 md:h-full md:object-cover md:transition-transform md:duration-500 md:group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 hidden h-24 bg-veil md:block" />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-b-md border border-t-0 border-border bg-card px-4 py-3 md:absolute md:inset-x-0 md:bottom-5 md:flex md:justify-center md:border-0 md:bg-transparent md:px-3 md:py-0">
                <p className="min-w-0 text-sm text-muted-foreground md:hidden">{p.sub}</p>
                <Button onClick={() => { setActive(i); setOpen(!(on && open)); }} aria-expanded={on && open} aria-controls={`temple-details-mobile-${i} temple-details`} className="min-h-11 shrink-0 gap-2 bg-background px-4 text-sm text-primary shadow-warm hover:bg-gold md:h-auto md:min-h-9 md:px-5 md:py-2">
                  {p.title} <Plus className={`size-4 shrink-0 transition-transform ${on && open ? "rotate-45" : ""}`} />
                </Button>
              </div>
              {on && open && <div id={`temple-details-mobile-${i}`} className="mt-2 md:hidden">{details}</div>}
            </div>
          );
        })}
      </div>
      {open && selected && (
        <div id="temple-details" className="mt-3 hidden md:block">{details}</div>
      )}
    </div>
  );
}
