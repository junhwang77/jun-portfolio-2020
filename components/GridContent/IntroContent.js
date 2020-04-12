import { useState, useEffect } from 'react'
import { Grid, Container, Icon } from 'semantic-ui-react'
import Radium from 'radium';

const introTitle = {
  color: 'white',
  fontSize: '6vw',
}

const introTitleAfter = {
  fontSize: '6vw',
  position: 'absolute',
  left: '21px',
  top: '-11px',
  color: '#F65058FF',
  zIndex: -1
}

const relativeContain = {
  position: 'relative',
}

const scrollText = {
  color: 'white',
  margin: 0
}

const arrowDown = {
  color: 'white',
  margin: 0
}



const IntroContent = () => {

  useEffect(() => {
    const element = document.getElementsByClassName('blinkScroll')[0]
    const blinking = () => {
      setInterval(() => {
      element.style.opacity == 0 ? element.style.opacity = 0.9 : element.style.opacity = 0
      }, 750)
    }
    blinking()
  },[])

  const clickHandler = (e) => {
    e.preventDefault();
    const elementScrollText = document.getElementsByClassName('scrollText')[0]
    const elementAnimals = document.getElementsByClassName('Animals')[0]

    elementScrollText.innerHTML == 'Scroll Down' ? 
    elementScrollText.innerHTML = 'Or Click...' : 
    elementScrollText.innerHTML = 'Scroll Down'
    elementAnimals.scrollIntoView({behavior: 'smooth'});
  }

  const scrollContainBlink = {
    marginTop: '17vh',
    width: 'fit-content',
    opacity: 0,
    transition: 'opacity .5s linear'
  }

  return (
    <Grid centered columns={2}>
      <Grid.Row>
        <Grid.Column width={9}>
        </Grid.Column>
        <Grid.Column width={6}>
          <Container style={relativeContain}>
            <h1 style={introTitle}>
              Full Stack Developer
            </h1>
            <h1 style={introTitleAfter}>
              Full Stack Developer
            </h1>
            <span>
              Hi, I'm Jun.
            </span>
            <p>
              I am a versatile developer, specializing in frontend development.
            </p>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className='blinkScroll' as='a' href='#' onClick={clickHandler} style={scrollContainBlink} textAlign='center'>
          <h1 className='scrollText' style={scrollText}>Scroll Down</h1>
          <Icon style={arrowDown} name="angle double down" size="big"></Icon>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Radium(IntroContent);