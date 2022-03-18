import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LogIn from '../components/LogIn';
import axios from 'axios';
import { Alert, Grid } from '@mui/material';

const LoginPage = ()=>{
  const [ errState, setErrState ] = useState(false);
  const [ errMsg, setErrMsg ] = useState("");
  const navigate = useNavigate();

  const loginHandler = (loginData)=>{
    axios.post('https://localhost:5001/api/User/login',loginData)
      .then((response)=>{
        console.log(response.data);
        if(response.data.state){
          navigate('/home');
        }
        else{
          setErrState(true);
          setErrMsg(response.data.message);
          console.log(errState);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  return (
    <Grid container component="main" sx={{height:"100vh",p:5}}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                lg={6}
                sx={{
                    
                    backgroundImage:"url("+process.env.PUBLIC_URL+"/images/4957136.jpg)",
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
            >
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                lg={6}            
              >
                <LogIn  submitLoginHandler={loginHandler} errState={errState} errMsg={errMsg} />
            </Grid>
        </Grid>
  );
}

export default LoginPage;