import Link from "next/link";
import Head from "next/head";

import React, { Component } from "react";

class ThirdPost extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Class component</title>
        </Head>

        <h1>Class component</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }
}

export default ThirdPost;
