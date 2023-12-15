import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  // {
  //   social: "website",
  //   link: "anshphirani.me",
  //   href: "https://anshphirani.me",
  // },
  {
    social: "email",
    link: "sauahrdsrivastava08@gmail.com",
    href: "mailto:sauahrdsrivastava08@gmail.com",
  },
  {
    social: "github",
    link: "sauhard22",
    href: "https://github.com/sauhard22",
  },
  {
    social: "linkedin",
    link: "sauhardsrivastava",
    href: "https://www.linkedin.com/in/sauhardsrivastava/",
  },
  {
    social: "Leetcode",
    link: "sauhardsrivastava",
    href: "https://www.leetcode.com/iec2020097",
  },
  // {
  //   social: "telegram",
  //   link: "anshphirani",
  //   href: "https://t.me/anshphirani",
  // },
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
