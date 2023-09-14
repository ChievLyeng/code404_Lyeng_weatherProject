import { useEffect,useState } from 'react';
import { WeatherShow } from './WeatherShow';


export const WeatherFetching = ({weather,ForecastWeather}) => {
    //getCurrent day (declare weekday and today as global for accesing it and make use as prorps)
    const weekday = ["Sun","Mon","Tue","Wedn","Thu","Fri","Sat"];
    const today = new Date();
    
    const getDate = (weekday,today) => {
        const monthList = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
            ];
        const year = today.getFullYear();
        const day = weekday[today.getDay()];
        const date = today.getDate();
        const month = monthList[today.getMonth()]
        return ` ${day}, ${month}, ${date}`;
        }  
        const [date,setDate] = useState(getDate(weekday,today));

        //nextday
        const day2 = weekday[(today.getDay()+1) % weekday.length]
        const day3 = weekday[(today.getDay()+2) % weekday.length]
        const day4 = weekday[(today.getDay()+3) % weekday.length]
        const day5 = weekday[(today.getDay()+4) % weekday.length]
      

    return (
        
            <div>
                <WeatherShow
                    weather={weather}
                    ForecastWeather={ForecastWeather}
                    date={date}
                    day2={day2}
                    day3={day3}
                    day4={day4}
                    day5={day5}
                />
            </div>
        
    );
}