import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/OTF/satoshi.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <style>
            {`
              @font-face {
                font-family: 'Satoshi';
                src: url('/fonts/OTF/satoshi.otf') format('opentype');
                font-weight: normal;
                font-style: normal;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument