import "../Styles/careers.css";

export default function Careers() {
  return (
    <>
      <section className="hero">
        <img src="public/friends.jpg" alt="Team collaboration" className="hero-img" />
        <h1>Careers at Ozta Labs</h1>
        <p>We are a small team focused on clarity, reliability, and practical outcomes.</p>
      </section>

      <section className="section narrow">
        <h2>How We Work</h2>
        <p>We’re a small team, so everyone’s work matters. We take time to do things properly and care about the quality of what we build.</p>
      </section>

      <section className="section narrow">
        <h2>What We Look For</h2>
        <p>
          Care about doing work properly.<br />
          Communicate clearly.<br />
          Take ownership and keep improving.
        </p>
      </section>

      <section className="section narrow">
        <h2>How to Apply</h2>
        <p>
          Send us a short note about yourself and what you’re interested in.<br />
          Share links to your work if you have them.<br /><br />
          <strong>Email:</strong> <a href="mailto:careers@oztalabs.com" className="email-link">careers@oztalabs.com</a>
        </p>
      </section>

      <section className="cta">
        <h2>Let’s build the right systems to make everyday work easier.</h2>
        <button className="primary-btn">Contact us</button>
      </section>
    </>
  );
}






