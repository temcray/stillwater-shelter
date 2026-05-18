import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page not-found">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn" to="/">
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;
