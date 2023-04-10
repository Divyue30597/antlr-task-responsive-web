import "./sectionthree.css";
import sectionThreeImageOne from "../../../assets/section-three-image-one.svg";
import sectionThreeImageTwo from "../../../assets/section-three-image-two.png";
import sectionThreeImageThree from "../../../assets/section-three-image-three.png";
import sectionThreeImageFour from "../../../assets/section-three-image-four.png";

export function SectionThree() {
  return (
    <div className="container">
      <div className="section-three">
        <div className="section-three-heading">
          <h1>
            A team with creativity and an <span>advanced</span> imagination.
          </h1>
          <p>
            With over 30-years of combined industry experience and a solution
            led philosophy, we pride ourselves on offering a transparent,
            personalized recruitment service, no matter how complex your needs.
          </p>
          <p>
            With a pan-European network that includes the most sought out
            businesses and IT professionals in the market, you ask, we deliver.
          </p>
        </div>
        <div className="section-three-body">
          <div className="section-three-top-image">
            <figure className="sec-three-img-one">
              <img src={sectionThreeImageOne} alt="" />
            </figure>
            <figure className="sec-three-img-two">
              <img src={sectionThreeImageTwo} alt="" />
            </figure>
          </div>
          <div className="section-three-down-image">
            <figure className="sec-three-img-three">
              <img src={sectionThreeImageThree} alt="" />
            </figure>
            <figure className="sec-three-img-four">
              <img src={sectionThreeImageFour} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
