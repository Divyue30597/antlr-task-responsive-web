import "./cards.css";
import arrowUp from "../../assets/arrow-up.svg";
import lightCharge from "../../assets/lightning-charge.svg";

export function Cards({ haveIcon, heading, caption }) {
  return (
    <div className="cards">
      {haveIcon ? (
        <div className="horizontal-card">
          <div className="card-img">
            <img
              className="light-image"
              src={lightCharge}
              alt="Lightning charge"
            />
          </div>
          <div className="card-body">
            <h3 className="card-heading" style={{ color: "#42c3af" }}>
              {heading}
            </h3>
            <p className="card-para">{caption}</p>
          </div>
        </div>
      ) : (
        <div className="vertical-card">
          <h3
            className="card-heading"
            style={{ fontSize: "36px", color: "#f2b115 " }}
          >
            {heading}
            <sup>
              <img src={arrowUp} alt="arrow pointing up" />
            </sup>
          </h3>
          <p className="card-para">{caption}</p>
        </div>
      )}
    </div>
  );
}
