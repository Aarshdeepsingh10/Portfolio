function FeatureCards({ cards }) {
  return (
    <section className="section features" id="features">
      <div className="section-heading">
        <p className="eyebrow">WHAT YOU CAN DO</p>
        <h2>Everything in one place.</h2>
        <p>Simple tools to help you stay organised and focused.</p>
      </div>

      <div className="feature-grid">
        {cards.map((card) => (
          <article className="feature-card" key={card.id}>
            <div className="feature-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#contact">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;