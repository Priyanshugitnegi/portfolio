function Hero() {
  return (
    <section id="home" style={{ paddingTop: "120px" }}>
      <div className="container" style={{ textAlign: "center" }}>
        
        <h1 style={{ fontSize: "3rem" }}>
          Priyanshu Negi
        </h1>

        <h2 style={{ color: "#38bdf8", marginTop: "10px" }}>
          Python Backend Developer
        </h2>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          I build scalable backend systems and real-world applications.
        </p>

        {/* 🔥 Buttons */}
        <div style={{ marginTop: "25px" }}>
          
          {/* View Work */}
          <a href="#projects">
            <button
              style={{
                marginRight: "10px",
                padding: "12px 24px",
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                transition: "0.3s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              View My Work
            </button>
          </a>

          {/* 🔥 Resume Button */}
          <a href="/resume.pdf" target="_blank">
            <button
              style={{
                padding: "12px 24px",
                background: "transparent",
                border: "1px solid #38bdf8",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#38bdf8",
                fontWeight: "bold"
              }}
            >
              Download Resume
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;