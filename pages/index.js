import { useState, useEffect } from 'react'
import Head from 'next/head'
import PlxPages from '../components/PlxPages.js'
import LandingPage from '../components/LandingPage.js';

export default function index () {
  const[displayHeight, setDisplayHeight] = useState('100vh')
  const[displayOverflow, setDisplayOverflow] = useState('hidden')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  
  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds)
    document.getElementsByClassName('landingBg')[0] ?
    document.getElementsByClassName('landingBg')[0].style.opacity = 0
    : null
  };

  useEffect(()=>{
    wait(3500).then(()=>{
      setDisplayHeight('auto')
      setDisplayOverflow('unset')
      setTimeout(()=>{
        document.getElementsByClassName('landingBg')[0] ? 
        document.getElementsByClassName('landingBg')[0].remove()
        : null
      },1500)
    });
  })

  return (
    <div className='docBody' style={{height: displayHeight, overflow: displayOverflow}}>
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
      </Head>
      <LandingPage/>
      <PlxPages/>
      <style jsx global>
        {`
          @font-face {
            font-family: 'typo_papyrusm';
            src: url('/fonts/webfontkit-papyrus-korean/typo_papyrusm-webfont.woff2') format('woff2'),
                  url('/fonts/webfontkit-papyrus-korean/typo_papyrusm-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'antonregular';
            src: url('/fonts/webfontkit-anton/anton-regular.woff2') format('woff2'),
                  url('/fonts/webfontkit-anton/anton-regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'robotoregular';
            src: url('/fonts/webfontkit-roboto/roboto-regular-webfont.woff2') format('woff2'),
                  url('/fonts/webfontkit-roboto/roboto-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}  
      </style>
    </div>
  );
}
