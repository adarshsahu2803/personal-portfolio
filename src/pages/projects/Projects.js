import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Pokédex",
    image: "https://user-images.githubusercontent.com/79298694/293600493-20812c28-4f9b-4a31-90e8-2017f21fedff.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQxMzIwNTEsIm5iZiI6MTcwNDEzMTc1MSwicGF0aCI6Ii83OTI5ODY5NC8yOTM2MDA0OTMtMjA4MTJjMjgtNGY5Yi00YTMxLTkwZTgtMjAxN2YyMWZlZGZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTAxVDE3NTU1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg3MjRkMTdlZGM4ZDExNTZmZTY2MzE5MGM0ZTk2ZTIyMDFkMWJmM2E3YmUyMmNkNjg1Y2QyZTJmZGY4ODllMWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.g479Gy2cKUnRBNLqzPEDeNtTZ_gcZLjngrnmHXPB2iY",
    description:
      "A state-of-art Pokedex application that allows users to retrieve, search, and dissect different Pokemon by their statistics.",
    tags: ["JavaScript", "React", "Tailwind CSS", "API Integration"],
    source_code: "https://github.com/adarshsahu2803/pokedex-application",
    url: "https://pokedex-adarsh.netlify.app/",
  },
  {
    id: 2,
    name: "Quest",
    image: "https://user-images.githubusercontent.com/79298694/290980313-eab8384d-29eb-49bc-bb4b-071a87f514b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3MTQzMTUsIm5iZiI6MTcwMjcxNDAxNSwicGF0aCI6Ii83OTI5ODY5NC8yOTA5ODAzMTMtZWFiODM4NGQtMjllYi00OWJjLWJiNGItMDcxYTg3ZjUxNGI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE2VDA4MDY1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFmZjUwYjhmNzQyNGVmMjY3Yzc4NDNlMWZkNTUzMGUxMTRmNDA5NzlkMjljYTRiODMzZTA4NjRiNGM2NWVmOTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._2rmyvWQ2X4mRtcmecXj589wnaIos0KZ_AFoGljfR3o",
    description:
      "A dynamic web-based vacation recommendation system with enhanced accuracy through innovative decision tree optimization.",
    tags: ["JavaScript", "React", "NodeJS", "MongoDB", "Machine Learning"],
    source_code: "https://github.com/adarshsahu2803/React-Quest-Website",
    url: "https://quest-mern-frontend.vercel.app/",
  },
  {
    id: 3,
    name: "Crypto Lens",
    image: "https://user-images.githubusercontent.com/79298694/290983721-a3af3756-d73c-4db2-b80b-765e2617880f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3MTkwMDUsIm5iZiI6MTcwMjcxODcwNSwicGF0aCI6Ii83OTI5ODY5NC8yOTA5ODM3MjEtYTNhZjM3NTYtZDczYy00ZGIyLWI4MGItNzY1ZTI2MTc4ODBmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE2VDA5MjUwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVlNWM5NWQyMmY1YTMyNjdiNDIyMWUwYmY0MWNiZGNiZWM4YjZhNTkzYjQ4MjQzYWE0YmIzNzUxODY5MmUwNmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._rE-yCNwNckJo6MHnEbY9Ax__E4FP3nDGXhDe1xGJok",
    description:
      "A web-based tool for Ethereum profile clustering, offering enhanced investment insights for informed decision-making.",
    tags: ["Python", "Bootstrap", "SQL", "AWS", "Unsupervised ML"],
    source_code: "https://github.com/adarshsahu2803/CryptoML-Web-App",
    url: "",
  },
  {
    id: 4,
    name: "Pose Connect",
    image: "https://user-images.githubusercontent.com/79298694/291557423-6df53d2d-534e-4159-a721-6fa31161ac3c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI5ODIwMzMsIm5iZiI6MTcwMjk4MTczMywicGF0aCI6Ii83OTI5ODY5NC8yOTE1NTc0MjMtNmRmNTNkMmQtNTM0ZS00MTU5LWE3MjEtNmZhMzExNjFhYzNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE5VDEwMjg1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzZWI4MGQyYTRmYTIyYTRhZjRkZTNlMTcyNmYxNGM4YzBlMWM3ODI0Njk1NDFmYjQ5NGU0MWJjODIyNDViZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-wYC1OjmSa5N3Z0OqInwlOHNXTiOF1kb_9pqaume2pQ",
    description:
      "A cutting-edge VR motion tracking system, enabling intuitive character control via pose-based keypress simulation.",
    tags: ["Python", "OpenCV", "Mediapipe", "Virtual Reality (VR)"],
    source_code: "https://github.com/adarshsahu2803/BodyTracking",
    url: "",
  }
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
