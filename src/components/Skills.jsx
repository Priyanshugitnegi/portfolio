function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: ["Python", "Django", "Django REST Framework", "REST APIs"]
    },
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills">
      <div className="container" style={{ textAlign: "center" }}>
        
        <h2>Skills</h2>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px"
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px",
                transition: "0.3s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ marginBottom: "15px", color: "#38bdf8" }}>
                {group.title}
              </h3>

              {group.skills.map((skill) => (
                <p key={skill} style={{ margin: "5px 0" }}>
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