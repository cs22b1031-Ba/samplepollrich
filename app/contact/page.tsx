import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
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
            <h2>Pollrich India</h2>
            <p>
              We support plant teams with engineered airflow systems, commissioning input, and
              lifecycle service planning.
            </p>
            <div className="contact-detail-card">
              <p>sales@pollrichindia.com</p>
              <p>+91 98765 43210</p>
              <p>Mon - Sat, 9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
