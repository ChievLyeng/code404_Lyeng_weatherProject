# Weather App
This app is create for showing the current weather and forecast weather of the current location of users. This weather app provide recent date,current city of users,temperature,weather condition,wind speed,humidity and the next four days weather forecast information.

# Demo App : [Click Here](https://code404-lyeng-weather-project.vercel.app/)


# Tech stack

* React JS
* CSS
* Figma
* Draw IO
* Weather Api (openweather api)
* Current geolocation api (ipdata)

# App Feature
* Display current weather information : this feature can display the weather informaiton and current date of current location to the users.
* Display forecast weather information : this feature can display the next four days of weather forecast data.


# Convention Guide
[Link to Convention Guide](https://www.notion.so/WeatherApi-Convention-Guide-5db6fbfd4dcc4d28b457b5f5398d4cb7)


# Figma Design 
[Link to UI Design](https://www.figma.com/file/XL6vUYizTu2W3nUbv0qejz/Weather-App?type=design&node-id=0-1&mode=design&t=XCsmULcKuQuzm5CX-0)


# App Flow
[Link to Weather App Flow](https://app.diagrams.net/#G1N0Rg0wTM8OUvV3gcqLFCUq7mz_i6T7ml)

# Git Flow Method
[Link to git flow method](https://docs.google.com/document/d/1_74r6dCDrwL79QXPLyNDpatHkl4NZN-InLKdgvPzK_M/edit?usp=sharing)

# App components Flow
This app has two components <br>
* WeatherFetching.jsx : this component is use for finding the current date and the next day of the forecast weather. It recieve the api date props from app and continue passing to the Weathershow.jsx.
* WeatherShow.jsx : this componet is call and recieve props from WeatherFetching.jsx. It work to check condition of the data that recieved and return the interface to the screen. It also check the condition of weather icon have to display for current weather and forcast weather.
* In App.jsx is use to fetch data from api and pass the props to the WeatherFetching.jsx.

# Fetching Api Flow
* The current geolocation is fetch by ipdata api which can get the 1500 free call per day.
* The current weather and forecast weather data is fetch by open weather api by city name that recieve the city from the current geolocation data from the above api.
* It is abit risky to get geolocation from the api the app will be collap if the ipdata api is not working but I also set prevention on this case. If the geolocation api is not working it will show the weather data of Phnom Penh city.

# Module
* Insalled axios for fetching data from api.
* Installed npm module.

# Backlog
* This app is using geolocation api to fetch the current location and the api only get 1500 call perday.If the api 
  is not working app can only display the weather info of Phnom Penh city. So it not yet reliable.

# Reflection
 * During this weather project I do not follow the youtue tutorial anymore. I only learned to do the project with 
   course that recommended by school and doing research on the internet.
   
# What I've learned 
  * I have learned how to fetch api in React .
  * I am be able to fetch data from open weather api.
  * I also learned to fetch the current location from geolocation api and pass it to the open weather api for 
    displaying the current location weather.
  * I learned to handle when error fetching data from api by using try and catch.
    
# Other
* Weather Icon : Use the icon from Meteo Icon website that I got share by Tourleng from AnB prime team. 
  Bunthai,Kimhouy and Rozeth from my team also use these icons too.
* Fetching Api method I learned from the react lesson that recommended on the udemy.
* Using api to get the current geolocation I know it from doing researched on the internet. 
