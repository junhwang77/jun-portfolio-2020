import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class MenuVert extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>        
        <Image src='/web-portfolio-png/name.png' size='small' floated='right'/>
        <Menu pointing secondary vertical floated='right' inverted>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            position='right'
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <style jsx global>
          {`
            .ui.secondary.vertical.pointing.menu .item {
              border-left-style: solid;
              border-left-width: 2px;
              border-left-color: transparent;
              border-right-style: none;
              border-right-width: 0;
              border-right-color: none;
            }
            .ui.secondary.vertical.pointing.menu {
              border-left-width: 2px;
              border-left-style: solid;
              border-left-color: rgba(34,36,38,.15);
              border-right-width: 0;
              border-right-style: none;
              border-right-color: none;
            }
            .ui.secondary.vertical.pointing.menu .item {
              margin: 0 0 0 -2px;
            }
          `}
        </style>
      </div>
    )
  }
}