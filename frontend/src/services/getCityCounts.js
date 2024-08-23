import { useState, useEffect } from "react";
import axios from "axios";

const GetCityCounts = () => {
    const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/search-stats/');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);
  console.log("stats:",stats);
  return stats;
}
export default GetCityCounts