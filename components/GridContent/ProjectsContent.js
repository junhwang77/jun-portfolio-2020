import { 
  Grid, 
  Container, 
  Image, 
  Segment,
  Label,
  Card
  } from 'semantic-ui-react'


const projectGridStyle = {
  paddingTop:'20%'
}

const ProjectsContent = () => (
  <Grid centered verticalAlign='middle' style={projectGridStyle}>
    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={4}>
        <Container style={{textAlign: 'center'}}>
          <h2>Projects</h2>
        </Container>
      </Grid.Column>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Row columns={4}>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />
          <Label attached='bottom'>CSS</Label>
        </Card>
      </Grid.Column>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />
          <Label attached='bottom'>CSS</Label>
        </Card>
      </Grid.Column>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />
          <Label attached='bottom'>CSS</Label>
        </Card>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />
          <Label attached='bottom'>CSS</Label>
        </Card>
      </Grid.Column>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />          
          <Label attached='bottom'>CSS</Label>
        </Card>
      </Grid.Column>
      <Grid.Column width={4}>
        <Card>
          <Image 
            src='web-portfolio-png/placeholder.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />          
          <Label attached='bottom'>CSS</Label>
        </Card>      
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ProjectsContent;