import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">
            <Image
              src="/images/pollrich-logo.svg"
              alt="Pollrich logo"
              width={620}
              height={220}
              className="footer-logo"
            />
          </div>
          <p className="footer-copy">
            Engineered airflow systems for critical industrial applications with a focus on
            performance, reliability, and long-term support.
          </p>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-contact">
            <span>
              <MapPin size={16} />
              Industrial Air Systems Division, India
            </span>
            <span>
              <Phone size={16} />
              +91 98765 43210
            </span>
            <span>
              <Mail size={16} />
              sales@pollrichindia.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
