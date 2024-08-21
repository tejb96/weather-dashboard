import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/searchBar.js";
import WeatherDisplay from "./pages/weatherDisplay.js";

function App() {
  return (
    <div >
        <h1>Weather DashBoard</h1>
        <Routes>
                <Route path="/" element={<SearchBar />} />
                <Route path="/weather/:period/:city" element={<WeatherDisplay />} />
            </Routes>

    </div>
  );
}

export default App;
