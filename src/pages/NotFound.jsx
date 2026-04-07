import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function NotFound() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you were looking for dosen't exist. But you're okay,
          let try again.
        </p>

        <Button>
          <Link
            to="/get-help"
            style={{ color: "white", textDecoration: "none" }}
          >
            Get Help Now
          </Link>
        </Button>
        <p style={{ marginTop: "20px" }}>
          Or go back to the <Link to="/">Home Page</Link>.
        </p>
      </section>
    </>
  );
}

export default NotFound;
