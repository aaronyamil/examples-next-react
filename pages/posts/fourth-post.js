import Link from 'next/link';
import Head from 'next/head';

export default function FourthPost() {
  return (
    <>
      <Head>
        <title>Fourth Post</title>
      </Head>
      
      <h1>Fourth Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}