import clearsky from '../img/clearsky.svg';
import fewclouds from '../img/fewclouds.svg';
import mist from '../img/mist.svg';
import rain from '../img/rain.svg';
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

export const WeatherShow = ({ForecastWeather,weather,day2,day3,day4,day5,date
                        }) => {
    
    const cityName = weather ? weather.name : 'N/A';
    const temperature = weather ? Math.round(weather.main.temp) : "N/A";
    const humidity = weather ? weather.main.humidity : "N/A";
    const condition = weather ? weather.weather[0].main : "N/A";
    const wind = weather ? weather.wind.speed : "N/A"
    const weatherday2 = ForecastWeather ? Math.round(ForecastWeather.list[8].main.temp) : "N/A"
    const weatherday3 = ForecastWeather ? Math.round(ForecastWeather.list[16].main.temp) : "N/A"
    const weatherday4 = ForecastWeather ? Math.round(ForecastWeather.list[24].main.temp) : "N/A"
    const weatherday5 = ForecastWeather ? Math.round(ForecastWeather.list[32].main.temp) : "N/A"
    const conditionday2 = ForecastWeather? ForecastWeather.list[7].weather[0].main : "N/A"
    const conditionday3 = ForecastWeather? ForecastWeather.list[15].weather[0].main : "N/A"
    const conditionday4 = ForecastWeather? ForecastWeather.list[23].weather[0].main : "N/A"
    const conditionday5 = ForecastWeather? ForecastWeather.list[31].weather[0].main : "N/A"
    const icon = iconMap[condition]
    
      
      return (
        <>
   
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

                <div className='weather-week-container'>
            <div className='nextday-weather'>
                    <div className='nextday-title'><p > {day2} </p></div>
                    <img className='nextday-weather-icon' src={iconMap[conditionday2]} />  
                    <p className='nextday-title'>  {weatherday2} &deg;C  </p>

            </div>

            <div className='nextday-weather'>
            <div className='nextday-title'><p > {day3} </p></div>
                    <img className='nextday-weather-icon' src={iconMap[conditionday3]} />
                    <p className='nextday-title'>{weatherday3} &deg;C</p>
            </div>

            <div className='nextday-weather'>
            <div className='nextday-title'><p > {day4} </p></div>
                <img className='nextday-weather-icon' src={iconMap[conditionday4]} />
                <p className='nextday-title'>{weatherday4} &deg;C</p>
            </div>

            <div className='nextday-weather'>
            <div className='nextday-title'><p > {day5} </p></div>
                <img className='nextday-weather-icon' src={iconMap[conditionday5]} />
                <p className='nextday-title'>{weatherday5} &deg;C</p>
            </div>

            </div>
            </div>
        </>
      )

}