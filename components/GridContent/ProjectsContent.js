import {useState,useEffect} from 'react';
import { 
  Grid, 
  Container,
  Label
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

const projectsArr = [
  [
    {
      image:"url('web-portfolio-png/ud.png')",
      link: 'http://ec2-54-212-10-196.us-west-2.compute.amazonaws.com/',
      info: 'User Dashboard - A simpler Facebook like application. (PHP, Codeigniter 3, MySQL, AWS EC2)'
    },
    {
      image:"url('web-portfolio-png/hc.png')",
      link: 'https://codepen.io/junhwang/pen/OJyPxyy',
      info: 'Interactive Graph for CSIS Aerospace Security Project - Dynamically updates the data from google spreadsheet. (Highcharts.js, JavaScript, jQuery)'
    },
    {
      image:"url('web-portfolio-png/ca.png')",
      link: 'https://codepen.io/junhwang/full/yjJGqX',
      info: 'Calculator App - (HTML,CSS, JavaScript)'
    }
  ],
  [
    {
      image:"url('web-portfolio-png/vet-animals.jpg')",
      link: 'https://www.google.com/',
      info: 'In Progress'
    },
    {
      image:"url('web-portfolio-png/vet-animals.jpg')",
      link: 'https://www.google.com/',
      info: 'In Progress'
    },
    {
      image:"url('web-portfolio-png/vet-animals.jpg')",
      link: 'https://www.google.com/',
      info: 'In Progress'
    }
  ]
]


const ProjectsContent = () => {
  return(
  <div>
    <Grid centered verticalAlign='middle' style={projectGridStyle}>
      <Grid.Row style={{height:'8vw'}}>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container textAlign='center' >
            <h1 style={projectsTitle}>Projects</h1>
            <h1 style={projectsTitleAfter}>Projects</h1>
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
      
      {projectsArr.map(row =>
        <Grid.Row columns={4}>
          {row.map(e =>
            <Grid.Column>
              <div 
                className='projItem' 
                style={{
                  backgroundImage: e.image,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '133%',
                  height: '30vh',
                  width: '23vw'
                }}
              >
                <a 
                  href={e.link}
                  target = "_blank"
                >
                  <span className='projLink'></span>
                </a>
                <Label attached='bottom'>{e.info}</Label>
              </div>
            </Grid.Column>
          )}
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
      )}
      
    </Grid>
    <style jsx global>
      {`
        .projItem {
          transition: filter .2s ease-in-out;
          -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
        }
        .projItem:hover {
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
        }
        .projLink {
          position: absolute;
          height: 30vh;
          width: 23vw;
        }
        .ui[class*="bottom attached"].label {
          border-radius: 0;
        }
      `}
    </style>
  </div>
)}

export default ProjectsContent;