import "../Style/About.css";
import "../Style/PageLayout.css";
import Footer from "../Components/Footer";
import teamImage from "../assets/team.png"; // <-- add your image here

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-image">
          <img src={teamImage} alt="Ozta Labs team illustration" />
        </div>
        <h1>About Ozta Labs</h1>
        <p className="subtitle">We build systems that make everyday work easier.</p>
      </section>

      <section className="careers">
      <h2>How We Work</h2>
      <p>We’re a small team, so everyone’s work matters.<br /> We take time to do things properly and care about the quality of what we build.</p>

      <h2>What We Look For</h2>
      <p>Care about doing work properly.<br />
         Communicate clearly.<br />
         Take ownership and keep improving.</p>

      <h2>How to Apply</h2>
      <p>Send us a short note about yourself and what you’re interested in.<br />
         Share links to your work (GitHub, portfolio, or past projects).<br />
         <a href="mailto:careers@oztalabs.com">careers@oztalabs.com</a><br />
         That’s it. 😊</p>
    </section>

      <Footer />
    </>
  );
}

