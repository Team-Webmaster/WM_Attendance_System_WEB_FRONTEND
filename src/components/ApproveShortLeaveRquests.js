import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import ShortLeaveRequestCard from './ShortLeaveRequestCard';
import axios from 'axios';

const ApproveShortLeaveRquests = ({pendingRequests, reFetch }) => {
    const approveShortLeaveRequest = (approveData) => {
        axios.post('https://localhost:5001/api/Request/approve-short-leave', approveData)
          .then((res) => {
            console.log(res);
            reFetch();
          }).catch((err) => {
            console.log(err);
          })
      }

    return (
        <Box>
            <Typography mb={2} >Pending Short Leave Requests</Typography>
            {pendingRequests.length > 0 ?
                <Stack spacing={1} divider={<Divider />} >
                    {
                        pendingRequests.map(request => <ShortLeaveRequestCard key={request.id} details={request} approveShortLeaveRequestHandler={approveShortLeaveRequest} />)
                    }
                </Stack> : <Typography>No available pending short leave requests</Typography>}
        </Box>
    )
}

export default ApproveShortLeaveRquests;