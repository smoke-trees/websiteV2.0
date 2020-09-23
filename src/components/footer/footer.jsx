import React from 'react'
import './footer.css'

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='footer'>
        <div className='footer__details'>
          <div className='footer__details__list'>
            <div className='footer__details__list__one'>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>Clients</li>
                <li>Achievements</li>
              </ul>
            </div>
            <div className='footer__details__list__two'>
              <ul>
                <li>Goto Forest</li>
                <li>Request Demo</li>
              </ul>
            </div>
          </div>
          <div className='footer__social'>
            <div className='footer__social__icons'>ICONS</div>
            <div className='footer__social__copy'>
              SmokeTrees Digital Private Limited
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer