import React from "react";
import {TextField} from '@mui/material';
import { Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: theme.spacing(2), // Adjust the vertical gap between text fields
//     },
//   }));

const FormSignUp = () => {
    // const classes = useStyles();
    return(
        <div>
        {/*  <div className={classes.root}> */}
        <h1 style={{  color: 'purple', textAlign: 'center' }}>"Player Sign Up"</h1>
        <div style={{   }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Player First Name"/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Player Last Name"/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Player Email" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Player Phone no." />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Password" />
        <Button variant="contained" color="success">Sign Up</Button>
        </div>
    </div>
    )
}

export default FormSignUp;


