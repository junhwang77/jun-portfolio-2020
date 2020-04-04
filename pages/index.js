import IndexGrid from '../components/IndexGrid';
import { useEffect, useRef } from 'react';
import Plx from 'react-plx'

import { 
  Container,
  Segment,
  Grid,
 } from 'semantic-ui-react';

export default function index () {

  const segIntroStyle = {
    padding: '12em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white',
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
    <div className='docBody'>
      <Segment style={segIntroStyle} className='Intro' basic>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
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
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

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

      <IndexGrid/>
    </div>
  );
}
