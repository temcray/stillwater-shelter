function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Stillwater Shelter</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/get-help">Get Help</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </nav>
  );
}

export default Navbar;
