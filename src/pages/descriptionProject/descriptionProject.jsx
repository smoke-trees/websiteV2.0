import React from 'react'
import Header from '../../components/header/header'
import './descriptionProject.css'
import Test from '../../assets/projecttest.svg'

const Content = () => {
    return(
        <div className='content--padding'>
            <div className='descriptionproject__hero__header'>
                Header
            </div>
            <div className='descriptionproject__hero__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.
            </div>
        </div>
    )
}

const Image = () => {
    return(
        <img src={Test} className='width'/>
    )
}

class DescriptionProject extends React.Component{
    render(){
        return(
            <>
                <Header />
                <div className='descriptionproject width'>
                    <div className='descriptionproject__hero'>
                        <div className='descriptionproject__hero__header'>
                            Project Name
                        </div>
                        <div className='descriptionproject__hero__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus a commodo lacus semper scelerisque. Venenatis parturient gravida dis sit in viverra risus. Tellus ac ipsum sit eros blandit.
                        </div>
                    </div>
                    <div className='descriptionproject__content'>
                        <Image />
                        <Content />
                    </div>
                </div>
            </>
        )
    }
}

export default DescriptionProject