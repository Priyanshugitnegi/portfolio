
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
            Python Full Stack Trainee — QSpiders
          </h3>

          <p style={subtitleStyle}>Gurugram</p>

          <ul style={listStyle}>
            <li>
              Built backend applications and REST APIs using Python,
              Django, and Django REST Framework.
            </li>
            <li>
              Designed and tested CRUD endpoints and authentication flows
              for full-stack applications.
            </li>
            <li>
              Worked with MySQL and SQLite, including schema design and
              query debugging.
            </li>
            <li>
              Used Git, GitHub, and Postman for version control and API
              testing.
            </li>
          </ul>
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
            rel="noreferrer"
            style={linkStyle}
          >
            View Website ↗
          </a>

          <ul style={listStyle}>
            <li>
              Developed an e-commerce platform using Django, Django REST
              Framework, React, and MySQL.
            </li>
            <li>
              Built REST APIs for products, categories, product variants,
              and enquiries.
            </li>
            <li>
              Designed relational database models and integrated the
              frontend with backend APIs.
            </li>
            <li>
              Created an Excel-based bulk product import workflow for
              catalogue management.
            </li>
            <li>
              Worked on query optimization, caching, debugging, and
              deployment.
            </li>
          </ul>
        </div>

        {/* VIRTUAL ASSISTANT */}
        <div style={cardStyle}>
          <h3 style={headingStyle}>Freelance Virtual Assistant</h3>

          <p style={subtitleStyle}>Independent Freelance Work</p>

          <ul style={listStyle}>
            <li>
              Assisted with data entry, web research, and spreadsheet
              management.
            </li>
            <li>
              Organized digital information and documents accurately.
            </li>
            <li>
              Supported online administrative and research tasks while
              meeting assigned deadlines.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
