function Contact() {
  return (
    <section id="contact">
      <div className="container" style={{ textAlign: "center" }}>
        
        <h2>Contact</h2>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div style={{ marginTop: "25px" }}>

          {/* Email */}
          <p>
            📧{" "}
            <a
              href="mailto:negips11april@gmail.com"
              style={{ color: "#38bdf8" }}
            >
              negips11april@gmail.com
            </a>
          </p>

          {/* GitHub */}
          <p style={{ marginTop: "10px" }}>
            💻{" "}
            <a
              href="https://github.com/Priyanshugitnegi"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8" }}
            >
              GitHub Profile
            </a>
          </p>

          {/* LinkedIn */}
          <p style={{ marginTop: "10px" }}>
            🔗{" "}
            <a
              href="https://linkedin.com/in/priyanshu-negi-b577b536b"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8" }}
            >
              LinkedIn Profile
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;