import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import festival from "@/assets/festival.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Announcements & Puja Enquiries | Yogeshwari Devi Ambajogai" },
      { name: "description", content: "Important dates, temple announcements, puja enquiries and committee information." },
      { property: "og:title", content: "Stay connected with Yogeshwari Devi Sansthan" },
      { property: "og:description", content: "Dates, announcements, puja enquiries and committee details." },
    ],
  }),
  component: Connect,
});

const dates = [
  ["Margashirsha Navratri begins", "Margashirsha Shukla Pratipada"],
  ["Purnima Utsav & Palkhi", "Margashirsha Purnima"],
  ["Chaitra Navratri", "Chaitra Shukla Pratipada"],
  ["Sharadiya Navratri & Dasara", "Ashwin Shukla"],
];
const news = [
  "Special darshan queue arrangements announced for Navratri.",
  "Annadaan seva continues daily for visiting devotees.",
  "Temple restoration work on the outer prakar in progress.",
];
const pujas = ["Abhishek", "Kumkumarchan", "Sadi-Choli Arpan", "Navchandi Homa", "Kuldharma / Kulachar", "Annadaan Seva"];

function Connect() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Stay connected" title="News, dates & seva" intro="Stay close to the temple's calendar and offer your seva to Mata." image={festival} />
      <Section kicker="Calendar" title="Important dates">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {dates.map(([n, d]) => (
              <div key={n} className="rounded-md border-l-4 border-accent bg-card px-5 py-3"><p className="font-medium">{n}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
          <Card title="Announcements">
            <ul className="space-y-3">{news.map((n) => <li key={n} className="border-b border-border pb-3 last:border-0">{n}</li>)}</ul>
          </Card>
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="Seva" title="Puja enquiry">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground">Offer a puja in your family's name. The temple office will contact you to confirm date and details.</p>
              <div className="mt-4 flex flex-wrap gap-2">{pujas.map((p) => <span key={p} className="rounded-full bg-card px-4 py-1 text-sm text-primary">{p}</span>)}</div>
            </div>
            {sent ? (
              <Card title="Thank you 🙏">Your enquiry has been noted. Jai Yogeshwari Mata!</Card>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3 rounded-lg bg-card p-6 shadow-warm">
                <input required placeholder="Full name" className="w-full rounded-md border border-input bg-background px-4 py-2" />
                <input required type="tel" placeholder="Phone number" className="w-full rounded-md border border-input bg-background px-4 py-2" />
                <select className="w-full rounded-md border border-input bg-background px-4 py-2">{pujas.map((p) => <option key={p}>{p}</option>)}</select>
                <input type="date" className="w-full rounded-md border border-input bg-background px-4 py-2" />
                <textarea placeholder="Gotra / message" rows={3} className="w-full rounded-md border border-input bg-background px-4 py-2" />
                <button className="w-full rounded-full bg-sacred py-3 font-medium text-primary-foreground">Send enquiry</button>
              </form>
            )}
          </div>
        </Section>
      </section>
      <Section kicker="Sansthan" title="Temple committee">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Shri Yogeshwari Devi Sansthan">The trust manages temple administration, worship, festivals and devotee services.</Card>
          <Card title="Temple office">Ambajogai, Dist. Beed, Maharashtra 431517. Open daily during darshan hours.</Card>
          <Card title="Volunteer & donate">Contribute to annadaan, festivals and heritage conservation through the temple office.</Card>
        </div>
      </Section>
    </>
  );
}
