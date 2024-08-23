import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const DisplayToday = ({ weatherData }) => {
    const todayData = weatherData.days[0]; // Assuming today is the first entry
    const currentConditions = weatherData.currentConditions;
    const hourlyData = todayData.hours;
    console.log(weatherData);

    const formatTimeToAmPm = (time) => {
        let [hours, minutes] = time.split(':');
        let period = 'AM';
        hours = parseInt(hours, 10);
        if (hours >= 12) {
            period = 'PM';
            hours = hours > 12 ? hours - 12 : hours;
        }
        if (hours === 0) {
            hours = 12;
        }
        return `${hours}:${minutes} ${period}`;
    };

    const renderWeatherDetail = (label, value, unit) => {
        if (value === null || value === undefined) {
            return null; 
        }
        return (
            <Typography variant="body2">
                <strong>{label}:</strong> {value} {unit || ''}
            </Typography>
        );
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Weather for Today ({todayData.datetime}) in {weatherData.address}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Current Conditions ({formatTimeToAmPm(currentConditions.datetime)})
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Temperature', currentConditions.temp, '°C')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Feels Like', currentConditions.feelslike, '°C')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Humidity', currentConditions.humidity, '%')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Wind Speed', currentConditions.windspeed, 'km/h')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Pressure', currentConditions.pressure, 'hPa')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Visibility', currentConditions.visibility, 'km')}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Conditions', currentConditions.conditions)}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Sunrise', formatTimeToAmPm(currentConditions.sunrise))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('UV Index', currentConditions.uvindex)}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    {renderWeatherDetail('Sunset', formatTimeToAmPm(currentConditions.sunset))}
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                    Hourly Forecast
                </Typography>
                <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px 0' }}>
                    <Grid container spacing={2} sx={{ display: 'inline-flex' }}>
                        {hourlyData.map((hour, index) => (
                            <Grid item key={index} xs={12} sm={3} md={2} sx={{ minWidth: '200px' }}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            {formatTimeToAmPm(hour.datetime)}
                                        </Typography>
                                        {renderWeatherDetail('Temperature', hour.temp, '°C')}
                                        {renderWeatherDetail('Feels Like', hour.feelslike, '°C')}
                                        {renderWeatherDetail('Humidity', hour.humidity, '%')}
                                        {renderWeatherDetail('Wind Speed', hour.windspeed, 'km/h')}
                                        {renderWeatherDetail('Conditions', hour.conditions)}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default DisplayToday;
