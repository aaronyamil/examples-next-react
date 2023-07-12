import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import useToday from "../../hooks/useToday";

export default function FirstPost() {
  const [nombre, setNombre] = useState("");
  const [editable, setEditable] = useState(true);

  const today = useToday();

  return (
    <div className={styles.container}>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
        <h1>First Post</h1>
        <input
          type="checkbox"
          checked={editable}
          onChange={(e) => setEditable(e.target.checked)}
        />
        {editable && (
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        )}
        <p>Mi nombre: {nombre}</p>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
        <footer>{today}</footer>
      </main>
    </div>
  );
}
