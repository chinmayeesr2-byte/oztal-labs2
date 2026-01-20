export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>
          We are the <span>execution arm of Ozta.</span>
        </h1>
        <p>
          We build simple, reliable digital systems that help organizations run
          better every day.
        </p>
        <button className="primary-btn">Contact us</button>
      </section>

      {/* What We Do */}
      <section className="section">
        <h2>What we do</h2>
        <p className="section-desc">
          We help organizations simplify their operations by replacing manual
          work and scattered tools with scalable digital systems.
        </p>

        <div className="card-grid">
          <div className="card">Custom internal software</div>
          <div className="card">Workflow automation and integrations</div>
          <div className="card">Web and mobile applications</div>
          <div className="card">AI-enabled tools</div>
          <div className="card">Business platforms for B2B, B2C, and D2C</div>
          <div className="card">Ongoing maintenance and support</div>
        </div>
      </section>

      {/* Whom We Work With */}
      <section className="section narrow">
        <h2>Whom We Work With</h2>
        <p>
          We work with service businesses, SMEs, institutions, and growing
          organizations, worldwide.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="section narrow">
        <h2>Why Organizations Choose Us</h2>
        <p>
          We understand how your teams work. <br />
          We create systems built to last. <br />
          We stay involved beyond launch.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let’s build the right systems to make everyday work easier.</h2>
        <button className="primary-btn">Contact us</button>
      </section>
    </>
  );
}



