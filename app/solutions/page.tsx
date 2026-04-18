import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { detailSections, solutions } from "@/data/site";

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR SOLUTIONS"
        title="Application-driven airflow systems for complex industrial duty."
        description="From process fans to upgrade programs, our solution stack is built to deliver airflow reliability, efficiency, and maintainability at plant scale."
        image={detailSections.solutions.image}
      />
      <section className="content-section dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Solutions engineered around process performance"
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article key={solution.title} className="solution-card">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>

          <div className="feature-strip">
            {detailSections.solutions.cards.map((card) => (
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
