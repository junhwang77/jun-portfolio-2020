import { Grid, Container, List } from 'semantic-ui-react'

const connectStyle = {
  backgroundImage: 'url("web-portfolio-png/childhood.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'black'
}

const connectArr = [
  {
    style:{
      fontSize: '5vw',
      color: 'darkgreen'
    },
    icon: 'id badge outline',
    link: 'pdf/jun-resumeFS03252020.pdf',
  },
  {
    style:{
      fontSize: '5vw',
      color: '#0076B5'
    },
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/jun-hwang-b8316326/',
  },
  {
    style:{
      fontSize: '5vw',
      color: 'black'
    },
    icon: 'github',
    link: 'https://github.com/junhwang77',
  },
  {
    style:{
      fontSize: '5vw',
      color: 'white'
    },
    icon: 'at',
    link: 'mailto:junhwang77@hotmail.com',
  }
]

const ConnectContent = () => (
  <Grid centered columns={2} style={connectStyle}>
    <Grid.Row style={{    
      height: '100vh',
      paddingTop: '28vh'
    }}>
      <Grid.Column width={12}>
        <Container textAlign='center'>
          <h2>Get In Touch.</h2>
          <List horizontal>
            {connectArr.map(connectItem =>
              <List.Item 
                style={connectItem.style}
                icon={connectItem.icon} 
                as='a'
                href={connectItem.link}
                target = "_blank"
              />
            )}
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