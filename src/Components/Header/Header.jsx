import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Cards } from "../Cards/Cards";

import wave from "../../assets/wave-og.svg";
import "./header.css";

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
      <div className="container">
        <div className="hero-cards">
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
      </div>
    </section>
  );
}

export default Header;
