import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function GetHelp() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h1>Get Help</h1>
        <p>If you need immediate support, click blow to start the process.</p>

        <Button>
          <Link
            to="/get-help"
            style={{ color: "white", textDecoration: "none" }}
          >
            Connect with Shelter
          </Link>
        </Button>
      </section>
    </>
  );
}

export default GetHelp;
