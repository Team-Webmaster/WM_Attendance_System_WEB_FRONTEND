import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Grid } from '@mui/material';

const StatisticsPage = () => {
  return (
    <React.Fragment>
       <Navigation/>
      <Grid container component="main" sx={{ height: "100vh", p: 5, mt:5 }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={6}
          sx={{

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/4020769.jpg)",
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
          lg={6}
        >
        </Grid>
      </Grid>
      <Footer/>
    </React.Fragment>
  )
}

export default StatisticsPage;