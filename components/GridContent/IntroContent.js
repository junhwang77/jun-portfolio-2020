import { Grid, Container } from 'semantic-ui-react'

const IntroContent = () => (
  <Grid centered columns={2}>
    <Grid.Row>
      <Grid.Column width={9}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
          <h1 style={{fontSize:'6vw'}}>Full Stack Developer</h1>
          <h1 style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            Hi. I am Jun, a versatile developer with emphasis in front-end development.
          </h1>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IntroContent;