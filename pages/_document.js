import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import LandingPage from '../components/LandingPage';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Jun's Portfolio Website</title>
          <meta 
            name="viewport" 
            content="initial-scale=1.0, width=device-width"
            key="viewport"  
          />
          <meta 
            name="og:title" 
            content="Jun's Website"
            key="og:title" 
          />
          <meta 
            name="og:type" 
            content="portfolio"
            key="og:type" 
          />
          <meta 
            name="og:url" 
            content="https://junhwang.now.sh/"
            key="og:url" 
          />
          <meta 
            name="og:image" 
            content="/web-portfolio-png/og-image.png"
            key="og:image" 
          />
          <meta 
            name="og:site_name" 
            content="Jun's Website"
            key="og:site_name" 
          />
          <meta 
            name="og:description" 
            content="I am a versatile developer, specializing in frontend development."
            key="og:description" 
          />
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