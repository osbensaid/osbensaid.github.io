import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
import roadmap, { certLadder } from "../helpers/roadmap";
import "../styles/Home.css";
import "../styles/Roadmap.css";

function Roadmap() {
  return (
    <div className="home roadmap">
      <section className="roadmap-hero">
        <div className="lp-inner">
          <Link to="/" className="roadmap-back">
            <ArrowBackIcon fontSize="small" />
            Back to home
          </Link>
          <p className="lp-eye">Career plan</p>
          <h1 className="roadmap-heading">Full Stack Engineer → Data, Analytics &amp; AI Engineer</h1>
          <p className="roadmap-thesis">
            Real signal already in place — Power BI, hands-on Azure Data Factory and SQL, a Neo4j Graph
            Developer Associate certification most data candidates don't have, and early hands-on work
            with LLM APIs and RAG. This roadmap turns that into a Data Engineer / Data Analyst track first,
            with an AI Engineering layer once that data foundation is real — a shipped project at the end
            of every phase, not just another certificate.
          </p>

          <div className="roadmap-baseline">
            <div className="roadmap-baseline-col">
              <p className="tier-label">Baseline — now</p>
              <div className="chips">
                {["Power BI (PL-300)", "Azure Data Factory", "SQL", "Python", "AWS Cloud Practitioner", "Neo4j Graph Assoc."].map((s) => (
                  <span key={s} className="chip chip-proficient">{s}</span>
                ))}
              </div>
            </div>
            <span className="roadmap-baseline-arrow">→</span>
            <div className="roadmap-baseline-col">
              <p className="tier-label">Target</p>
              <div className="chips">
                {["Data Engineer", "Analytics Engineer", "AI Engineer"].map((s) => (
                  <span key={s} className="chip chip-core">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exp-section roadmap-phases">
        <div className="lp-inner">
          <p className="lp-eye">The plan</p>
          <h2 className="lp-heading">Phases</h2>
          <div className="exp-timeline roadmap-timeline">
            {roadmap.map((phase) => (
              <div key={phase.id} className="exp-item exp-item--work roadmap-phase">
                <div className="exp-dot roadmap-phase-num">{phase.id}</div>
                <div className="exp-body roadmap-phase-body">
                  <div className="exp-meta">
                    <h3 className="exp-title">{phase.phase}</h3>
                    <span className="exp-date">{phase.when}</span>
                  </div>
                  <p className="exp-desc">{phase.goal}</p>

                  <div className="roadmap-phase-grid">
                    <div className="roadmap-phase-block">
                      <p className="roadmap-block-label">Add to skill set</p>
                      <ul className="roadmap-list">
                        {phase.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="roadmap-phase-block">
                      <p className="roadmap-block-label">Certification target</p>
                      {phase.cert ? (
                        <span className="roadmap-cert-pill">{phase.cert}</span>
                      ) : (
                        <span className="roadmap-cert-pill roadmap-cert-pill--none">
                          None — credibility comes from shipped work
                        </span>
                      )}
                    </div>
                  </div>

                  {phase.project && (
                    <div className="roadmap-project">
                      <p className="roadmap-block-label">Project to build</p>
                      <p className="exp-desc">{phase.project}</p>
                    </div>
                  )}

                  <div className="roadmap-exit">
                    <strong>Exit signal:</strong> {phase.exit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proj-section roadmap-ladder">
        <div className="lp-inner">
          <p className="lp-eye">In order</p>
          <h2 className="lp-heading">Certification ladder</h2>
          <div className="roadmap-ladder-row">
            {certLadder.map((step) => (
              <div key={step.name} className={`roadmap-ladder-step roadmap-ladder-step--${step.state}`}>
                {step.state === "done" && <CheckIcon fontSize="small" className="roadmap-ladder-check" />}
                <p className="roadmap-ladder-name">{step.name}</p>
                <p className="roadmap-ladder-detail">{step.detail}</p>
                {step.state === "next" && <span className="roadmap-ladder-tag">Next</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
