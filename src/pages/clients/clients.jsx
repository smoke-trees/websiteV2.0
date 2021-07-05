import React from 'react'
import Header from '../../components/header/header'
import './clients.css'
import Footer from '../../components/footer/footer'
import Grid from '../../components/grid/grid'

class Clients extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div className='projects'>
          <div className='projects__hero'>
            <div className='width'>
              <div className='projects__hero__header'>
                Clients
              </div>
              <div className='projects__hero__description'>
              We value our clients, who have given us a chance to work on their ideas and now are reaping the results.
              </div>
            </div>
          </div>
          <div className='project-container width'>
            <div className='more'>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                  Earnest Fintech <span>MERi BACHAT</span>
                </div>
                <div className='project-more-1-description'>
                MeriBachat is a platform dedicated to solving your everyday troubles such as thinking of, finding, purchasing and sending across a gift to a loved one, or looking for a great offer on your favourite brand because you don’t want to break your bank! To help you find your way around these issues, we bring to you a feature-rich app and website.
                </div>
              </div>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                AKYU EdTech <span>MAVENHQ</span>
                </div>
                <div className='project-more-1-description'>
                Introducing Maven Labs - taught by extraordinaries, designed by creators, produced by cinematographers. Explore the most immersive and stimulating learning experiences that draw you in and keep you hooked. Witness teaching as an art form. Chase your curiosity. And learn the things that truly excite you! 
                </div>
              </div>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                Cybint <span>APP | AI</span>
                </div>
                <div className='project-more-1-description'>
                Terran Tidings (Beta):
                    Welcome to your personal gateway for news, publications and magazines in this all in one bundled application, byte sized news, pocketed for fast reads from sources around the world. Especially curated authors, giving their opinionated peices for your point of views. And magazines, giving tech, gadget and tool reviews. <br/><br/>
                    Voicebot (Beta):
Training human resources to make marketing calls can be time consuming and cost to the company goes on increasing as you increase the volume of calls made. An intuitive solution beckons, an AI trained voicebot, having in it's arsenal capabilities for intelligent interaction, automatic speech recognition and text to speech in multiple accents. The interesting part being, every user can publish their own rules for the bot to follow!
                </div>
              </div>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                BOSE Auto Guide <span>APP</span>
                </div>
                <div className='project-more-1-description'>
                The mobile application platform of “BOSE Auto Guide” is a platform which allows users to communicate with each other directly by accessing contact details from the mobile application without any kind of intervention from the proprietor of this application. This Privacy Policy applies to all services provided by “BOSE Auto Guide” and sets out how “BOSE Auto Guide” application may collect, use and disclose information, revision in policies, in relation to Users of the Platform.
                </div>
              </div>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                  Altilium Energy <span>KIDSCUR</span>
                </div>
                <div className='project-more-1-description'>
                    KidsCur is a platform to track vaccination schedule and record documents of new born baby. Its an assistant for new parents helping them maintaining documents of their child.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Clients