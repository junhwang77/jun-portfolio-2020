import { Segment, Image } from 'semantic-ui-react'

const menuHeaderStyle = {
  backgroundColor: 'transparent',
  color: 'inherit',
  textAlign: 'center',
  fontFamily: 'typo_papyrusm',
  fontWeight: 'normal',
  fontStyle: 'normal',
  border: 0,
  boxShadow: 'none'
}

const MenuHeader = () => (
  <Segment style={menuHeaderStyle}>
    <span>황준현</span>
  </Segment>
  )

export default MenuHeader