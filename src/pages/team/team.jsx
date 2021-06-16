import React from 'react'
import Header from '../../components/header/header'
import TeamCard from '../../components/teamCard/teamCard'
import './team.css'
import image1 from '../../test_pics/1.png'
import image2 from '../../test_pics/2.png'
import image3 from '../../test_pics/3.png'
import image4 from '../../test_pics/4.png'
import Footer from '../../components/footer/footer'
import Tanmay from '../../assets/Tanmay.png'

class Team extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div className='team'>
          <div className='team__hero'>
            <div className='width'>
              <div className='team__hero__header'>
                Smoketrees
              </div>
              <div className='team__hero__description'>
              The driving force behind SmokeTrees is the hard work and talent of its founding members dedicated to bringing the developers' community together. Each of them is extremely skilled in their own fortes and ensure top notch results.
              </div>
            </div>
          </div>
          <div className='team__size'>
            <div className='width'>
              <div className='team__size__header'>
                Team
              </div>
            </div>
            <div className='team__size__pic'>
              <TeamCard image={Tanmay} name='Tanmay Thakur' role='Designated Partner'/>
              <TeamCard image={image2}/>
              <TeamCard image={image3}/>
              <TeamCard image={image4}/>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Team