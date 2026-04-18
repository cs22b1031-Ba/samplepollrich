import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { QuoteVisual } from "@/components/quote-visual";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT"
        title="Tell us about your airflow requirement and project conditions."
        description="Share your process needs, installation environment, and project goals. We’ll respond with a tailored recommendation."
        image="/images/contact-hero.jpg"
      />
      <section className="content-section light-section">
        <div className="shell contact-layout">
          <div>
            <SectionHeading eyebrow="CONTACT US" title="Request A Quote" align="left" />
            <ContactForm />
          </div>
          <div className="quote-panel">
            <h2>Request A Quote</h2>
            <p>We&apos;ll get back to you with a tailored solution.</p>
            <QuoteVisual />
          </div>
        </div>
      </section>
    </main>
  );
}
