import "../SectionOne/sectionone.css";
import firstCardImage from "../../../assets/first-card-image.svg";
import secondCardImage from "../../../assets/second-card-image.svg";
import thirdCardImage from "../../../assets/third-card-image.svg";
import lastCardImage from "../../../assets/last-card-image.svg";
import { DisplayCards } from "./DisplayCards/DisplayCards";

export function SectionOne() {
  const imageList = [
    {
      imageSource: firstCardImage,
      imageHeading: "SEO",
      imageAlt: "SEO",
    },
    {
      imageSource: secondCardImage,
      imageHeading: "DESIGN",
      imageAlt: "Design",
    },
    {
      imageSource: thirdCardImage,
      imageHeading: "PROGRAMMING",
      imageAlt: "programming",
    },
    {
      imageSource: lastCardImage,
      imageHeading: "DEVELOPMENT",
      imageAlt: "development",
    },
  ];

  return (
    <div className="section-one">
      <div className="section-one-bg"></div>
      <div className="container">
        <div className="section-one-header">
          <h1 className="section-one-heading">What can we do for you?</h1>
          <button className="section-one-header-button">Learn More</button>
        </div>
        <div className="section-one-body">
          <ul className="section-one-list">
            <li>
              <div className="bullet-point"></div>
              <p>
                We speak to emotions and multiply conversions, reach and profits
                - we help your dreams take flight.
              </p>
            </li>
            <li>
              <div className="bullet-point"></div>
              <p>
                Our offer covers a wide range of services which will help you
                capture the attention and the hearts of your audience.
              </p>
            </li>
          </ul>
          <div className="images-list">
            {imageList.map((image, index) => {
              return (
                <DisplayCards
                  key={index}
                  imageHeading={image.imageHeading}
                  imageSource={image.imageSource}
                  imageAlt={image.imageAlt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
