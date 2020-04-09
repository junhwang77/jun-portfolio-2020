import { Grid, Container } from 'semantic-ui-react'

const AnimalContent = () => (
  <Grid centered columns={3}>
    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
          <h2>Animals</h2>
          <p>
            I graduated with a BS in Animal Science from UC Davis, and worked in the field for 4 years in various team environments, finding creative solutions to improve quality of services.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default AnimalContent;