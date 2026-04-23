function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "rgba(2, 6, 23, 0.8)",
      backdropFilter: "blur(10px)",
      zIndex: 1000
    }}>
      {/* Logo */}
      <h2 style={{ color: "#38bdf8" }}>Priyanshu</h2>

      {/* Links */}
      <div>
  <a href="#home" style={linkStyle}>Home</a>
  <a href="#skills" style={linkStyle}>Skills</a>   {/* 👈 ADD THIS */}
  <a href="#projects" style={linkStyle}>Projects</a>
  <a href="#contact" style={linkStyle}>Contact</a>
</div>
    </nav>
  );
}

const linkStyle = {
  margin: "0 15px",
  color: "#e2e8f0",
  textDecoration: "none",
  fontSize: "16px",
  transition: "0.3s"
};

export default Navbar;