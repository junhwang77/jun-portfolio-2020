import { Grid, Container, List, GridRow } from 'semantic-ui-react'

const connectStyle = {
  backgroundImage: 'url("web-portfolio-png/childhood.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'black'
}

const connectIdStyle = {
  fontSize: '5vw',
  color: 'darkgreen'
}

const connectLiStyle = {
  fontSize: '5vw',
  color: '#0076B5'
}

const connectGhStyle = {
  fontSize: '5vw',
  color: 'black'
}

const connectEmStyle = {
  fontSize: '5vw',
  color: 'white'
}

const ConnectContent = () => (
  <Grid centered columns={2} style={connectStyle}>
    <Grid.Row style={{    
      height: '100vh',
      paddingTop: '21vh'
    }}>
      <Grid.Column width={12}>
        <Container textAlign='center'>
          <h2>Get In Touch.</h2>
          <List horizontal>
            <List.Item
              style={connectIdStyle}
              icon='id badge outline'
              as='a'
              href='http://www.semantic-ui.com'
            />
            <List.Item 
              style={connectLiStyle}
              icon='linkedin' 
              as='a'
              href='https://www.linkedin.com/in/jun-hwang-b8316326/'
            />
            <List.Item
              style={connectGhStyle}
              icon='github'
              as='a'
              href='https://github.com/junhwang77'
            />
            <List.Item
              style={connectEmStyle}
              icon='at'
              as='a'
              href='mailto:junhwang77@hotmail.com'
            />
          </List>
        </Container>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={16} verticalAlign='middle'>
        <p style={{paddingTop: '10vh', color:'white', textAlign:'center'}}>
          Copyright © Jun Hwang 2020
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ConnectContent;