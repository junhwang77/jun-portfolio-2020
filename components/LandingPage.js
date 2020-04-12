import { useEffect } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const landingBgStyle = {
  top: 0,
  position: 'absolute',
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'black',
  opacity: 1,
  transition: 'opacity 1s ease-in-out',
  zIndex: 9999,
}

const blinkLoader = {
  fontFamily: 'typo_papyrusm',
  fontSize: '4vw',
  fontWeight: 'normal',
  fontStyle: 'normal',
  opacity: 1,
  transition: 'opacity .25s linear'
}

const LandingPage = () => {
  useEffect(() => {
    const element = document.getElementsByClassName('blinkLoader')[0]
    const blinking = () => {
      setInterval(() => {
      element.style.opacity == 1 ? element.style.opacity = 0 : element.style.opacity = 1
      }, 500)
    }
    blinking()
  },[])

  return (
    <div className="landingBg" style={landingBgStyle}>
      <Dimmer active>
        <Loader size='massive'>
          <span className='blinkLoader' style={blinkLoader}>황준현</span>
        </Loader>
      </Dimmer>
    </div>
  )
}

export default LandingPage