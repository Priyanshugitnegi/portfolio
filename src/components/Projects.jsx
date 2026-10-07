import projectImg from "../assets/biologist.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            maxWidth: "700px",
            marginInline: "auto",
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          A selection of backend, full-stack, and AI/ML projects I have
          developed using Python, Django, React, SQL, and machine learning.
        </p>

        {/* ===== PROJECT 1 ===== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ maxWidth: "650px" }}>
            <h3>GigFlow – Smart Leads Dashboard</h3>

            <p
              style={{
                marginTop: "15px",
                color: "#94a3b8",
                lineHeight: "1.8",
              }}
            >
              A lead management platform designed to help users manage,
              organize, and track business leads through a responsive web
              dashboard.
            </p>

            <ul
              style={{
                marginTop: "20px",
                textAlign: "left",
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              <li>Built REST APIs for lead management and CRUD operations</li>
              <li>Implemented backend business logic using Python and Django</li>
              <li>Integrated React frontend with the Django backend</li>
              <li>Designed database models for structured lead management</li>
              <li>Deployed the application using Vercel and Railway</li>
            </ul>

            <p
              style={{
                marginTop: "20px",
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              Python • Django • REST API • React • SQL
            </p>

            <div style={{ marginTop: "25px" }}>
              <a
                href="https://gigflow-dashboard-nu.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={btnPrimary}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/gigflow-backend"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Backend
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/gigflow-dashboard"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Frontend
              </a>
            </div>
          </div>
        </div>

        {/* ===== PROJECT 2 ===== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <h3>BioLogist E-commerce Platform</h3>

            <p
              style={{
                marginTop: "15px",
                color: "#94a3b8",
                lineHeight: "1.8",
              }}
            >
              A full-stack e-commerce platform developed for BioLogist with
              Django, Django REST Framework, React, and SQL.
            </p>

            <ul
              style={{
                marginTop: "20px",
                textAlign: "left",
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              <li>Built REST APIs for products, categories, and variants</li>
              <li>Designed relational database models</li>
              <li>Implemented product variant management</li>
              <li>Integrated React frontend with Django APIs</li>
              <li>Created an Excel-based product import workflow</li>
            </ul>

            <p
              style={{
                marginTop: "20px",
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              Django • DRF • React • SQL • Excel
            </p>

            <div style={{ marginTop: "25px" }}>
              <a
                href="https://www.biologistinfo.com"
                target="_blank"
                rel="noreferrer"
                style={btnPrimary}
              >
                Live Website
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/BioLogist-backend"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Backend
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/BioLogist-frontend"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                Frontend
              </a>
            </div>
          </div>

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

        {/* ===== PROJECT 3 ===== */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          <h3>CourseHub – Course Management System</h3>

          <p
            style={{
              marginTop: "15px",
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            A course management application built with Django REST Framework
            and React for managing courses, categories, and student
            enrollments.
          </p>

          <ul
            style={{
              marginTop: "20px",
              textAlign: "left",
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            <li>Developed REST APIs for courses and enrollments</li>
            <li>Created serializers and database models using Django</li>
            <li>Built React components for course management</li>
            <li>Implemented course creation and editing workflows</li>
            <li>Connected frontend components with Django APIs</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              color: "#38bdf8",
              fontWeight: "600",
            }}
          >
            Python • Django • DRF • React • SQLite
          </p>

          <div style={{ marginTop: "25px" }}>
            <a
              href="https://github.com/Priyanshugitnegi/coursehub-django-react"
              target="_blank"
              rel="noreferrer"
              style={btnPrimary}
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* ===== PROJECT 4 ===== */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          <h3>Movie Recommendation System</h3>

          <p
            style={{
              marginTop: "15px",
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            An AI-based movie recommendation application that recommends
            movies based on similarity between movie features.
          </p>

          <ul
            style={{
              marginTop: "20px",
              textAlign: "left",
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            <li>Used Python for data processing and recommendation logic</li>
            <li>Applied cosine similarity for movie recommendations</li>
            <li>Processed movie datasets to generate recommendations</li>
            <li>Integrated OpenAI API for AI-powered functionality</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              color: "#38bdf8",
              fontWeight: "600",
            }}
          >
            Python • Machine Learning • Cosine Similarity • OpenAI API
          </p>
        </div>
      </div>
    </section>
  );
}

/* Reusable Styles */

const btnPrimary = {
  display: "inline-block",
  marginRight: "10px",
  marginBottom: "10px",
  padding: "10px 18px",
  background: "#38bdf8",
  borderRadius: "6px",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
};

const btnOutline = {
  display: "inline-block",
  marginRight: "10px",
  marginBottom: "10px",
  padding: "10px 18px",
  border: "1px solid #38bdf8",
  borderRadius: "6px",
  color: "#38bdf8",
  textDecoration: "none",
};

const imgStyle = {
  width: "350px",
  borderRadius: "10px",
  transition: "0.3s",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
  cursor: "pointer",
};

export default Projects;