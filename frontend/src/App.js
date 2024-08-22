import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/searchBar.js";
import WeatherDisplay from "./pages/weatherDisplay.js";
import { useState } from "react";

function App() {
  const [unit, setUnit] = useState('metric');
  // console.log(unit);
  return (
    <div >
        <h1>Weather DashBoard</h1>
        <SearchBar unit={unit} setUnit={setUnit} />
        <Routes>
                <Route path="/weather/:city/:period" element={<WeatherDisplay unit={unit} setUnit={setUnit} />} />
            </Routes>

    </div>
  );
}

export default App;
