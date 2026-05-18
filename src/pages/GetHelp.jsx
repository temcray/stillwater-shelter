import { Link } from "react-router-dom";

function GetHelp() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Safe support when life feels uncertain.</h1>
        <p>
          Stillwater Shelter helps people find shelter, support services,
          emergency resources, and a clear next step during difficult moments.
        </p>

        <div className="hero-buttons">
          <Link className="btn" to="/resources">
            Get Help
          </Link>
          <Link className="btn secondary" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetHelp;
