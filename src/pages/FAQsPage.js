import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const FAQsPage = () => {
    const navigate = useNavigate();
    return (
        <Stack mx={45} my={5} >
            <Typography variant='h4' mb={2} > Frequently Asked Questions</Typography>
            <Grid width={800} sx={{ boxShadow: 3, p: 1 }} >
                <Typography variant='h6' >What is WM Attendance System ?</Typography>
                <Typography>This a place to manage all your attendance works and etc. There is so many modern technologies to track your employees...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >Why you should use WM Attendance System ?</Typography>
                <Typography>In modern world you can't do all the recording systems manually. Instead of that you can use modern technologies to make your works more easier...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i mark my attendance ?</Typography>
                <Typography>You can mark your attendance through our mobile app. This will be happen using your face verification...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} sx={{ boxShadow: 3, p: 1, mt: 1 }} >
                <Typography variant='h6' >How can i request leaves ?</Typography>
                <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
            </Grid>
            <Grid width={800} mt={2} >
            <Button variant='contained' color='info' onClick={()=>navigate('/faq')} >Back to FAQ</Button>
            </Grid>
        </Stack>
    )
};

export default FAQsPage;