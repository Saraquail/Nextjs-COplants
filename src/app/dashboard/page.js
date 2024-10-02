"use client";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import  { plants }  from "../lib/data";


export default function Page() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    getPlants();
  }, []);

const getPlants = () => {
  let data = plants;
  if (data) {
    setResults(data);
  }
  console.log({data})
  return
}

  return (
    <main className={styles.main}>
      <span className={styles.description}> Welcome to the dashboard </span>
      <div className={styles.description}>
        <form>
          <input type="text"  placeholder="Search..." onChange={getPlants()}  />
          <button type="submit" onClick={getPlants()}>Submit</button>
        </form>
      </div>

      <div className={styles.center}>
        <div>
          <h2>Results - tap {">"} for more details</h2>
          {results ? { results } : ""}
        </div>
      </div>
    </main>
  );
}
