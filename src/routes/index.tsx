import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Plane, TrainFront, Car, CalendarDays, Clock3, MapPin, BedDouble, Flame, Bus, Phone } from "lucide-react";
import air from "@/assets/by-air.jpg";
import train from "@/assets/by-train.jpg";
import road from "@/assets/by-road.jpg";
import deity from "@/assets/t-ygd.jpg.asset.json";
import temple from "@/assets/t-DSCN3429.jpg.asset.json";
import { TempleShowcase } from "@/components/TempleShowcase";
import { Button } from "@/components/ui/button";
import { SectionHeading, Lotus } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "श्री योगेश्वरी देवी मंदिर, अंबाजोगाई | भक्त संकेतस्थळ" },
      { name: "description", content: "श्री योगेश्वरी देवी, अंबाजोगाई — दर्शन, आरती, उत्सव, यात्रा मार्गदर्शन व वारसा." },
      { property: "og:title", content: "श्री योगेश्वरी देवी मंदिर, अंबाजोगाई" },
      { property: "og:description", content: "मंदिराचा अनुभव घ्या, मातेशी जोडा आणि अंबाजोगाई यात्रेचे नियोजन करा." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const travel = [
  { title: "विमानाने", image: air, icon: Plane },
  { title: "रेल्वेने", image: train, icon: TrainFront },
  { title: "रस्त्याने", image: road, icon: Car },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <img src={temple.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-6 md:py-20">
          <div className="text-primary-foreground">
            <p className="font-display text-xl italic text-gold">॥ श्री योगेश्वरी देवी प्रसन्न ॥</p>
            <h1 className="mt-3 text-4xl leading-tight md:text-6xl">योगेश्वरी मातेच्या दरबारात आपले स्वागत</h1>
            <div className="mt-5 max-w-lg border-l-2 border-gold pl-4"><p className="text-lg opacity-90">अंबाजोगाईची कुलस्वामिनी — दर्शन, आरती, उत्सव आणि यात्रेची संपूर्ण माहिती एकाच ठिकाणी.</p></div>
            <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/darshan">दर्शन व आरती <ArrowUpRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-gold bg-transparent text-primary-foreground hover:bg-gold hover:text-foreground"><Link to="/pilgrimage">कसे यायचे?</Link></Button></div>
          </div>
          <img src={deity.url} alt="श्री योगेश्वरी देवी" className="mx-auto hidden w-64 rounded-full border-4 border-gold object-cover shadow-warm md:block lg:w-80" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 md:px-6">
        <SectionHeading title="मंदिराचे दर्शन घ्या" kicker="फोटोवरील बटण दाबा आणि माहिती वाचा" watermark="दर्शन" />
        <nav aria-label="भाविकांसाठी सोयी" className="mb-7 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[{ to: "/darshan" as const, label: "दर्शन व आरती", icon: Flame }, { to: "/pilgrimage" as const, label: "कसे यायचे?", icon: Bus }, { to: "/pilgrimage" as const, label: "राहण्याची सोय", icon: BedDouble }, { to: "/connect" as const, label: "पूजा व संपर्क", icon: Phone }].map((item) => <Button key={item.label} asChild variant="outline" className="min-h-20 flex-col gap-2 whitespace-normal border-border bg-card px-2 text-base shadow-none hover:border-accent hover:bg-secondary hover:text-primary md:flex-row"><Link to={item.to} hash={item.label === "राहण्याची सोय" ? "accommodation" : ""}><item.icon className="text-accent" />{item.label}</Link></Button>)}
        </nav>
        <TempleShowcase />
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-5 sm:grid-cols-3">
          {[{ icon: Clock3, label: "मंदिर उघडण्याची वेळ", value: "दररोज पहाटे" }, { icon: CalendarDays, label: "मुख्य उत्सव", value: "मार्गशीर्ष नवरात्र" }, { icon: MapPin, label: "देवस्थान", value: "अंबाजोगाई, बीड" }].map((item) => <div key={item.label} className="flex items-center gap-3"><item.icon className="size-5 shrink-0 text-accent" /><div><p className="text-xs text-muted-foreground">{item.label}</p><p className="font-medium text-primary">{item.value}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 py-10 lg:grid-cols-[1.6fr_1fr_0.9fr]">
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="text-2xl font-semibold">मातेचे दर्शन</h2><Button asChild variant="link" className="px-0 text-accent"><Link to="/darshan">फोटो पाहा <ArrowUpRight /></Link></Button></div>
          <Link to="/darshan" className="group block overflow-hidden rounded-md"><img src={deity.url} alt="श्री योगेश्वरी मातेचे दर्शन" loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" /></Link>
          <p className="mt-3 text-sm text-muted-foreground">श्री योगेश्वरी मातेच्या चरणी विनम्र प्रणाम.</p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">उत्सव व परंपरा</h2>
          {[{ title: "मार्गशीर्ष नवरात्र", text: "पौर्णिमा उत्सव व पालखी", image: deity.url, to: "/darshan" as const }, { title: "शारदीय नवरात्र", text: "घटस्थापना व मातेचे अलंकार", image: deity.url, to: "/darshan" as const }, { title: "जोगाईचा वारसा", text: "इतिहास व कोकणस्थ परंपरा", image: temple.url, to: "/heritage" as const }].map((item) => <Link key={item.title} to={item.to} className="group flex gap-3 border-b border-border py-3 first:pt-0"><img src={item.image} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-sm object-cover" /><div><h3 className="font-sans text-base font-semibold group-hover:text-accent">{item.title}</h3><p className="mt-1 text-xs text-muted-foreground">{item.text}</p></div></Link>)}
          <Button asChild variant="link" className="mt-3 p-0 text-accent"><Link to="/connect">महत्त्वाच्या तारखा <ArrowUpRight /></Link></Button>
        </div>
        <aside className="space-y-4 lg:pt-1">
          <div className="border-l-2 border-accent bg-secondary p-5"><Clock3 className="mb-2 size-5 text-accent" /><h2 className="text-xl font-semibold">दर्शन व आरती</h2><p className="mt-2 text-sm text-muted-foreground">दैनंदिन उपासना आणि आरतीच्या वेळा</p><Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/darshan">वेळापत्रक <ArrowUpRight /></Link></Button></div>
          <div className="border-l-2 border-gold bg-secondary p-5"><h2 className="text-xl font-semibold">पूजेची माहिती</h2><p className="mt-2 text-sm text-muted-foreground">पूजा व अभिषेकासाठी चौकशी करा</p><Button asChild variant="outline" className="mt-4"><Link to="/connect">पूजा चौकशी <ArrowUpRight /></Link></Button></div>
        </aside>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading title="अंबाजोगाईला कसे यायचे?" kicker="मातेकडे आपला प्रवास" watermark="यात्रा" />
          <div className="grid gap-6 sm:grid-cols-3">{travel.map((m) => <Link key={m.title} to="/pilgrimage" className="group overflow-hidden rounded-xl border border-border bg-card shadow-warm"><img src={m.image} alt={m.title} loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" /><div className="flex items-center gap-3 px-4 py-3"><m.icon className="size-5 text-accent" /><h3 className="font-sans text-lg font-semibold">{m.title}</h3><ArrowUpRight className="ml-auto size-4 text-muted-foreground" /></div></Link>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-12 text-center"><Lotus className="mx-auto mb-3" /><p className="font-display text-xl leading-loose text-primary md:text-2xl">सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।<br />शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥</p></section>
    </>
  );
}
