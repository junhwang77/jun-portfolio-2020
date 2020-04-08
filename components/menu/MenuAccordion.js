import { Accordion, Menu, Segment } from 'semantic-ui-react'

const MenuAccordionStyle = {
  backgroundColor: 'transparent',
  border: 0,
  boxShadow: 'none'
}

const BioContent = (props) => (
  <Menu.Menu>
    <Menu.Item
      name='Intro'
      active={props.activeItem === 'Intro'}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      name='Animals'
      active={props.activeItem === 'Animals'}
      onClick={props.handleItemClick}
    />
    <Menu.Item
      name='Coding'
      active={props.activeItem === 'Coding'}
      onClick={props.handleItemClick}
    />
  </Menu.Menu>
)

const MenuAccordion = (props) => (
  <Segment style={MenuAccordionStyle}>
    <Accordion as={Menu} pointing secondary vertical fluid>
      <Accordion.Title
        as={Menu.Item}
        content='Bio'
        active={props.activeIndex === 0}
        index={0}
        onClick={props.handleAccordionClick}
      />
      <Accordion.Content active={props.activeIndex === 0} content={BioContent(props)} />
      <Menu.Item
        name='Projects'
        active={props.activeItem === 'Projects'}
        onClick={props.handleItemClick}
      />
      <Menu.Item
        name='Connect'
        active={props.activeItem === 'Connect'}
        onClick={props.handleItemClick}
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
        border-top: 0;
        border-bottom: 0;
      }
      .ui.secondary.vertical.pointing.menu .item {
        margin: 0 0 0 -2px;
      }
      .ui.vertical.menu .item>i.icon {
        transform: scaleX(-1);
      }
      .ui.accordion:not(.styled) .accordion .title~.content:not(.ui), .ui.accordion:not(.styled) .title~.content:not(.ui) {
        padding: 0;
        text-indent: 18px;
      }
      .ui.secondary.pointing.menu .dropdown.item:active, .ui.secondary.pointing.menu .link.item:active, .ui.secondary.pointing.menu a.item:active {
        border-color: grey;
      }
    `}
    </style>
  </Segment>
)

export default MenuAccordion;