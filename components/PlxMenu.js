import React, { Component } from 'react'
import Plx from 'react-plx'
import MenuHeader from './menu/MenuHeader.js'
import MenuAccordion from './menu/MenuAccordion.js'

const plxMenu = {
  opacity: 0,
  position: 'relative',
  right: '-250px',
  color: 'white'
}

export default class PlxMenu extends Component {
  state = { 
    activeItem: 'Bio',
    activeIndex: '',
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
    const animalsStartTime = this.props.animalsStartTime
    const animationDuration = this.props.animationDuration
    const codingOutTime = this.props.codingOutTime

    return (
      <Plx
        className='dynMenu'
        style={plxMenu}
        animateWhenNotInViewport={ true }
        parallaxData={ [
          {
            start: animalsStartTime,
            duration: animationDuration,
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
          {
            start: codingOutTime,
            duration: animationDuration,
            name: 'ProjectsAnimationIn',
            properties: [
              {
                startValue: '#FFFFFF',
                endValue: '#000000',
                property: 'color'
              },
              {
                startValue: '#FFFFFF',
                endValue: '#000000',
                property: 'borderColor'
              },
            ],
          },
        ] }
      >
        <MenuHeader/>
        <MenuAccordion 
          handleItemClick={this.handleItemClick}
          handleAccordionClick={this.handleAccordionClick}
          activeItem={activeItem}
          activeIndex={activeIndex}
        />
      </Plx>
    )
  }
}