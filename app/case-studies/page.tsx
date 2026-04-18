import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, detailSections } from "@/data/site";

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="CASE STUDIES"
        title="Measured results from industrial installations across demanding sectors."
        description="Our projects focus on airflow performance, operating stability, maintenance reduction, and long-term plant reliability."
        image={detailSections.caseStudies.image}
      />
      <section className="content-section case-study-section">
        <div className="shell">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected applications and performance stories"
          />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="case-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 8, 8, 0.06), rgba(8, 8, 8, 0.7)), url(${study.image})` }}
              >
                <p className="case-label">{study.title}</p>
                <span className="case-button">View Case Study</span>
              </article>
            ))}
          </div>

          <div className="feature-strip">
            {detailSections.caseStudies.cards.map((card) => (
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
