import { render } from '@testing-library/react'
import React from 'react'
import sunImg from '../images/sun (1).png'

export default class ForecastDay extends React.Component {

    constructor(props){
        super(props)
    }


render() {
    return <div className="forecastday-container">
        <div className="img"> <img src={sunImg} alt="" /> </div>
        <div className="text">Sunny</div>
    </div>
    }
}