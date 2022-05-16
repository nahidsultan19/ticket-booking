import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking';
import Login from './Components/Login/Login';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/home' element={<p>Home</p>} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/services' element={<p>Services</p>} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/contact' element={<p>Contact</p>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
