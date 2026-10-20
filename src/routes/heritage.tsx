import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "History & Konkani Heritage | Yogeshwari Devi Ambajogai" },
      { name: "description", content: "The legend of Yogeshwari Mata and the kuldevi traditions of the Konkani community." },
      { property: "og:title", content: "Heritage of Yogeshwari Mata" },
      { property: "og:description", content: "History of Yogeshwari Mata and traditions of the Konkani community." },
    ],
  }),
  component: Heritage,
});

const timeline = [
  ["The legend", "Devi journeyed from the Konkan to wed Lord Vaidyanath of Parli. The auspicious moment passed, and she chose to remain here as the eternal maiden — Kumarika — known lovingly as Jogai."],
  ["The temple", "An ancient shrine in the Hemadpanti tradition stands on the banks of the Jayanti river, its sanctum holding the self-manifested form of Mata."],
  ["A seat of learning", "Ambajogai nurtured saints and poets such as Mukundraj, the first Marathi poet, and Dasopant, deepening its spiritual heritage."],
  ["Today", "Lakhs of devotees from Maharashtra, Goa, Karnataka and beyond arrive each year, especially during Margashirsha Navratri."],
];

function Heritage() {
  return (
    <>
      <PageHero eyebrow="Preserve our heritage" title="The story of Jogai" intro="Centuries of devotion, legend and community woven around Mata." image={hero} />
      <Section kicker="History" title="Yogeshwari Mata through time">
        <ol className="relative space-y-8 border-l-2 border-gold pl-8">
          {timeline.map(([t, d]) => (
            <li key={t} className="relative">
              <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-sacred ring-4 ring-background" />
              <h3 className="text-2xl font-semibold text-primary">{t}</h3>
              <p className="mt-1 max-w-3xl text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <section className="bg-secondary">
        <Section kicker="Our community" title="Konkani traditions">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Kuldevi">For many Konkanastha families, Yogeshwari is the family deity. A visit to Jogai marks every important milestone.</Card>
            <Card title="Kulachar">Newlyweds seek Mata's blessing, and children's first offerings (jaavel) are made at her feet.</Card>
            <Card title="Navratri rituals">Ghatasthapana, sadi-choli offering, gondhal and the bodan ritual are performed in homes and at the temple.</Card>
          </div>
        </Section>
      </section>
      <Section kicker="Share your story" title="Help preserve our memory">
        <p className="max-w-2xl text-muted-foreground">Families holding old photographs, letters or oral histories connected to Mata are invited to share them with the temple committee for our heritage archive.</p>
      </Section>
    </>
  );
}
