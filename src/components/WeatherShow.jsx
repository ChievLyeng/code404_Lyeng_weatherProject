import { useEffect,useState } from 'react';
import clearsky from '../img/clearsky.svg';
// import brokenclouds from '../brokenclouds.svg';
import fewclouds from '../img/fewclouds.svg';
import mist from '../img/mist.svg';
import rain from '../img/rain.svg';
// import scatteredclouds from '../scatteredclouds.svg';
// import showerain from '../showerain.svg';
import snow from '../img/snow.svg';
import thunderstrom from '../img/thunderstorm.svg';


const iconMap = {
    'Rain' : rain,
    'Snow' : snow,
    'Thunderstorm' : thunderstrom,
    'Mist' : mist,
    'Clear' : clearsky,
    'Clouds' : fewclouds,
    
};


export const WeatherShow = ({weather}) => {

    //getCurrent day
    const getDate = () => {
        const today = new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = weekday[today.getDay()];
        
        return ` ${date}, ${month}, ${year}`;
      }

      const [date,setDate] = useState(getDate());

      //Check if weather is aviailable before accessing its properties
      const cityName = weather ? weather.name : "N/A";
      const temperature = weather ? Math.round(weather.main.temp) : "N/A";
      const humidity = weather ? weather.main.humidity : "N/A";
      const condition = weather ? weather.weather[0].main : "N/A";
      const wind = weather ? weather.wind.speed : "N/A"
      const icon = iconMap[condition]

      return (
        <div>
            <div className="container">
                {/* weather info */}
                <div className='weather-info-container'>
                <p className='weather-date'> {date} </p>
                <p className='weather-location'> {cityName} </p>
                <div className='frame'>
                {/* weather icon */}
                
                <div className='temperature-container'>
                    <div>
                        <img className='weather-icon' src={icon} />
                    </div>
                    
                    {/* description */}
                    <div className='weather-day'>
                    <div className='today-weather'><p >Today</p></div>
                    <div className='today-degree'> <p> {temperature} &deg;C </p> </div>
                    </div>
                </div>
            
                {/* weather description */}
                <div className='temperature-info-container'>
                    <div className='abc'>
                    <div><p> {condition} </p></div>
                    </div>
                    
                    <div className='weather-desc-container-all'>
                    <div className='weather-desc-container'>
                        <div className='weather-desc'>
                            <div className='weather-condition-title'><p> Wind</p></div>
                            <div className='weather-condition'><p> {wind} Km/h</p></div>
                        </div>
                    </div>
            
                    <div className='weather-desc-container'>
                        <div className='weather-desc'>
                            <div className='weather-condition-title'><p> Humidity</p></div>
                            <div className='weather-condition'><p> {humidity} &#x25;</p></div>
                            </div>
                        </div>
            
                    </div>
                </div>
                </div>
                </div>  
            </div>
            </div>
        </div>
      );
}