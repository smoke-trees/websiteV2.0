import React from 'react'
import Header from '../../components/header/header'
import './services.css'
import Footer from '../../components/footer/footer'

class Services extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div className='services-page'>
          <div className='services__hero'>
            <div className='width'>
              <div className='services__hero__header'>
                Services
              </div>
              <div className='services__hero__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Services