import React from 'react'
import Logo from '../../assets/logo.svg'
import Hamburger from '../../assets/hamburger.svg'
import './header.css'

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
        <div className='header__inner'>
          <img src={Logo} alt='logo'/>
          <img src={Hamburger} alt='hamburger'/>
        </div>
      </div>
    )
  }
}

export default Header