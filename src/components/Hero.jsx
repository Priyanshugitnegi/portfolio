
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
        <p
          style={{
            color: "#38bdf8",
            fontSize: "0.9rem",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Python Backend Developer
        </p>

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
            marginTop: "20px",
            fontSize: "1.8rem",
            lineHeight: "1.5",
          }}
        >
          Python | Django REST Framework | Generative AI
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
          I build backend applications, REST APIs, and AI-powered
          solutions using Python, Django, SQL, and large language
          models. My projects combine reliable backend engineering
          with practical Generative AI workflows.
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#64748b",
            fontSize: "0.95rem",
            lineHeight: "1.9",
          }}
        >
          Python • Django • Django REST Framework • PostgreSQL •
          REST APIs • Groq • ChromaDB
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button style={btnPrimary}>
              View Projects ↗
            </button>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={btnOutline}>
              Download Resume ↓
            </button>
          </a>

          <a
            href="https://github.com/Priyanshugitnegi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={btnOutline}>
              GitHub ↗
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

const btnPrimary = {
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
  transition: "0.3s",
};

export default Hero;
