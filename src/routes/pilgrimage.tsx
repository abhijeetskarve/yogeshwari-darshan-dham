import { createFileRoute } from "@tanstack/react-router";
import journey from "@/assets/journey.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/pilgrimage")({
  head: () => ({
    meta: [
      { title: "Plan a Pilgrimage to Ambajogai | Yogeshwari Devi" },
      { name: "description", content: "How to reach Ambajogai by air, train or road, plus stay and travel tips for devotees." },
      { property: "og:title", content: "Plan your pilgrimage to Ambajogai" },
      { property: "og:description", content: "Directions, transport and practical guidance for devotees." },
    ],
  }),
  component: Pilgrimage,
});

const modes = [
  { title: "By Air", points: ["Latur Airport — approx. 60 km (limited flights)", "Chh. Sambhajinagar (Aurangabad) Airport — approx. 210 km", "Pune Airport — approx. 330 km", "Taxis available from all airports"] },
  { title: "By Train", points: ["Parli Vaijnath station — approx. 25 km (nearest)", "Latur station — approx. 60 km", "Regular buses and autos from Parli to Ambajogai", "Combine with Vaidyanath Jyotirlinga darshan at Parli"] },
  { title: "By Road", points: ["MSRTC buses from Pune, Mumbai, Latur, Beed, Nanded", "Beed — approx. 90 km · Latur — approx. 60 km", "Pune — approx. 330 km · Mumbai — approx. 480 km", "Good state highways; parking near temple"] },
];

function Pilgrimage() {
  return (
    <>
      <PageHero eyebrow="Plan a pilgrimage" title="Your journey to Jogai" intro="Ambajogai lies in the Balaghat ranges of Beed district, Marathwada." image={journey} />
      <Section kicker="Getting here" title="How to reach Ambajogai">
        <div className="grid gap-6 md:grid-cols-3">
          {modes.map((m) => (
            <Card key={m.title} title={m.title}>
              <ul className="mt-2 space-y-2">{m.points.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">✦</span>{p}</li>)}</ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-warm">
          <iframe title="Map" className="h-96 w-full" loading="lazy" src="https://www.google.com/maps?q=Yogeshwari+Devi+Temple+Ambajogai&output=embed" />
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="Practical guidance" title="Before you travel">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Best time to visit">October to February is pleasant. Navratri brings large crowds — plan stay early.</Card>
            <Card title="Where to stay">Bhakta niwas, lodges and hotels are available in Ambajogai town near the temple.</Card>
            <Card title="Dress & conduct">Traditional modest attire is appreciated. Footwear and leather items are left outside.</Card>
            <Card title="Nearby sacred places">Parli Vaijnath Jyotirlinga, Mukundraj Samadhi, Dasopant Samadhi and the Kholeshwar temple.</Card>
          </div>
        </Section>
      </section>
    </>
  );
}
