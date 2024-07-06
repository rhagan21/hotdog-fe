"use client"

import styles from "../page.module.css";
import { useEffect, useState } from "react";

export default function Page() {
    const [answers, setAnswers] = useState([]);
    const [errorMessage, setError] = useState('');

    interface answerEntry {
      id: string,
      entry: string,
      created_at: string,
      modified_at: string
    }
 
    useEffect(() => {
        const interval = setInterval(fetchData, 5000);

        fetchData();

        return () => clearInterval(interval);
    }, []);

      

    const fetchData = async () => {
        fetch('https://hotdog-vjxo82txo-rhagan21s-projects.vercel.app/api/answers')
        .then((response) => 
            response.json()
        )
        .then((data) => {
            data.map((item: any) => {
                const date = new Date(item.created_at);
                item.created_at = date.toLocaleString('en-US');
            });
            setAnswers(data);
        })
        .catch((error) => {
            setError(error);
            console.error(error.message);
        })
    }

    const answersTable = answers.map((answer: answerEntry, index) => {
        return (
            <tr key={index}>
                <td>{answer.id}</td>
                <td>{answer.entry}</td>
                <td>{answer.created_at}</td>
            </tr>
        )
    })

    return <main className={styles.main}>
        <div>
            <h1>View Responses page</h1>
            <h3> The people have spoken: </h3>
            <table>
                <tbody>
                    <tr>
                        <th id="id">Id</th>
                        <th id="answer">Answer</th>
                        <th id="date submitted">Date submitted</th>
                    </tr>
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                    {answersTable}
                </tbody>
            </table>
        </div>

      <div className={styles.grid}>
        <a
          href="/form"
          className={styles.card}
        >
          <h2>
            Submit your answer <span>-&gt;</span>
          </h2>
          <p>We want to hear from you!</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Back to home <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>;
  }