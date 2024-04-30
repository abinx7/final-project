import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
// import img from'./Images/i77.jpeg'
import axios from 'axios';
// import './Signup.css'


const Signup = () => {
  const [inputs,setInputs] = useState({
    ename:"",
    epass:"",
    email:""

  });
  const inputHandler = (e) =>{
    const { name, value } = e.target
    setInputs((prevData)=>({...prevData,[name]: value}))

  }
  const addHandler = (e)=>{
    console.log("button clicked")
    axios.post("http://localhost:3006/create",inputs)
    .then((response)=>{
      console.log(response.data)
      alert(response.data)
    })
    .catch((err)=> console.log(err))
  }


  // const backgroundImagesStyle={
  //   backgroundImage:`url(${img})`,
  //   backgroundSize:'cover',
  //  //  backgroundRepeat:'no-repeat',
  //   height:'100vh',
  //   fontSize:'20px'
  // }
  return (
    <div>

  <div className='wrapper'>
        <Typography className='heading' variant='h4'>Sign In</Typography><br/>
        <TextField  label="Name"  variant="outlined" name='ename' value={inputs.ename} onChange={inputHandler}/><br/><br/>
        
       
       
        <TextField  label="Email"  variant="outlined" name='email' value={inputs.email} onChange={inputHandler}/><br/><br/>
        <TextField  label="Password" type='password' variant="outlined" name='epass' value={inputs.epass} onChange={inputHandler} /><br/><br/>
        <Button variant="contained" color='success' onClick={addHandler}>Sign In</Button>
        </div>
    </div>
  )
}

export default Signup