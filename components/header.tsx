"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { navItems, searchIndex } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!searchWrapRef.current) {
        return;
      }

      if (!searchWrapRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const results = query.trim()
    ? searchIndex.filter((item) => {
        const haystack = `${item.label} ${item.keywords}`.toLowerCase();
        return haystack.includes(query.trim().toLowerCase());
      })
    : searchIndex.slice(0, 5);

  function handleSearchSubmit() {
    const target = results[0];

    if (target) {
      router.push(target.href);
      setSearchOpen(false);
      setQuery("");
    }
  }

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand" aria-label="Pollrich India home">
          <span className="brand-logo-wrap">
            <Image
              src="/images/pollrich-logo.svg"
              alt="Pollrich logo"
              width={280}
              height={100}
              className="brand-logo"
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>INDIA</strong>
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
          <button
            className="icon-button"
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            aria-controls="site-search-panel"
            onClick={() => setSearchOpen((value) => !value)}
          >
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

      {searchOpen ? (
        <div className="search-shell" ref={searchWrapRef}>
          <div className="shell">
            <div className="search-panel" id="site-search-panel">
              <div className="search-row">
                <Search size={18} />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  placeholder="Search pages, industries, services..."
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearchSubmit();
                    }
                    if (event.key === "Escape") {
                      setSearchOpen(false);
                    }
                  }}
                />
                <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="search-results">
                {results.length ? (
                  results.map((item) => (
                    <Link
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      className="search-result"
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                      }}
                    >
                      <strong>{item.label}</strong>
                      <span>{item.href}</span>
                    </Link>
                  ))
                ) : (
                  <p className="search-empty">No pages found. Try “industries” or “quote”.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
