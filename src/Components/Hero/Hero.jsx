import "./hero.css";

export function Hero() {
  return (
    <div className="container">
      <h2 className="hero-heading">Premium Services from premium agency</h2>
      <p className="hero-paragraph">
        These cases are perfectly simple and easy to distinguish. In free hour,
        when our power of choice is untrammelled and when nothing prevents our
        being able to do what we like best, every pleasure is to be welcomed and
        every pain avoided.
      </p>
      <div className="hero-input">
        <input
          className="hero-main-input"
          type="text"
          placeholder="e.g. SEO, Design, Programming"
        />
      </div>
    </div>
  );
}
