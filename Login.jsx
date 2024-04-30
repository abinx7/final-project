import { Box, Button, TextField, Typography, colors } from '@mui/material'
import React from 'react'
import img from "../images/background.jpg";

const Login = () => {
    const backgroundImagesStyle={
     backgroundImage:`url(${img})`,
     backgroundSize:'cover',
    //  backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'10x'
    };
    
    return (
     <div>


        <div>
            <Box><br /><br /><br />
            <Typography variant='h4'>Login</Typography><br /><br />
            <TextField id="outlined-basic" label="Email"  variant="outlined" /><br/><br/>
            <TextField id="filled-basic" label="Password" type='password' variant="outlined" /><br/><br/>
            <Button variant="contained" color='success'>Login</Button>
            </Box>
            </div>
        </div>
      )
    }

export default Login