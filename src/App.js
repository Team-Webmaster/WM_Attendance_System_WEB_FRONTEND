import { useNavigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './store/Context';
import authService from './services/auth.service';
import PrivateRoutes from './routes/PrivateRoutes';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive"
    }
  }
});

function App() {

  const { userData, setUserData } = useContext(UserContext);
  const [serverErr,setServerErr] = useState(false);
  const navigate = useNavigate();

  const getUserData = async () => {
    const response = await authService.getCurrentUser();
    if (response.status === 401) {
      navigate('/login');
    }else if(response.status === 200){
      setUserData(response.data);
    }else{
      setServerErr(true);
    }
  }

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);

  if(serverErr){
    return <Grid component="main" sx={{width:"100%",height:"100vh",textAlign:"center",mt:"20%"}} >
    <Typography color="red" sx={{fontWeight:"bold",fontSize:30}} >Ooops!!!</Typography>
    <Typography color="red" sx={{fontWeight:"bold"}} >Server Error: Something happened in Server. Please Try again later.</Typography>
  </Grid>
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PrivateRoutes userType={userData&&userData.type} />
      </div>
    </ThemeProvider>
  );
}

export default App;
