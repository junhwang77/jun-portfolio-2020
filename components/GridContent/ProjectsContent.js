import { 
  Grid, 
  Container, 
  Image, 
  Segment,
  Label,
  Card
  } from 'semantic-ui-react'


const projectGridStyle = {
  paddingTop:'10vh'
}

const projectsTitle = {
  fontSize: '3vw',
  padding: 0
}

const projectsTitleAfter = {
  fontSize: '3vw',
  position: 'relative',
  left: '6px',
  top: '-62px',
  color: '#2DA8D8FF',
  zIndex: -1,
  padding: 0
}

const ProjectsContent = () => (
  <div>
  <Grid centered verticalAlign='middle' style={projectGridStyle}>
    <Grid.Row style={{height:'8vw'}}>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={4}>
        <Container style={{textAlign: 'center'}}>
          <h1 style={projectsTitle}>Projects</h1>
          <h1 style={projectsTitleAfter}>Projects</h1>
        </Container>
      </Grid.Column>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Row columns={4} style={{padding:0}}>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid            
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={4}>
          <Image 
            src='web-portfolio-png/vet-animals.jpg'
            as='a'
            fluid
            href='http://google.com'
            target='_blank'
          />
          <Label attached='top left'>CSS</Label>
      </Grid.Column>
      <Grid.Column width={3}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <style jsx global>{`
    .ui.grid>[class*="four column"].row>.column {
      padding: 0;
    }
    .ui.fluid.image img {
      transition: filter .5s ease-in-out;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
    .ui.fluid.image img:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  `}</style>
  </div>
)

export default ProjectsContent;