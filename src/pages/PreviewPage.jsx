function PreviewPage() {
  return (
    <section className="preview-page">
      <article className="paper-resume">
        <header>
          <h1>Candidate Name</h1>
          <p>email@example.com | +00 00000 00000 | City, Country</p>
        </header>

        <section>
          <h2>Summary</h2>
          <p>Focused professional summary placeholder text for the final resume output.</p>
        </section>

        <section>
          <h2>Education</h2>
          <div className="paper-list">
            <div className="paper-row">
              <strong>B.Tech in Computer Science</strong>
              <p>Institution Name | 2019 - 2023</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Experience</h2>
          <div className="paper-list">
            <div className="paper-row">
              <strong>Frontend Engineer | Company Name</strong>
              <p>2023 - Present</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="paper-list">
            <div className="paper-row">
              <strong>Project Name</strong>
              <p>One-line project description placeholder.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <p>Skill 1, Skill 2, Skill 3</p>
        </section>

        <section>
          <h2>Links</h2>
          <p>github.com/username | linkedin.com/in/username</p>
        </section>
      </article>
    </section>
  );
}

export default PreviewPage;
