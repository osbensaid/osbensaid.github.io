import image1 from "../assets/001.png";

const projects = [
  {
    id: 1,
    name: "Responsive Personal Portfolio",
    image: image1,
    status: "live",
    description:
      "The project is a fully responsive personal portfolio website, responsive for all devices, built using React, CSS, and JavaScript. The project is fully open source. I am using the Material UI Library for displaying icons. Whether you are a web developer who wants to create a professional portfolio on its own, it can benefit you from this project.",
    codeUrl: "https://github.com/osbensaid",
    viewUrl: "https://github.com/osbensaid",
    tags: ["React", "CSS", "HTML", "JavaScript", "Material UI Icons"],
  },
  {
    id: 2,
    name: "Public Dataset Pipeline to Power BI",
    status: "planned",
    description:
      "End-to-end pipeline: ingest a public dataset with Azure Data Factory, land and model it in Azure SQL, and build a Power BI dashboard on top. First proof project for the Data & Analytics skill set listed above.",
    codeUrl: "",
    viewUrl: "",
    tags: ["Azure Data Factory", "SQL", "Power BI", "Python"],
  },
];

export default projects;
