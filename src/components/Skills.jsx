function Skills() {

  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
      ],
    },

    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },

    {
      title: "Database",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
      ],
    },

    {
      title: "Deployment & Tools",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Railway",
        "VS Code",
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
          Technologies and tools I use to build scalable full-stack applications,
          REST APIs, and production-ready web platforms.
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