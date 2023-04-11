import "../Footer/footer.css";
import footerImage from "../../assets/footer-image.svg";

export function Footer() {
  return (
    <>
      <div className="footer-image">
        <figure>
          <img src={footerImage} alt="" />
        </figure>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-body">
            <h1 className="footer-heading">Let's do this!</h1>
            <p>Let's get to work on a common project!</p>
            <p>
              You're curious what we can do for your business? You want to
              benefit from online marketing or you need graphic design services
              in your company? You plan to open an online store carry out an
              adwords campaign?
            </p>
            <div className="footer-button">
              <button>Write To Us!</button>
            </div>
            <div className="footer-contact">
              <div className="footer-brand">
                <h1>KALLYAS</h1>
              </div>
              <div className="footer-nav">
                <ul>
                  <li>Browse Topics</li>
                  <li>How It Works</li>
                  <li>FAQ</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="footer-social-media">
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div className="footer-contact-details">
                <ul>
                  <li>Wall St., NYC 36, 97415, 4C</li>
                  <li>+513 7622 522 ; +215 8211 12</li>
                  <li>info@company.com</li>
                  <li>support@help.com</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="copyright-text">
            All rights reserved @ 2019 Hogash Studio.
          </p>
        </div>
      </footer>
    </>
  );
}
