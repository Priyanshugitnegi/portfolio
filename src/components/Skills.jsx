
function Skills() {
  const skillGroups = [
    {
      title: "Python Backend Development",
      skills: [
        "Python",
        "Object-Oriented Programming",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "Django ORM",
      ],
    },
    {
      title: "Databases",
      skills: [
        "SQL",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Database Design",
        "Query Optimization",
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
      ],
    },
    {
      title: "Generative AI",
      skills: [
        "Groq API",
        "LLM Integration",
        "Prompt Engineering",
        "Pydantic",
        "PDF Resume Parsing",
        "Structured JSON Output",
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
        "Render",
        "Vercel",
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Skills</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          My technical skills focus on Python backend development,
          REST API development, database management, full-stack
          web applications, and Generative AI integration through
          hands-on projects.
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
                transition: "0.3s",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
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
