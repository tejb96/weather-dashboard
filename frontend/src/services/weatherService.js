import axios from 'axios';

export const FetchWeatherData = async (city, period,unit) => {
    console.log(unit);
    try {
        const response = await axios.get(`http://127.0.0.1:8000/weather/${encodeURIComponent(city)}/${encodeURIComponent(period)}`,{
            params: {
                unit: unit
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};
