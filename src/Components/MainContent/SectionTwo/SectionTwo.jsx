import "./sectiontwo.css";
import sectionTwoImageOne from "../../../assets/section-two-image-one.png";
import sectionTwoImageTwo from "../../../assets/section-two-image-two.png";
import sectionTwoImageThree from "../../../assets/section-two-image-three.png";
import sectionTwoImageFour from "../../../assets/section-two-image-four.png";

const imagesList = [
  sectionTwoImageOne,
  sectionTwoImageTwo,
  sectionTwoImageThree,
  sectionTwoImageFour,
];

export function SectionTwo() {
  return (
    <>
      <div className="container">
        <h1 className="section-two-heading">
          Take a look at some <span>premium</span> projects.
        </h1>
      </div>
      <div className="section-two-images-list">
        {imagesList.map((image, index) => {
          return (
            <figure key={`index-${index}`}>
              <img src={image} alt={`images-${index}`} />
            </figure>
          );
        })}
      </div>
    </>
  );
}
