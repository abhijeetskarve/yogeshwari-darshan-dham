import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "इतिहास व कोकणस्थ वारसा | योगेश्वरी देवी अंबाजोगाई" },
      { name: "description", content: "योगेश्वरी मातेची आख्यायिका आणि कोकणस्थ समाजाच्या कुलदेवता परंपरा." },
      { property: "og:title", content: "योगेश्वरी मातेचा वारसा" },
      { property: "og:description", content: "योगेश्वरी मातेचा इतिहास व कोकणस्थ समाजाच्या परंपरा." },
    ],
  }),
  component: Heritage,
});

const timeline = [
  ["आख्यायिका", "परळीच्या वैद्यनाथाशी विवाहासाठी देवी कोकणातून आली. शुभ मुहूर्त टळला आणि ती येथेच कुमारिका रूपात कायमची राहिली — प्रेमाने तिला 'जोगाई' म्हणतात."],
  ["मंदिर", "जयंती नदीच्या काठी हेमाडपंती परंपरेतील प्राचीन मंदिर उभे असून गाभाऱ्यात मातेचे स्वयंभू रूप आहे."],
  ["विद्येचे केंद्र", "आद्यकवी मुकुंदराज आणि दासोपंत यांसारख्या संत-कवींनी अंबाजोगाईचा आध्यात्मिक वारसा समृद्ध केला."],
  ["आज", "महाराष्ट्र, गोवा, कर्नाटक व इतरत्र येथून दरवर्षी लाखो भाविक येतात, विशेषतः मार्गशीर्ष नवरात्रात."],
];

function Heritage() {
  return (
    <>
      <PageHero eyebrow="आपला वारसा जपा" title="जोगाईची कथा" intro="मातेभोवती गुंफलेली शतकानुशतकांची भक्ती, आख्यायिका आणि समाज." image={hero} />
      <Section kicker="इतिहास" title="काळाच्या ओघात योगेश्वरी माता">
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
        <Section kicker="आपला समाज" title="कोकणस्थ परंपरा">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="कुलदेवता">अनेक कोकणस्थ कुटुंबांची योगेश्वरी ही कुलदेवता आहे. प्रत्येक महत्त्वाच्या प्रसंगी जोगाईचे दर्शन घेतले जाते.</Card>
            <Card title="कुलाचार">नवविवाहित दांपत्य मातेचे आशीर्वाद घेतात आणि मुलांचे जावळ मातेच्या चरणी केले जाते.</Card>
            <Card title="नवरात्रातील विधी">घटस्थापना, साडी-चोळी अर्पण, गोंधळ आणि बोडण हे विधी घरी व मंदिरात केले जातात.</Card>
          </div>
        </Section>
      </section>
      <Section kicker="आपली आठवण सांगा" title="आपला वारसा जपूया">
        <p className="max-w-2xl text-muted-foreground">मातेशी संबंधित जुनी छायाचित्रे, पत्रे किंवा मौखिक इतिहास असलेल्या कुटुंबांनी ते मंदिर समितीकडे वारसा संग्रहासाठी द्यावेत, ही विनंती.</p>
      </Section>
    </>
  );
}
