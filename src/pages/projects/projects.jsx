import React from 'react'
import Header from '../../components/header/header'
import './projects.css'
import Footer from '../../components/footer/footer'
import Grid from '../../components/grid/grid'

class Projects extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div className='projects'>
          <div className='projects__hero'>
            <div className='width'>
              <div className='projects__hero__header'>
                Projects
              </div>
              <div className='projects__hero__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.
              </div>
            </div>
          </div>
          <div className='container width'>
            <Grid />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Projects