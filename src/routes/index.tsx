import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import aarti from "@/assets/aarti.jpg";
import festival from "@/assets/festival.jpg";
import journey from "@/assets/journey.jpg";
import { TempleShowcase } from "@/components/TempleShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Yogeshwari Devi Temple, Ambajogai | Official Devotee Portal" },
      { name: "description", content: "Darshan, aarti, festivals, pilgrimage guidance and heritage of Shri Yogeshwari Devi, Ambajogai, Beed." },
      { property: "og:title", content: "Shri Yogeshwari Devi Temple, Ambajogai" },
      { property: "og:description", content: "Feel the temple, connect with Mata and plan your pilgrimage to Ambajogai." },
    ],
  }),
  component: Index,
});

const paths = [
  { to: "/darshan", title: "Connect with Mata", text: "Approved darshan photographs, aarti recordings and festival updates.", img: aarti },
  { to: "/pilgrimage", title: "Plan a Pilgrimage", text: "Reach Ambajogai by air, road or train with practical guidance.", img: journey },
  { to: "/connect", title: "Stay Connected", text: "Important dates, announcements, puja enquiries and the committee.", img: festival },
  { to: "/heritage", title: "Preserve our Heritage", text: "The story of Yogeshwari Mata and our Konkani traditions.", img: hero },
] as const;

function Index() {
  return (
    <>
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Shri Yogeshwari Devi temple at dawn" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-veil" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="font-display text-2xl text-gold">॥ श्री योगेश्वरी देवी प्रसन्न ॥</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">Welcome to the abode of<br />Yogeshwari Mata</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">Kuldevi of the Konkanastha community, Jogai of Ambajogai — blessing devotees on the Balaghat hills of Beed for centuries.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/darshan" className="rounded-full bg-sacred px-7 py-3 font-medium text-primary-foreground shadow-warm transition hover:scale-105">Darshan & Aarti timings</Link>
            <Link to="/pilgrimage" className="rounded-full border border-gold px-7 py-3 font-medium text-gold transition hover:bg-gold hover:text-maroon-deep">Plan your visit</Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-6 text-center md:grid-cols-3">
          <div><p className="text-xs uppercase tracking-widest text-gold">Temple opens</p><p className="font-display text-2xl">Early morning, daily</p></div>
          <div><p className="text-xs uppercase tracking-widest text-gold">Next major festival</p><p className="font-display text-2xl">Margashirsha Navratri</p></div>
          <div><p className="text-xs uppercase tracking-widest text-gold">Location</p><p className="font-display text-2xl">Ambajogai, Beed</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Inside the Devasthan</p>
          <h2 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">Discover the temple</h2>
          <div className="rangoli-divider mx-auto my-6 max-w-xs" />
        </div>
        <TempleShowcase />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Your journey with Mata</p>
          <h2 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">How may we serve you today?</h2>
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
                <span className="mt-3 inline-block text-sm text-gold">Enter →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-display text-3xl italic leading-relaxed text-primary md:text-4xl">“सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥”</p>
          <p className="mt-4 text-muted-foreground">Salutations to the Mother, auspicious of all that is auspicious.</p>
        </div>
      </section>
    </>
  );
}
