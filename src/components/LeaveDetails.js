import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import { UserContext } from '../store/Context';

const LeaveDetails = () => {

    const { userData } = React.useContext(UserContext);

    return (
        <Box>
            <Typography variant='h4' sx={{ fontWeight: "bold" }} >Leave-Management</Typography>
            <Typography>The place to manage all your leaves...</Typography>
            {userData && <Grid sx={{ display: "flex", width:"50%",ml:"5%" }} >
                <Grid mt={12}>
                    <Typography variant="h4" color="darkblue" >
                        LEAVE AVAILABILITY
                    </Typography>
                </Grid>
                <Grid ml={1}>
                    <CircularProgressWithLabel value={userData.noOfAnnualLeaves / 20 * 100} />
                    <Grid sx={{width:200,ml:5}} >
                        <Typography color="secondary" >
                            {`*You have ${160 * (userData.noOfAnnualLeaves / 20)} of 160 available leave hours.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>}
        </Box>
    );
}

export default LeaveDetails;