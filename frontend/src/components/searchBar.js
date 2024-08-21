import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const [period, setPeriod] = useState('today'); // Default to 'today'
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            navigate(`/weather/${encodeURIComponent(city)}/${period}`);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
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
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
            <Box sx={{ mt: 2 }}>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant={period === 'today' ? 'contained' : 'outlined'}
                        onClick={() => setPeriod('today')}
                    >
                        Today
                    </Button>
                    <Button
                        variant={period === 'tomorrow' ? 'contained' : 'outlined'}
                        onClick={() => setPeriod('tomorrow')}
                    >
                        Tomorrow
                    </Button>
                    <Button
                        variant={period === 'next24hours' ? 'contained' : 'outlined'}
                        onClick={() => setPeriod('next24hours')}
                    >
                        Next 24 Hours
                    </Button>
                    <Button
                        variant={period === 'next7days' ? 'contained' : 'outlined'}
                        onClick={() => setPeriod('next7days')}
                    >
                        Next 7 Days
                    </Button>
                    <Button
                        variant={period === 'next30days' ? 'contained' : 'outlined'}
                        onClick={() => setPeriod('next30days')}
                    >
                        Next 30 Days
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default SearchBar;
