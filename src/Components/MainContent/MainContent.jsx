import "../MainContent/maincontent.css";
import { SectionFive } from "./SectionFive/SectionFive";
import { SectionFour } from "./SectionFour/SectionFour";
import { SectionOne } from "./SectionOne/SectionOne";
import { SectionSix } from "./SectionSix/SectionSix";
import { SectionThree } from "./SectionThree/SectionThree";
import { SectionTwo } from "./SectionTwo/SectionTwo";

export function MainContent() {
  return (
    <>
      <section className="section">
        <SectionOne />
      </section>
      <section className="section">
        <SectionTwo />
      </section>
      <section className="section">
        <SectionThree />
      </section>
      <section className="section">
        <SectionFour />
      </section>
      <section className="section">
        <SectionFive />
      </section>
      <section className="section">
        <SectionSix />
      </section>
    </>
  );
}
