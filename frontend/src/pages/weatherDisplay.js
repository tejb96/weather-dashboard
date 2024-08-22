import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FetchWeatherData } from '../services/weatherService';

const WeatherDisplay = ({unit, setUnit}) => {
    const { period,city  } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const requestInProgress = useRef(false); 
    // console.log(city)
    // console.log(unit);
    useEffect(() => {
        const getWeather = async () => {
            if (requestInProgress.current) {
                return; // If a request is already in progress, don't start another one
            }
            requestInProgress.current = true; // Mark that a request is in progress
            try {
                const data = await FetchWeatherData(city, period, unit);
                setWeatherData(data);
                requestInProgress.current = false; // Reset after the request is completed
            } catch (err) {
                setError(err);
                requestInProgress.current = false; // Reset if there was an error
            }
        };
        getWeather();
    }, [city, period, unit]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather in {city}</h1>
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
    );
};

export default WeatherDisplay;
