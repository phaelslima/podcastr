import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
      return(
        <Html>
          <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>

            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
  }
}