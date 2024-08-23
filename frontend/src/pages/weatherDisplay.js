import React from 'react';
import { useParams } from 'react-router-dom';
import DisplayToday from '../components/displayTodayMetric';
import DisplayTodayImperialUnits from '../components/displayTodayImperialUnits';
import DisplayTodayUSUnits from '../components/displayTodayUSUnits';
import GetWeatherData from '../components/getWeather';
import HomeButton from '../components/homeButton';

const WeatherDisplay = ({unit}) => {
    const { period,city  } = useParams();
    
    // console.log(city)
    console.log(unit);
    
    const { weatherData, error } = GetWeatherData(city, period, unit);
    

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
            {/* <h1>Weather in {city}</h1> */} <HomeButton/>
            {unit === 'metric' ? (
                <DisplayToday weatherData={weatherData} />
            ):  unit === 'us' ?(
                <DisplayTodayUSUnits weatherData={weatherData} />
            ): unit ==='uk' ?(
                <DisplayTodayImperialUnits weatherData={weatherData}/>
            ): null}
        </div>
    );
};

export default WeatherDisplay;
