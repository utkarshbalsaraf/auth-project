import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </>
  );
}

export default App;
