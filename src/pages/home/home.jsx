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
import Masonry from 'react-masonry-css'
import MeriBachat from '../../assets/MeriBachat.svg'
import Img1 from '../../assets/img1.svg'
import Img2 from '../../assets/im3.svg'
import Card from '../../components/cards/cards'
import SmokeCert from '../../assets/SmokeCert.svg'
import Maven from '../../assets/Maven.svg'

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      breakpointColsObj: {
        default: 2,
        600: 1
      }
    }
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
          <Masonry
            breakpointCols={this.state.breakpointColsObj}
            className='my-masonry-grid mobile'
           columnClassName='my-masonry-grid_column'
          >
            <Card img={MeriBachat} heading='MeriBachat' />
            <Card img={SmokeCert} heading='SmokeCert'/>
            <Card img={Maven} heading='MenovaHq'/>
          </Masonry>
          <div className="viewmore__link">
              <div><br></br></div>
              <a href="/projects" className="projects__viewmore">
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
             We at SmokeTrees Digital provide top-class services, in the friendliest manner, maintaining the highest programming standards.
            </div>
            <div className="viewmore__link">
              <ul className="services__info__list">
                <li>Product Design</li>
                <li>Website Development</li>
                <li>App Development</li>
                <li>Artificial Intelligence</li>
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