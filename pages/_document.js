import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            rel="shortcut icon" 
            href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/webfontkit-papyrus-korean/typo_papyrusm-webfont.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/webfontkit-papyrus-korean/typo_papyrusm-webfont.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/webfontkit-anton/anton-regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/webfontkit-anton/anton-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/webfontkit-roboto/roboto-regular-webfont.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/webfontkit-roboto/roboto-regular-webfont.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;