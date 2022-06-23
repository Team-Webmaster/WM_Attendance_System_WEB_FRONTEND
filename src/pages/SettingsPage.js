import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Box, CircularProgress, Grid, Modal, Typography } from '@mui/material';
import { UserContext } from '../store/Context';
import SettingsCard from '../components/SettingsCard';
import EditSettingsForm from '../components/EditSettingsForm';
import useFetch from '../hooks/useFetch';
import { ToastContainer } from 'react-toastify';

const SettingsPage = () => {

  const [flag,setFlag] = React.useState(false);
  const {userData} = React.useContext(UserContext);
  const {data,reFetch} = useFetch('https://localhost:5001/api/Setting');

  if(!userData){
    return <Grid component="main" sx={{width:"100%",height:"100vh",textAlign:"center"}} >
        <CircularProgress sx={{mt:"20%"}} size={50} />
      </Grid>
  }

  return (
    <React.Fragment>
       <Navigation/>
       <ToastContainer/>
      <Grid container component="main" sx={{ height: "100vh", p: 5, mt:5 }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={6}
          sx={{

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/4214796.jpg)",
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
          <Typography variant='h4' sx={{fontWeight:"bold"}} >Settings</Typography>
          <Typography>The place edit settings...</Typography>
          <Grid sx={{ justifyContent: 'center', display: 'flex' }} >
            <SettingsCard data={data} onClickUpdate={() => setFlag(true)} />
          </Grid>
        </Grid>
        <Modal open={flag} onClose={() => setFlag(false)} >
          <Box>
            <EditSettingsForm data={data} reFetch={reFetch} closeSettingsForm={() => setFlag(false)} />
          </Box>
        </Modal>
      </Grid>
      <Footer/>
    </React.Fragment>
  )
}

export default SettingsPage;