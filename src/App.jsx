import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css'
import { WeatherShow } from './components/WeatherShow';

function App() {
  const [currentLocation,setCurrentLocation] = useState('');
  const [weather,setWeather] = useState(null);

  const getLocation = async () => {
    try {
      const url = `https://api.ipdata.co?api-key=831d679737f839691532d3ebcc79aa340fc410f92b1cc56ca1d7573a`;
      const currLocation = await axios.get(url);
      setCurrentLocation(currLocation.data.city);

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currLocation.data.city}&appid=2f43c83c40b4e2ddc001d7b04ec46eab&units=metric`)
      setWeather(response.data);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  return (
    <>

     <div>
        <WeatherShow weather={weather} />
     </div>
        
    </>
  )
}

export default App
