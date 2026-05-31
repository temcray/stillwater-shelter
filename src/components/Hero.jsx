import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  function getHelp() {
    navigate("/get-help");
  }

  return (
    <section className="hero">
      <h1>Welcome to Stillwater Shelter</h1>

      <p>
        A safe place for men, women, and children seeking shelter, support, and
        protection.
      </p>

      <button className="btn" onClick={getHelp}>
        Get Help
      </button>
    </section>
  );
}

export default Hero;
