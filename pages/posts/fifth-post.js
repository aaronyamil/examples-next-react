import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";
import styles from "../../styles/Home.module.css";

export default function FifthPost() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Valor de input:", inputRef.current.value);
    console.log("Valor del select:", selectRef.current.value);
    console.log("Valor del checkbox:", checkboxRef.current.checked);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Forms con elementos no controlados</title>
      </Head>

      <h1>Forms con elementos no controlados</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <p>Nombre:</p>
        <input ref={inputRef} type="text" />
      </label>
      <label>
        <p>Ciudad:</p>
        <select ref={selectRef}>
          <option value="cb">Cbba</option>
          <option value="lp">LaPaz</option>
          <option value="or">Oruro</option>
        </select>
      </label>
      <label>
        Estudiante?
        <input type="checkbox" ref={checkboxRef} />
      </label>
      <button type="submit">Enviar</button>
      </form>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}
