import React from 'react'
import {EventEmitter} from 'events'

export default class Store extends React.Component {
    constructor(props) {
        super(props);

        this.EventEmitter = new EventEmitter();

        //Main App State
        this.state = {
            appName: "Weather App"
        }
    }
    render() {
        return React.Children.map(this.props.children, (chid) =>{
            return React.cloneElement(chid, {...this.state, eventEmitter: this.EventEmitter});
        }) 
    }
}