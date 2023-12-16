import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Quest",
    image: "https://private-user-images.githubusercontent.com/79298694/290980313-eab8384d-29eb-49bc-bb4b-071a87f514b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3MTQzMTUsIm5iZiI6MTcwMjcxNDAxNSwicGF0aCI6Ii83OTI5ODY5NC8yOTA5ODAzMTMtZWFiODM4NGQtMjllYi00OWJjLWJiNGItMDcxYTg3ZjUxNGI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE2VDA4MDY1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFmZjUwYjhmNzQyNGVmMjY3Yzc4NDNlMWZkNTUzMGUxMTRmNDA5NzlkMjljYTRiODMzZTA4NjRiNGM2NWVmOTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._2rmyvWQ2X4mRtcmecXj589wnaIos0KZ_AFoGljfR3o",
    // image: "https://drive.google.com/uc?export=view&id=11Jf31PsHgiux0eYTG4ktdRWTIv5fH1yu",
    description:
      "A dynamic web-based vacation recommendation system with enhanced accuracy through innovative decision tree optimization.",
    tags: ["JavaScript", "React", "NodeJS", "MongoDB", "Machine Learning"],
    source_code: "https://github.com/adarshsahu2803/React-Quest-Website",
  },
  {
    id: 2,
    name: "Crypto Lens",
    image: "https://private-user-images.githubusercontent.com/79298694/290983721-a3af3756-d73c-4db2-b80b-765e2617880f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3MTkwMDUsIm5iZiI6MTcwMjcxODcwNSwicGF0aCI6Ii83OTI5ODY5NC8yOTA5ODM3MjEtYTNhZjM3NTYtZDczYy00ZGIyLWI4MGItNzY1ZTI2MTc4ODBmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE2VDA5MjUwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVlNWM5NWQyMmY1YTMyNjdiNDIyMWUwYmY0MWNiZGNiZWM4YjZhNTkzYjQ4MjQzYWE0YmIzNzUxODY5MmUwNmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._rE-yCNwNckJo6MHnEbY9Ax__E4FP3nDGXhDe1xGJok",
    description:
      "A web-based tool for Ethereum profile clustering, offering enhanced investment insights for informed decision-making.",
    tags: ["Python", "Bootstrap", "SQL", "AWS", "Unsupervised ML"],
    source_code: "https://github.com/adarshsahu2803/CryptoML-Web-App",
  },
  {
    id: 3,
    name: "Pose Connect",
    image: "https://private-user-images.githubusercontent.com/79298694/290984895-10b7f97d-8020-43b5-b469-a680dbdd29e6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDI3MjA2OTIsIm5iZiI6MTcwMjcyMDM5MiwicGF0aCI6Ii83OTI5ODY5NC8yOTA5ODQ4OTUtMTBiN2Y5N2QtODAyMC00M2I1LWI0NjktYTY4MGRiZGQyOWU2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjE2VDA5NTMxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4ZDZkZWRlNmFiYTE5MmJkMjViMjM0OGNmZjBlZGZhM2IyZWY5YTJjNjM4M2Q0MTQ0Y2IyZjg1ZWJmNWUwNTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Pts5ilZg03LnXiEgtxEIzXaU0oITx-Wa4qO214hfwrc",
    description:
      "A cutting-edge VR motion tracking system, enabling intuitive character control via pose-based keypress simulation.",
    tags: ["Python", "OpenCV", "Mediapipe", "Virtual Reality (VR)"],
    source_code: "https://github.com/adarshsahu2803/BodyTracking",
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
