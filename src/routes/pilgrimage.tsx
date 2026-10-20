import { createFileRoute } from "@tanstack/react-router";
import journey from "@/assets/journey.jpg";
import air from "@/assets/by-air.jpg";
import train from "@/assets/by-train.jpg";
import road from "@/assets/by-road.jpg";
import { PageHero, Section, Card } from "@/components/Section";

export const Route = createFileRoute("/pilgrimage")({
  head: () => ({
    meta: [
      { title: "अंबाजोगाई यात्रा नियोजन | योगेश्वरी देवी" },
      { name: "description", content: "विमान, रेल्वे किंवा रस्त्याने अंबाजोगाईला कसे पोहोचावे, निवास व प्रवासाच्या सूचना." },
      { property: "og:title", content: "अंबाजोगाई यात्रेचे नियोजन करा" },
      { property: "og:description", content: "भाविकांसाठी मार्ग, वाहतूक व उपयुक्त मार्गदर्शन." },
    ],
  }),
  component: Pilgrimage,
});

const modes = [
  { title: "विमानाने", img: air, points: ["लातूर विमानतळ — सुमारे ६० किमी (मर्यादित उड्डाणे)", "छत्रपती संभाजीनगर विमानतळ — सुमारे २१० किमी", "पुणे विमानतळ — सुमारे ३३० किमी", "सर्व विमानतळांवरून टॅक्सी उपलब्ध"] },
  { title: "रेल्वेने", img: train, points: ["परळी वैजनाथ स्थानक — सुमारे २५ किमी (सर्वात जवळ)", "लातूर स्थानक — सुमारे ६० किमी", "परळीहून अंबाजोगाईसाठी नियमित बस व रिक्षा", "परळी येथे वैद्यनाथ ज्योतिर्लिंग दर्शनही घ्या"] },
  { title: "रस्त्याने", img: road, points: ["पुणे, मुंबई, लातूर, बीड, नांदेड येथून एसटी बस", "बीड — सुमारे ९० किमी · लातूर — सुमारे ६० किमी", "पुणे — सुमारे ३३० किमी · मुंबई — सुमारे ४८० किमी", "चांगले राज्यमार्ग; मंदिराजवळ वाहनतळ"] },
];

function Pilgrimage() {
  return (
    <>
      <PageHero eyebrow="यात्रा नियोजन" title="जोगाईकडे आपला प्रवास" intro="अंबाजोगाई मराठवाड्यातील बीड जिल्ह्यात बालाघाट डोंगररांगांत वसले आहे." image={journey} />
      <Section kicker="येथे कसे यावे" title="अंबाजोगाईला कसे पोहोचाल">
        <div className="grid gap-6 md:grid-cols-3">
          {modes.map((m) => (
            <div key={m.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-warm">
              <div className="relative h-48 overflow-hidden">
                <img src={m.img} alt={m.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-veil" />
                <h3 className="absolute bottom-3 left-5 text-3xl font-semibold text-primary-foreground">{m.title}</h3>
              </div>
              <ul className="space-y-2 p-6 text-muted-foreground">{m.points.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">✦</span>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-warm">
          <iframe title="नकाशा" className="h-96 w-full" loading="lazy" src="https://www.google.com/maps?q=Yogeshwari+Devi+Temple+Ambajogai&hl=mr&output=embed" />
        </div>
      </Section>
      <section className="bg-secondary">
        <Section kicker="उपयुक्त मार्गदर्शन" title="प्रवासापूर्वी">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="भेटीचा उत्तम काळ">ऑक्टोबर ते फेब्रुवारी हवामान आल्हाददायक असते. नवरात्रात मोठी गर्दी असते — निवासाची व्यवस्था आधी करा.</Card>
            <Card title="निवास व्यवस्था">अंबाजोगाई शहरात मंदिराजवळ भक्त निवास, लॉज व हॉटेल्स उपलब्ध आहेत.</Card>
            <Card title="पोशाख व आचरण">पारंपरिक व सभ्य पोशाख अपेक्षित. पादत्राणे व चामड्याच्या वस्तू बाहेर ठेवाव्यात.</Card>
            <Card title="जवळची तीर्थक्षेत्रे">परळी वैजनाथ ज्योतिर्लिंग, मुकुंदराज समाधी, दासोपंत समाधी आणि खोलेश्वर मंदिर.</Card>
          </div>
        </Section>
      </section>
    </>
  );
}
