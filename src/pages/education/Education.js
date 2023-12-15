import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "Indian Institute of Information Technology, Allahabad",
  degree: "Bachelor of Technology",
  major: "Electronics and Communication",
  gpa: "8,7/10",
  start: "Dec 2020",
  end: "May 2024",
};

const highSchoolData = {
  school: "Allahabad Public School",
  degree: "XII",
  major: "Science",
  percentage: "95.6",
  start: "Apr 2019",
  end: "Mar 2020",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>High School</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;
