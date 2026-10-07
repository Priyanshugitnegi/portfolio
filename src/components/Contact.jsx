function Contact() {
  return (
    <section id="contact">
      <div
        className="container"
        style={{
          textAlign: "center",
          paddingBottom: "80px",
        }}
      >
        <h2>Contact</h2>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            maxWidth: "600px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          Feel free to reach out for job opportunities, freelance work,
          collaborations, or any professional inquiries.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Email */}
          <a
            href="mailto:negips11april@gmail.com"
            style={contactButton}
          >
            📧 Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Priyanshugitnegi"
            target="_blank"
            rel="noreferrer"
            style={contactButton}
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/priyanshu-negi-b577b536b"
            target="_blank"
            rel="noreferrer"
            style={contactButton}
          >
            🔗 LinkedIn
          </a>
        </div>

        <p
          style={{
            marginTop: "40px",
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          © 2026 Priyanshu Negi. All rights reserved.
        </p>
      </div>
    </section>
  );
}

const contactButton = {
  display: "inline-block",
  padding: "12px 22px",
  border: "1px solid #38bdf8",
  borderRadius: "8px",
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

export default Contact;