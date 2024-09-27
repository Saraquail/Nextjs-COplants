import styles from "../page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Welcome to your saved plants</div>
      <div>
        To save a list, please 
        <a href="/authenticate"> register for an account or login</a>
      </div>
    </main>
  );
}
