import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css'
import { WeatherShow } from './components/WeatherShow';

function App() {
  
  const [currentLocation,setCurrentLocation] = useState('')
  const [weather,setWeather] = useState(null)
  const [ForecastWeather,setForecastWeather] = useState(null)
  const [loading,setLoading] = useState(true);
  
  //Current weather
    const getLocation = async () => {
      try {

        //currentLocation Api
        const url = `https://api.ipdata.co?api-key=831d679737f839691532d3ebcc79aa340fc410f92b1cc56ca1d7573a`;
        const currLocation = await axios.get(url);
        setCurrentLocation(currLocation.data.city);
        console.log("city",currLocation.data.city)
        
        //currentweather Api
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${currLocation.data.city}&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
        );
        setWeather(response.data);
        console.log(response.data)

        //forecasweather Api
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${currLocation.data.city}&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
          );
          setForecastWeather(result.data);
          console.log("Forecast : ",result.data)

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        
      }
    };
  
    useEffect(() => {
      getLocation();
    }, []);



return (
  <>
    <div>
        {!loading ? (
     <div className='container'>
     <p className='loading'>App is Loading...</p>
     <img className='loading-icon' src={loadingicon} alt="loading-icon" />
     </div>
    ) : (
      weather && (
        <div className='container' >
          <WeatherFetching weather={weather} ForecastWeather={ForecastWeather} />
        </div>
      )
    )}
    </div>
  </>
)
}

export default App
