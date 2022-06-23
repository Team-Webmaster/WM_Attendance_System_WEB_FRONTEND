import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme, Grid, Typography, CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './store/Context';
import authService from './services/auth.service';
import PrivateRoutes from './routes/PrivateRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive"
    }
  }
});

function App() {

  const { userData, setUserData } = useContext(UserContext);
  const [serverErr, setServerErr] = useState(false);
  const navigate = useNavigate();

  const getUserData = async () => {
    const response = await authService.getCurrentUser();
    if (!response) {
      setServerErr(true);
      return;
    }
    if (response.status === 401) {
      navigate('/login');
    } else if (response.status === 200) {
      setUserData(response.data);
    }
  }

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);

  if (serverErr) {
    return <Grid component="main" sx={{ width: "100%", height: "100vh", textAlign: "center", mt: "20%" }} >
      <Typography color="red" sx={{ fontWeight: "bold", fontSize: 30 }} >Ooops!!!</Typography>
      <Typography color="red" sx={{ fontWeight: "bold" }} >Server Error: Something happened in Server. Please Try again later.</Typography>
    </Grid>
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        {userData ? <PrivateRoutes userType={userData.type} /> :
          <Grid component="main" sx={{ width: "100%", height: "100vh", textAlign: "center" }} >
            <CircularProgress sx={{ mt: "20%" }} size={50} />
          </Grid>}
      </div>
    </ThemeProvider>
  );
}

export default App;
