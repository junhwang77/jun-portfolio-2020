import React from 'react'
import { Grid } from 'semantic-ui-react'
import Menu from '../components/Menu'

const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%'
}

const IndexGrid = () => (
  <Grid verticalAlign='middle' columns={4} centered style={gridStyle}>
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
    <Grid.Column width={6}>
    </Grid.Column>
    <Grid.Column width={4}>
      <Menu/>
    </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IndexGrid
