import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className={`card ${props.link === '#' ? 'tooltip' : ''}`}>
      <a href={props.link}
        onClick={(e) => {
          if (props.link === '#') {
            e.preventDefault()
          }
        }}
        rel='noopener noreferrer' target='_blank'>
        <div className='card__imageholder'>
          <img src={props.img} />
        </div>
        <div className='card__textholder'>
          <div className='card__textholder__heading'>{props.heading}    <span className={`tooltiptext ${props.link === '#' ? '' : 'no-display'}`}>Coming Soon!</span></div>
          {/* <div className='card__textholder__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.</div> */}
        </div>
      </a>
    </div>
  )
}

export default Card