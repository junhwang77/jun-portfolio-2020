import { Segment, Image } from 'semantic-ui-react'

const menuHeaderStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'typo_papyrusm',
  fontWeight: 'normal',
  fontStyle: 'normal',
  border: 0,
  boxShadow: 'none'
}

const MenuHeader = () => (
  <Segment style={menuHeaderStyle}>
    <p>황준현</p>
  </Segment>
  )

export default MenuHeader