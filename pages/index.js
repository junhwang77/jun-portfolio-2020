import IndexGrid from '../components/IndexGrid';
import { 
  Container,
  Segment,
  Grid,
 } from 'semantic-ui-react';

export default function index () {

  const segmentOneStyle = {
    padding: '18em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  }

  const segmentTwoStyle = {
    padding: '15em 0',
    margin: '0',
    backgroundColor: 'black',
    color: 'white'
  }

  return (
    <div>

      <Segment style={segmentOneStyle} basic>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column width={7}>
              <Container>
                <h1>Title 1</h1>
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
      </Segment>

      <Segment style={segmentTwoStyle} basic>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column width={7}>
              <Container>
                <h1>Title 2</h1>
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                </h4>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <IndexGrid/>
    </div>
  );
}
