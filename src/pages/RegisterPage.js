import React from 'react';
import axios from 'axios';
import Register from '../components/Register';
import { Grid } from '@mui/material';

const RegisterPage = () => {

    const registrationHandler = (userData)=>{
        axios.post('https://localhost:5001/api/User/register',userData)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            });
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
                    
                    backgroundImage:"url("+process.env.PUBLIC_URL+"/images/2853458.jpg)",
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
                lg={6}            >
                <Register registrationFormHandler={registrationHandler} />
            </Grid>
        </Grid>
    )
}

export default RegisterPage