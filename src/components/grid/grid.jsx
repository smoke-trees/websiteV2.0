import React from 'react'
import Card from '../cards/cards'
import './grid.css'
import Img from '../../assets/testimg.svg'
import Img1 from '../../assets/img1.svg'
import Img2 from '../../assets/im3.svg'

class Grid extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='grid'>
        <Card img={Img}/>
        <Card img={Img1}/>
        <Card img={Img2}/>
        <Card img={Img}/>
      </div>
    )
  }
}

export default Grid
