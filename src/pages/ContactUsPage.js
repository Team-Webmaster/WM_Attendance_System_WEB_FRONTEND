import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Box, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../store/Context';

const ContactUsPage = () => {

  const [input, setInput] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: ''
  });
  const {userData} = React.useContext(UserContext);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactUsData = {
      name:input.firstName+" "+input.lastName,
      email:input.email,
      telephone:input.telephone.toString(),
      message:input.message,
      uId:userData.userId
    }
    axios.post('https://localhost:5001/api/ContactUs',contactUsData)
      .then(res=>toast.success('Your message send successfully.'))
      .catch(err=>toast.error('Your message send failed.'));
  }

  return (
    <div>
      <React.Fragment>
        <Navigation />
        <ToastContainer/>
        <Grid container component="main" sx={{ height: "100vh", p: 5, mt: 5 }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            lg={6}
            sx={{

              backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/4936927.jpg)",
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
            <Typography variant='h4' sx={{ fontWeight: "bold" }} >Contact Us</Typography>
            <Typography>The Details of Reaching Us...</Typography>
            <Box mt={0.5} >
              <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", opacity: '90%' }}>
                  <CardContent>

                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                      Fill up the form and our team will get back to you within 24 hours.
                    </Typography>
                    <form style={{ opacity: '100%' }} onSubmit={handleSubmit} >
                      <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                          <TextField
                            placeholder="Enter first name"
                            label="First Name"
                            variant="outlined"
                            name='firstName'
                            fullWidth
                            required
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                          <TextField
                            placeholder="Enter last name"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name='lastName'
                            required
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            type="email"
                            placeholder="Enter email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name='email'
                            required
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            type="number"
                            placeholder="Enter phone number"
                            label="Phone" variant="outlined"
                            fullWidth
                            name='telephone'
                            required
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Message"
                            multiline
                            rows={4}
                            placeholder="Type your message here"
                            variant="outlined"
                            fullWidth
                            name='message'
                            required
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                          >Submit</Button>
                        </Grid>

                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment></div>
  )
}

export default ContactUsPage;