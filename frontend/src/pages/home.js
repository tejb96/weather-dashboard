import { Box, Button } from "@mui/material";
import SearchBar from "../components/searchBar.js";
import { useNavigate } from "react-router-dom";

const Home = ({unit, setUnit}) => {

  const navigate = useNavigate();
  const cityCounterButton =() => {
    navigate('/city-counter');
  };
  return (
    <div>
      <SearchBar unit={unit} setUnit={setUnit} />,
      <Box sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
              }}>
        <Button type="button" variant="outlined" onClick={cityCounterButton}>
            City Counter
        </Button>
      </Box>
      </div>
  )
}
export default Home