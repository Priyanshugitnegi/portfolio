
function Skills() {
  const skillGroups = [
    {
      title: "Python Backend Development",
      skills: [
        "Python",
        "Object-Oriented Programming",
        "Django",
        "Django REST Framework",
        "REST API Development",
        "Django ORM",
        "CRUD Operations",
        "Authentication & Authorization",
      ],
    },
    {
      title: "Databases & Data Management",
      skills: [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "Relational Database Design",
        "Query Optimization",
        "Database Migrations",
      ],
    },
    {
      title: "Generative AI & LLMs",
      skills: [
        "Groq API",
        "LLM Integration",
        "Prompt Engineering",
        "Pydantic",
        "Structured JSON Output",
        "Resume Parsing",
        "AI-Powered Text Analysis",
        "Retrieval-Augmented Generation (RAG)",
        "ChromaDB",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST API Integration",
        "Responsive Web Design",
        "Axios",
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Cosine Similarity",
        "Data Preprocessing",
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Streamlit",
        "Render",
        "Vercel",
        "Environment Variables",
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Technical Skills</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          My technical expertise focuses on Python backend development,
          Django REST APIs, database management, and Generative AI
          integration. I apply these skills to build and deploy practical
          web applications and AI-powered systems.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "14px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0px 15px 30px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 10px 25px rgba(0,0,0,0.2)";
              }}
            >
              <h3
                style={{
                  marginBottom: "18px",
                  color: "#38bdf8",
                }}
              >
                {group.title}
              </h3>

              {group.skills.map((skill) => (
                <p
                  key={skill}
                  style={{
                    margin: "8px 0",
                    color: "#e2e8f0",
                    lineHeight: "1.6",
                  }}
                >
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
