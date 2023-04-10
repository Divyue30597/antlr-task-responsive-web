import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import "./header.css";
import wave from "../../assets/wave-og.svg";
import { Cards } from "../Cards/Cards";

function Header() {
  return (
    <section className="hero-section">
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <figure>
        <img className="wave-svg" src={wave} alt="This is wave." />
      </figure>
      <div className="hero-input">
        <input type="text" placeholder="e.g. SEO, Design, Programming" />
      </div>
      <div className="hero-cards container">
        <Cards
          haveIcon={false}
          heading={"92%"}
          caption={"Growth rate of companies"}
        />

        <Cards
          haveIcon={true}
          heading={"+3.251%"}
          caption={"Percentage of monthly growth for company"}
        />
      </div>
    </section>
  );
}

export default Header;
