import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Box, CircularProgress, Grid, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../components/TabPanel';
import EmployeeReportForm from '../components/EmployeeReportForm';
import SelfReportForm from '../components/SelfReportForm';
import { UserContext } from '../store/Context';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ReportPage = () => {

  const [value, setValue] = React.useState(0);
  const {userData} = React.useContext(UserContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(!userData){
    return <Grid component="main" sx={{width:"100%",height:"100vh",textAlign:"center"}} >
        <CircularProgress sx={{mt:"20%"}} size={50} />
      </Grid>
  }

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

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/3169210.jpg)",
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
          <Typography variant='h4' sx={{fontWeight:"bold"}} >Reports</Typography>
          <Typography>The place to make your reports...</Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Self Reports" sx={{ml:30}} {...a11yProps(0)} />
            <Tab label="Employee Reports" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SelfReportForm/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeReportForm/>
        </TabPanel>
      </Box>
      <Footer/>
    </React.Fragment>
  )
}

export default ReportPage;