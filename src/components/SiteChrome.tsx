import { Link } from "@tanstack/react-router";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sacred font-display text-xl text-primary-foreground">ॐ</span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-primary">श्री योगेश्वरी देवी</span>
            <span className="block text-xs text-muted-foreground">अंबाजोगाई · बीड</span>
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground hover:text-accent" activeProps={{ className: "text-accent" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="मेनू">☰</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-border px-6 py-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-maroon-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-gold">॥ जय योगेश्वरी माता ॥</p>
          <p className="mt-2 text-sm opacity-80">श्री योगेश्वरी देवस्थान, अंबाजोगाई, जि. बीड, महाराष्ट्र ४३१५१७</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold text-gold">पाहा</p>
          {nav.map((n) => (<Link key={n.to} to={n.to} className="block py-0.5 hover:text-gold">{n.label}</Link>))}
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold text-gold">मंदिर कार्यालय</p>
          <p>भक्तांसाठी दररोज खुले</p>
          <p>संपर्क तपशील "संपर्कात रहा" पानावर</p>
        </div>
      </div>
    </footer>
  );
}
