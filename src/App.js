import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
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
import authService from './services/auth.service';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive"
    }
  }
});

function App() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const getUserData = async () => {
    const response = await authService.getCurrentUser();
    if (response.status === 401) {
      navigate('/login');
    } else {
      setUserData(response.data);
    }
  }
  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/leave-management' element={<LeaveManagementPage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/statistics' element={<StatisticsPage />} />
          <Route path='video-conference' element={<VideoConferencePage />} />
          <Route path='/working-status-board' element={<WorkingStatusBoardPage />} />
          <Route path='/send-notification' element={<SendNotificationPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
