import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Quest",
    image: "https://drive.google.com/file/d/1Jok7seurkDOAa8CwXvjyES5CJhLeVq1i/view?usp=drive_link",
    // image: "https://drive.google.com/uc?export=view&id=11Jf31PsHgiux0eYTG4ktdRWTIv5fH1yu",
    description:
      "A dynamic web-based vacation recommendation system with enhanced accuracy through innovative decision tree optimization.",
    tags: ["JavaScript", "React", "NodeJS", "MongoDB", "Machine Learning"],
    source_code: "https://github.com/adarshsahu2803/React-Quest-Website",
  },
  {
    id: 2,
    name: "Crypto Lens",
    image: "https://docs.google.com/document/d/1cbqU_zS9b4ZM5zxOTnmXqYoMp0R153Cl/edit?usp=drive_link&ouid=104842468990611091040&rtpof=true&sd=true",
    // image: "https://drive.google.com/file/d/1VsW8F2c45gFb8LXRJdXIBHG5VfZOFB_2/view?usp=drive_link",
    description:
      "A web-based tool for Ethereum profile clustering, offering enhanced investment insights for informed decision-making.",
    tags: ["Python", "Bootstrap", "SQL", "AWS", "Unsupervised ML"],
    source_code: "https://github.com/adarshsahu2803/CryptoML-Web-App",
  },
  {
    id: 3,
    name: "Pose Connect",
    image: "https://drive.google.com/file/d/1dwK4IEpV2MbHS2D5225ZpB6j6jtEaxld/view?usp=drive_link",
    description:
      "Created a cutting-edge VR motion tracking system, enabling intuitive character control via pose-based keypress simulation.",
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
