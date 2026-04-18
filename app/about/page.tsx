import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights, detailSections } from "@/data/site";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT POLLRICH INDIA"
        title="Industrial airflow expertise shaped around real operating conditions."
        description="We combine engineering rigor, manufacturing discipline, and application insight to build airflow systems that stay dependable in demanding process environments."
        image={detailSections.about.image}
      />
      <section className="content-section dark-section">
        <div className="shell split-section">
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="A focused partner for performance-critical airflow systems"
              align="left"
            />
            <div className="stack-list">
              {aboutHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="feature-stack">
            {detailSections.about.cards.map((card) => (
              <article key={card.title} className="solution-card">
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
