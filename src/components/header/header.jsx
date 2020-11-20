import React from 'react'
import Logo from '../../assets/logo.svg'
import './header.css'
import HamburgerMenu from 'react-hamburger-menu'
import { Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router'
import Home from '../../pages/home/home.jsx'
import Team from '../../pages/team/team.jsx'

class Header extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      open: false,
      hambugerColor: '#1c1c1c',
      backgroundColor: 'white'
    }
  }

  handleClick = () => {
    this.setState({
        open: !this.state.open,
        hamburgerColor: this.state.open ? '#1c1c1c' : 'white',
        // backgroundColor: this.state.open ? 'white' : '#1c1c1c'
    });
  }

  render(){
    return(
      <div className='header'>
        <div className='header__inner'>
          <img src={Logo} alt='logo'/>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={44}
            height={25}
            strokeWidth={4}
            rotate={0}
            color={this.state.hamburgerColor}
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
    )
  }
}

export default Header