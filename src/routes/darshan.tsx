import { createFileRoute } from "@tanstack/react-router";
import aarti from "@/assets/aarti.jpg";
import hero from "@/assets/hero.jpg";
import festival from "@/assets/festival.jpg";
import g1 from "@/assets/t-ygd.jpg.asset.json";
import g2 from "@/assets/t-DSCN3429.jpg.asset.json";
import g3 from "@/assets/t-DSCN3411.jpg.asset.json";
import g4 from "@/assets/t-DSCN3455.jpg.asset.json";
import g5 from "@/assets/t-DSCN3469.jpg.asset.json";
import g6 from "@/assets/t-2332.jpg.asset.json";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/darshan")({
  head: () => ({
    meta: [
      { title: "Darshan, Aarti & Festivals | Yogeshwari Devi Ambajogai" },
      { name: "description", content: "Daily darshan and aarti timings, approved photographs, aarti recordings and festival updates." },
      { property: "og:title", content: "Darshan & Aarti — Yogeshwari Devi" },
      { property: "og:description", content: "Connect with Mata through darshan, aarti and festivals." },
    ],
  }),
  component: Darshan,
});

const schedule = [
  ["Kakad Aarti", "5:00 AM"],
  ["Darshan opens", "5:30 AM"],
  ["Mahapuja & Abhishek", "7:00 AM"],
  ["Madhyanha Aarti & Naivedya", "12:00 PM"],
  ["Dhoop Aarti (Sandhya)", "7:00 PM"],
  ["Shejarti — Temple closes", "10:00 PM"],
];

const festivals = [
  { name: "Margashirsha Navratri", when: "Margashirsha Shukla (Nov–Dec)", text: "The temple's grandest celebration, culminating in the Purnima utsav and palkhi procession." },
  { name: "Sharadiya Navratri", when: "Ashwin (Sep–Oct)", text: "Nine nights of ghatasthapana, daily alankar of Mata and Dasara Seemollanghan." },
  { name: "Chaitra Navratri", when: "Chaitra (Mar–Apr)", text: "Spring navratri with special pujas and devotional kirtan." },
];

function Darshan() {
  return (
    <>
      <PageHero eyebrow="Connect with Mata" title="Darshan & Aarti" intro="Join the daily rhythm of worship at Mata's sanctum, wherever you are." image={aarti} />
      <Section kicker="Daily schedule" title="Aarti timings">
        <div className="grid gap-3 md:grid-cols-2">
          {schedule.map(([n, t]) => (
            <div key={n} className="flex items-center justify-between rounded-md border border-border bg-card px-5 py-4">
              <span className="font-medium">{n}</span>
              <span className="font-display text-2xl text-primary">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Timings may change during festivals and eclipses. Please check announcements before visiting.</p>
      </Section>
      <section className="bg-secondary">
        <Section kicker="Approved by the Sansthan" title="Darshan gallery">
          <div className="grid gap-4 md:grid-cols-3">
            {[g1.url, g2.url, g3.url, g4.url, g5.url, g6.url].map((src, i) => (
              <img key={i} src={src} alt="Temple darshan" loading="lazy" className="h-72 w-full rounded-lg object-cover shadow-warm" />
            ))}
          </div>
        </Section>
      </section>
      <Section kicker="Listen" title="Aarti recordings">
        <div className="grid gap-4 md:grid-cols-3">
          {["Kakad Aarti", "Dhoop Aarti", "Shri Yogeshwari Stotra"].map((t) => (
            <Card key={t} title={t}><p>Official recording will be published by the temple committee.</p><div className="mt-4 h-1 rounded bg-muted"><div className="h-1 w-1/3 rounded bg-sacred" /></div></Card>
          ))}
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="Utsav" title="Festival updates">
          <div className="grid gap-6 md:grid-cols-3">
            {festivals.map((f) => (
              <Card key={f.name} title={f.name}><p className="text-sm font-medium text-accent">{f.when}</p><p className="mt-2">{f.text}</p></Card>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
