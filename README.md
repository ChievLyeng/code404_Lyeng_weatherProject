# Weather App
This app is create for showing the current weather and forecast weather of the current location of users. This weather app provide recent date,current city of users,temperature,weather condition,wind speed,humidity and the next four days weather forecast information.

# Demo App : [Click Here](https://weather-app-host.vercel.app/)


# Tech stack

* React JS
* CSS
* Figma
* Draw IO
* Weather Api (openweather api)
* Current geolocation api (ipdata)

# App Feature
* Display current weather information : this feature can display the weather informaiton and current date of current location to the users.
* Display forecast weather information : this feature can display the next four days of weather forecast data .


# Convention Guide
[Link to Convention Guide](https://www.notion.so/WeatherApi-Convention-Guide-5db6fbfd4dcc4d28b457b5f5398d4cb7)


# Figma Design 
[Link to UI Design](https://www.figma.com/file/XL6vUYizTu2W3nUbv0qejz/Weather-App?type=design&node-id=0-1&mode=design&t=XCsmULcKuQuzm5CX-0)


# App Flow
[Link to Weather App Flow](https://app.diagrams.net/#G1N0Rg0wTM8OUvV3gcqLFCUq7mz_i6T7ml)

# Git Flow Method

### 1. Main Branch
  * store the stable version of app
### 2. Develop Branch
  * This branch is use as the app developing integreation
  * Any feature that created are merged into develop branch
  * Represents the latest state of the application with features being developed.

### 3. Feature Branches 
  * Feature branch responsible for the app features 
  * Feature branches
    

### 4. Release Branches
 * For release a new version of my todo app 
    * Create a release branch from the develop
    * Release branched :
      * release/1.0 

### 5. Bugfix Branches 
* If any bug appear when demo the app after release 

### 6. Hoxfix Branches
* used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.


[Git Flow Reference ](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits)

# App components Flow
This app has two components <br>
* WeatherFetching.jsx : this component is use for finding the current date and the next day of the forecast weather. It recieve the api date props from app and continue passing to the Weathershow.jsx.
* WeatherShow.jsx : this componet is call and recieve props from WeatherFetching.jsx. It work to check condition of the data that recieved and return the interface to the screen. It also check the condition of weather icon have to display for current weather and forcast weather.
* In App.jsx is use to fetch data from api and pass the props to the WeatherFetching.jsx.

# Fetching Api Flow
* The current geolocation is fetch by ipdata api which can get the free 1500 call per day.
* The current weather and forecast weather data is fetch by open weather api by city that recieve the city from the current geolocation data from the above api.
* It is abit risky to get the geolocation from the api the app will be collap if the ipdata api is not working but I also set prevention on this case. If the geolocation api is not working it will show the weather data of Phnom Penh city.

# Module
* Insalled axios for fetching data from api.
* Installed npm module.

# Other
* Weather Icon : Use the icon from Meteo Icon website that I got share by tourleng from AnB prime team. Bunthai,kimhouy and rozeth from my team also use these icons too.
* Fetching Api method I learned from the react lesson that recommended on the udemy.
* Using api to get the current geolocation I know it form the researched on the internet. 
