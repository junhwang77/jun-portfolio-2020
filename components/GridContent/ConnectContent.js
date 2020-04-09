import { Grid, Container } from 'semantic-ui-react'

const ConnectContent = () => (
  <Grid centered columns={3}>
    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
          <h2>Connect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ConnectContent;