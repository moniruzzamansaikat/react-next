import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.subtitle}>
          We provide top-notch solutions for your business.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
