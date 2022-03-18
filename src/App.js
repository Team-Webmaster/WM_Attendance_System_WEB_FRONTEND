import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';

const apiUrl = 'https://localhost:5001'

axios.interceptors.request.use((config)=>{
  const { origin } = new URL(config.url);
  const allowedOrigins = [apiUrl];
  const token = localStorage.getItem('token');
  if(allowedOrigins.includes(origin)){
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
},(error)=>{
  return Promise.reject(error);
}
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
