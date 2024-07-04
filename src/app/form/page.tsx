"use client"

import styles from "../page.module.css";
import FormComponent from "../components/FormComponent";

export default function Page() {
    return <main className={styles.main}>
        <h1>Submit your answer on this page</h1>
        <FormComponent />
    </main>;
  }