import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function SecondPost() {
  const [checkbox, setCheckbox] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  useEffect(() => {
    console.log("Loading!");
  });
  useEffect(() => {
    console.log("Loading solo una vez!");
    return () => {
      console.log("Bye!");
    };
  }, []);
  useEffect(() => {
    console.log("Loading checkbox2!");
  }, [checkbox2]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
      />
      <input
        type="checkbox"
        checked={checkbox2}
        onChange={(e) => setCheckbox2(e.target.checked)}
      />
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}
