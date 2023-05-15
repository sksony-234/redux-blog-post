import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import {useNavigate} from 'react-router-dom'

const AddPost = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    contact:"",
    title:"",
    body:"",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelInputChange = (e) => {
    let {name, value} = e.target;
    setUser({...user, [name]:value});
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact || !title || !body)
      setError("Please Enter All the fields");
    else{
      dispatch(addUser(user));
      navigate('/');
      setError("");
    }
    
  }
  const {name, email, contact, title, body} = user
  return (
    <div>
      {error && 
        <div><h3 style={{color:"red"}}>{error}</h3></div>
      }
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
        style={{textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems: "center", marginTop:"90px"}}
      >
        <TextField id="standard-basic" label="Name" variant="standard" value={name} type='text' name="name" onChange={handelInputChange}/><br />
        <TextField id="standard-basic" label="Email" variant="standard" value={email} type='email' name="email" onChange={ handelInputChange} /><br />
        <TextField id="standard-basic" label="Contact" variant="standard" value={contact} type='contact' name="contact" onChange={ handelInputChange} /><br />        
        <TextField id="standard-basic" label="Title" variant="standard" value={title} type='text' name="title" onChange={ handelInputChange} /><br />        
        <TextField id="standard-basic" label="Body" variant="standard" value={body} type='textarea' name="body" onChange={ handelInputChange} /><br />        
        <Button variant="contained" color="primary"
          type="submit"
          style={{width:"100px"}}
        >Submit</Button>
      </Box>
    </div>
  )
}

export default AddPost;