import IndexGrid from '../components/IndexGrid';
import { useEffect, useRef } from 'react';
import Plx from 'react-plx'
import { 
  Container,
  Segment,
  Image,
  Grid,
 } from 'semantic-ui-react';

export default function index () {

  const docBodyStyle = {
    height: '5000px'
  }

  const segIntroStyle = {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    padding: '11em 0',
    margin: '0',
    color: 'white',
    zIndex: 10
  }

  const imageStyle = {
    position: 'fixed',
    backgroundImage: "url('web-portfolio-png/mainPic.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    zIndex: 5,
    borderRadius: 0,
    border: 0,
    boxSizing: 'content-box'
  }

  const blackBgStyle = {
    position: 'fixed',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    zIndex: 6,
    opacity: 0
  }

  const segAnimStyle = {
    padding: '15em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  }

  const segProgStyle = {
    padding: '15em 0 22em',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  }

  return (
    <div className='docBody' style={docBodyStyle}>

      <Segment style={segIntroStyle} className='Intro' basic>
        <Plx
          className='introPlx'
          animateWhenNotInViewport={ true }
          parallaxData={ [
            {
              start: 500,
              duration: 300,
              name: 'introAnimation',
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: 'opacity'
                }
              ],
            },
          ] }
        >
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column width={6}>
                <Container>
                  <h1 style={{fontSize:'85px'}}>Hi! My name is Jun.</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  </h4>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Plx>
      </Segment>
      
      <Plx>
        <Segment style={imageStyle}/>
      </Plx>

      <Segment style={segIntroStyle}>
        <Plx
          className='bgPlx'
          animateWhenNotInViewport={ true }
          parallaxData={ [
            {
              start: 500,
              duration: 300,
              name: 'bgAnimation',
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: 'opacity'
                }
              ],
            },
          ] }
        >
          <div class="blackBg" style={blackBgStyle}/>
        </Plx>
      </Segment>

      <IndexGrid/>

      <Segment style={segAnimStyle} className='Animals' basic>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Container>
                <h1>Animals</h1>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                </h4>
              </Container>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={segProgStyle} className='Programming' basic>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Container>
                <h1>Programming</h1>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                </h4>
              </Container>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={segProgStyle} className='Projects' basic>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Container>
                <h1>Projects</h1>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                </h4>
              </Container>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={segProgStyle} className='Connect' basic>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Container>
                <h1>Connect</h1>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                </h4>
              </Container>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <style jsx global>{`
        html,body {
          width: 100%;
          height: 100%;
          margin: 0px;
          padding: 0px;
          background-color: black; 
      }
      `}
      </style>
    </div>
  );
}
