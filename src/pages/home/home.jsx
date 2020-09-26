import React from 'react'
import './home.css'
import Grid from '../../components/grid/grid'
import Footer from '../../components/footer/footer'
import iconright from '../../assets/right-arrow.svg'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <>
        <div className='home'>
          <div className='home__header'>
            Scelerisque eleifend <br></br>nisi gravida suscipit.
          </div>
          <Grid />
        </div>
        <div className='services'>
          <div className='services__header'>
            Services <br></br>we offer.
          </div>
          <div className='services__info'>
            <div className='services__info__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis commodo lacus donec facilisi blandit euismod. Semper diam neque volutpat lorem condimentum luctus senectus ullamcorper interdum. Bibendum imperdiet orci bibendum nunc a.
            </div>
            <div className="services__info__bottom">
              <ul className="services__info__list">
                <li>UI/UX Design</li>
                <li>Branding</li>
                <li>Website Development</li>
                <li>App Development</li>
                <li>DevOps</li>
              </ul>
              <a href="#" className="services__info__know-more">
                Know More
                <img src={iconright} alt="right" className="services__info__knowmore__rightarrow"/>
              </a>
            </div>
          </div>
        </div>
        <div className='about'>
          <div className='about__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis commodo lacus donec facilisi blandit euismod. Semper diam neque volutpat lorem condimentum luctus senectus ullamcorper interdum. Bibendum imperdiet orci bibendum nunc a. 
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home