import React from 'react';
import sunImg from '../images/sun (1).png'

    
export default class Weather extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        const {temp_min, country, main, iconUrl} = this.props
        return <div className="weather-container">
            <div className="header">{country}</div>
            <div className="inner-container">
                <div className="image" style={{width:'3em', height: '3em'}}>
                 <img src={sunImg} style={{width: '100%', height:'100%'}} />
                 </div>
                <div className="current-weather">{temp_min}&deg;<small>c</small></div>
            </div>
            <div className="footer">{main}</div>
        </div>
    }
}