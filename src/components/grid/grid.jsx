import React from 'react'
import Card from '../cards/cards'
import './grid.css'

class Grid extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='grid'>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Grid
