import App from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/global.css";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <title>Can I fly?</title>
          <meta name="description" content="Can I fly?" />
          <link rel="canonical" href="https://canifly.sasse.it/" />
          <meta name="robots" content="index, follow" />

          <meta property="og:title" content="Can I fly?" />
          <meta property="og:url" content="https://canifly.sasse.it/" />
          <meta property="og:description" content="Can I fly?" />
          <meta property="og:image" content="/profile.jpg" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:type" content="profile" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://kit.fontawesome.com/81b62d1be5.js" async></script>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
