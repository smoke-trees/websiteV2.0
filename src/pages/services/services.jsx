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
          {/* <div className='services__hero'>
            <div className='width'>
              <div className='services__hero__header'>
                Services
              </div>
              <div className='services__hero__description'>
              SmokeTrees was born from an idea to bring the best developers out there onto a single platform to create the ultimate community of coders, who are dedicated to serving the world. We provide top-class services, in the friendliest manner, maintaining the highest programming standards.
              </div>
            </div>
          </div> */}
          <div className='services-list width'>
            <div className='service-1'>
              <div className='service-header'>
                Digital Branding
              </div>
              <div className='service-description'>
                Have you ever heard a name of a product and the logo pops up in your head or even the celebrity who promoted it? That's branding. We help create these memorable expiriences for your brand.
              </div>
            </div>
            <div className='service-1'>
              <div className='service-header'>
                Experience and Interaction
              </div>
              <div className='service-description'>
                We help you create memorable experiences for your customers making them comeback to the product everyday. Providing great satisfaction to our client and making the users tick.
              </div>
            </div>
            <div className='service-1'>
              <div className='service-header'>
                Technology
              </div>
              <div className='service-description'>
                Implementation beats oration. With mobile solutions becoming increasingly vital to business success, 
we help you realise your dreams and bring it to the palm of your hand. A tried and tested backend, with a code that is ready for deployment.
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