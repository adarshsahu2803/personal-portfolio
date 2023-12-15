import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";

const projectsData = [
  {
    id: 1,
    name: "Pay-Cart",
    image: "https://drive.google.com/uc?export=view&id=1ZplxKJjjxxraBLZgkLLS_Lk8Gkj2dXFK",
    description:
      "An impressive e-commerce web app with seamless Razorpay integration for secure and smooth payment transactions",
    tags: ["javascript", "react", "react-redux", "tailwind-css", "firebase"],
    source_code: "https://github.com/sauhard22/pay-cart",
  },
  {
    id: 2,
    name: "Whisper Verse",
    image: "https://drive.google.com/uc?export=view&id=11Jf31PsHgiux0eYTG4ktdRWTIv5fH1yu",
    description:
      "Web app allows users to receive anonymous comments from others with the random id generated, fostering interaction and feedback.",
    tags: ["javascript", "react", "react-redux", "mysql", "nodejs", "otp authentication"],
    source_code: "https://github.com/sauhard22/WhisperVerse",
  },
  {
    id: 3,
    name: "Autism Alert",
    image: "https://drive.google.com/uc?export=view&id=1Sn-ztrR6-hD7YiMSXtwrdXoyFkyPArFN",
    description:
      "Developed ISAA Manual Test app for pediatric autism assessment, featuring 40 purposefully designed questions",
    tags: ["javascript", "react", "react-native", "axios", "firebase", "firestore"],
    source_code: "https://github.com/sauhard22/isaa_test_manual",
  },
  // {
  //   id: 4,
  //   name: "Amazn Clone",
  //   image: covidTrackerImage,
  //   description:
  //     "a amazon clone with full e-commerce functionality and stripe payment gateway integration",
  //   tags: ["javascript", "react", "stripe"],
  //   source_code: "https://github.com/anshphirani/amazon-clone",
  // },
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
