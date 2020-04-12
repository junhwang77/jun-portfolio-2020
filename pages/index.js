import { useState, useEffect } from 'react'
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
