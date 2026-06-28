import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

const startYear = new Date(2021, 5, 1); // June 2021
const yearsExp = Math.floor((Date.now() - startYear) / (1000 * 60 * 60 * 24 * 365.25));

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Oussama<br />Bensaid
            </h1>
            <span className="hero-divider" />
            <p className="hero-tagline">Full Stack Engineer | React | Node.js | TypeScript</p>
            <p className="hero-bio">
              Building production-grade web applications at RadixBay for {yearsExp}+ years.
              Self-taught, AWS-certified, and focused on software that ships.
            </p>
            <div className="hero-actions">
              <a
                href="/Oussama-Bensaid-Resume.pdf"
                className="btn-resume"
                download="Oussama-Bensaid-Resume.pdf"
              >
                <DownloadIcon fontSize="small" />
                Download Resume
              </a>
              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/oussama-bensaid"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:osbensaid@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  <EmailIcon />
                </a>
                <a
                  href="https://github.com/osbensaid"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="scroll-hint">
          <div className="scroll-wheel" />
        </div>
      </section>

      <div className="stats-band">
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-val">{yearsExp}+</span>
            <span className="stat-lbl">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-val">3</span>
            <span className="stat-lbl">Certifications</span>
          </div>
          <div className="stat">
            <span className="stat-val">10+</span>
            <span className="stat-lbl">Technologies</span>
          </div>
        </div>
      </div>

      <section className="skills">
        <div className="skills-inner">
          <p className="skills-eye">What I work with</p>
          <h2 className="skills-heading">Skills</h2>

          <div className="skill-tier">
            <p className="tier-label">Core Expertise</p>
            <div className="chips">
              {["React", "TypeScript", "Node.js", "NestJS", "MySQL", "REST APIs"].map((s) => (
                <span key={s} className="chip chip-core">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-tier">
            <p className="tier-label">Proficient</p>
            <div className="chips">
              {["Vue.js", "Redux", "MongoDB", "Python", "AWS", "SASS", "TypeORM", "ExpressJS"].map((s) => (
                <span key={s} className="chip chip-proficient">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-tier">
            <p className="tier-label">Familiar</p>
            <div className="chips">
              {["Next.js", "GraphQL", "Java", "Stripe", "Bootstrap", "Storybook", "Chakra UI"].map((s) => (
                <span key={s} className="chip chip-familiar">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
