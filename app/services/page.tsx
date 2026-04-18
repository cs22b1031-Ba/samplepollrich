import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { detailSections, services } from "@/data/site";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="SERVICES"
        title="Support that spans engineering, commissioning, and long-term plant care."
        description="Our service model covers the full equipment lifecycle so teams can improve reliability, plan maintenance, and sustain process airflow performance."
        image={detailSections.services.image}
      />
      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="SERVICE CAPABILITIES"
            title="Practical support for industrial uptime"
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

          <div className="feature-strip">
            {detailSections.services.cards.map((card) => (
              <article key={card.title} className="feature-panel">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
