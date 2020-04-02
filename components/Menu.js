import React, { Component } from 'react'
import { Accordion, Menu, Image, Container, Segment } from 'semantic-ui-react'

const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic'
}

export default class MenuVert extends Component {
  state = { activeItem: 'Bio' }
  state = { activeIndex: 0 }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeItem } = this.state
    const { activeIndex } = this.state

    const BioContent = (
      <Menu.Menu>
        <Menu.Item
          name='Animals'
          active={activeItem === 'Animals'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Programming'
          active={activeItem === 'Programming'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    )

    return (
      <div>
        <Segment style={menuHeaderStyle}>
          <Image src='/web-portfolio-png/name.png' size='small' centered/>
          <p>( Hwang, Jun-Hyun )</p>
        </Segment>
        
        <Accordion as={Menu} pointing secondary vertical fluid inverted>
            <Accordion.Title
              as={Menu.Item}
              content='Bio'
              active={activeIndex === 0}
              index={0}
              onClick={this.handleAccordionClick}
            />
            <Accordion.Content active={activeIndex === 0} content={BioContent} />
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Connect'
            active={activeItem === 'Connect'}
            onClick={this.handleItemClick}
          />
        </Accordion>
        <style jsx global>
          {`
            .ui.secondary.vertical.pointing.menu .item {
              border-left-style: solid;
              border-left-width: 2px;
              border-left-color: grey;
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
            .ui.vertical.menu .item>i.icon {
              transform: scaleX(-1),
            }
          `}
        </style>
      </div>
    )
  }
}