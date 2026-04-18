"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand" aria-label="Pollrich India home">
          <span className="brand-mark">PR</span>
          <span className="brand-copy">
            <strong>POLLRICH</strong>
            <span>INDIA</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx("nav-link", pathname === item.href && "is-active")}
            >
              {item.label}
            </Link>
          ))}
          <button className="icon-button" aria-label="Search">
            <Search size={18} />
          </button>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="button button-primary hide-mobile">
            Request A Quote
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-nav">
          <div className="shell mobile-nav-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx("mobile-nav-link", pathname === item.href && "is-active")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>
              Request A Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
