import React from 'react'
import './home.css'
import Grid from '../../components/grid/grid'
import Footer from '../../components/footer/footer'
import iconright from '../../assets/right-arrow.svg'
import iconrightblack from '../../assets/right-arrow-black.svg'
import Header from '../../components/header/header'
import Circles from '../../assets/circles.svg'
import SquareCircle from '../../assets/squarecircle.svg'
import Background from '../../assets/background.svg'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <>
        <Header />
        <div className='squarecircle'>
          <img src={SquareCircle} />
        </div>
        <div className='circles'>
          <img src={Circles} />
        </div>
        <div className='home'>
          <div className='home__header'>
            We deliver what you ideate. 
          </div>
          <Grid />
          <div className="viewmore__link">
              <div><br></br></div>
              <a href="#" className="projects__viewmore">
                View More Projects
                <img src={iconrightblack} alt="right" className="projects__viewmore__rightarrow"/>
              </a>
          </div>
        </div>
        <div className='services'>
          <div className='services__header'>
            Services <br></br>we offer.
          </div>
          <div className='services__info'>
            <div className='services__info__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis commodo lacus donec facilisi blandit euismod. Semper diam neque volutpat lorem condimentum luctus senectus ullamcorper interdum. Bibendum imperdiet orci bibendum nunc a.
            </div>
            <div className="viewmore__link">
              <ul className="services__info__list">
                <li>Product Design</li>
                <li>User Interface</li>
                <li>User Experience Design</li>
                <li>Website Development</li>
                <li>App Development</li>
                <li>DevOps</li>
              </ul>
              <a href="#" className="services__info__know-more">
                <div>Know More</div>
                <img src={iconright} alt="right" className="services__info__knowmore__rightarrow"/>
              </a>
            </div>
          </div>
        </div>
        <div className='about'>
          <div className='about__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis commodo lacus donec facilisi blandit euismod. Semper diam neque volutpat lorem condimentum luctus senectus ullamcorper interdum. Bibendum imperdiet orci bibendum nunc a. 
          </div>
          <div className="viewmore__link">
              <div><br></br></div>
              <a href="#" className="projects__viewmore">
                Know More
                <img src={iconrightblack} alt="right" className="projects__viewmore__rightarrow"/>
              </a>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home