import { useState, useRef, useEffect } from 'react';
import { FetchWeatherData } from '../services/weatherService';

const GetWeatherData = (city, period, unit) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const requestInProgress = useRef(false);

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
    }, [city]);

    return { weatherData, error };
};

export default GetWeatherData;
