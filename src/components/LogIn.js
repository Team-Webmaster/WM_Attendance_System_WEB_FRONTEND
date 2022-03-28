import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Grid, TextField, Button, InputAdornment, IconButton, Alert } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LogIn = (props) => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [ showPassword, setShowPassword ] = useState(false);

  const handleClickShowPassword = ()=>{
    setShowPassword(!showPassword);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const loginData = {
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    props.submitLoginHandler(loginData);
  }
  return (
      <Box
        component="form"
        onSubmit={submitHandler}
        autoComplete="true"
        sx={
          {
            margin:"15%",
            padding: 3,
            borderRadius: "5%",
            boxShadow: 3
          }
        }
        maxWidth="sm"
      >
        {props.errState?<Alert severity='error'>{props.errMsg}</Alert>:null}
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <AccountCircleIcon color="primary" sx={{ fontSize: 60 }} />
            <Typography
              variant="h5"
            >
              Log In
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              id="outlined-email"
              label="Email"
              type="email"
              size="small"
              fullWidth
              inputRef={emailRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              id="outlined-password"
              label="Password"
              type={showPassword?"text":"password"}
              size="small"
              fullWidth
              inputRef={passwordRef}
              InputProps={
                {
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle-password"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityIcon/>:<VisibilityOffIcon/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button size="large" type="submit" endIcon={<LoginIcon />} variant="contained">Log In</Button>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Typography>Don't have account ?  <Button component={RouterLink} to='/register'>Register</Button></Typography>
            <Button>Forgot Password</Button>
          </Grid>
        </Grid>
      </Box>
  );
}

export default LogIn;