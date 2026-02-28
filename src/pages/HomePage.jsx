import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="home-hero">
      <p className="eyebrow">KodNest Premium</p>
      <h1>Build a Resume That Gets Read.</h1>
      <p className="subtext">
        Structure-first resume authoring with a focused, calm writing experience.
      </p>
      <Link to="/builder" className="button-primary">
        Start Building
      </Link>
    </section>
  );
}

export default HomePage;
