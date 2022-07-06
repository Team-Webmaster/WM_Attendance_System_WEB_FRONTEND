import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { UserContext } from '../store/Context';
import WorkingStatusBoard from '../components/WorkingStatusBoard';
import { Link, useNavigate } from 'react-router-dom';

const FAQPage = () => {
    const { userData } = React.useContext(UserContext);
    const navigate = useNavigate();

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

                        backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/5066368.jpg)",
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
                    <Typography variant='h4' sx={{ fontWeight: "bold" }} >FAQ</Typography>
                    <Typography>The place to find frequently asked questions...</Typography>
                    <Grid container mt={1} sx={{ alignItems: "center", justifyContent: "center", direction: "column" }} >
                        <Grid item width={600} sx={{boxShadow:3,p:1}} >
                            <Typography variant='h6' >What is WM Attendance System ?</Typography>
                            <Typography>This a place to manage all your attendance works and etc. There is so many modern technologies to track your employees...</Typography>
                            <Link to='/what-is' >Read more...</Link>
                        </Grid>
                        <Grid item width={600} sx={{boxShadow:3,p:1,mt:1}} >
                            <Typography variant='h6' >Why you should use WM Attendance System ?</Typography>
                            <Typography>In modern world you can't do all the recording systems manually. Instead of that you can use modern technologies to make your works more easier...</Typography>
                            <Link to='/why' >Read more...</Link>
                        </Grid>
                        <Grid item width={600} sx={{boxShadow:3,p:1,mt:1}} >
                            <Typography variant='h6' >How can i mark my attendance ?</Typography>
                            <Typography>You can mark your attendance through our mobile app. This will be happen using your face verification...</Typography>
                            <Link to='/attendace-mark?' >Read more...</Link>
                        </Grid>
                        <Grid item width={600} sx={{boxShadow:3,p:1,mt:1}} >
                            <Typography variant='h6' >How can i request leaves ?</Typography>
                            <Typography>You can request your leaves using leave management feature. You need to fill your leave request details and submit it to the administration approval...</Typography>
                            <Link to='/leave-request?' >Read more...</Link>
                        </Grid>
                        <Grid mt={1} >
                            <Button variant='contained' color='info' onClick={()=>navigate('/faqs')} >Read more FAQs</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )
};

export default FAQPage;