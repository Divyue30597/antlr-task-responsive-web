import "../MainContent/maincontent.css";
import { SectionOne } from "./SectionOne/SectionOne";
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
      <section className="section">Section-4</section>
      <section className="section">Section-5</section>
      <section className="section">Section-6</section>
    </>
  );
}
