
import React from "react";

function Experience() {
  const cardStyle = {
    background: "#111827",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "25px",
    border: "1px solid #1f2937",
  };

  const headingStyle = {
    color: "#38bdf8",
    marginBottom: "8px",
  };

  const subtitleStyle = {
    color: "#d1d5db",
    marginBottom: "15px",
  };

  const listStyle = {
    color: "#9ca3af",
    lineHeight: "1.8",
    paddingLeft: "20px",
  };

  const linkStyle = {
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "600",
  };

  const courseTechStyle = {
    marginTop: "20px",
    color: "#38bdf8",
    fontWeight: "600",
    lineHeight: "1.8",
  };

  return (
    <section id="experience" className="section">
      <h2>Experience & Learning</h2>

      {/* Python Full Stack Internship */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>
          Python Full Stack Intern — QSpiders
        </h3>
        <p style={subtitleStyle}>
          February 2025 – February 2026
        </p>
        <ul style={listStyle}>
          <li>Worked on Python-based application development.</li>
          <li>Practiced backend development and database operations.</li>
          <li>Worked with Python, SQL, Django, and web technologies.</li>
        </ul>
      </div>

      {/* Generative AI Course */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>
          Generative AI — Udemy Course
        </h3>

        <p style={subtitleStyle}>
          Complete Generative AI Course With Langchain and Huggingface
        </p>

        <p style={{ color: "#9ca3af" }}>
          Instructor: Krish Naik | 70 Hours
        </p>

        <p style={{ color: "#9ca3af" }}>
          Completed: October 2026
        </p>

        <ul style={listStyle}>
          <li>
            Completed a 70-hour Generative AI course focused on
            LangChain and Hugging Face.
          </li>
          <li>
            Expanded knowledge of Generative AI concepts and tools.
          </li>
        </ul>

        <p style={courseTechStyle}>
          Python • Generative AI • LangChain • Hugging Face
        </p>

        <a
          href="https://ude.my/UC-043e7a8b-91ce-4050-bb7a-bf44c2863174"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          View Certificate ↗
        </a>
      </div>

      {/* BioLogist Freelance Work */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>
          Freelance Web Developer — BioLogist
        </h3>

        <p style={subtitleStyle}>
          Website Development Project
        </p>

        <ul style={listStyle}>
          <li>
            Developed a website using Django for backend functionality
            and React for the frontend.
          </li>
          <li>
            Implemented product and category management with database
            integration.
          </li>
          <li>
            Worked on REST APIs and frontend-backend integration.
          </li>
        </ul>

        <a
          href="https://www.biologistinfo.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Visit Website ↗
        </a>
      </div>

      {/* Virtual Assistant */}
      <div style={cardStyle}>
        <h3 style={headingStyle}>
          AI Support Operations Copilot
        </h3>

        <p style={subtitleStyle}>
          Python Backend & Generative AI Project
        </p>

        <ul style={listStyle}>
          <li>
            Built a support operations application using Python and
            Django.
          </li>
          <li>
            Worked on AI-assisted ticket analysis and support workflows.
          </li>
          <li>
            Explored integrating Generative AI into backend applications.
          </li>
        </ul>

        <a
          href="https://github.com/Priyanshugitnegi/ai-support-operations-copilot"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          View Project on GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Experience;
