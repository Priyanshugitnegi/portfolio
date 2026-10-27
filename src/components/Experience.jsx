
function Experience() {
  const cardStyle = {
    maxWidth: "850px",
    margin: "30px auto 0",
    padding: "30px",
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(56, 189, 248, 0.15)",
    borderRadius: "15px",
  };

  const headingStyle = {
    color: "#38bdf8",
    marginBottom: "8px",
  };

  const subtitleStyle = {
    color: "#64748b",
    marginBottom: "20px",
  };

  const listStyle = {
    color: "#94a3b8",
    lineHeight: "1.8",
    paddingLeft: "20px",
    marginTop: "20px",
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "8px",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "600",
  };

  return (
    <section id="experience">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Experience</h2>

        {/* QSPIDERS */}
<div style={cardStyle}>
  <h3 style={headingStyle}>
    Python Full Stack Intern — QSpiders
  </h3>

  <p style={subtitleStyle}>Gurugram</p>

  <ul style={listStyle}>
    <li>
      Developed backend applications and REST APIs using Python,
      Django, and Django REST Framework.
    </li>
    <li>
      Implemented and tested CRUD operations and authentication
      workflows for full-stack applications.
    </li>
    <li>
      Worked with MySQL and SQLite, including relational schema
      design, database operations, and query debugging.
    </li>
    <li>
      Used Git, GitHub, and Postman for version control,
      API testing, and debugging.
    </li>
  </ul>
</div>

{/* GENERATIVE AI PROJECT EXPERIENCE */}
<div style={cardStyle}>
  <h3 style={headingStyle}>
    Generative AI Developer — Project Experience
  </h3>

  <p style={subtitleStyle}>
    Hands-on Experience | Python & Generative AI
  </p>

  <ul style={listStyle}>
    <li>
      Integrated Large Language Models using the Groq API to build
      AI-powered applications.
    </li>
    <li>
      Developed TalentLens, an AI resume screening system that extracts
      resume content, identifies matching and missing skills, and
      generates structured candidate assessments.
    </li>
    <li>
      Built AI Support Operations Copilot with ticket analysis,
      issue classification, recommended actions, and customer reply drafts.
    </li>
    <li>
      Used Pydantic to validate structured AI responses and improve
      consistency in application data.
    </li>
    <li>
      Implemented semantic retrieval using ChromaDB to retrieve relevant
      support information.
    </li>
    <li>
      Built Python-based integrations, tested backend APIs, and deployed
      AI applications for web access.
    </li>
  </ul>

  <p style={{ ...techStyle, lineHeight: "1.8" }}>
    Python • Groq API • LLMs • Prompt Engineering • Pydantic •
    ChromaDB • Django REST Framework
  </p>

  <div style={buttonContainerStyle}>
    <a
      href="https://github.com/Priyanshugitnegi/ai-support-operations-copilot"
      target="_blank"
      rel="noreferrer"
      style={btnPrimary}
    >
      Support Copilot
    </a>

    <a
      href="https://github.com/Priyanshugitnegi/TalentLens"
      target="_blank"
      rel="noreferrer"
      style={btnOutline}
    >
      TalentLens
    </a>
  </div>
</div>


        {/* BIOLOGIST */}
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            Freelance Web Developer — BioLogist
          </h3>

          <p style={subtitleStyle}>Independent / Client Project</p>

          <a
            href="https://www.biologistinfo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            View Live Website ↗
          </a>

          <ul style={listStyle}>
            <li>
              Built and deployed a full-stack e-commerce platform using
              Django, Django REST Framework, React, and MySQL.
            </li>
            <li>
              Developed REST APIs for product catalogues, categories,
              product variants, and customer enquiries.
            </li>
            <li>
              Designed relational database models and integrated frontend
              components with backend API endpoints.
            </li>
            <li>
              Implemented Excel-based bulk product imports to streamline
              catalogue management.
            </li>
            <li>
              Improved database query efficiency and response performance
              through query optimization and caching.
            </li>
          </ul>
        </div>

        {/* VIRTUAL ASSISTANT */}
        <div style={cardStyle}>
          <h3 style={headingStyle}>
            Freelance Virtual Assistant
          </h3>

          <p style={subtitleStyle}>Independent Freelance Work</p>

          <ul style={listStyle}>
            <li>
              Assisted with data entry, web research, and spreadsheet
              management.
            </li>
            <li>
              Organized digital information and documents with attention
              to accuracy and consistency.
            </li>
            <li>
              Managed administrative and research tasks while meeting
              assigned deadlines.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
