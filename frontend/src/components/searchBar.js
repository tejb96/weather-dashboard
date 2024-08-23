import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';


const SearchBar = ({unit, setUnit}) => {
    const [city, setCity] = useState('');
    const period = 'today';
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            navigate(`/weather/${encodeURIComponent(city)}/${period}`);
        }
    };

    const handleChange = (e) => {
      setUnit(e.target.value);
    };

    return (
             
        <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSearch}
          >
              
              <TextField
                  id="outlined-basic"
                  label="Enter City"
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)} // Update state as user types
              />

                  <Box>
                    <FormControl fullWidth>
                      <Select 
                        value={unit}
                        onChange={handleChange}
                      >
                        <MenuItem value={'metric'}>Metric (°C, km)</MenuItem>
                        <MenuItem value={'us'}>US (°F, miles)</MenuItem>
                        <MenuItem value={'uk'}>Imperial (C, miles)</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
              
              <Button type="submit" variant="contained" color="primary" disabled={!city}>
                  Search
              </Button>
         </Box>
      
    );
};

export default SearchBar;
