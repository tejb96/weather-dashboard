import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import WeatherDisplay from "./pages/weatherDisplay.js";
import { useState } from "react";
import { Box, Paper } from '@mui/material';
import SearchStats from "./pages/citySearchCounter.js";

function App() {
  const [unit, setUnit] = useState('metric');
  // console.log(unit);
  return (
    <div >
      <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
        <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 2,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1
              }}>
          <h1>Forecast Finder</h1>
        </Box> 
      </Paper>
        <Routes>
                <Route path="/weather/:city/:period" element={<WeatherDisplay unit={unit}/>} />
                <Route path="/" element={<Home unit={unit} setUnit={setUnit}/>} />
                <Route path="/city-counter" element={<SearchStats />} />
        </Routes>

    </div>
  );
}

export default App;
