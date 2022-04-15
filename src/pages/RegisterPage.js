import React from 'react';
import axios from 'axios';
import Register from '../components/Register';
import { Grid } from '@mui/material';
import SimpleNavigation from '../components/SimpleNavigation';
import SimpleFooter from '../components/SimpleFooter';

const RegisterPage = () => {

    const registrationHandler = (userData) => {
        axios.post('https://localhost:5001/api/User/register', userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            <SimpleNavigation/>
            <Grid container component="main" sx={{ height: "auto", p: 5,mt:10 }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    lg={6}
                    sx={{

                        backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/2853458.jpg)",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
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
            <SimpleFooter/>
        </React.Fragment>
    )
}

export default RegisterPage