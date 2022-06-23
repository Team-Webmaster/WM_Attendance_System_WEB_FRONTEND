import React from 'react';
import { Typography, Box, Grid, Button, Paper } from '@mui/material';

const SettingsCard = ({data, onClickUpdate}) => {

  return (
    <Box sx={{ boxShadow: 10, py: 5,px:2, mt: 10, width: 'auto', maxWidth: "400px", textAlign: "center" }}>
            {data&&<Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", direction: "column" }} >
                <Grid container spacing={2} mt={1} width={300} >
                    <Grid item xs={12} display="flex" >
                        <Typography sx={{textAlign:'left'}} ml={1} mt={0.6} >No of Working Hours Per Day</Typography>
                        <Paper sx={{width:30,py:0.5,borderRadius:'50%',ml:1,mt:0.5}} >{data.noOfWorkingHoursPerDay}</Paper>
                    </Grid>
                    <Grid item xs={12} display="flex" >
                        <Typography sx={{textAlign:'left'}} ml={1} mt={0.6} >No of Working Days Per Week</Typography>
                        <Paper sx={{width:30,py:0.5,borderRadius:'50%',ml:1,mt:0.5}} >{data.noOfWorkingDaysPerWeek}</Paper>
                    </Grid>
                    <Grid item xs={12} display="flex" >
                        <Typography sx={{textAlign:'left'}} ml={1} mt={0.6} >No of Annual Leaves</Typography>
                        <Paper sx={{width:30,py:0.5,borderRadius:'50%',ml:1,mt:0.5}} >{data.noOfAnnualLeaves}</Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'right', display: 'flex' }} >
                    <Button onClick={onClickUpdate} variant="outlined" color="secondary" >Update Settings</Button>
                </Grid>
            </Grid>}
        </Box>
  )
};

export default SettingsCard;