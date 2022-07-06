import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import ShortLeaveRequestCard from './ShortLeaveRequestCard';
import axios from 'axios';
import { UserContext } from '../store/Context';
import { toast } from 'react-toastify';

const ApproveShortLeaveRquests = ({ pendingRequests, reFetch }) => {

  const { userData } = React.useContext(UserContext);

  const approveShortLeaveRequest = (approveData) => {
    axios.post('https://localhost:5001/api/Request/approve-short-leave', approveData)
      .then((res) => {
        toast.success('Taken action successfully.');
        reFetch();
      }).catch((err) => {
        toast.error('Taken action failed.');
      })
  }

  return (
    <Box>
      <Typography mb={2} >Pending Short Leave Requests</Typography>
      {pendingRequests.length > 0 ?
        <Stack spacing={1} divider={<Divider />} >
          {
            pendingRequests.filter(request => request.nic !== userData.nic).map(request => <ShortLeaveRequestCard key={request.id} details={request} approveShortLeaveRequestHandler={approveShortLeaveRequest} />)
          }
        </Stack> : <Typography>No available pending short leave requests</Typography>}
    </Box>
  )
}

export default ApproveShortLeaveRquests;