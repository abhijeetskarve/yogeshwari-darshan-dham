import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import festival from "@/assets/festival.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "सूचना व पूजा चौकशी | योगेश्वरी देवी अंबाजोगाई" },
      { name: "description", content: "महत्त्वाच्या तारखा, मंदिर सूचना, पूजा चौकशी आणि समितीची माहिती." },
      { property: "og:title", content: "योगेश्वरी देवस्थानाशी संपर्कात रहा" },
      { property: "og:description", content: "तारखा, सूचना, पूजा चौकशी व समितीची माहिती." },
    ],
  }),
  component: Connect,
});

const dates = [
  ["मार्गशीर्ष नवरात्र प्रारंभ", "मार्गशीर्ष शुद्ध प्रतिपदा"],
  ["पौर्णिमा उत्सव व पालखी", "मार्गशीर्ष पौर्णिमा"],
  ["चैत्र नवरात्र", "चैत्र शुद्ध प्रतिपदा"],
  ["शारदीय नवरात्र व दसरा", "अश्विन शुद्ध"],
];
const news = [
  "नवरात्रासाठी विशेष दर्शन रांगेची व्यवस्था जाहीर.",
  "येणाऱ्या भाविकांसाठी दररोज अन्नदान सेवा सुरू.",
  "बाह्य प्राकाराचे जीर्णोद्धार काम प्रगतीपथावर.",
];
const pujas = ["अभिषेक", "कुंकुमार्चन", "साडी-चोळी अर्पण", "नवचंडी होम", "कुलधर्म / कुलाचार", "अन्नदान सेवा"];

function Connect() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="संपर्कात रहा" title="बातम्या, तारखा व सेवा" intro="मंदिराच्या दिनदर्शिकेशी जोडलेले रहा आणि मातेच्या चरणी सेवा अर्पण करा." image={festival} />
      <Section kicker="दिनदर्शिका" title="महत्त्वाच्या तारखा">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {dates.map(([n, d]) => (
              <div key={n} className="rounded-md border-l-4 border-accent bg-card px-5 py-3"><p className="font-medium">{n}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
          <Card title="सूचना">
            <ul className="space-y-3">{news.map((n) => <li key={n} className="border-b border-border pb-3 last:border-0">{n}</li>)}</ul>
          </Card>
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="सेवा" title="पूजा चौकशी">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground">आपल्या कुटुंबाच्या नावाने पूजा अर्पण करा. मंदिर कार्यालय तारीख व तपशील निश्चित करण्यासाठी आपल्याशी संपर्क करेल.</p>
              <div className="mt-4 flex flex-wrap gap-2">{pujas.map((p) => <span key={p} className="rounded-full bg-card px-4 py-1 text-sm text-primary">{p}</span>)}</div>
            </div>
            {sent ? (
              <Card title="धन्यवाद 🙏">आपली चौकशी नोंदवली गेली आहे. जय योगेश्वरी माता!</Card>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3 rounded-lg bg-card p-6 shadow-warm">
                <label className="block space-y-1"><span className="font-medium">पूर्ण नाव</span><input required autoComplete="name" placeholder="आपले नाव लिहा" className="w-full rounded-md border border-input bg-background px-4 py-2" /></label>
                <label className="block space-y-1"><span className="font-medium">मोबाईल क्रमांक</span><input required type="tel" autoComplete="tel" placeholder="आपला मोबाईल क्रमांक लिहा" className="w-full rounded-md border border-input bg-background px-4 py-2" /></label>
                <label className="block space-y-1"><span className="font-medium">कोणती पूजा करायची आहे?</span><select className="w-full rounded-md border border-input bg-background px-4 py-2">{pujas.map((p) => <option key={p}>{p}</option>)}</select></label>
                <label className="block space-y-1"><span className="font-medium">पूजेची तारीख</span><input type="date" className="w-full rounded-md border border-input bg-background px-4 py-2" /></label>
                <label className="block space-y-1"><span className="font-medium">गोत्र किंवा संदेश</span><textarea placeholder="येथे लिहा" rows={3} className="w-full rounded-md border border-input bg-background px-4 py-2" /></label>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">चौकशी पाठवा</Button>
              </form>
            )}
          </div>
        </Section>
      </section>
      <Section kicker="देवस्थान" title="मंदिर समिती">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="श्री योगेश्वरी देवस्थान">विश्वस्त मंडळ मंदिर प्रशासन, पूजा-अर्चा, उत्सव व भक्त सेवांचे व्यवस्थापन करते.</Card>
          <Card title="मंदिर कार्यालय">अंबाजोगाई, जि. बीड, महाराष्ट्र ४३१५१७. दर्शन वेळेत दररोज खुले.</Card>
          <Card title="सेवा व देणगी">अन्नदान, उत्सव व वारसा संवर्धनासाठी मंदिर कार्यालयामार्फत योगदान द्या.</Card>
        </div>
      </Section>
    </>
  );
}
