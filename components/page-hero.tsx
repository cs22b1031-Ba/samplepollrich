type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="subpage-hero" style={{ backgroundImage: `linear-gradient(120deg, rgba(7, 7, 7, 0.92), rgba(7, 7, 7, 0.58)), url(${image})` }}>
      <div className="shell">
        <p className="eyebrow eyebrow-left">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
