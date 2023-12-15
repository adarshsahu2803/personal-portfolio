import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "email",
    link: "adarshsahu1077@gmail.com",
    href: "mailto:adarshsahu1077@gmail.com",
  },
  {
    social: "github",
    link: "adarshsahu2803",
    href: "https://github.com/adarshsahu2803",
  },
  {
    social: "linkedin",
    link: "adarshsahu",
    href: "https://www.linkedin.com/in/adarshsahu/",
  },
  {
    social: "Leetcode",
    link: "adarsh2803",
    href: "https://leetcode.com/adarsh2803/",
  }
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
