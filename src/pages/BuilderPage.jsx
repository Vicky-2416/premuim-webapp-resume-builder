import { useState } from 'react';
import { sampleResume } from '../data/sampleResume';

const emptyEducation = { school: '', degree: '', years: '' };
const emptyExperience = { company: '', role: '', years: '', details: '' };
const emptyProject = { name: '', description: '' };

function BuilderPage() {
  const [form, setForm] = useState({
    personal: { name: '', email: '', phone: '', location: '' },
    summary: '',
    education: [{ ...emptyEducation }],
    experience: [{ ...emptyExperience }],
    projects: [{ ...emptyProject }],
    skills: '',
    links: { github: '', linkedin: '' }
  });

  const setPersonal = (field, value) => {
    setForm((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const setLinks = (field, value) => {
    setForm((prev) => ({
      ...prev,
      links: { ...prev.links, [field]: value }
    }));
  };

  const updateListItem = (section, index, field, value) => {
    setForm((prev) => {
      const nextList = [...prev[section]];
      nextList[index] = { ...nextList[index], [field]: value };
      return { ...prev, [section]: nextList };
    });
  };

  const addListItem = (section, template) => {
    setForm((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...template }]
    }));
  };

  return (
    <section className="builder-page">
      <div className="builder-top-row">
        <h1>Resume Builder</h1>
        <button className="button-secondary" onClick={() => setForm(sampleResume)}>
          Load Sample Data
        </button>
      </div>

      <div className="builder-grid">
        <div className="panel form-panel">
          <section className="form-section">
            <h2>Personal Info</h2>
            <div className="field-grid">
              <label>
                Name
                <input
                  value={form.personal.name}
                  onChange={(e) => setPersonal('name', e.target.value)}
                />
              </label>
              <label>
                Email
                <input
                  value={form.personal.email}
                  onChange={(e) => setPersonal('email', e.target.value)}
                />
              </label>
              <label>
                Phone
                <input
                  value={form.personal.phone}
                  onChange={(e) => setPersonal('phone', e.target.value)}
                />
              </label>
              <label>
                Location
                <input
                  value={form.personal.location}
                  onChange={(e) => setPersonal('location', e.target.value)}
                />
              </label>
            </div>
          </section>

          <section className="form-section">
            <h2>Summary</h2>
            <label>
              Professional Summary
              <textarea
                rows="4"
                value={form.summary}
                onChange={(e) => setForm((prev) => ({ ...prev, summary: e.target.value }))}
              />
            </label>
          </section>

          <section className="form-section">
            <div className="section-head">
              <h2>Education</h2>
              <button
                className="inline-action"
                onClick={() => addListItem('education', emptyEducation)}
              >
                Add Entry
              </button>
            </div>
            {form.education.map((item, index) => (
              <div key={`edu-${index}`} className="field-grid compact-block">
                <label>
                  School
                  <input
                    value={item.school}
                    onChange={(e) =>
                      updateListItem('education', index, 'school', e.target.value)
                    }
                  />
                </label>
                <label>
                  Degree
                  <input
                    value={item.degree}
                    onChange={(e) =>
                      updateListItem('education', index, 'degree', e.target.value)
                    }
                  />
                </label>
                <label>
                  Years
                  <input
                    value={item.years}
                    onChange={(e) =>
                      updateListItem('education', index, 'years', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="form-section">
            <div className="section-head">
              <h2>Experience</h2>
              <button
                className="inline-action"
                onClick={() => addListItem('experience', emptyExperience)}
              >
                Add Entry
              </button>
            </div>
            {form.experience.map((item, index) => (
              <div key={`exp-${index}`} className="field-grid compact-block">
                <label>
                  Company
                  <input
                    value={item.company}
                    onChange={(e) =>
                      updateListItem('experience', index, 'company', e.target.value)
                    }
                  />
                </label>
                <label>
                  Role
                  <input
                    value={item.role}
                    onChange={(e) => updateListItem('experience', index, 'role', e.target.value)}
                  />
                </label>
                <label>
                  Years
                  <input
                    value={item.years}
                    onChange={(e) => updateListItem('experience', index, 'years', e.target.value)}
                  />
                </label>
                <label className="field-span-full">
                  Details
                  <textarea
                    rows="3"
                    value={item.details}
                    onChange={(e) =>
                      updateListItem('experience', index, 'details', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="form-section">
            <div className="section-head">
              <h2>Projects</h2>
              <button
                className="inline-action"
                onClick={() => addListItem('projects', emptyProject)}
              >
                Add Entry
              </button>
            </div>
            {form.projects.map((item, index) => (
              <div key={`project-${index}`} className="field-grid compact-block">
                <label>
                  Project Name
                  <input
                    value={item.name}
                    onChange={(e) => updateListItem('projects', index, 'name', e.target.value)}
                  />
                </label>
                <label className="field-span-full">
                  Description
                  <textarea
                    rows="3"
                    value={item.description}
                    onChange={(e) =>
                      updateListItem('projects', index, 'description', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="form-section">
            <h2>Skills</h2>
            <label>
              Comma-separated skills
              <input
                value={form.skills}
                onChange={(e) => setForm((prev) => ({ ...prev, skills: e.target.value }))}
              />
            </label>
          </section>

          <section className="form-section">
            <h2>Links</h2>
            <div className="field-grid">
              <label>
                GitHub
                <input
                  value={form.links.github}
                  onChange={(e) => setLinks('github', e.target.value)}
                />
              </label>
              <label>
                LinkedIn
                <input
                  value={form.links.linkedin}
                  onChange={(e) => setLinks('linkedin', e.target.value)}
                />
              </label>
            </div>
          </section>
        </div>

        <aside className="panel preview-panel">
          <h2>Live Preview</h2>
          <article className="resume-preview resume-preview--shell">
            <header className="resume-header">
              <h3>Candidate Name</h3>
              <p>email@example.com | +00 00000 00000 | City, Country</p>
            </header>

            <section>
              <h4>Summary</h4>
              <p className="placeholder-line" />
              <p className="placeholder-line placeholder-line--short" />
            </section>

            <section>
              <h4>Education</h4>
              <p className="placeholder-line" />
              <p className="placeholder-line placeholder-line--short" />
            </section>

            <section>
              <h4>Experience</h4>
              <p className="placeholder-line" />
              <p className="placeholder-line" />
              <p className="placeholder-line placeholder-line--short" />
            </section>

            <section>
              <h4>Projects</h4>
              <p className="placeholder-line" />
              <p className="placeholder-line placeholder-line--short" />
            </section>

            <section>
              <h4>Skills</h4>
              <p className="placeholder-line placeholder-line--short" />
            </section>

            <section>
              <h4>Links</h4>
              <p className="placeholder-line" />
            </section>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default BuilderPage;
