import { Grid, Container } from 'semantic-ui-react'

const IntroContent = () => (
  <Grid centered columns={2}>
    <Grid.Row>
      <Grid.Column width={9}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
          <h1 style={{color:'white',fontSize:'6vw'}}>Full Stack Developer</h1>
          <span>Hi, I'm Jun.</span>
          <p>
            I am a versatile developer, specializing in frontend development.
          </p>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IntroContent;