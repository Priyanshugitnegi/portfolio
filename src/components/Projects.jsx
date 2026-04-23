import projectImg from "../assets/biologist.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Project</h2>

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
          {/* LEFT SIDE */}
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

            {/* 🔥 Buttons */}
            <div style={{ marginTop: "25px" }}>
              <a
                href="https://www.biologistinfo.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: "15px",
                  padding: "10px 18px",
                  background: "#38bdf8",
                  borderRadius: "6px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/Biologist-backend"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: "10px",
                  padding: "10px 18px",
                  border: "1px solid #38bdf8",
                  borderRadius: "6px",
                  color: "#38bdf8",
                }}
              >
                Backend
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/Biologist-frontend"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 18px",
                  border: "1px solid #38bdf8",
                  borderRadius: "6px",
                  color: "#38bdf8",
                }}
              >
                Frontend
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (PROJECT IMAGE) */}
          <div>
            <a
              href="https://www.biologistinfo.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={projectImg}
                alt="BioLogist Project"
                style={{
                  width: "350px",
                  borderRadius: "10px",
                  transition: "0.3s",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;