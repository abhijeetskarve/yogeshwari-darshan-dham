import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import deity from "@/assets/t-ygd.jpg.asset.json";

const nav = [
  { to: "/", label: "मुख्यपृष्ठ" },
  { to: "/darshan", label: "दर्शन व आरती" },
  { to: "/pilgrimage", label: "यात्रा नियोजन" },
  { to: "/connect", label: "संपर्कात रहा" },
  { to: "/heritage", label: "वारसा" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="श्री योगेश्वरी देवी मुख्यपृष्ठ">
          <img src={deity.url} alt="श्री योगेश्वरी देवी" className="h-12 w-12 rounded-full border border-border object-cover" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-primary">श्री योगेश्वरी देवी</span>
            <span className="mt-1 block text-xs text-muted-foreground">अंबाजोगाई · बीड · महाराष्ट्र</span>
          </span>
        </Link>
        <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"><Link to="/connect">पूजा चौकशी <ArrowUpRight /></Link></Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "मेनू बंद करा" : "मेनू"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
      <div className="border-y border-border bg-gold">
        <nav className="mx-auto hidden max-w-6xl items-center gap-2 px-6 py-2 md:flex" aria-label="मुख्य मेनू">
          {nav.map((n) => <Button key={n.to} asChild variant="ghost" className="h-8 rounded-sm px-5 text-foreground hover:bg-background/50"><Link to={n.to} activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }} activeOptions={{ exact: true }}>{n.label}</Link></Button>)}
          <span className="ml-auto flex items-center gap-1 text-xs text-foreground"><MapPin className="size-3" /> अंबाजोगाई, बीड</span>
        </nav>
        {open && <nav className="grid gap-1 px-6 py-3 md:hidden" aria-label="मुख्य मेनू">{nav.map((n) => <Button key={n.to} asChild variant="ghost" className="justify-start"><Link to={n.to} onClick={() => setOpen(false)}>{n.label}</Link></Button>)}</nav>}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div><p className="font-display text-2xl text-primary">॥ जय योगेश्वरी माता ॥</p><p className="mt-3 max-w-sm text-sm text-muted-foreground">श्री योगेश्वरी देवस्थान, अंबाजोगाई,<br />जि. बीड, महाराष्ट्र ४३१५१७</p></div>
        <div className="text-sm"><p className="mb-3 font-semibold text-primary">देवस्थान</p>{nav.map((n) => <Link key={n.to} to={n.to} className="block py-1 text-muted-foreground hover:text-accent">{n.label}</Link>)}</div>
        <div className="text-sm"><p className="mb-3 font-semibold text-primary">मंदिर कार्यालय</p><p className="text-muted-foreground">भक्तांसाठी दररोज खुले</p><Link to="/connect" className="mt-3 inline-flex items-center gap-2 text-accent">संपर्कात रहा <ArrowUpRight className="size-4" /></Link></div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">श्री योगेश्वरी देवी · अंबाजोगाई</div>
    </footer>
  );
}
