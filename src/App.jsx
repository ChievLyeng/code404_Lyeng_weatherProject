import { useEffect,useState } from 'react';
import axios from 'axios';
import loadingicon from './img/loadingicon.gif'
import './App.css'
import { WeatherFetching } from './components/WeatherFetching';

function App() {
  
  const [currentLocation,setCurrentLocation] = useState('')
  const [weather,setWeather] = useState(null)
  const [ForecastWeather,setForecastWeather] = useState(null)
  const [loading,setLoading] = useState(false);
  
  //Current weather
    const getLocation = async () => {
      try {

        //currentLocation Api
        const url = `https://api.ipdata.co?api-key=831d679737f839691532d3ebcc79aa340fc410f92b1cc56ca1d7573a`;
        const currLocation = await axios.get(url);
        setCurrentLocation(currLocation.data.city); 
        
        //currentweather Api
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${currLocation.data.city}&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
        );
        setWeather(response.data);

        //forecasweather Api
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${currLocation?.data.city}&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
          );
          setForecastWeather(result.data);

      } catch (error) {
        console.error("Error fetching data from api", error);
        setLoading(false);

          //this is prevention when currentlocation api is not work it will fetch the weather in phnom penh city
          try {
            //currentweather Api
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=Phnom Penh&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
            );
            setWeather(response.data);

            //forecasweather Api
            const result = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?q=Phnom Penh&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`
              );
              setForecastWeather(result.data);
            
          } catch (error) {
            console.error("Error fetching data from api", error);
            setLoading(true);
          }
      }
    };
  
    useEffect(() => {
      getLocation();
    }, []);


return (
  <>
    <div>
        {loading ? (
        <div >
          <p className='loading'>Error Fetching Data From Api...</p>
          <img className='loading loading-icon' src={loadingicon} alt="loading-icon" />
    </div>
    ) : (
      weather && ForecastWeather && (
          <WeatherFetching weather={weather} ForecastWeather={ForecastWeather} />
      )
    )}
    
    </div>
  </>
)
}

export default App
