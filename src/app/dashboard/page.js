"use client";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import  plantData  from "../../data";


export default function Page() {
  const [results, setResults] = useState(null);

  // useEffect(() => {
    
  // }, []);


const getPlants = () => {
  let data = plantData;
  // let data = await res.json();
  console.log('lsflsj')
  setResults(data);
  return
}

  return (
    <main className={styles.main}>
      <span className={styles.description}> Welcome to the dashboard </span>
      <div className={styles.description}>
        <form 
        // action="/search"
        >
          <input 
          // name="query" 

          />
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
