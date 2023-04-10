import "../DisplayCards/displaycards.css";

export function DisplayCards({ imageHeading, imageSource, imageAlt }) {
  return (
    <div className="display-cards">
      <figure className="section-one-bg-image">
        <img src={imageSource} alt={imageAlt} />
      </figure>
      <h4 className="section-one-image-heading">{imageHeading}</h4>
    </div>
  );
}
