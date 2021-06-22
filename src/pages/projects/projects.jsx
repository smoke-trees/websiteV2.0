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
              Our projects have been carried out with utmost sincerity and diligence and will continue so. SmokeTrees is friendly, flexible, versatile and packed with talent. If you have an idea you want to bring to life, you have come to the right place.
              </div>
            </div>
          </div>
          <div className='project-container width'>
            <Grid />
            <div className='projects__hero__header space'>Github Projects</div>
            <div className='more'>
              <div className='more-1'>
                <div className='project-more-1-heading'>
                  SCI-BERT <span>HUGGING FACE</span>
                </div>
                <div className='project-more-1-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis commodo lacus donec facilisi blandit euismod. Semper diam neque volutpat lorem condimentum luctus senectus ullamcorper interdum. Bibendum imperdiet orci bibendum nunc a. 
                </div>
              </div>
              <div className='more-1'>
              <a href='https://github.com/smoke-trees/uproar' rel='noopener noreferrer' target='_blank'>
                <div className='project-more-1-heading'>
                  UPROAR
                </div>
                <div className='project-more-1-description'>
                An application for accumulating all disaster updates in one forum, parsing them and manipulating the data so that only accurate information reaches the people. Features include SOS, mapping, video surveillance and many more. 
                </div>
                </a>
              </div>
              <div className='more-1'>
              <a href='https://github.com/smoke-trees/gesture-drive' rel='noopener noreferrer' target='_blank'>
                <div className='project-more-1-heading'>
                  GESTURE DRIVE
                </div>
                <div className='project-more-1-description'>
                An autonomous vehicle solution for people who are physically challenged, calibrates limb angle to drive steering wheel and operate pedals. 
                </div>
                </a>
              </div>
              <div className='more-1'>
              <a href='https://github.com/smoke-trees/sparc' rel='noopener noreferrer' target='_blank'>
                <div className='project-more-1-heading'>
                  SPARC
                </div>
                <div className='project-more-1-description'>
                  A Smart Grid solution which compiles home networks and grids in an efficient manner, controlled by recurrent networks which predict distribution and consumption and also supported by an energy credit system. All running as microservices supporting each other. 
                </div>
                </a>
              </div>
              <div className='more-1'>
              <a href='https://github.com/smoke-trees/Voice-synthesis' rel='noopener noreferrer' target='_blank'>
                <div className='project-more-1-heading'>
                  VOICE SYNTHESIS
                </div>
                <div className='project-more-1-description'>
                  An implementation of Transfer Learning from Speaker Verification to Multispeaker Text-To-Speech Synthesis (SV2TTS) with a vocoder that works in real-time. SV2TTS is a three-stage deep learning framework that allows to create a numerical representation of a voice from a few seconds of audio, and to use it to condition text-to speech synthesis.
                </div>
                </a>
              </div>
              <div className='more-1'>
              <a href='https://github.com/smoke-trees/ATLAS-predictors' rel='noopener noreferrer' target='_blank'>
                <div className='project-more-1-heading'>
                  ATLAS
                </div>
                <div className='project-more-1-description'>
                Total Surveillance for Infiltrators, a defense security solutions suite, sort documents on the fly for malcontent, configure drones for maximum area coverage, send communications via commo hubs, protected by swarm and blockchain. TLDR : Automated Solutions for Counter Insurgency. 
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Projects