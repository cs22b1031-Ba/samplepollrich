import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { detailSections, industries } from "@/data/site";

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Configured for the pressures, temperatures, and materials each sector demands."
        description="Pollrich India supports critical applications across heavy process industries with airflow systems that are selected and built for their exact operating environments."
        image={detailSections.industries.image}
      />
      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading eyebrow="SECTORS" title="Where our systems are deployed" />
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
