import React from 'react';
import { Button } from '@mui/material';

const MyButton = () => {
  return (
    <div>
    <Button variant="outlined" color="success" size="large">
      Login
    </Button>
    <Button variant="outlined" color="success" size="large" >
        Test this prototype
    </Button>
    <Button variant="outlined"  style={{  color: 'black' }} size="large" >
        Menu
    </Button>
    <Button variant="outlined" style={{  color: 'black' }} size="large" >
        Handoff
    </Button>
    <Button variant="outlined" style={{  color: 'black' }} size="large" >
        No comments
    </Button>
    <Button variant="contained" 
     style={{ backgroundColor: 'orange', color: 'white', borderRadius: '50px' }} size="large" >
        Premier League
    </Button>
    <Button variant="contained"  
    style={{ backgroundColor: 'orange', color: 'white', borderRadius: '10px'}} size="large" >
        Export
    </Button>
    <Button variant="contained" color="success" size="large" >
        Download Report
    </Button>
    </div>
  );
};

export default MyButton;
