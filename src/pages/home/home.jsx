import React from 'react'
import './home.css'
import Footer from '../../components/footer/footer'
import iconright from '../../assets/right-arrow.svg'
import iconrightblack from '../../assets/right-arrow-black.svg'
import Header from '../../components/header/header'
import Circles from '../../assets/circles.svg'
import SquareCircle from '../../assets/squarecircle.svg'
import Masonry from 'react-masonry-css'
import MeriBachat from '../../assets/MeriBachat.svg'
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
            <Card img={MeriBachat} heading='MeriBachat' link='https://meribachat.in/'/>
            <Card img={SmokeCert} heading='SmokeCert' link='none'/>
            <Card img={Maven} heading='Menova' link='https://menova.org'/>
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
                <li>Branding</li>
                <li>Experience and Interaction</li>
                <li>Technology</li>
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
          SmokeTrees was born from an idea to bring the best developers out there onto a single platform to create the ultimate community of coders, who are dedicated to serving the world. We provide top-class services, in the friendliest manner. SmokeTrees is friendly, flexible, versatile and packed with talent.          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home