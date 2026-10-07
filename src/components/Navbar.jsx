function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="navbar-logo">Priyanshu Negi</h2>

      {/* Links */}
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;