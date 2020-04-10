import {useState,useEffect} from 'react';
import Plx from 'react-plx';
import { 
  Segment
 } from 'semantic-ui-react';
import IndexGridMenu from '../components/IndexGridMenu';
import IntroContent from '../components/GridContent/IntroContent';
import AnimalContent from '../components/GridContent/AnimalContent';
import CodingContent from '../components/GridContent/CodingContent';
import ProjectsContent from '../components/GridContent/ProjectsContent';
import ConnectContent from '../components/GridContent/ConnectContent';

export default function index () {

  const[oneThirdWidth, setOneThirdWidth] = useState(0)
  const[viewHeight, setViewHeight] = useState(0)

  useEffect(()=>{
    const dynamicBgWidth = () => {
      setOneThirdWidth(window.innerWidth/3)
    }
    const dynamicBgHeight = () => {
      setViewHeight(window.innerHeight)
    }
    dynamicBgWidth()
    dynamicBgHeight()
    window.addEventListener('resize', () => {    
      dynamicBgHeight()
      dynamicBgWidth()
    })
  })

  const docBodyStyle = {
    height: 'auto'
  }

  const introStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    padding: '11em 0',
    margin: 0,
    color: 'white',
    zIndex: 9,
  }

  const contentStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    padding: '11em 0',
    margin: 0,
    color: 'white',
    zIndex: 9,
    opacity: 0
  }

  const segBgStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    zIndex: 6,
    backgroundColor: 'black',
    opacity: 0
  }

  const mainImageStyle = {
    position: 'fixed',
    backgroundImage: "url('web-portfolio-png/mainPic.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    zIndex: 5,
    borderRadius: 0,
    border: 0,
    boxSizing: 'content-box'
  }

  const animalImageStyle = {
    position: 'fixed',
    backgroundImage: "url('web-portfolio-png/profile_pic.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: 'calc(100vw/3)',
    zIndex: 5,
    borderRadius: 0,
    border: 0,
    boxSizing: 'content-box',
    left: 'calc(100vw/-3)'
  }

  const codingImageStyle = {
    position: 'fixed',
    backgroundImage: "url('web-portfolio-png/programming-bg.jpg')",
    backgroundPosition: '42%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: 'calc(100vw/3)',
    zIndex: 5,
    borderRadius: 0,
    border: 0,
    boxSizing: 'content-box',
    left: 'calc(100vw/-3)'
  }

  const projectsStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    zIndex: 10,
    backgroundColor: 'white',
    opacity: 1,
    top: '100vh',
  }

  const animationDuration = 1000
  const lingerTime = 700;
  const sectionLength = 2000
  const animalsStartTime = 1500;
  const scrollSpaceSize = animationDuration + animalsStartTime

  const scrollSpaceStyle = {
    border: 0,
    borderRadius: 0,
    margin: 0,
    height: sectionLength + 'px'
  }

  const introScrollSpaceStyle = {
    margin: 0,
    height: scrollSpaceSize + 'px'
  }

  const codingStartTime = animalsStartTime + sectionLength;
  const projectsStartTime = codingStartTime + sectionLength;
  const connectStartTime = projectsStartTime + sectionLength;

  const animalsOutTime = animalsStartTime + animationDuration + lingerTime;
  const codingOutTime = codingStartTime + animationDuration + lingerTime;

  return (
    <div className='docBody' style={docBodyStyle}>
      
      <Plx
        style={mainImageStyle}
        className='mainImage'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: animalsStartTime,
            duration: animationDuration,
            name: 'imgAnimation',
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingStartTime,
            duration: animationDuration,
            name: 'imgAnimation',
            properties: [
              {
                startValue: 100,
                endValue: 100 + oneThirdWidth,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'CodingAnimationOut',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
      </Plx>

      <Plx
        style={animalImageStyle}
        className='animalImage'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: animalsStartTime,
            duration: animationDuration,
            name: 'imgAnimation',
            properties: [
              {
                startValue: 0,
                endValue: oneThirdWidth,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingStartTime,
            duration: animationDuration,
            name: 'imgAnimation',
            properties: [
              {
                startValue: oneThirdWidth,
                endValue: oneThirdWidth * 2,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'CodingAnimationOut',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
      </Plx>

      <Plx
        style={codingImageStyle}
        className='codingImage'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: codingStartTime,
            duration: animationDuration,
            name: 'imgAnimation',
            properties: [
              {
                startValue: 0,
                endValue: oneThirdWidth,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'CodingAnimationOut',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
      </Plx>

      <Plx
        style={segBgStyle}
        className='blackBg'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: 0,
            duration: animationDuration,
            name: 'bgAnimation',
            properties: [
              {
                startValue: 0,
                endValue: 0.9,
                property: 'opacity'
              },
            ],
          },
          {
            start: animalsStartTime,
            duration: animationDuration,
            name: 'bgAnimation',
            properties: [
              {
                startValue: 0,
                endValue: oneThirdWidth,
                property: 'translateX'
              }
            ],
          },
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'CodingAnimationOut',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
      </Plx>

      <IndexGridMenu 
        animalsStartTime={animalsStartTime} 
        animationDuration={animationDuration}
        codingOutTime={codingOutTime}
        connectStartTime={connectStartTime}
      />

      <Plx
        style={introStyle}
        className='introPlx'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: 0,
            duration: animationDuration,
            name: 'introAnimation',
            properties: [
              {
                startValue: '#FFFFFF',
                endValue: '#000000',
                property: 'color'
              },
            ],
          },
          {
            start: 1200,
            duration: animationDuration,
            name: 'introAnimation',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
        <IntroContent/>
      </Plx>

      <Plx
        style={contentStyle}
        className='AnimalPlx'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: animalsStartTime,
            duration: animationDuration,
            name: 'AnimalAnimation',
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              },
              {
                startValue: 500,
                endValue: 100,
                property: 'translateY'
              }
            ],
          },
          {
            start: animalsOutTime,
            duration: animationDuration,
            name: 'AnimalAnimation',
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity'
              },
              {
                startValue: 100,
                endValue: -200,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
        <AnimalContent/>
      </Plx>

      <Plx
        style={contentStyle}
        className='CodingPlx'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: codingStartTime,
            duration: animationDuration,
            name: 'CodingAnimationIn',
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              },
              {
                startValue: 500,
                endValue: 100,
                property: 'translateY'
              }
            ],
          },
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'CodingAnimationOut',
            properties: [
              {
                startValue: 100,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
        <CodingContent/>
      </Plx>

      <Plx
        style={projectsStyle}
        className='ProjectsPlx'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'ProjectsAnimationIn',
            properties: [
              {
                startValue: 0,
                endValue: -viewHeight,
                property: 'translateY'
              }
            ],
          },
          {
            start: connectStartTime,
            duration: animationDuration,
            name: 'ProjectsAnimationOut',
            properties: [
              {
                startValue: '#FFFFFF',
                endValue: '#EDECF1',
                property: 'backgroundColor'
              },
              {
                startValue: -viewHeight,
                endValue: -viewHeight*2,
                property: 'translateY'
              }
            ],
          }
        ] }
      >
        <ProjectsContent/>
      </Plx>

      <Plx
        style={contentStyle}
        className='ConnectPlx'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: connectStartTime,
            duration: animationDuration,
            name: 'ConnectAnimationIn',
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              },
              {
                startValue: 500,
                endValue: -140,
                property: 'translateY'
              }
            ],
          },
        ] }
      >
        <ConnectContent/>
      </Plx>

      <Segment style={introScrollSpaceStyle} className='Intro'></Segment>

      <Segment style={scrollSpaceStyle} className='Animals'></Segment>

      <Segment style={scrollSpaceStyle} className='Programming'></Segment>

      <Segment style={scrollSpaceStyle} className='Projects'></Segment>

      <Segment style={scrollSpaceStyle} className='Connect'></Segment>

      <style jsx global>{`
        html,body {
          width: 100%;
          height: 100%;
          margin: 0px;
          padding: 0px;
          background-color: black; 
        }
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
        h1 {
          font-family: 'antonregular';
        }
        span {
          font-family: 'typo_papyrusm';
          font-size: 4vw;
        }
        h2 {
          font-family: 'typo_papyrusm';
          font-size: 4vw;
        }
        p {
          font-family: 'robotoregular';
          font-size: 1.5vw;
        }
        .ui.list .list>a.item:hover .icon, .ui.list>a.item:hover .icon {
          color: inherit;
          opacity: .25;
        }
        .ui.list>a.item i.icon {
          color: inherit;
        }
      `}
      </style>
    </div>
  );
}
