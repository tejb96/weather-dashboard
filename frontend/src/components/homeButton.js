import React from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); 
        // navigate('/home'); 
    };
    // const i=0;
    // console.log(i++);

    return (
        <IconButton
            color="primary"
            onClick={handleClick}
            aria-label="home"
        >
            <HomeIcon />
        </IconButton>
    );
};

export default HomeButton;
