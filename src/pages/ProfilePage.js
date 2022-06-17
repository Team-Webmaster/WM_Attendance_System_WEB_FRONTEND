import React from 'react';
import Navigation from '../components/Navigation';
import { Button, CircularProgress, Grid, Modal, Typography } from '@mui/material';
import Footer from '../components/Footer';
import { UserContext } from '../store/Context';
import { Box } from '@mui/system';
import EditProfileForm from '../components/EditProfileForm';

const ProfilePage = () => {

  const { userData } = React.useContext(UserContext);
  const [flag, setFlag] = React.useState(false);

  if (!userData) {
    return <Grid component="main" sx={{ width: "100%", height: "100vh", textAlign: "center" }} >
      <CircularProgress sx={{ mt: "20%" }} size={50} />
    </Grid>
  }

  return (
    <React.Fragment>
      <Navigation />
      <Grid container component="main" sx={{ height: "100vh", p: 5, mt: 5 }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={6}
          sx={{

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/2859735.jpg)",
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
          <Typography variant='h4' sx={{ fontWeight: "bold" }} >Profile</Typography>
          <Typography>The place to manage all of your details...</Typography>
          <Button onClick={() => setFlag(true)} >Update Profile</Button>
        </Grid>
        <Modal open={flag} onClose={() => setFlag(false)} >
          <Box>
            <EditProfileForm />
          </Box>
        </Modal>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default ProfilePage;