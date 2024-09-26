import styles from './Mission.module.css';

const Missions = () => {
  return (
    <section className={styles.missionSection}>
      <h2 className={styles.title}>Our Mission</h2>
      <p className={styles.description}>
        We are dedicated to making a positive impact in the world by empowering
        communities and promoting sustainable solutions. Join us in our mission to create a better future for all.
      </p>
      <div className={styles.actions}>
        <button className={styles.ctaButton}>Donate Now</button>
        <button className={styles.secondaryButton}>Get Involved</button>
      </div>
    </section>
  );
};

export default Missions;
