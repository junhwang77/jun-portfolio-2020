import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Menu from '../components/Menu'
import Plx from 'react-plx'

const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%'
}

const imgStyle = {
  position: 'fixed',
  top: '120px',
  width: 'inherit',
}

const IndexGrid = () => (
  <Grid verticalAlign='middle' columns={4} centered style={gridStyle}>
    <Grid.Row>
      <Grid.Column width={4}>
        <Image style={imgStyle} src='/web-portfolio-png/profile_pic.png'></Image>
        <Image style={imgStyle} src='/web-portfolio-png/background-1.png'></Image>
      </Grid.Column>
      <Grid.Column width={7}>
      </Grid.Column>
      <Grid.Column width={3}>
        <Menu/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IndexGrid
