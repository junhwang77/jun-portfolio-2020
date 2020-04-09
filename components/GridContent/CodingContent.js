import { Grid, Container } from 'semantic-ui-react'

const CodingContent = () => (
  <Grid centered columns={3}>
    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
          <h2>Programming</h2>
          <p>
            By a friend's suggestion, I decided to make a career transition to software development. I started learning coding online and enrolled in a coding bootcamp. After graduating from the bootcamp, I found my first internship in Washington DC.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={2}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default CodingContent;