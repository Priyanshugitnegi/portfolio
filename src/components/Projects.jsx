import projectImg from "../assets/biologist.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        {/* ===== PROJECT 1 ===== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* LEFT */}
          <div style={{ maxWidth: "400px" }}>
            <h3>BioLogist E-commerce Platform</h3>

            <p>
              A full-stack e-commerce application built with Django and React,
              featuring product management, cart system, and order processing.
            </p>

            <ul style={{ marginTop: "20px", textAlign: "left" }}>
              <li>Designed relational database schema</li>
              <li>Built REST APIs for products, cart, and orders</li>
              <li>Integrated frontend with backend</li>
              <li>Handled authentication and sessions</li>
            </ul>

            <div style={{ marginTop: "25px" }}>
              <a
                href="https://www.biologistinfo.com"
                target="_blank"
                rel="noreferrer"
                style={btnPrimary}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/Biologist-backend"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Backend
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/Biologist-frontend"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Frontend
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <a
              href="https://www.biologistinfo.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectImg}
                alt="BioLogist Project"
                style={imgStyle}
              />
            </a>
          </div>
        </div>

        {/* ===== PROJECT 2 ===== */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          <h3>E-commerce Data Analysis</h3>

          <p style={{ marginTop: "15px" }}>
            Analyzed real-world e-commerce data using Python (Pandas,
            Matplotlib) to uncover revenue trends and top-performing products.
          </p>

          <ul style={{ marginTop: "20px", textAlign: "left" }}>
            <li>Performed data cleaning and merging</li>
            <li>Analyzed monthly revenue trends</li>
            <li>Identified top revenue-generating products</li>
            <li>Visualized insights using charts</li>
          </ul>

          <div style={{ marginTop: "25px" }}>
            <a
              href="https://github.com/Priyanshugitnegi/data-analysis-project"
              target="_blank"
              rel="noreferrer"
              style={btnPrimary}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔥 Reusable Styles */
const btnPrimary = {
  marginRight: "10px",
  padding: "10px 18px",
  background: "#38bdf8",
  borderRadius: "6px",
  color: "black",
  fontWeight: "bold",
};

const btnOutline = {
  marginRight: "10px",
  padding: "10px 18px",
  border: "1px solid #38bdf8",
  borderRadius: "6px",
  color: "#38bdf8",
};

const imgStyle = {
  width: "350px",
  borderRadius: "10px",
  transition: "0.3s",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
  cursor: "pointer",
};

export default Projects;