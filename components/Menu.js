import React, { Component } from 'react'
import { Accordion, Menu, Image, Segment } from 'semantic-ui-react'
import Plx from 'react-plx'

const menuHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic',
  position: 'relative',
  right: '-250px'
}

const menuBodyStyle = {
  position: 'relative',
  right: '-250px'
}

export default class MenuVert extends Component {
  state = { 
    activeItem: 'Bio',
    activeIndex: '' 
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll, false)
  }

  handleItemClick = (e, { name }) => {
    let element = document.getElementsByClassName(name)[0];
    element.scrollIntoView({behavior: 'smooth'});
  }

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  
  handleScroll = () => {
    let introNode = { node:document.getElementsByClassName('Intro'), name:'Intro' }
    let animalNode = { node:document.getElementsByClassName('Animals'), name:'Animals' }
    let programmingNode = { node:document.getElementsByClassName('Programming'), name:'Programming' }
    let projectsNode = { node:document.getElementsByClassName('Projects'), name:'Projects' }
    let connectNode = { node:document.getElementsByClassName('Connect'), name:'Connect' }
    let menuArray = [introNode, animalNode, programmingNode, projectsNode, connectNode]

    menuArray.map(e => {
      let nodeScrollSize = e.node[0].offsetTop + e.node[0].scrollHeight 
      if(e.node[0].offsetTop - 300 <= window.scrollY && window.scrollY <= nodeScrollSize ) {
        this.setState({ activeItem: e.name })
        if(e.name == 'Intro' || e.name == 'Animals' || e.name == 'Programming'){
          this.setState({ activeIndex: 0 })
        }
      }
    })

    //let elementScroll = document.getElementsByClassName(name)[0].scrollTop
    //if(currentScroll == elementScroll) {
    //  this.setState({ activeItem: name });
    //}
  }

  render() {
    const { activeItem } = this.state
    const { activeIndex } = this.state

    const BioContent = (
      <Menu.Menu>
        <Menu.Item
          name='Intro'
          active={activeItem === 'Intro'}
          onClick={this.handleItemClick}
        />
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
      <Plx
        className='FixedDemo'
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: 500,
            duration: 300,
            name: 'first',
            properties: [
              {
                startValue: 0,
                endValue: -250,
                property: 'translateX',
              },
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              }
            ],
          },
        ] }
      >
        <div>
          <Segment style={menuHeaderStyle}>
            <Image src='/web-portfolio-png/name.png' size='small' centered/>
            <p>( Hwang, Jun-Hyun )</p>
          </Segment>
          
          <Accordion style={menuBodyStyle} as={Menu} pointing secondary vertical fluid inverted>
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
        </div>
      </Plx>
    )
  }
}