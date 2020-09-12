import React from 'react'
import './home.css'
import Grid from '../../components/grid/grid'

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
          </div>
        </div>
      </>
    )
  }
}

export default Home