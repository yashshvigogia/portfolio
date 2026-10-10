import { useEffect, useState } from "react";
import {
  profile,
  apiPreview,
  experience,
  projects,
  skills,
  awards,
  education,
  languages,
} from "./data.js";

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* Renders the apiPreview object as syntax-coloured JSON, one line per row. */
function jsonLines(obj) {
  const lines = [<span key="open" className="j-punc">{"{"}</span>];
  const entries = Object.entries(obj);
  entries.forEach(([key, value], i) => {
    const comma = i < entries.length - 1 ? "," : "";
    let rendered;
    if (Array.isArray(value)) {
      rendered = (
        <>
          <span className="j-punc">[</span>
          {value.map((v, j) => (
            <span key={v}>
              <span className="j-str">"{v}"</span>
              {j < value.length - 1 && <span className="j-punc">, </span>}
            </span>
          ))}
          <span className="j-punc">]</span>
        </>
      );
    } else if (typeof value === "boolean") {
      rendered = <span className="j-bool">{String(value)}</span>;
    } else {
      rendered = <span className="j-str">"{value}"</span>;
    }
    lines.push(
      <span key={key}>
        {"  "}
        <span className="j-key">"{key}"</span>
        <span className="j-punc">: </span>
        {rendered}
        <span className="j-punc">{comma}</span>
      </span>
    );
  });
  lines.push(<span key="close" className="j-punc">{"}"}</span>);
  return lines;
}

function ApiPanel() {
  const lines = jsonLines(apiPreview);
  return (
    <figure className="api" aria-label="Profile summary shown as an API response">
      <div className="api-bar">
        <span className="api-method">GET</span>
        <span className="api-path">/api/engineers/yashshvi</span>
        <span className="api-status">200 OK</span>
      </div>
      <pre className="api-body">
        <code>
          {lines.map((line, i) => (
            <span className="api-line" style={{ "--i": i }} key={i}>
              {line}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="wordmark">
          {profile.name}
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resume} download>
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-text">
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download resume
          </a>
        </div>
        <p className="hero-meta">{profile.location}</p>
      </div>
      <ApiPanel />
    </section>
  );
}

function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap section-grid">
        <h2 className="section-title">{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="prose">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <dl className="facts">
          {education.map((e) => (
            <div key={e.degree}>
              <dt>{e.degree}</dt>
              <dd>
                {e.school}, {e.years}
              </dd>
            </div>
          ))}
          <div>
            <dt>Languages</dt>
            <dd>{languages.join(" and ")}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="work" title="Experience">
      <p className="company">
        {experience.company}
        <span className="company-note">
          Promoted twice since joining as a trainee in 2023
        </span>
      </p>
      <ol className="timeline">
        {experience.roles.map((r) => (
          <li key={r.title} className="role">
            <div className="role-head">
              <h3>{r.title}</h3>
              <span className="role-period">{r.period}</span>
            </div>
            <ul className="points">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <div className="project-meta">
              <h3>{p.name}</h3>
              <p className="project-kind">{p.kind}</p>
              <p className="project-role">{p.role}</p>
              <ul className="tags" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="project-detail">
              <p className="project-about">{p.about}</p>
              <ul className="points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Awards() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className="awards">
        {awards.map((a) => (
          <li key={a.name}>
            <h3>{a.name}</h3>
            <p>{a.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ].filter((l) => l.href);

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 className="contact-title">Let's talk</h2>
        <p className="contact-lead">
          I'm open to full-stack and backend roles. The quickest way to reach me
          is email.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className="contact-links">
          {profile.phone && (
            <li>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                {profile.phone}
              </a>
            </li>
          )}
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download>
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
      <footer className="wrap footer">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
      </main>
      <Contact />
    </>
  );
}
