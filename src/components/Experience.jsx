function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Experience</h2>

        {/* BioLogist */}
        <div
          style={{
            maxWidth: "850px",
            margin: "40px auto 0",
            padding: "30px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#38bdf8",
                marginBottom: "8px",
              }}
            >
              Freelance Web Developer — BioLogist
            </h3>

            <p
              style={{
                color: "#64748b",
                marginBottom: "20px",
              }}
            >
              Independent / Client Project
            </p>

            <a
              href="https://www.biologistinfo.com"
              target="_blank"
              rel="noreferrer"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Website ↗
            </a>
          </div>

          <ul
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              paddingLeft: "20px",
              marginTop: "20px",
              textAlign: "center",
              listStylePosition: "inside",
            }}
          >
            <li>
              Developed an e-commerce website using Django, Django REST
              Framework, React, and SQL.
            </li>

            <li>
              Built REST APIs for products, categories, variants, and
              enquiries.
            </li>

            <li>
              Integrated the React frontend with the Django backend and
              database.
            </li>

            <li>
              Created an Excel-based product import workflow for catalog
              data.
            </li>

            <li>
              Worked on database integration, debugging, and deployment.
            </li>
          </ul>
        </div>

        {/* Virtual Assistant */}
        <div
          style={{
            maxWidth: "850px",
            margin: "25px auto 0",
            padding: "30px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#38bdf8",
              marginBottom: "8px",
            }}
          >
            Freelance Virtual Assistant
          </h3>

          <p
            style={{
              color: "#64748b",
              marginBottom: "20px",
            }}
          >
            Independent Freelance Work
          </p>

          <ul
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              paddingLeft: "20px",
              listStylePosition: "inside",
            }}
          >
            <li>
              Assisted with data entry, web research, and spreadsheet
              management.
            </li>

            <li>
              Organized digital information and documents accurately.
            </li>

            <li>
              Supported basic online administrative and research tasks.
            </li>

            <li>
              Managed assigned tasks while maintaining accuracy and deadlines.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;