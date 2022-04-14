import React from 'react';
import Navigation from '../components/Navigation';
import { Grid } from '@mui/material';

const LeaveManagementPage = () => {
  return (
    <React.Fragment>
        <Navigation/>
        <Grid container component="main" sx={{ height: "90vh", p: 5 }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={6}
          sx={{

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/3856358.jpg)",
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
          sx={{ textAlign: "left" }}
        >
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default LeaveManagementPage;