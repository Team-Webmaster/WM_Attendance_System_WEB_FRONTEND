import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import CalendarPage from '../pages/CalendarPage';
import ContactUsPage from '../pages/ContactUsPage';
import EmployeeLeaveRequestPage from '../pages/EmployeeLeaveRequestPage';
import EmployeeReportsPage from '../pages/EmployeeReportsPage';
import EmployeeStatisticsPage from '../pages/EmployeeStatisticsPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LeaveManagementPage from '../pages/LeaveManagementPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ReportPage from '../pages/ReportPage';
import SendNotificationPage from '../pages/SendNotificationPage';
import SettingsPage from '../pages/SettingsPage';
import StatisticsPage from '../pages/StatisticsPage';
import VideoConferencePage from '../pages/VideoConferencePage';
import WorkingStatusBoardPage from '../pages/WorkingStatusBoardPage';

const PrivateRoutes = (props) => {
  let routes;
  if (props.userType === 0) {
    routes = <React.Fragment>
      <Route path='/leave-management' element={<LeaveManagementPage />} />
      <Route path='/report' element={<ReportPage />} />
      <Route path='/statistics' element={<StatisticsPage />} />
      <Route path='/working-status-board' element={<WorkingStatusBoardPage />} />
      <Route path='/send-notification' element={<SendNotificationPage />} />
      <Route path='/settings' element={<SettingsPage />} />
    </React.Fragment>;
  } else if (props.userType === 1) {
    routes = <React.Fragment>
      <Route path='/leave-management' element={<LeaveManagementPage />} />
      <Route path='/report' element={<ReportPage />} />
      <Route path='/statistics' element={<StatisticsPage />} />
      <Route path='/working-status-board' element={<WorkingStatusBoardPage />} />
      <Route path='/send-notification' element={<SendNotificationPage />} />
    </React.Fragment>
  } else {
    routes = <React.Fragment>
      <Route path='/leave-management' element={<EmployeeLeaveRequestPage/>} />
      <Route path='/report' element={<EmployeeReportsPage />} />
      <Route path='/statistics' element={<EmployeeStatisticsPage />} />
    </React.Fragment>
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/video-conference' element={<VideoConferencePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        {
          routes?routes:null
        }
      </Routes>
    </div>
  )
}

export default PrivateRoutes;