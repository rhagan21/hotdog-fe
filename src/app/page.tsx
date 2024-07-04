import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hotdog.jpg"
          alt="Hotdog"
          width={500}
          height={250}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/form"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Submit your answer <span>-&gt;</span>
          </h2>
          <p>We want to hear from you!</p>
        </a>

        <a
          href="/view-responses"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            View Responses <span>-&gt;</span>
          </h2>
          <p>What do the people think?</p>
        </a>
      </div>
    </main>
  );
}
