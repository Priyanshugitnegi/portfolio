function About() {
  return (
    <section id="about">
      <div className="container" style={{ textAlign: "center" }}>

        <h2>About Me</h2>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            maxWidth: "750px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          I am a B.Tech CSE (AI/ML) graduate and a full-stack developer
          specializing in Django REST Framework and React.js. I build
          production-ready web applications with JWT authentication, REST APIs,
          database integration, and modern frontend interfaces.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            maxWidth: "750px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          I have developed and deployed full-stack applications including an
          e-commerce platform and a smart leads dashboard using Railway and
          Vercel. My interests include backend development, scalable API
          architecture, authentication systems, and data-driven applications.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            maxWidth: "750px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          I also have experience in data analysis using Python, Pandas, and
          Matplotlib to extract insights from real-world datasets and solve
          business problems.
        </p>

      </div>
    </section>
  );
}

export default About;