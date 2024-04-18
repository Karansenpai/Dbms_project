import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GROUP-5</div>
      <div className={styles.text}>
        Group 5 Agri-Business © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
