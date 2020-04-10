import { Grid } from 'semantic-ui-react'
import PlxMenu from './PlxMenu'

const gridStyle = {
  position: 'fixed',
  right: '-77vw',  
  top: '20vh',
  width: '100%',
  zIndex: 11
}

const IndexGridMenu = (props) => (
  <Grid verticalAlign='middle' columns={4} centered style={gridStyle}>
    <Grid.Row>
      <Grid.Column floated='left' width={3}>
        <PlxMenu 
          animalsStartTime={props.animalsStartTime}
          animationDuration={props.animationDuration}
          codingOutTime={props.codingOutTime} 
          connectStartTime={props.connectStartTime}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IndexGridMenu
