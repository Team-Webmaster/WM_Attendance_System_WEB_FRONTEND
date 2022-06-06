import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material';
import LeaveManagementPage from './pages/LeaveManagementPage';
import ReportPage from './pages/ReportPage';
import ProfilePage from './pages/ProfilePage';
import CalendarPage from './pages/CalendarPage';
import StatisticsPage from './pages/StatisticsPage';
import VideoConferencePage from './pages/VideoConferencePage';
import WorkingStatusBoardPage from './pages/WorkingStatusBoardPage';
import SendNotificationPage from './pages/SendNotificationPage';
import SettingsPage from './pages/SettingsPage';
import ContactUsPage from './pages/ContactUsPage';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import { useContext, useEffect } from 'react';
import { UserContext } from './store/Context';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive"
    }
  }
});

const apiUrl = 'https://localhost:5001'

axios.interceptors.request.use((config) => {
  const { origin } = new URL(config.url);
  const allowedOrigins = [apiUrl];
  const token = localStorage.getItem('token');
  if (allowedOrigins.includes(origin)) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
}
);

function App() {
  const { setUserData } = useContext(UserContext);
  useEffect(()=>{
    setUserData(
      {
        userId: 1,
        name: "Lakshitha",
        nic: "982582105V",
        email: "jokeekak@gmail.com",
        password: "$2a$11$WI/JjfiBI2ZHe7Q1FhFk.OmDRIPReAVKvQ/80WZawjNhwLWiDNAdG",
        address: "Galle",
        telephone: "0781870330",
        profilePic: "https://localhost:5001/Images/20220408_153919.jpg",
        type: 0,
        noOfAnnualLeaves: 20
      }
    );
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/leave-management' element={<LeaveManagementPage/>} />
          <Route path='/report' element={<ReportPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/calendar' element={<CalendarPage/>} />
          <Route path='/statistics' element={<StatisticsPage/>} />
          <Route path='video-conference' element={<VideoConferencePage/>} />
          <Route path='/working-status-board' element={<WorkingStatusBoardPage/>} />
          <Route path='/send-notification' element={<SendNotificationPage/>} />
          <Route path='/settings' element={<SettingsPage/>} />
          <Route path='/contact-us' element={<ContactUsPage/>} />
          <Route path='/about-us' element={<AboutUsPage/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
