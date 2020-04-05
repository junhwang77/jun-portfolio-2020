import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import PlxMenu from './PlxMenu'

const gridStyle = {
  position: 'fixed',
  right: 0,
  top: '20vh',
  width: '100%',
  zIndex: 10
}

const IndexGrid = () => (
  <Grid verticalAlign='middle' columns={4} centered style={gridStyle}>
    <Grid.Row>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={7}>
      </Grid.Column>
      <Grid.Column width={3}>
        <PlxMenu/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IndexGrid
