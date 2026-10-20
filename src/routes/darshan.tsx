import { createFileRoute } from "@tanstack/react-router";
import aarti from "@/assets/aarti.jpg";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "दर्शन, आरती व उत्सव | योगेश्वरी देवी अंबाजोगाई" },
      { name: "description", content: "दैनंदिन दर्शन व आरतीच्या वेळा, अधिकृत छायाचित्रे, आरती ध्वनिमुद्रणे व उत्सवांची माहिती." },
      { property: "og:title", content: "दर्शन व आरती — योगेश्वरी देवी" },
      { property: "og:description", content: "दर्शन, आरती व उत्सवांतून मातेशी जोडा." },
    ],
  }),
  component: Darshan,
});

const schedule = [
  ["काकड आरती", "पहाटे ५:००"],
  ["दर्शन सुरू", "पहाटे ५:३०"],
  ["महापूजा व अभिषेक", "सकाळी ७:००"],
  ["माध्यान्ह आरती व नैवेद्य", "दुपारी १२:००"],
  ["धूप आरती (सायं)", "सायं. ७:००"],
  ["शेजारती — मंदिर बंद", "रात्री १०:००"],
];

const festivals = [
  { name: "मार्गशीर्ष नवरात्र", when: "मार्गशीर्ष शुद्ध (नोव्हें.–डिसें.)", text: "मंदिराचा सर्वात मोठा उत्सव — पौर्णिमा उत्सव व पालखी मिरवणुकीने सांगता." },
  { name: "शारदीय नवरात्र", when: "अश्विन (सप्टें.–ऑक्टो.)", text: "घटस्थापना, मातेचे दररोज अलंकार आणि दसऱ्याचे सीमोल्लंघन." },
  { name: "चैत्र नवरात्र", when: "चैत्र (मार्च–एप्रिल)", text: "विशेष पूजा व भक्तिमय कीर्तनांसह वसंतातील नवरात्र." },
];

function Darshan() {
  return (
    <>
      <PageHero eyebrow="मातेशी जोडा" title="दर्शन व आरती" intro="आपण कुठेही असलात तरी मातेच्या गाभाऱ्यातील दैनंदिन उपासनेत सहभागी व्हा." image={aarti} />
      <Section kicker="दैनंदिन वेळापत्रक" title="आरतीच्या वेळा">
        <div className="grid gap-3 md:grid-cols-2">
          {schedule.map(([n, t]) => (
            <div key={n} className="flex items-center justify-between rounded-md border border-border bg-card px-5 py-4">
              <span className="font-medium">{n}</span>
              <span className="font-display text-2xl text-primary">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">उत्सव व ग्रहणकाळात वेळा बदलू शकतात. भेटीपूर्वी कृपया सूचना पाहा.</p>
      </Section>
      <section className="bg-secondary">
        <Section kicker="देवस्थानाने मान्य केलेली" title="दर्शन छायाचित्रे">
          <div className="grid gap-4 md:grid-cols-3">
            {[g1.url, g2.url, g3.url, g4.url, g5.url, g6.url].map((src, i) => (
              <img key={i} src={src} alt="मंदिर दर्शन" loading="lazy" className="h-72 w-full rounded-lg object-cover shadow-warm" />
            ))}
          </div>
        </Section>
      </section>
      <Section kicker="ऐका" title="आरती ध्वनिमुद्रणे">
        <div className="grid gap-4 md:grid-cols-3">
          {["काकड आरती", "धूप आरती", "श्री योगेश्वरी स्तोत्र"].map((t) => (
            <Card key={t} title={t}><p>अधिकृत ध्वनिमुद्रण मंदिर समितीकडून लवकरच प्रसिद्ध होईल.</p><div className="mt-4 h-1 rounded bg-muted"><div className="h-1 w-1/3 rounded bg-sacred" /></div></Card>
          ))}
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="उत्सव" title="उत्सवांची माहिती">
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
