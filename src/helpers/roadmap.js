const roadmap = [
  {
    id: 1,
    phase: "Solidify & Prove",
    when: "Now → BS CS complete (2026)",
    goal:
      "Turn tools you've touched into tools you can defend in an interview. One real, finished project beats five certifications with nothing behind them.",
    skills: [
      "Advanced SQL — window functions, query tuning, execution plans",
      "pandas / numpy fluency beyond one-off scripting",
      "Dimensional modeling basics (star schema, facts/dims)",
    ],
    cert: null,
    project:
      "Public Dataset Pipeline → Power BI — ingest a public dataset with Azure Data Factory, land it in Azure SQL, model it, visualize in Power BI.",
    exit: "Ready for Phase 2 when the pipeline project is live on the site with a real repo link, not a placeholder.",
  },
  {
    id: 2,
    phase: "Cloud Data Engineering Depth",
    when: "+3–6 months",
    goal:
      "Move from \"I've used Azure Data Factory\" to \"I can architect a pipeline someone else depends on.\"",
    skills: [
      "Orchestration & scheduling, incremental / delta loads",
      "dbt fundamentals for the transformation layer",
      "Azure Synapse or Databricks basics",
    ],
    cert: "DP-203 — Azure Data Engineer Associate",
    project:
      "Orchestrated ETL with Incremental Loads — multi-source pipeline, scheduled triggers, incremental loads, dbt on top of the warehouse.",
    exit: "Ready for Phase 3 when DP-203 is earned and the orchestration project handles incremental data, not just a one-time load.",
  },
  {
    id: 3,
    phase: "Scale & Differentiate",
    when: "+6–12 months",
    goal:
      "Everyone applying to the same roles has SQL and Power BI. Almost none of them have a graph database certification — that's the real edge to build on.",
    skills: [
      "PySpark / Databricks for larger data volumes",
      "Streaming basics (Event Hubs or Kafka, conceptually)",
      "Graph analytics on top of a real pipeline, not a toy import",
    ],
    cert: "Databricks Data Engineer Associate or dbt Fundamentals",
    project:
      "Graph Analytics Case Study — a Neo4j knowledge graph fed by a pipeline you built, not a static CSV import.",
    exit: "Ready for Phase 4 when you have three shipped, linked projects and can talk through the trade-offs in each for 10 minutes without notes.",
  },
  {
    id: 4,
    phase: "AI Engineering Layer",
    when: "+12–15 months",
    goal:
      "You've already experimented with LLM APIs and RAG on your own — this phase turns that experimentation into a production pattern built on top of the pipelines from Phases 1–3, instead of a disconnected notebook demo.",
    skills: [
      "Production RAG patterns — chunking strategy, embeddings, vector store selection",
      "Retrieval evaluation — measuring answer quality, not just a vibes check",
      "Prompt engineering discipline: versioning, testing, guardrails against hallucination",
    ],
    cert: "AI-102 — Azure AI Engineer Associate",
    project:
      "RAG Over Your Own Warehouse — expose the data warehouse built in Phase 2 through a retrieval-augmented Q&A app, with real evaluation of answer quality against known questions.",
    exit: "Ready for Phase 5 when the RAG project is live with a real repo link and you can explain a retrieval failure case, not just a success case.",
  },
  {
    id: 5,
    phase: "Position as the Expert",
    when: "Ongoing",
    goal:
      "This phase is not more studying — it's making the first four phases visible to the people who hire for them.",
    skills: [
      "Write 2–3 short case studies on the projects above, published on this site",
      "Rewrite the RadixBay experience bullet with real, quantified data work once it exists",
      "Align LinkedIn headline and site tagline to \"Data Engineer / Analytics Engineer / AI Engineer\" once shipped work backs each",
    ],
    cert: null,
    project: null,
    exit: "Done when a recruiter can understand your data and AI story from the site alone, without a conversation.",
  },
];

export const certLadder = [
  { name: "PL-300", detail: "Power BI Data Analyst Associate", state: "done" },
  { name: "AWS CCP", detail: "Cloud Practitioner Essentials", state: "done" },
  { name: "Neo4j", detail: "Graph Developer Associate", state: "done" },
  { name: "DP-203", detail: "Azure Data Engineer Associate", state: "next" },
  { name: "Databricks / dbt", detail: "Data Engineer Assoc. or Fundamentals", state: "upcoming" },
  { name: "AI-102", detail: "Azure AI Engineer Associate", state: "upcoming" },
];

export default roadmap;
