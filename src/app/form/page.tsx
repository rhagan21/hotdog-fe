"use client"

import styles from "../page.module.css";
import FormComponent from "../components/FormComponent";

export default function Page() {
    return <main className={styles.main}>
        <h1>Submit your answer on this page</h1>
        <FormComponent />
        <div className={styles.grid}>
            <a
            href="/"
            className={styles.card}
            >
            <h2>
                Back to main page <span>-&gt;</span>
            </h2>
            </a>
            <a
            href="/view-responses"
            className={styles.card}
            >
            <h2>
                View Responses <span>-&gt;</span>
            </h2>
            <p>What do the people think?</p>
            </a>
        </div>
    </main>;
  }