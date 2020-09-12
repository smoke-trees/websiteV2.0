import React from 'react'
import './home.css'
import Grid from '../../components/grid/grid'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className='home'>
      <div className='home__header'>
        Scelerisque eleifend <br></br>nisi gravida suscipit.
      </div>
      <Grid />
    </div>
    )
  }
}

export default Home