import "./sectionfour.css";
import sectionFourImage from "../../../assets/section-four-image.svg";

export function SectionFour() {
  return (
    <div className="section-four">
      <div className="section-four-bg"></div>
      <div className="container section-four-container">
        <div className="section-four-image">
          <figure>
            <img
              src={sectionFourImage}
              alt="two circles and square and one ellipse"
            />
          </figure>
        </div>
        <div className="section-four-body">
          <h1>Everything your business needs.</h1>
          <p>
            Our community is a collaboration hub, where the best tech people and
            the right companies come together, helping each other to be the very
            best at business.
          </p>
        </div>
      </div>
    </div>
  );
}
