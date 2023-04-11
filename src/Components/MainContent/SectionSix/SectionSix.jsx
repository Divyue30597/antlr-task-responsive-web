import "./sectionsix.css";
import contactUsImageOne from "../../../assets/contact-us-image-one.svg";
import contactUsImageTwo from "../../../assets/contact-us-image-two.svg";
import contactUsImageThree from "../../../assets/contact-us-image-three.svg";

export function SectionSix() {
  return (
    <div className="section-six">
      <div className="container">
        <h1 className="section-six-heading">
          <span className="section-six-heading-first">
            You want to <span>grow</span>.
          </span>
          We're here to help.
        </h1>
        <div className="form">
          <div className="form-body">
            <h1>
              Get in <span>touch</span> with us.
            </h1>
            <ul className="form-body-list">
              <li>
                <div className="bullet-point"></div>
                <p>
                  Creating a highly interactive, animated masterpiece alongside
                  a sleek full rebrand for the change management experts at
                  Kallyas.
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
            <ul className="section-six-contact-us-images">
              <li>
                <figure>
                  <img src={contactUsImageOne} alt="" />
                </figure>
                <h3>Phone</h3>
                <p>+513 7622 522</p>
                <p>+215 8211 12</p>
              </li>
              <li>
                <figure>
                  <img src={contactUsImageTwo} alt="" />
                </figure>
                <h3>Mail</h3>
                <p>info@company.com</p>
                <p>support@help.com</p>
              </li>
              <li>
                <figure>
                  <img src={contactUsImageThree} alt="" />
                </figure>
                <h3>Location</h3>
                <p>Wall St., NYC 36,</p>
                <p>97415, 4C</p>
              </li>
            </ul>
          </div>
          <div className="full-form">
            <form action="#" method="post">
              <input type="text" placeholder="Your Name" name="" id="" />
              <input type="text" placeholder="Email Address" name="" id="" />
              <input type="text" placeholder="Subject" name="" id="" />
              <textarea type="text" placeholder="Message" rows="6" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
