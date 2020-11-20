import React from 'react'
import Header from '../../components/header/header'
import TeamCard from '../../components/teamCard/teamCard'
import './team.css'

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.
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
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Team