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
  return (
    <div>
      <div className="flex h-[340px] gap-2 md:h-[380px] md:gap-3">
        {panels.map((p, i) => {
          const on = i === active;
          return (
            <div key={p.title} className={`group relative min-w-0 basis-0 overflow-hidden rounded-md transition-[flex-grow] duration-500 ease-out ${on ? "grow-[2] md:grow-[2.4]" : "grow"}`}>
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-veil" />
              <div className="absolute inset-x-0 bottom-4 flex justify-center px-1 md:bottom-5 md:px-3">
                <Button onClick={() => { setActive(i); setOpen(!(on && open)); }} aria-expanded={on && open} aria-controls="temple-details" className="h-auto min-h-9 max-w-full gap-1 whitespace-normal bg-background px-2 py-2 text-xs text-primary shadow-warm hover:bg-gold md:gap-2 md:px-5 md:text-sm">
                  {p.title} <Plus className="size-3 md:size-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {open && selected && (
        <div id="temple-details" className="relative mt-3 border-l-2 border-accent bg-secondary px-5 py-5 animate-in fade-in slide-in-from-top-2 md:px-7">
          <Button variant="ghost" size="icon" aria-label="बंद करा" className="absolute right-2 top-2" onClick={() => setOpen(false)}><X /></Button>
          <div className="grid gap-4 pr-7 md:grid-cols-[1.3fr_1fr] md:gap-10">
            <div><p className="text-xs text-accent">{selected.sub}</p><h2 className="mt-1 text-2xl font-semibold">{selected.title}</h2><p className="mt-2 text-sm text-muted-foreground">{selected.text}</p></div>
            <div><ul className="space-y-1 text-sm text-muted-foreground">{selected.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-accent">·</span>{pt}</li>)}</ul><Button asChild variant="link" className="mt-2 h-auto p-0 text-accent"><Link to={selected.cta.to}>{selected.cta.label}<ArrowUpRight /></Link></Button></div>
          </div>
        </div>
      )}
    </div>
  );
}
