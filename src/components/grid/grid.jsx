import React from 'react'
import Card from '../cards/cards'
import './grid.css'
import Img from '../../assets/testimg.svg'
import Img1 from '../../assets/img1.svg'
import Img2 from '../../assets/im3.svg'
import Masonry from 'react-masonry-css'
import MeriBachat from '../../assets/MeriBachat.svg'
import SmokeCert from '../../assets/SmokeCert.svg'
import Maven from '../../assets/Maven.svg'
import KidsCur from '../../assets/KidsCur.svg'
import Terran from '../../assets/Terran.svg'

class Grid extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      breakpointColsObj: {
        default: 2,
        600: 1
      }
    }
  }
  render(){
    return(
      <Masonry
      breakpointCols={this.state.breakpointColsObj}
      className='my-masonry-grid mobile'
      columnClassName='my-masonry-grid_column'
      >
        <Card img={MeriBachat} heading='MeriBachat' link='https://meribachat.org'/>
        <Card img={SmokeCert} heading='SmokeCert' link='none'/>
        <Card img={Maven} heading='Menova' link='https://menova.org'/>
        <Card img={KidsCur} heading='KidsCur' link='none'/>
        <Card img={Terran} heading='Terran Tidings' link='https://play.google.com/store/apps/details?id=com.terrantidings.app'/>
      </Masonry>
    )
  }
}

export default Grid
