import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="/dashboard"
          className={styles.card}
        >
          Get started <span>-&gt;</span>
        </a>
        <div>
          <a
            href="https://coloradoplants.jeffco.us/plantAbout"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            Data from Colorado Plant Database <span>-&gt;</span>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>COplants</h1>
      </div>
      <span>
        <h3>a searchable directory of Colorado native plants</h3>
      </span>
      <span>
        <h4>By Saraquail</h4>
      </span>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Search</h2>
          <p>Search for plants</p>
        </div>

        <div className={styles.card}>
          <h2>Sort</h2>
          <p>Sort your results</p>
        </div>

        <div className={styles.card}>
          <h2>Filter</h2>
          <p>Filter based on many criteria</p>
        </div>

        <div className={styles.card}>
          <h2>Save</h2>
          <p>Save a list of your favorite plants</p>
        </div>
      </div>
    </main>
  );
}
