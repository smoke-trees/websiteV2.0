import React from 'react'
import './card.css'

const Card = (props) => {
  return(
    <div className='card'>
        <div className='card__imageholder'>
          <img src={props.img} />
        </div>
        <div className='card__textholder'>
          <div className='card__textholder__heading'>Github</div>
          <div className='card__textholder__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.</div>
        </div>
      </div>
  )
}

export default Card