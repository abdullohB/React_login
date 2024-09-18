// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singup from './Singup';
import Navbar from "./components/Navbar";
import Student from './pages/Student';
import StudentCreate from './pages/StudentCreate';




function App() {
  return (

    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}> </Route>
        <Route path='/singup' element={<Singup />}> </Route>
        <Route path='/student' element={<Student/>}> </Route> 
        <Route path='/students/create' element={<StudentCreate/>}> </Route> 
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
