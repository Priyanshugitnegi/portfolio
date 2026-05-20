function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "140px",
        paddingBottom: "120px",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          Priyanshu Negi
        </h1>

        <h2
          style={{
            color: "#38bdf8",
            marginTop: "15px",
            fontSize: "1.8rem",
          }}
        >
          Full Stack Developer | Django REST Framework | React.js
        </h2>

        <p
          style={{
            marginTop: "25px",
            color: "#94a3b8",
            maxWidth: "750px",
            marginInline: "auto",
            lineHeight: "1.8",
            fontSize: "1.05rem",
          }}
        >
          I build production-ready full-stack applications with JWT
          authentication, REST APIs, database integration, and modern frontend
          interfaces using Django REST Framework and React.js.
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#64748b",
            fontSize: "0.95rem",
          }}
        >
          Railway • Vercel • JWT Auth • REST APIs • Full Stack Development
        </p>

        {/* 🔥 Buttons */}
        <div style={{ marginTop: "35px" }}>

          <a href="#projects">
            <button style={btnPrimary}>
              View Projects
            </button>
          </a>

          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button style={btnOutline}>
              Download Resume
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}

/* 🔥 Reusable styles */
const btnPrimary = {
  marginRight: "12px",
  padding: "14px 28px",
  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
  fontSize: "15px",
  transition: "0.3s",
  boxShadow: "0px 6px 20px rgba(14,165,233,0.3)",
};

const btnOutline = {
  padding: "14px 28px",
  background: "transparent",
  border: "1px solid #38bdf8",
  borderRadius: "10px",
  cursor: "pointer",
  color: "#38bdf8",
  fontWeight: "bold",
  fontSize: "15px",
};

export default Hero;