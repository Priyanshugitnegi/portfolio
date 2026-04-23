function About() {
  return (
    <section id="about">
      <div className="container" style={{ textAlign: "center" }}>
        
        <h2>About Me</h2>

        <p style={{ marginTop: "20px", color: "#94a3b8", maxWidth: "700px", marginInline: "auto" }}>
          I am a B.Tech CSE (AI/ML) graduate and a Python backend developer with
          hands-on experience in building scalable web applications. I specialize
          in developing REST APIs using Django and Django REST Framework, designing
          efficient database systems, and integrating frontend applications with backend services.
        </p>

        <p style={{ marginTop: "15px", color: "#94a3b8", maxWidth: "700px", marginInline: "auto" }}>
          I have built and deployed a full-stack e-commerce platform, handling real-world
          features like authentication, cart systems, and order management. I enjoy solving
          backend challenges and continuously improving my development skills.
        </p>

      </div>
    </section>
  );
}

export default About;