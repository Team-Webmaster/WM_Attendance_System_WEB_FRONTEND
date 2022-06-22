import React from 'react';
import { Avatar, Box, Container, Grid, Typography, Button, ButtonGroup } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../store/Context';

const employeeSolutionItems = ['Leave Management', 'Report', 'Profile', 'Calendar', 'Statistics', 'Video Conference'];
const managerSolutionItems = ['Working Status Board', 'Send Notification'];
const adminSolutionItems = ['Settings'];
const paths = ['/leave-management', '/report', '/profile', '/calendar', '/statistics', '/video-conference', '/working-status-board', '/send-notification', '/settings'];

const Footer = () => {

    const { userData } = React.useContext(UserContext);
    let solutionItems;
    if (userData.type === 0) {
        solutionItems = [...employeeSolutionItems, ...managerSolutionItems, ...adminSolutionItems];
    } else if (userData.type === 1) {
        solutionItems = [...employeeSolutionItems, ...managerSolutionItems];
    } else {
        solutionItems = [...employeeSolutionItems];
    }

    return (
        <footer>
            <Box sx={{ backgroundColor: "rgba(255,255,255,0.4)", p: 5 }}>
                <Container sx={{ display: "flex" }} >
                    <Grid item md={6}>
                        <Grid sx={{ display: "flex" }} >
                            <Avatar src={process.env.PUBLIC_URL + "/images/logo.png"} sx={{ width: "20%", height: "20%" }} />
                            <Grid sx={{ textAlign: "left", my: 1.7 }} >
                                <Typography sx={{ fontSize: 23, fontWeight: "bold" }} >
                                    WM Attendance System
                                </Typography>
                                <Typography sx={{ fontSize: 15, mr: 5, ml: 1, my: 1 }} >
                                    Best attendance system which has used face recognition technology to make your attendance.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <Typography sx={{ my: 2.5, fontWeight: "bold" }} >QUICK ACCESS</Typography>
                        <ButtonGroup orientation='vertical' variant='text' >
                            {
                                solutionItems.map((solution, index) => {
                                    return <Button key={paths[index]} size="small" component={RouterLink} to={paths[index]}  >{solution}</Button>
                                })
                            }
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={3}>
                        <Typography sx={{ my: 2.5, fontWeight: "bold" }} >APPS</Typography>
                        <Button size="small" href='http://www.google.com' >WMAS Mobile App</Button>
                    </Grid>
                    <Grid item md={3}>
                        <Typography sx={{ my: 2.5, fontWeight: "bold" }} >COMMUNITY</Typography>
                        <ButtonGroup orientation='vertical' variant='text' >
                            <Button size="small" component={RouterLink} to='/contact-us' >Contact Us</Button>
                            <Button size="small" component={RouterLink} to='/about-us' >About Us</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={3}>
                        <Typography sx={{ my: 2.5, fontWeight: "bold" }} >POWERED BY</Typography>
                        <Typography>@Webmaster</Typography>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;