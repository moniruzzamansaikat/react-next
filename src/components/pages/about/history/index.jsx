import styles from './History.module.css';

const History = () => {
  return (
    <section className={styles.historySection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our Journey</h2>
        <p className={styles.description}>
          Established in 2010, our organization began as a grassroots initiative 
          committed to addressing educational disparities in underserved communities. 
          Over the course of a decade, we have evolved into a global non-profit 
          entity, making significant strides in educational empowerment.
        </p>
        <p className={styles.description}>
          Our growth has been marked by the development and implementation of 
          innovative programs, strategic partnerships, and unwavering advocacy 
          efforts. These endeavors have collectively improved the lives of 
          thousands, fostering educational opportunities and driving positive 
          change on a global scale.
        </p>
      </div>
    </section>
  );
};

export default History;
