import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Globe,
  Settings,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { QuoteVisual } from "@/components/quote-visual";
import {
  caseStudies,
  industries,
  metrics,
  services,
  solutions,
  trustedBrands
} from "@/data/site";

export function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="country-chip">INDIA</p>
            <p className="eyebrow eyebrow-left">ENGINEERED FOR PERFORMANCE</p>
            <h1>
              <span>High-Performance</span>
              <span>Industrial Airflow Systems</span>
            </h1>
            <p className="hero-description">
              Custom centrifugal fans engineered for efficiency, reliability, and operation in
              demanding industrial environments.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Request A Quote
              </Link>
              <Link href="/solutions" className="button button-secondary">
                View Industrial Solution
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            {metrics.map((metric) => (
              <div key={metric.title} className="metric-row">
                <div className="metric-icon">{metric.icon}</div>
                <div>
                  <p className="metric-value">{metric.title}</p>
                  <p className="metric-label">{metric.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shell trusted-brands">
          <p>Trusted By Leading Industrial Enterprises</p>
          <div className="brand-carousel" aria-label="Trusted by leading industrial enterprises">
            <div className="brand-track">
              {trustedBrands.concat(trustedBrands).map((brand, index) => (
                <span key={`${brand}-${index}`} className="brand-pill">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="End-to-End Industrial Airflow Solutions"
            description="We provide end-to-end airflow solutions, from engineering design to installation and after-sales support, ensuring reliable performance across demanding industrial environments."
          />

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="INDUSTRIES WE SERVE"
            title="Engineered for Critical Industrial Applications"
          />

          <div className="industry-grid">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="industry-card"
                style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(8, 8, 8, 0.88)), url(${industry.image})` }}
              >
                <div className="industry-card-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <span className="industry-link">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section case-study-section">
        <div className="shell">
          <SectionHeading
            eyebrow="CASE STUDIES"
            title="Proven Performance Across Industrial Projects"
            description="Explore how our engineered airflow solutions have delivered measurable performance improvements across critical industrial applications."
          />

          <div className="case-grid">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="case-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 8, 8, 0.06), rgba(8, 8, 8, 0.7)), url(${study.image})` }}
              >
                <p className="case-label">{study.title}</p>
                <Link href="/case-studies" className="case-button">
                  View Case Study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section light-section">
        <div className="shell contact-layout">
          <div>
            <SectionHeading eyebrow="CONTACT US" title="Start Your Project Discussion" align="left" />
            <ContactForm />
          </div>

          <div className="quote-panel">
            <h2>Request A Quote</h2>
            <p>We&apos;ll get back to you with a tailored solution.</p>
            <QuoteVisual />
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="OUR SOLUTIONS"
            title="Designed for Reliability, Built for Industrial Duty"
            description="Pollrich India delivers application-focused fans, process ventilation packages, and lifecycle support tailored to plant conditions."
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article key={solution.title} className="solution-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
