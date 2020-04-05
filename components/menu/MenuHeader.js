import { Segment, Image } from 'semantic-ui-react'

const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic',
}

const MenuHeader = () => (
  <Segment style={menuHeaderStyle}>
    <Image src='/web-portfolio-png/name.png' size='small' centered/>
    <p>( Hwang, Jun-Hyun )</p>
  </Segment>
  )

export default MenuHeader