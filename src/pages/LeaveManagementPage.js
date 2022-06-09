import React from 'react';
import Navigation from '../components/Navigation';
import { Grid, Tab, Tabs, Box } from '@mui/material';
import Footer from '../components/Footer';
import LeaveRequestForm from '../components/LeaveRequestForm';
import axios from 'axios';
import LeaveApproval from '../components/LeaveApproval';
import TabPanel from '../components/TabPanel';
import LeaveDetails from '../components/LeaveDetails';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LeaveManagementPage = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const leaveRequestHandler = (leaveDetails) => {
    axios.post('https://localhost:5001/api/Request/leave-request', leaveDetails)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    console.log(Array.from(leaveDetails));
  }

  const shortLeaveHandler = (shortLeaveDetails) => {
    axios.post('https://localhost:5001/api/Request/short-leave-request/', shortLeaveDetails)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    console.log(Array.from(shortLeaveDetails));
  }


  return (
    <React.Fragment>
      <Navigation />
      <Grid container component="main" sx={{ height: "90vh", p: 5, mt: 8 }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={6}
          sx={{

            backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/4012176.jpg)",
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
          <LeaveDetails/>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Leave Request" sx={{ml:30}} {...a11yProps(0)} />
            <Tab label="Leave Approve" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LeaveRequestForm submitFormHandler={leaveRequestHandler} submitShortLeaveHandler={shortLeaveHandler} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LeaveApproval />
        </TabPanel>
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default LeaveManagementPage;