import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Divider, Grid, Typography, Autocomplete, InputAdornment, IconButton, Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Register = (props) => {

  const fistNameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const nicRef = useRef('');
  const telephoneRef = useRef('');
  const addressNoRef = useRef('');
  const addressStreetRef = useRef('');
  const addreessCityRef = useRef('');
  const addressProvinceRef = useRef('');

  const [ proImg , setProImg ] = useState(null);
  const [ proPicSrc, setProPicSrc ] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordCorrect,setIsPasswordCorrect] = useState(true); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }
  const showPreview = (event) => {
    if(event.target.files&&event.target.files[0]){
      let imgFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) =>{
        setProImg(imgFile);
        setProPicSrc(x.target.result);
        console.log(x.target.value);
      };
      reader.readAsDataURL(imgFile);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(passwordRef.current.value!==confirmPasswordRef.current.value){
      setIsPasswordCorrect(false);
      return;
    }
    setIsPasswordCorrect(true);
    const formData = new FormData();
    formData.append('name',fistNameRef.current.value + " " + lastNameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('password',passwordRef.current.value);
    formData.append('nic',nicRef.current.value);
    formData.append('telephone',telephoneRef.current.value);
    formData.append('address',(addressNoRef.current.value ? addressNoRef.current.value + "," : "")
        + (addressStreetRef.current.value ? addressStreetRef.current.value + "," : "")
        + (addreessCityRef.current.value ? addreessCityRef.current.value + "," : "")
        + (addressProvinceRef.current.value ? addressProvinceRef.current.value + "." : ""));
    formData.append('profilePicture', proImg);
    formData.append('type', 0);
    formData.append('noOfAnnualLeaves', 20);
    formData.append('status', "Pending");
    formData.append('confirm',0);
    console.log(Array.from(formData));
    props.registrationFormHandler(formData);
  }

  const provinceList = [
    { label: "Southern Province" },
    { label: "Western Province" },
    { label: "Central Province" },
    { label: "North Western Province" },
    { label: "Sabaragamuwa Province" },
    { label: "Eastern Province" },
    { label: "North Central Province" },
    { label: "Uva Province" },
    { label: "Northern Province" }
  ]
  return (
      <Box
        component="form"
        onSubmit={submitHandler}
        autoComplete="true"
        sx={
          {
            padding: 3,
            boxShadow: 5,
            ml:"10%"
          }
        }
        maxWidth="450px"
      >
        <PersonAddAltIcon color="primary" sx={{ fontSize: 60 }} />
        <Typography
          variant="h5"
          mb={2}
        >
          Register
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              id="outlined-firstName"
              label="First Name"
              size="small"
              type="text"
              fullWidth
              required
              inputRef={fistNameRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              id="outlined-lastName"
              label="Last Name"
              size="small"
              type="text"
              fullWidth
              required
              inputRef={lastNameRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              error={props.emailErrState}
              id="outlined-email"
              label="Email"
              type="email"
              size="small"
              helperText={props.emailErr}
              fullWidth
              required
              inputRef={emailRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              error={isPasswordCorrect?false:true}
              id="outlined-password"
              label="Password"
              type={showPassword ? "text" : "password"}
              size="small"
              fullWidth
              required
              inputRef={passwordRef}
              InputProps={
                {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle-password"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
            sm={6}
          >
            <TextField
              error={isPasswordCorrect?false:true}
              id="outlined-confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              size="small"
              helperText={isPasswordCorrect?"":"Did not match with password"}
              fullWidth
              required
              inputRef={confirmPasswordRef}
              InputProps={
                {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle-password"
                        onClick={handleClickShowConfirmPassword}
                      >
                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
            sm={6}
          >
            <TextField
              id="outlined-nic"
              label="NIC"
              type="text"
              size="small"
              fullWidth
              required
              inputRef={nicRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              id="outlined-telephone"
              label="Telephone"
              type="tel"
              size="small"
              fullWidth
              required
              inputRef={telephoneRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
          >
            <Divider
              textAlign='left'
            >
              Address
            </Divider>
            <Grid
              item
              mb={1}
              mt={1}
            >
              <TextField
                id="outlined-no"
                label="No"
                type="text"
                size="small"
                fullWidth
                required
                inputRef={addressNoRef}
              />
            </Grid>
            <Grid
              item
              mb={1}
            >
              <TextField
                id="outlined-street"
                label="Street"
                type="text"
                size="small"
                fullWidth
                required
                inputRef={addressStreetRef}
              />
            </Grid>
            <Grid
              item
              mb={1}
            >
              <TextField
                id="outlined-city"
                label="City"
                type="text"
                size="small"
                fullWidth
                required
                inputRef={addreessCityRef}
              />
            </Grid>
            <Grid
              item
            >
              <Autocomplete
                disablePortal
                id="combo-box"
                size="small"
                options={provinceList}
                renderInput={(params) => <TextField {...params} inputRef={addressProvinceRef} required label="Province" />}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
          >
            <TextField
              error={props.profilePicErrState}
              id="outlined-profilePic"
              label="Prifile Picture"
              type="file"
              size="small"
              helperText={props.profilePicErr}
              required
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={showPreview}
            />
            <Avatar 
              alt="Picture"
              src={proPicSrc}
              sx={{width:"80%",height:"60%",m:"10%"}}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
          >
            <Button type="submit" variant="contained" size="large" endIcon={<AppRegistrationIcon />} >Register</Button>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Typography>Already have a account ?  <Button component={RouterLink} to='/login'>Login</Button></Typography>
          </Grid>
        </Grid>
      </Box>
  )
};

export default Register;