"use client"

import styles from "../page.module.css";
import { useEffect, useState } from "react";

export default function Page() {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/answers')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAnswers(data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    })

    return <main className={styles.main}>
        <div>
            <h1>View Responses page</h1>
            <p> The people have spoken: </p>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Answer</th>
                        <th>Date submitted</th>
                    </tr>
                {answers.map((answer) => {
                    return (
                        <tr>
                            <td>{answer.id}</td>
                            <td>{answer.entry}</td>
                            <td>{answer.created_at}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </main>;
  }