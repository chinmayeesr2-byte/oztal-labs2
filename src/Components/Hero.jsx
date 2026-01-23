import "../Style/Hero.css";
import teamImage from "../assets/team.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={teamImage} alt="Team collaboration" />
      </div>
    </section>
  );
}






