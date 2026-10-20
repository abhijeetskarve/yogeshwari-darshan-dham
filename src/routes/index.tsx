import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import aarti from "@/assets/aarti.jpg";
import festival from "@/assets/festival.jpg";
import journey from "@/assets/journey.jpg";
import { TempleShowcase } from "@/components/TempleShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "श्री योगेश्वरी देवी मंदिर, अंबाजोगाई | अधिकृत भक्त संकेतस्थळ" },
      { name: "description", content: "श्री योगेश्वरी देवी, अंबाजोगाई — दर्शन, आरती, उत्सव, यात्रा मार्गदर्शन व वारसा." },
      { property: "og:title", content: "श्री योगेश्वरी देवी मंदिर, अंबाजोगाई" },
      { property: "og:description", content: "मंदिराचा अनुभव घ्या, मातेशी जोडा आणि अंबाजोगाई यात्रेचे नियोजन करा." },
    ],
  }),
  component: Index,
});

const paths = [
  { to: "/darshan", title: "मातेशी जोडा", text: "अधिकृत दर्शन छायाचित्रे, आरती ध्वनिमुद्रणे आणि उत्सवांची माहिती.", img: aarti },
  { to: "/pilgrimage", title: "यात्रेचे नियोजन", text: "विमान, रेल्वे किंवा रस्त्याने अंबाजोगाईला कसे पोहोचावे याचे मार्गदर्शन.", img: journey },
  { to: "/connect", title: "संपर्कात रहा", text: "महत्त्वाच्या तारखा, सूचना, पूजा चौकशी आणि मंदिर समिती.", img: festival },
  { to: "/heritage", title: "आपला वारसा", text: "योगेश्वरी मातेची कथा आणि कोकणस्थ समाजाच्या परंपरा.", img: hero },
] as const;

function Index() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="text-center">
          <p className="font-display text-xl text-accent">॥ श्री योगेश्वरी देवी प्रसन्न ॥</p>
          <h1 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">योगेश्वरी मातेच्या दरबारात आपले स्वागत</h1>
          <div className="rangoli-divider mx-auto my-5 max-w-xs" />
        </div>
        <TempleShowcase />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/darshan" className="rounded-full bg-sacred px-7 py-3 font-medium text-primary-foreground shadow-warm transition hover:scale-105">दर्शन व आरतीच्या वेळा</Link>
          <Link to="/pilgrimage" className="rounded-full border border-primary px-7 py-3 font-medium text-primary transition hover:bg-primary hover:text-primary-foreground">यात्रेचे नियोजन करा</Link>
        </div>
      </section>

      <section className="mt-12 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-6 text-center md:grid-cols-3">
          <div><p className="text-xs text-gold">मंदिर उघडण्याची वेळ</p><p className="font-display text-2xl">दररोज पहाटे</p></div>
          <div><p className="text-xs text-gold">पुढील मुख्य उत्सव</p><p className="font-display text-2xl">मार्गशीर्ष नवरात्र</p></div>
          <div><p className="text-xs text-gold">स्थान</p><p className="font-display text-2xl">अंबाजोगाई, बीड</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm text-accent">मातेसोबतचा प्रवास</p>
          <h2 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">आम्ही आपली कशी सेवा करू?</h2>
          <div className="rangoli-divider mx-auto my-6 max-w-xs" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {paths.map((p) => (
            <Link key={p.to} to={p.to} className="group relative h-72 overflow-hidden rounded-lg shadow-warm">
              <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-veil" />
              <div className="absolute bottom-0 p-6 text-primary-foreground">
                <h3 className="text-3xl font-semibold">{p.title}</h3>
                <p className="mt-1 opacity-90">{p.text}</p>
                <span className="mt-3 inline-block text-sm text-gold">पुढे जा →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-display text-3xl leading-relaxed text-primary md:text-4xl">“सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥”</p>
          <p className="mt-4 text-muted-foreground">सर्व मंगलांमध्ये मंगलरूप असलेल्या आईला नमस्कार.</p>
        </div>
      </section>
    </>
  );
}
