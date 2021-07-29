// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react'
import './sass/app.scss'
import TopSection from './components/top/index'
import BottomSection from './components/bottom/index'
import axios from 'axios'

const WEATHER_KEY = "741e0294991241fafde8d027303dcc12"; 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Nigeria, Lagos',
      forecastDays: 10,
      isLoading: true,
    }
  }
  updateWeather() {
    const {cityName, forecastDays} = this.state;

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&cnt=${forecastDays}&appid=${WEATHER_KEY}&units=metric`
    axios.get(URL).then((res) => {
     console.log("DATA: ", res)
    return res.data;
    }).then((data) => {
      this.setState({
        isLoading: false,
        temp_min: data.main.temp_max, 
        main: data.weather[0].main,
         country: data.sys.country,
         iconURL: data.weather[0].icon 
      })
    })
    .catch((err) => {
      if(err) {
        console.error("Cannot fetch Weather Data from API", err)
      }
    });
  }


  componentDidMount(){
    const {eventEmitter} = this.props;

   this.updateWeather()
   
    eventEmitter.on("updateWeather", data => {
      this.setState({cityName: data}, () =>  this.updateWeather())
     
      console.log("LocationName: ", data);
    })
  }
  render() {
    const {isLoading, cityName, temp_min, main, iconURL, country} = this.state;
  return (
       <div className="app-container">
         <div className="main-container">
         {isLoading && <h3>Loading Weather...</h3>}
         { !isLoading && (
           <div className="top-section">
           <TopSection  country={cityName} temp_min={temp_min} main={main} iconURL={iconURL} stateName={country} eventEmitter={this.props.eventEmitter}  />
           </div> )}
           <div className="bottom-section"><BottomSection/> </div>
         </div>
       </div>
  );
}
}
export default App;
