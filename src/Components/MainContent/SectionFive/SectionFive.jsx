import "./sectionfive.css";
import sectionFiveImage from "../../../assets/section-five-image.svg";

export function SectionFive() {
  return (
    <div className="section-five">
      <div className="container">
        <div className="section-five-body">
          <div className="section-five-heading">
            <h1>
              Digital <span>solution</span> and transformation
            </h1>
            <p>
              We support our clients' online presence and expertly implement
              sales and promotion strategies. We believe in the power of online
              marketing and center all our interactive services around it.
            </p>
          </div>
          <div className="section-five-image">
            <figure>
              <img
                src={sectionFiveImage}
                alt="Abstract image containing cirles lines"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
