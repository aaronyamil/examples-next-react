import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div className={styles.grid}>
          <Link href="/posts/first-post" className={styles.card}>
            <h3>useState y custom hooks &rarr;</h3>
            <p>Ejemplo del hook useState ydel useToday que es un custom hook</p>
          </Link>

          <Link href="/posts/second-post" className={styles.card}>
            <h3>useEffect &rarr;</h3>
            <p>Ejemplo del hook useEffect</p>
          </Link>

          <Link href="/posts/third-post" className={styles.card}>
            <h3>Class component &rarr;</h3>
            <p>Un componente tipo clase básico</p>
          </Link>

          <Link href="/posts/fourth-post" className={styles.card}>
            <h3>Post 4 &rarr;</h3>
            <p>Related to the post4</p>
          </Link>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
