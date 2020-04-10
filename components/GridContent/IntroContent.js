import { Grid, Container } from 'semantic-ui-react'
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

const IntroContent = () => (
  <Grid centered columns={2}>
    <Grid.Row>
      <Grid.Column width={9}>
      </Grid.Column>
      <Grid.Column width={6}>
        <Container>
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
  </Grid>
)

export default Radium(IntroContent);