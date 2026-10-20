
import biologistImg from "../assets/biologist.png";
import talentLensImg from "../assets/talentlens.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <p style={introStyle}>
          A selection of backend, full-stack, and AI projects I have developed
          using Python, Django REST Framework, React, SQL, and Generative AI.
        </p>

        {/* ===== PROJECT 1: BIOLOGIST ===== */}
        <div style={projectRowStyle}>
          <div style={{ maxWidth: "650px" }}>
            <h3>BioLogist – E-commerce Platform</h3>

            <p style={paragraphStyle}>
              A full-stack e-commerce platform built with Django, Django REST
              Framework, React, and MySQL, featuring product catalogues,
              categories, product variants, and bulk product imports.
            </p>

            <ul style={listStyle}>
              <li>
                Designed relational database models for products, categories,
                subcategories, and product variants.
              </li>
              <li>
                Optimized product queries using select_related() and
                prefetch_related().
              </li>
              <li>
                Implemented response caching to reduce repeated backend work.
              </li>
              <li>
                Built Excel-based bulk product imports for catalogue management.
              </li>
              <li>
                Improved cart handling and product variant availability checks.
              </li>
              <li>
                Integrated the React frontend with Django REST APIs.
              </li>
            </ul>

            <p style={techStyle}>
              Python • Django • DRF • MySQL • React • REST APIs
            </p>

            <div style={buttonContainerStyle}>
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
                src={biologistImg}
                alt="BioLogist e-commerce platform"
                style={imgStyle}
              />
            </a>
          </div>
        </div>

        {/* ===== PROJECT 2: TALENTLENS ===== */}
        <div style={projectRowStyle}>
          <div style={{ maxWidth: "650px" }}>
            <h3>TalentLens – AI Resume Screening System</h3>

            <p style={paragraphStyle}>
              A full-stack AI-powered application that screens candidate
              resumes against job descriptions, identifies matching and missing
              skills, and generates AI-assisted candidate assessments.
            </p>

            <ul style={listStyle}>
              <li>
                Built Django REST APIs to process multiple PDF and DOCX resumes.
              </li>
              <li>
                Extracted resume text using PyMuPDF and python-docx.
              </li>
              <li>
                Integrated the Groq API for AI-assisted candidate assessments.
              </li>
              <li>
                Used Pydantic to validate structured AI responses.
              </li>
              <li>
                Implemented screening history and side-by-side candidate
                comparison.
              </li>
              <li>
                Added CSV and PDF screening report exports.
              </li>
            </ul>

            <p style={techStyle}>
              Python • Django REST Framework • React • Groq API • Pydantic
            </p>

            <div style={buttonContainerStyle}>
              <a
                href="https://talent-lens-one.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={btnPrimary}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Priyanshugitnegi/TalentLens"
                target="_blank"
                rel="noreferrer"
                style={btnOutline}
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://talent-lens-one.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={talentLensImg}
                alt="TalentLens AI Resume Screening System"
                style={imgStyle}
              />
            </a>
          </div>
        </div>

        {/* ===== PROJECT 3: GIGFLOW ===== */}
        <div style={projectRowStyle}>
          <div style={{ maxWidth: "650px" }}>
            <h3>GigFlow – Smart Leads Dashboard</h3>

            <p style={paragraphStyle}>
              A lead management platform designed to help users organize,
              manage, and track business leads through a web dashboard.
            </p>

            <ul style={listStyle}>
              <li>Built REST APIs for lead management and CRUD operations.</li>
              <li>
                Implemented backend business logic using Python and Django.
              </li>
              <li>Designed database models for lead management.</li>
              <li>Integrated the React frontend with the backend APIs.</li>
              <li>
                Worked on deploying the application frontend and backend.
              </li>
            </ul>

            <p style={techStyle}>
              Python • Django • REST APIs • React • SQL
            </p>

            <div style={buttonContainerStyle}>
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

        {/* ===== PROJECT 4: COURSEHUB ===== */}
        <div style={projectRowStyle}>
          <div style={{ maxWidth: "650px" }}>
            <h3>CourseHub – Course Management System</h3>

            <p style={paragraphStyle}>
              A full-stack course management application built with Django REST
              Framework and React to manage courses, categories, and student
              enrollments.
            </p>

            <ul style={listStyle}>
              <li>Developed REST APIs for courses and enrollments.</li>
              <li>Created Django models and serializers.</li>
              <li>Implemented token-based authentication.</li>
              <li>Built React components for course creation and editing.</li>
              <li>Integrated frontend components with Django APIs.</li>
            </ul>

            <p style={techStyle}>
              Python • Django • DRF • React • PostgreSQL
            </p>

            <div style={buttonContainerStyle}>
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
        </div>

        {/* ===== PROJECT 5: MOVIE RECOMMENDATION ===== */}
        <div style={projectRowStyle}>
          <div style={{ maxWidth: "650px" }}>
            <h3>Movie Recommendation System</h3>

            <p style={paragraphStyle}>
              An AI/ML-based application that recommends movies based on
              similarity between movie features.
            </p>

            <ul style={listStyle}>
              <li>Processed movie datasets using Python.</li>
              <li>Applied cosine similarity for recommendation logic.</li>
              <li>Generated recommendations based on movie features.</li>
              <li>Integrated OpenAI API functionality.</li>
            </ul>

            <p style={techStyle}>
              Python • Machine Learning • Cosine Similarity • OpenAI API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE STYLES ===== */

const introStyle = {
  marginTop: "15px",
  color: "#94a3b8",
  maxWidth: "700px",
  marginInline: "auto",
  textAlign: "center",
  lineHeight: "1.8",
};

const projectRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "80px",
};

const paragraphStyle = {
  marginTop: "15px",
  color: "#94a3b8",
  lineHeight: "1.8",
};

const listStyle = {
  marginTop: "20px",
  textAlign: "left",
  color: "#cbd5e1",
  lineHeight: "1.8",
};

const techStyle = {
  marginTop: "20px",
  color: "#38bdf8",
  fontWeight: "600",
};

const buttonContainerStyle = {
  marginTop: "25px",
};

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
  maxWidth: "100%",
  borderRadius: "10px",
  transition: "0.3s",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
  cursor: "pointer",
};

export default Projects;
