import axios from 'axios';

export const FetchWeatherData = async (city, period,unit) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/weather/${encodeURIComponent(city)}/${encodeURIComponent(period)}`,{
            headers: {
            
                'weather_unit': unit
                
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};
