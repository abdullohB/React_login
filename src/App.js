// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singup from './Singup';
import Navbar from "./components/Navbar";
import Student from './pages/Student';
import StudentCreate from './pages/StudentCreate';
import Contact from './pages/Contact';
import About from './pages/About';
import EditUser from './components/EditUser';





function App() {
  return (

    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}> </Route>
        <Route path='/singup' element={<Singup />}> </Route>
        <Route path='/student' element={<Student/>}> </Route> 
        <Route path='/students/create' element={<StudentCreate/>}> </Route> 
        <Route path='/about-us' element={<About/>}> </Route> 
        <Route path='/contact-us' element={<Contact/>}> </Route>
        <Route path='/Update-user/:id' element={<EditUser/>}> </Route> 
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
