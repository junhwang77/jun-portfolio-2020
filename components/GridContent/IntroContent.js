import { Grid, Container } from 'semantic-ui-react'

const IntroContent = () => (
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
)

export default IntroContent;